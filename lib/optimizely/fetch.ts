import { DocumentNode } from 'graphql'
import { print } from 'graphql/language/printer'
import { getSdk } from './types/generated'
import { isVercelError } from '../type-guards'

interface OptimizelyFetchOptions {
  headers?: Record<string, string>
  cache?: RequestCache
  preview?: boolean
  cacheTag?: string
}

interface OptimizelyFetch<Variables> extends OptimizelyFetchOptions {
  query: string
  variables?: Variables
}

interface GraphqlResponse<Response> {
  errors: unknown[]
  data: Response
}

const optimizelyFetch = async <Response, Variables = object>({
  query,
  variables,
  headers,
  cache = 'force-cache',
  preview,
  cacheTag,
}: OptimizelyFetch<Variables>): Promise<
  GraphqlResponse<Response> & { headers: Headers }
> => {
  const configHeaders = headers ?? {}

  // For preview/draft content, use Basic auth without the single key
  // For published content, use the single key for anonymous access
  let endpoint: string
  if (preview) {
    configHeaders.Authorization = `Basic ${process.env.OPTIMIZELY_PREVIEW_SECRET}`
    cache = 'no-store'
    endpoint = process.env.OPTIMIZELY_API_URL!
  } else {
    endpoint = `${process.env.OPTIMIZELY_API_URL}?auth=${process.env.OPTIMIZELY_SINGLE_KEY}`
  }

  const cacheTags = ['optimizely-content']
  if (cacheTag) {
    cacheTags.push(cacheTag)
  }

  try {
    // Debug logging - remove after troubleshooting
    console.log('Optimizely fetch - endpoint:', endpoint)
    console.log('Optimizely fetch - preview:', preview)
    console.log('Optimizely fetch - headers:', JSON.stringify(configHeaders))

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...configHeaders,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      next: { tags: cacheTags },
    })

    // Debug: log response status
    console.log('Optimizely fetch - response status:', response.status)

    const result = await response.json()
    console.log('Optimizely fetch - result:', JSON.stringify(result))

    return {
      ...result,
      headers: response.headers,
    }
  } catch (e) {
    if (isVercelError(e)) {
      throw {
        status: e.status || 500,
        message: e.message,
        query,
      }
    }

    throw {
      error: e,
      query,
    }
  }
}

async function requester<R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: OptimizelyFetchOptions
) {
  const request = await optimizelyFetch<R>({
    query: print(doc),
    variables: vars ?? {},
    ...options,
  })

  return {
    data: request.data,
    _headers: request.headers,
  }
}

export const optimizely = getSdk(requester)
