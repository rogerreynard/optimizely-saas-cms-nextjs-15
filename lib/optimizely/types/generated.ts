import { DocumentNode, ExecutionResult } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AnotherGreatPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'AnotherGreatPage';
  SEO: Maybe<PageSeoSettingsProperty>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type AnotherGreatPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type AnotherGreatPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type AnotherGreatPageAutocomplete = {
  __typename?: 'AnotherGreatPageAutocomplete';
  SEO: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type AnotherGreatPageFacet = {
  __typename?: 'AnotherGreatPageFacet';
  SEO: Maybe<PageSeoSettingsPropertyFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type AnotherGreatPageOrderByInput = {
  SEO: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type AnotherGreatPageOutput = {
  __typename?: 'AnotherGreatPageOutput';
  autocomplete: Maybe<AnotherGreatPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<AnotherGreatPageFacet>;
  item: Maybe<AnotherGreatPage>;
  items: Maybe<Array<Maybe<AnotherGreatPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type AnotherGreatPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type AnotherGreatPageWhereInput = {
  SEO: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  _and: InputMaybe<Array<InputMaybe<AnotherGreatPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<AnotherGreatPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<AnotherGreatPageWhereInput>>>;
};

export type ArticleListElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ArticleListElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  articleListCount: Maybe<Scalars['Int']['output']>;
  topics: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ArticleListElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ArticleListElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ArticleListElementAutocomplete = {
  __typename?: 'ArticleListElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ArticleListElementFacet = {
  __typename?: 'ArticleListElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ArticleListElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ArticleListElementOutput = {
  __typename?: 'ArticleListElementOutput';
  autocomplete: Maybe<ArticleListElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ArticleListElementFacet>;
  item: Maybe<ArticleListElement>;
  items: Maybe<Array<Maybe<ArticleListElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ArticleListElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleListElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
};

export type AvailabilityBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'AvailabilityBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  availability: Maybe<Scalars['String']['output']>;
  projectTypes: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type AvailabilityBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type AvailabilityBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type AvailabilityBlockAutocomplete = {
  __typename?: 'AvailabilityBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type AvailabilityBlockFacet = {
  __typename?: 'AvailabilityBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type AvailabilityBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type AvailabilityBlockOutput = {
  __typename?: 'AvailabilityBlockOutput';
  autocomplete: Maybe<AvailabilityBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<AvailabilityBlockFacet>;
  item: Maybe<AvailabilityBlock>;
  items: Maybe<Array<Maybe<AvailabilityBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type AvailabilityBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type AvailabilityBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'BlankExperience';
  BlankExperienceSeoSettings: Maybe<PageSeoSettingsProperty>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  BlankExperienceSeoSettings: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  BlankExperienceSeoSettings: Maybe<PageSeoSettingsPropertyFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  BlankExperienceSeoSettings: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete: Maybe<BlankExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankExperienceFacet>;
  item: Maybe<BlankExperience>;
  items: Maybe<Array<Maybe<BlankExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  BlankExperienceSeoSettings: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  _and: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankSection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankSection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete: Maybe<BlankSectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankSectionFacet>;
  item: Maybe<BlankSection>;
  items: Maybe<Array<Maybe<BlankSection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlogPostPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'BlogPostPage';
  ArticleAuthor: Maybe<Scalars['String']['output']>;
  ArticleSubHeading: Maybe<Scalars['String']['output']>;
  BlogPostBody: Maybe<SearchableRichText>;
  BlogPostPromoImage: Maybe<ContentReference>;
  Heading: Maybe<Scalars['String']['output']>;
  SeoSettings: Maybe<PageSeoSettingsProperty>;
  Topic: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  body2: Maybe<Scalars['String']['output']>;
  continueReading: Maybe<Array<Maybe<_IContent>>>;
};


export type BlogPostPageArticleAuthorArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPostPageArticleSubHeadingArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPostPageHeadingArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPostPageTopicArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPostPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPostPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlogPostPageAutocomplete = {
  __typename?: 'BlogPostPageAutocomplete';
  BlogPostPromoImage: Maybe<ContentReferenceAutocomplete>;
  SeoSettings: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  continueReading: Maybe<_IContentAutocomplete>;
};

export type BlogPostPageFacet = {
  __typename?: 'BlogPostPageFacet';
  ArticleAuthor: Maybe<Array<Maybe<StringFacet>>>;
  ArticleSubHeading: Maybe<Array<Maybe<StringFacet>>>;
  BlogPostBody: Maybe<SearchableRichTextFacet>;
  BlogPostPromoImage: Maybe<ContentReferenceFacet>;
  Heading: Maybe<Array<Maybe<StringFacet>>>;
  SeoSettings: Maybe<PageSeoSettingsPropertyFacet>;
  Topic: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  continueReading: Maybe<_IContentFacet>;
};


export type BlogPostPageFacetArticleAuthorArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetArticleSubHeadingArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetHeadingArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetTopicArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlogPostPageOrderByInput = {
  ArticleAuthor: InputMaybe<OrderBy>;
  ArticleSubHeading: InputMaybe<OrderBy>;
  BlogPostBody: InputMaybe<SearchableRichTextOrderByInput>;
  BlogPostPromoImage: InputMaybe<ContentReferenceOrderByInput>;
  Heading: InputMaybe<OrderBy>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  Topic: InputMaybe<OrderBy>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  continueReading: InputMaybe<_IContentOrderByInput>;
};

export type BlogPostPageOutput = {
  __typename?: 'BlogPostPageOutput';
  autocomplete: Maybe<BlogPostPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlogPostPageFacet>;
  item: Maybe<BlogPostPage>;
  items: Maybe<Array<Maybe<BlogPostPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlogPostPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogPostPageWhereInput = {
  ArticleAuthor: InputMaybe<SearchableStringFilterInput>;
  ArticleSubHeading: InputMaybe<SearchableStringFilterInput>;
  BlogPostBody: InputMaybe<SearchableRichTextWhereInput>;
  BlogPostPromoImage: InputMaybe<ContentReferenceWhereInput>;
  Heading: InputMaybe<SearchableStringFilterInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  Topic: InputMaybe<SearchableStringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  continueReading: InputMaybe<_IContentWhereInput>;
};

export type BlogSectionExperience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'BlogSectionExperience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
  seo_data: Maybe<PageSeoSettingsProperty>;
};


export type BlogSectionExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogSectionExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlogSectionExperienceAutocomplete = {
  __typename?: 'BlogSectionExperienceAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
  seo_data: Maybe<PageSeoSettingsPropertyAutocomplete>;
};

export type BlogSectionExperienceFacet = {
  __typename?: 'BlogSectionExperienceFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
  seo_data: Maybe<PageSeoSettingsPropertyFacet>;
};

export type BlogSectionExperienceOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
  seo_data: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
};

export type BlogSectionExperienceOutput = {
  __typename?: 'BlogSectionExperienceOutput';
  autocomplete: Maybe<BlogSectionExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlogSectionExperienceFacet>;
  item: Maybe<BlogSectionExperience>;
  items: Maybe<Array<Maybe<BlogSectionExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlogSectionExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogSectionExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlogSectionExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlogSectionExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlogSectionExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
  seo_data: InputMaybe<PageSeoSettingsPropertyWhereInput>;
};

export type BoolFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Boolean']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ButtonBlock';
  ButtonClass: Maybe<Scalars['String']['output']>;
  ButtonText: Maybe<Scalars['String']['output']>;
  ButtonType: Maybe<Scalars['String']['output']>;
  ButtonUrl: Maybe<ContentUrl>;
  ButtonVariant: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type ButtonBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ButtonBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  ButtonUrl: Maybe<ContentUrlAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ButtonBlockFacet = {
  __typename?: 'ButtonBlockFacet';
  ButtonUrl: Maybe<ContentUrlFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ButtonBlockOrderByInput = {
  ButtonUrl: InputMaybe<ContentUrlOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ButtonBlockOutput = {
  __typename?: 'ButtonBlockOutput';
  autocomplete: Maybe<ButtonBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ButtonBlockFacet>;
  item: Maybe<ButtonBlock>;
  items: Maybe<Array<Maybe<ButtonBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ButtonBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlockProperty = {
  __typename?: 'ButtonBlockProperty';
  ButtonClass: Maybe<Scalars['String']['output']>;
  ButtonText: Maybe<Scalars['String']['output']>;
  ButtonType: Maybe<Scalars['String']['output']>;
  ButtonUrl: Maybe<ContentUrl>;
  ButtonVariant: Maybe<Scalars['String']['output']>;
};

export type ButtonBlockPropertyAutocomplete = {
  __typename?: 'ButtonBlockPropertyAutocomplete';
  ButtonUrl: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockPropertyFacet = {
  __typename?: 'ButtonBlockPropertyFacet';
  ButtonUrl: Maybe<ContentUrlFacet>;
};

export type ButtonBlockPropertyOrderByInput = {
  ButtonUrl: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockPropertyWhereInput = {
  ButtonUrl: InputMaybe<ContentUrlWhereInput>;
};

export type ButtonBlockWhereInput = {
  ButtonUrl: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
};

export type CmsPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'CMSPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type CmsPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CmsPageAutocomplete = {
  __typename?: 'CMSPageAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
};

export type CmsPageFacet = {
  __typename?: 'CMSPageFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
};

export type CmsPageOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
};

export type CmsPageOutput = {
  __typename?: 'CMSPageOutput';
  autocomplete: Maybe<CmsPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CmsPageFacet>;
  item: Maybe<CmsPage>;
  items: Maybe<Array<Maybe<CmsPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CmsPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CmsPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  blocks: InputMaybe<_IContentWhereInput>;
};

export type CtaElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'CTAElement';
  Link: Maybe<ContentUrl>;
  Text: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type CtaElementTextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CtaElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CtaElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CtaElementAutocomplete = {
  __typename?: 'CTAElementAutocomplete';
  Link: Maybe<ContentUrlAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CtaElementFacet = {
  __typename?: 'CTAElementFacet';
  Link: Maybe<ContentUrlFacet>;
  Text: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};


export type CtaElementFacetTextArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CtaElementOrderByInput = {
  Link: InputMaybe<ContentUrlOrderByInput>;
  Text: InputMaybe<OrderBy>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CtaElementOutput = {
  __typename?: 'CTAElementOutput';
  autocomplete: Maybe<CtaElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CtaElementFacet>;
  item: Maybe<CtaElement>;
  items: Maybe<Array<Maybe<CtaElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CtaElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CtaElementWhereInput = {
  Link: InputMaybe<ContentUrlWhereInput>;
  Text: InputMaybe<SearchableStringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<CtaElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CtaElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CtaElementWhereInput>>>;
};

export type CarouselBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'CarouselBlock';
  CarouselItemsContentArea: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type CarouselBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CarouselBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CarouselBlockAutocomplete = {
  __typename?: 'CarouselBlockAutocomplete';
  CarouselItemsContentArea: Maybe<_IContentAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CarouselBlockFacet = {
  __typename?: 'CarouselBlockFacet';
  CarouselItemsContentArea: Maybe<_IContentFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CarouselBlockOrderByInput = {
  CarouselItemsContentArea: InputMaybe<_IContentOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CarouselBlockOutput = {
  __typename?: 'CarouselBlockOutput';
  autocomplete: Maybe<CarouselBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CarouselBlockFacet>;
  item: Maybe<CarouselBlock>;
  items: Maybe<Array<Maybe<CarouselBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CarouselBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CarouselBlockWhereInput = {
  CarouselItemsContentArea: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompleteValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key: Maybe<Array<Maybe<StringFacet>>>;
  value: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetValueArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key: InputMaybe<OrderBy>;
  value: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key: InputMaybe<StringFilterInput>;
  value: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes: Maybe<ICompositionNodeAutocomplete>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteLayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  component: Maybe<_IComponentFacet>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  layoutType: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  nodes: Maybe<ICompositionNodeFacet>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetLayoutTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  component: InputMaybe<_IComponentOrderByInput>;
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  layoutType: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  nodes: InputMaybe<ICompositionNodeOrderByInput>;
  type: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  component: InputMaybe<_IComponentWhereInput>;
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  layoutType: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  nodes: InputMaybe<ICompositionNodeWhereInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ContactBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ContactBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ContactBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContactBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContactBlockAutocomplete = {
  __typename?: 'ContactBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContactBlockFacet = {
  __typename?: 'ContactBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContactBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContactBlockOutput = {
  __typename?: 'ContactBlockOutput';
  autocomplete: Maybe<ContactBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContactBlockFacet>;
  item: Maybe<ContactBlock>;
  items: Maybe<Array<Maybe<ContactBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContactBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type ContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ContentRecsElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ContentRecsElement';
  ElementDeliveryApiKey: Maybe<Scalars['String']['output']>;
  ElementRecommendationCount: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type ContentRecsElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContentRecsElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContentRecsElementAutocomplete = {
  __typename?: 'ContentRecsElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContentRecsElementFacet = {
  __typename?: 'ContentRecsElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContentRecsElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContentRecsElementOutput = {
  __typename?: 'ContentRecsElementOutput';
  autocomplete: Maybe<ContentRecsElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContentRecsElementFacet>;
  item: Maybe<ContentRecsElement>;
  items: Maybe<Array<Maybe<ContentRecsElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContentRecsElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentRecsElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  /**
   * `reference`
   * |          |        |      |
   * | -------: | ------ | :--- |
   * | **type** | &nbsp; | `Data` |
   * | **id**   | &nbsp; | `_id` |
   *
   */
  item: Maybe<IData>;
  key: Maybe<Scalars['String']['output']>;
  url: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['String']['output']>;
  graph: Maybe<Scalars['String']['output']>;
  hierarchical: Maybe<Scalars['String']['output']>;
  internal: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompleteBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteGraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteHierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteInternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base: Maybe<Array<Maybe<StringFacet>>>;
  default: Maybe<Array<Maybe<StringFacet>>>;
  graph: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical: Maybe<Array<Maybe<StringFacet>>>;
  internal: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetBaseArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetDefaultArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetGraphArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetHierarchicalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetInternalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base: InputMaybe<OrderBy>;
  default: InputMaybe<OrderBy>;
  graph: InputMaybe<OrderBy>;
  hierarchical: InputMaybe<OrderBy>;
  internal: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base: InputMaybe<StringFilterInput>;
  default: InputMaybe<StringFilterInput>;
  graph: InputMaybe<StringFilterInput>;
  hierarchical: InputMaybe<StringFilterInput>;
  internal: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ContinueReadingComponent = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ContinueReadingComponent';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  content: Maybe<Array<Maybe<_IContent>>>;
  heading: Maybe<Scalars['String']['output']>;
  shared: Maybe<Scalars['Boolean']['output']>;
  topline: Maybe<Scalars['String']['output']>;
};


export type ContinueReadingComponent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContinueReadingComponent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContinueReadingComponentAutocomplete = {
  __typename?: 'ContinueReadingComponentAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  content: Maybe<_IContentAutocomplete>;
};

export type ContinueReadingComponentFacet = {
  __typename?: 'ContinueReadingComponentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  content: Maybe<_IContentFacet>;
  shared: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContinueReadingComponentFacetSharedArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContinueReadingComponentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  content: InputMaybe<_IContentOrderByInput>;
  shared: InputMaybe<OrderBy>;
};

export type ContinueReadingComponentOutput = {
  __typename?: 'ContinueReadingComponentOutput';
  autocomplete: Maybe<ContinueReadingComponentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContinueReadingComponentFacet>;
  item: Maybe<ContinueReadingComponent>;
  items: Maybe<Array<Maybe<ContinueReadingComponent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContinueReadingComponentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContinueReadingComponentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContinueReadingComponentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContinueReadingComponentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContinueReadingComponentWhereInput>>>;
  content: InputMaybe<_IContentWhereInput>;
  shared: InputMaybe<BoolFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type Data_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor: Maybe<Scalars['String']['output']>;
  item: Maybe<IData>;
  items: Maybe<Array<Maybe<IData>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin: InputMaybe<Scalars['Date']['input']>;
  rate: InputMaybe<Scalars['Float']['input']>;
  scale: InputMaybe<Scalars['Int']['input']>;
};

export enum FactorModifier {
  /** Add 1 to the field value and take the natural logarithm */
  Log = 'LOG',
  /** Do not apply any multiplier to the field value */
  None = 'NONE',
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  Reciprocal = 'RECIPROCAL',
  /** Take the square root of the field value */
  Sqrt = 'SQRT',
  /** Square the field value (multiply it by itself) */
  Square = 'SQUARE'
}

export type FloatFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Float']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Float']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Float']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Float']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Float']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Float']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Float']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type Footer = IData & _IContent & _IItem & _IPage & {
  __typename?: 'Footer';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  columns: Maybe<Array<Maybe<_IContent>>>;
  copyrightText: Maybe<Scalars['String']['output']>;
  socialLinks: Maybe<Array<Maybe<_IContent>>>;
};


export type Footer_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Footer_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterAutocomplete = {
  __typename?: 'FooterAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  columns: Maybe<_IContentAutocomplete>;
  socialLinks: Maybe<_IContentAutocomplete>;
};

export type FooterColumn = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'FooterColumn';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  links: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type FooterColumn_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterColumn_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterColumnAutocomplete = {
  __typename?: 'FooterColumnAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  links: Maybe<_IContentAutocomplete>;
};

export type FooterColumnFacet = {
  __typename?: 'FooterColumnFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  links: Maybe<_IContentFacet>;
};

export type FooterColumnOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  links: InputMaybe<_IContentOrderByInput>;
};

export type FooterColumnOutput = {
  __typename?: 'FooterColumnOutput';
  autocomplete: Maybe<FooterColumnAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterColumnFacet>;
  item: Maybe<FooterColumn>;
  items: Maybe<Array<Maybe<FooterColumn>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterColumnOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterColumnWhereInput = {
  _and: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  links: InputMaybe<_IContentWhereInput>;
};

export type FooterFacet = {
  __typename?: 'FooterFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  columns: Maybe<_IContentFacet>;
  socialLinks: Maybe<_IContentFacet>;
};

export type FooterOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  columns: InputMaybe<_IContentOrderByInput>;
  socialLinks: InputMaybe<_IContentOrderByInput>;
};

export type FooterOutput = {
  __typename?: 'FooterOutput';
  autocomplete: Maybe<FooterAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterFacet>;
  item: Maybe<Footer>;
  items: Maybe<Array<Maybe<Footer>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterWhereInput = {
  _and: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  columns: InputMaybe<_IContentWhereInput>;
  socialLinks: InputMaybe<_IContentWhereInput>;
};

export type GenericMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: 'GenericMedia';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type GenericMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GenericMedia123 = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: 'GenericMedia123';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type GenericMedia123_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia123_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GenericMedia123Autocomplete = {
  __typename?: 'GenericMedia123Autocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMedia123Facet = {
  __typename?: 'GenericMedia123Facet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type GenericMedia123OrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMedia123Output = {
  __typename?: 'GenericMedia123Output';
  autocomplete: Maybe<GenericMedia123Autocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<GenericMedia123Facet>;
  item: Maybe<GenericMedia123>;
  items: Maybe<Array<Maybe<GenericMedia123>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type GenericMedia123OutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMedia123WhereInput = {
  _and: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete: Maybe<GenericMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<GenericMediaFacet>;
  item: Maybe<GenericMedia>;
  items: Maybe<Array<Maybe<GenericMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

export type Header = IData & _IContent & _IItem & _IPage & {
  __typename?: 'Header';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  ctaHref: Maybe<Scalars['String']['output']>;
  ctaText: Maybe<Scalars['String']['output']>;
  logo: Maybe<Scalars['String']['output']>;
  navItems: Maybe<Array<Maybe<_IContent>>>;
};


export type Header_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Header_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeaderAutocomplete = {
  __typename?: 'HeaderAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  navItems: Maybe<_IContentAutocomplete>;
};

export type HeaderFacet = {
  __typename?: 'HeaderFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  navItems: Maybe<_IContentFacet>;
};

export type HeaderOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  navItems: InputMaybe<_IContentOrderByInput>;
};

export type HeaderOutput = {
  __typename?: 'HeaderOutput';
  autocomplete: Maybe<HeaderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeaderFacet>;
  item: Maybe<Header>;
  items: Maybe<Array<Maybe<Header>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeaderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  navItems: InputMaybe<_IContentWhereInput>;
};

export type HeadingElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'HeadingElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  headingText: Maybe<Scalars['String']['output']>;
};


export type HeadingElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeadingElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};


export type HeadingElementHeadingTextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type HeadingElementAutocomplete = {
  __typename?: 'HeadingElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeadingElementFacet = {
  __typename?: 'HeadingElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  headingText: Maybe<Array<Maybe<StringFacet>>>;
};


export type HeadingElementFacetHeadingTextArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HeadingElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  headingText: InputMaybe<OrderBy>;
};

export type HeadingElementOutput = {
  __typename?: 'HeadingElementOutput';
  autocomplete: Maybe<HeadingElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeadingElementFacet>;
  item: Maybe<HeadingElement>;
  items: Maybe<Array<Maybe<HeadingElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeadingElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeadingElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  headingText: InputMaybe<SearchableStringFilterInput>;
};

export type HelloWorld = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'HelloWorld';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  detailedmessage: Maybe<Scalars['String']['output']>;
  message: Maybe<Scalars['String']['output']>;
};


export type HelloWorld_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HelloWorld_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HelloWorldAutocomplete = {
  __typename?: 'HelloWorldAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HelloWorldFacet = {
  __typename?: 'HelloWorldFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HelloWorldOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type HelloWorldOutput = {
  __typename?: 'HelloWorldOutput';
  autocomplete: Maybe<HelloWorldAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HelloWorldFacet>;
  item: Maybe<HelloWorld>;
  items: Maybe<Array<Maybe<HelloWorld>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HelloWorldOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HelloWorldWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HelloWorldWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HelloWorldWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HelloWorldWhereInput>>>;
};

export type HeroBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'HeroBlock';
  Description: Maybe<RichText>;
  Eyebrow: Maybe<Scalars['String']['output']>;
  Heading: Maybe<Scalars['String']['output']>;
  HeroButton: Maybe<ButtonBlockProperty>;
  HeroColor: Maybe<Scalars['String']['output']>;
  HeroImage: Maybe<ContentReference>;
  Icon: Maybe<Scalars['String']['output']>;
  SubHeading: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  decorationColorsPrimary: Maybe<Scalars['String']['output']>;
  decorationColorsSecondary: Maybe<Scalars['String']['output']>;
  showDecoration: Maybe<Scalars['Boolean']['output']>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type HeroBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  Description: Maybe<RichTextAutocomplete>;
  HeroButton: Maybe<ButtonBlockPropertyAutocomplete>;
  HeroImage: Maybe<ContentReferenceAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  Description: Maybe<RichTextFacet>;
  HeroButton: Maybe<ButtonBlockPropertyFacet>;
  HeroImage: Maybe<ContentReferenceFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HeroBlockOrderByInput = {
  Description: InputMaybe<RichTextOrderByInput>;
  HeroButton: InputMaybe<ButtonBlockPropertyOrderByInput>;
  HeroImage: InputMaybe<ContentReferenceOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete: Maybe<HeroBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeroBlockFacet>;
  item: Maybe<HeroBlock>;
  items: Maybe<Array<Maybe<HeroBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  Description: InputMaybe<RichTextWhereInput>;
  HeroButton: InputMaybe<ButtonBlockPropertyWhereInput>;
  HeroImage: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  endToken: InputMaybe<Scalars['String']['input']>;
  startToken: InputMaybe<Scalars['String']['input']>;
};

export type HomePage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'HomePage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type HomePage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HomePage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HomePageAutocomplete = {
  __typename?: 'HomePageAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
};

export type HomePageFacet = {
  __typename?: 'HomePageFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
};

export type HomePageOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
};

export type HomePageOutput = {
  __typename?: 'HomePageOutput';
  autocomplete: Maybe<HomePageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HomePageFacet>;
  item: Maybe<HomePage>;
  items: Maybe<Array<Maybe<HomePage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HomePageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomePageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HomePageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HomePageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HomePageWhereInput>>>;
  blocks: InputMaybe<_IContentWhereInput>;
};

export type ICompositionComponentNode = {
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteLayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  layoutType: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetLayoutTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  layoutType: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  layoutType: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
  variation: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompleteChangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteFallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVariationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVersionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset: Maybe<Array<Maybe<StringFacet>>>;
  created: Maybe<Array<Maybe<DateFacet>>>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  lastModified: Maybe<Array<Maybe<DateFacet>>>;
  locale: Maybe<Array<Maybe<StringFacet>>>;
  published: Maybe<Array<Maybe<DateFacet>>>;
  sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
  status: Maybe<Array<Maybe<StringFacet>>>;
  types: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
  variation: Maybe<Array<Maybe<StringFacet>>>;
  version: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetChangesetArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetFallbackForLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetSortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type IContentMetadataFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetTypesArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVariationArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVersionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset: InputMaybe<OrderBy>;
  created: InputMaybe<OrderBy>;
  displayName: InputMaybe<OrderBy>;
  fallbackForLocale: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  lastModified: InputMaybe<OrderBy>;
  locale: InputMaybe<OrderBy>;
  published: InputMaybe<OrderBy>;
  sortOrder: InputMaybe<OrderBy>;
  status: InputMaybe<OrderBy>;
  types: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
  variation: InputMaybe<OrderBy>;
  version: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset: InputMaybe<StringFilterInput>;
  created: InputMaybe<DateFilterInput>;
  displayName: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  lastModified: InputMaybe<DateFilterInput>;
  locale: InputMaybe<StringFilterInput>;
  published: InputMaybe<DateFilterInput>;
  sortOrder: InputMaybe<IntFilterInput>;
  status: InputMaybe<StringFilterInput>;
  types: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
  variation: InputMaybe<StringFilterInput>;
  version: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type IData_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IMediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ImageElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ImageElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  altText: Maybe<Scalars['String']['output']>;
  imageLink: Maybe<ContentReference>;
};


export type ImageElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageElementAutocomplete = {
  __typename?: 'ImageElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  imageLink: Maybe<ContentReferenceAutocomplete>;
};

export type ImageElementFacet = {
  __typename?: 'ImageElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  imageLink: Maybe<ContentReferenceFacet>;
};

export type ImageElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  imageLink: InputMaybe<ContentReferenceOrderByInput>;
};

export type ImageElementOutput = {
  __typename?: 'ImageElementOutput';
  autocomplete: Maybe<ImageElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageElementFacet>;
  item: Maybe<ImageElement>;
  items: Maybe<Array<Maybe<ImageElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  imageLink: InputMaybe<ContentReferenceWhereInput>;
};

export type ImageMedia = IData & _IAssetItem & _IContent & _IImage & _IImageItem & _IItem & _IMedia & {
  __typename?: 'ImageMedia';
  AltText: Maybe<Scalars['String']['output']>;
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type ImageMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _imageMetadata: Maybe<_ImageMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete: Maybe<ImageMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageMediaFacet>;
  item: Maybe<ImageMedia>;
  items: Maybe<Array<Maybe<ImageMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type ItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type LandingPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'LandingPage';
  MainContentArea: Maybe<Array<Maybe<_IContent>>>;
  SeoSettings: Maybe<PageSeoSettingsProperty>;
  TopContentArea: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type LandingPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LandingPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LandingPageAutocomplete = {
  __typename?: 'LandingPageAutocomplete';
  MainContentArea: Maybe<_IContentAutocomplete>;
  SeoSettings: Maybe<PageSeoSettingsPropertyAutocomplete>;
  TopContentArea: Maybe<_IContentAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type LandingPageFacet = {
  __typename?: 'LandingPageFacet';
  MainContentArea: Maybe<_IContentFacet>;
  SeoSettings: Maybe<PageSeoSettingsPropertyFacet>;
  TopContentArea: Maybe<_IContentFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type LandingPageOrderByInput = {
  MainContentArea: InputMaybe<_IContentOrderByInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  TopContentArea: InputMaybe<_IContentOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type LandingPageOutput = {
  __typename?: 'LandingPageOutput';
  autocomplete: Maybe<LandingPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LandingPageFacet>;
  item: Maybe<LandingPage>;
  items: Maybe<Array<Maybe<LandingPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LandingPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingPageWhereInput = {
  MainContentArea: InputMaybe<_IContentWhereInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  TopContentArea: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
};

export type LayoutSettingsBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'LayoutSettingsBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  appIdentifiers: Maybe<Scalars['String']['output']>;
  contactInfo: Maybe<RichText>;
  contactInfoHeading: Maybe<Scalars['String']['output']>;
  copyright: Maybe<Scalars['String']['output']>;
  footerMenus: Maybe<Array<Maybe<_IContent>>>;
  legalLinks: Maybe<Array<Maybe<Link>>>;
  mainMenu: Maybe<Array<Maybe<_IContent>>>;
  serviceButtons: Maybe<Array<Maybe<_IContent>>>;
};


export type LayoutSettingsBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LayoutSettingsBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LayoutSettingsBlockAutocomplete = {
  __typename?: 'LayoutSettingsBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  appIdentifiers: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contactInfo: Maybe<RichTextAutocomplete>;
  footerMenus: Maybe<_IContentAutocomplete>;
  legalLinks: Maybe<LinkAutocomplete>;
  mainMenu: Maybe<_IContentAutocomplete>;
  serviceButtons: Maybe<_IContentAutocomplete>;
};


export type LayoutSettingsBlockAutocompleteAppIdentifiersArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LayoutSettingsBlockFacet = {
  __typename?: 'LayoutSettingsBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  appIdentifiers: Maybe<Array<Maybe<StringFacet>>>;
  contactInfo: Maybe<RichTextFacet>;
  footerMenus: Maybe<_IContentFacet>;
  legalLinks: Maybe<LinkFacet>;
  mainMenu: Maybe<_IContentFacet>;
  serviceButtons: Maybe<_IContentFacet>;
};


export type LayoutSettingsBlockFacetAppIdentifiersArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LayoutSettingsBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  appIdentifiers: InputMaybe<OrderBy>;
  contactInfo: InputMaybe<RichTextOrderByInput>;
  footerMenus: InputMaybe<_IContentOrderByInput>;
  legalLinks: InputMaybe<LinkOrderByInput>;
  mainMenu: InputMaybe<_IContentOrderByInput>;
  serviceButtons: InputMaybe<_IContentOrderByInput>;
};

export type LayoutSettingsBlockOutput = {
  __typename?: 'LayoutSettingsBlockOutput';
  autocomplete: Maybe<LayoutSettingsBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LayoutSettingsBlockFacet>;
  item: Maybe<LayoutSettingsBlock>;
  items: Maybe<Array<Maybe<LayoutSettingsBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LayoutSettingsBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LayoutSettingsBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LayoutSettingsBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LayoutSettingsBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LayoutSettingsBlockWhereInput>>>;
  appIdentifiers: InputMaybe<StringFilterInput>;
  contactInfo: InputMaybe<RichTextWhereInput>;
  footerMenus: InputMaybe<_IContentWhereInput>;
  legalLinks: InputMaybe<LinkWhereInput>;
  mainMenu: InputMaybe<_IContentWhereInput>;
  serviceButtons: InputMaybe<_IContentWhereInput>;
};

export type Link = {
  __typename?: 'Link';
  target: Maybe<Scalars['String']['output']>;
  text: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<ContentUrl>;
};


export type LinkTextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type LinkAutocomplete = {
  __typename?: 'LinkAutocomplete';
  target: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
};


export type LinkAutocompleteTargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkConfig = {
  from: InputMaybe<Scalars['String']['input']>;
  to: InputMaybe<Scalars['String']['input']>;
};

export type LinkFacet = {
  __typename?: 'LinkFacet';
  target: Maybe<Array<Maybe<StringFacet>>>;
  text: Maybe<Array<Maybe<StringFacet>>>;
  title: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
};


export type LinkFacetTargetArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacetTextArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkOrderByInput = {
  target: InputMaybe<OrderBy>;
  text: InputMaybe<OrderBy>;
  title: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  Assets = 'ASSETS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Default = 'DEFAULT',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Items = 'ITEMS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  Path = 'PATH'
}

export type LinkWhereInput = {
  target: InputMaybe<StringFilterInput>;
  text: InputMaybe<SearchableStringFilterInput>;
  title: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
};

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en',
  Pl = 'pl',
  Sv = 'sv'
}

export type LogoItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'LogoItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  alt: Maybe<Scalars['String']['output']>;
  src: Maybe<Scalars['String']['output']>;
};


export type LogoItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogoItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LogoItemBlockAutocomplete = {
  __typename?: 'LogoItemBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type LogoItemBlockFacet = {
  __typename?: 'LogoItemBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type LogoItemBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type LogoItemBlockOutput = {
  __typename?: 'LogoItemBlockOutput';
  autocomplete: Maybe<LogoItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LogoItemBlockFacet>;
  item: Maybe<LogoItemBlock>;
  items: Maybe<Array<Maybe<LogoItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LogoItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogoItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
};

export type LogosBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'LogosBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  logos: Maybe<Array<Maybe<_IContent>>>;
};


export type LogosBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogosBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LogosBlockAutocomplete = {
  __typename?: 'LogosBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  logos: Maybe<_IContentAutocomplete>;
};

export type LogosBlockFacet = {
  __typename?: 'LogosBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  logos: Maybe<_IContentFacet>;
};

export type LogosBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  logos: InputMaybe<_IContentOrderByInput>;
};

export type LogosBlockOutput = {
  __typename?: 'LogosBlockOutput';
  autocomplete: Maybe<LogosBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LogosBlockFacet>;
  item: Maybe<LogosBlock>;
  items: Maybe<Array<Maybe<LogosBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LogosBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogosBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  logos: InputMaybe<_IContentWhereInput>;
};

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type MediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type MegaMenuGroupBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'MegaMenuGroupBlock';
  MegaMenuContentArea: Maybe<Array<Maybe<_IContent>>>;
  MegaMenuUrl: Maybe<ContentUrl>;
  MenuMenuHeading: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type MegaMenuGroupBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MegaMenuGroupBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type MegaMenuGroupBlockAutocomplete = {
  __typename?: 'MegaMenuGroupBlockAutocomplete';
  MegaMenuContentArea: Maybe<_IContentAutocomplete>;
  MegaMenuUrl: Maybe<ContentUrlAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type MegaMenuGroupBlockFacet = {
  __typename?: 'MegaMenuGroupBlockFacet';
  MegaMenuContentArea: Maybe<_IContentFacet>;
  MegaMenuUrl: Maybe<ContentUrlFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type MegaMenuGroupBlockOrderByInput = {
  MegaMenuContentArea: InputMaybe<_IContentOrderByInput>;
  MegaMenuUrl: InputMaybe<ContentUrlOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type MegaMenuGroupBlockOutput = {
  __typename?: 'MegaMenuGroupBlockOutput';
  autocomplete: Maybe<MegaMenuGroupBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<MegaMenuGroupBlockFacet>;
  item: Maybe<MegaMenuGroupBlock>;
  items: Maybe<Array<Maybe<MegaMenuGroupBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type MegaMenuGroupBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type MegaMenuGroupBlockWhereInput = {
  MegaMenuContentArea: InputMaybe<_IContentWhereInput>;
  MegaMenuUrl: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
};

export type MenuNavigationBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'MenuNavigationBlock';
  MenuNavigationHeading: Maybe<Scalars['String']['output']>;
  NavigationLinks: Maybe<Array<Maybe<Link>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type MenuNavigationBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MenuNavigationBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type MenuNavigationBlockAutocomplete = {
  __typename?: 'MenuNavigationBlockAutocomplete';
  NavigationLinks: Maybe<LinkAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type MenuNavigationBlockFacet = {
  __typename?: 'MenuNavigationBlockFacet';
  NavigationLinks: Maybe<LinkFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type MenuNavigationBlockOrderByInput = {
  NavigationLinks: InputMaybe<LinkOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type MenuNavigationBlockOutput = {
  __typename?: 'MenuNavigationBlockOutput';
  autocomplete: Maybe<MenuNavigationBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<MenuNavigationBlockFacet>;
  item: Maybe<MenuNavigationBlock>;
  items: Maybe<Array<Maybe<MenuNavigationBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type MenuNavigationBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuNavigationBlockWhereInput = {
  NavigationLinks: InputMaybe<LinkWhereInput>;
  _and: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
};

export type NavItem = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'NavItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  href: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
};


export type NavItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type NavItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type NavItemAutocomplete = {
  __typename?: 'NavItemAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type NavItemFacet = {
  __typename?: 'NavItemFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type NavItemOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type NavItemOutput = {
  __typename?: 'NavItemOutput';
  autocomplete: Maybe<NavItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<NavItemFacet>;
  item: Maybe<NavItem>;
  items: Maybe<Array<Maybe<NavItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type NavItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier: InputMaybe<FactorModifier>;
  value: InputMaybe<Scalars['Float']['input']>;
};

export type OdpEmbedBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OdpEmbedBlock';
  ContentId: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type OdpEmbedBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OdpEmbedBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OdpEmbedBlockAutocomplete = {
  __typename?: 'OdpEmbedBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OdpEmbedBlockFacet = {
  __typename?: 'OdpEmbedBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OdpEmbedBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OdpEmbedBlockOutput = {
  __typename?: 'OdpEmbedBlockOutput';
  autocomplete: Maybe<OdpEmbedBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OdpEmbedBlockFacet>;
  item: Maybe<OdpEmbedBlock>;
  items: Maybe<Array<Maybe<OdpEmbedBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OdpEmbedBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OdpEmbedBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type PageSeoSettings = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'PageSeoSettings';
  GraphType: Maybe<Scalars['String']['output']>;
  MetaDescription: Maybe<Scalars['String']['output']>;
  MetaKeywords: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaTitle: Maybe<Scalars['String']['output']>;
  SharingImage: Maybe<ContentReference>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type PageSeoSettingsGraphTypeArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsMetaDescriptionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsMetaKeywordsArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsMetaTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PageSeoSettingsAutocomplete = {
  __typename?: 'PageSeoSettingsAutocomplete';
  SharingImage: Maybe<ContentReferenceAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type PageSeoSettingsFacet = {
  __typename?: 'PageSeoSettingsFacet';
  GraphType: Maybe<Array<Maybe<StringFacet>>>;
  MetaDescription: Maybe<Array<Maybe<StringFacet>>>;
  MetaKeywords: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage: Maybe<ContentReferenceFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};


export type PageSeoSettingsFacetGraphTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetMetaDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetMetaKeywordsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetMetaTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PageSeoSettingsOrderByInput = {
  GraphType: InputMaybe<OrderBy>;
  MetaDescription: InputMaybe<OrderBy>;
  MetaKeywords: InputMaybe<OrderBy>;
  MetaTitle: InputMaybe<OrderBy>;
  SharingImage: InputMaybe<ContentReferenceOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type PageSeoSettingsOutput = {
  __typename?: 'PageSeoSettingsOutput';
  autocomplete: Maybe<PageSeoSettingsAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PageSeoSettingsFacet>;
  item: Maybe<PageSeoSettings>;
  items: Maybe<Array<Maybe<PageSeoSettings>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PageSeoSettingsOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSeoSettingsProperty = {
  __typename?: 'PageSeoSettingsProperty';
  GraphType: Maybe<Scalars['String']['output']>;
  MetaDescription: Maybe<Scalars['String']['output']>;
  MetaKeywords: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaTitle: Maybe<Scalars['String']['output']>;
  SharingImage: Maybe<ContentReference>;
};


export type PageSeoSettingsPropertyGraphTypeArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsPropertyMetaDescriptionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsPropertyMetaKeywordsArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsPropertyMetaTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type PageSeoSettingsPropertyAutocomplete = {
  __typename?: 'PageSeoSettingsPropertyAutocomplete';
  SharingImage: Maybe<ContentReferenceAutocomplete>;
};

export type PageSeoSettingsPropertyFacet = {
  __typename?: 'PageSeoSettingsPropertyFacet';
  GraphType: Maybe<Array<Maybe<StringFacet>>>;
  MetaDescription: Maybe<Array<Maybe<StringFacet>>>;
  MetaKeywords: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage: Maybe<ContentReferenceFacet>;
};


export type PageSeoSettingsPropertyFacetGraphTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsPropertyFacetMetaDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsPropertyFacetMetaKeywordsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsPropertyFacetMetaTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PageSeoSettingsPropertyOrderByInput = {
  GraphType: InputMaybe<OrderBy>;
  MetaDescription: InputMaybe<OrderBy>;
  MetaKeywords: InputMaybe<OrderBy>;
  MetaTitle: InputMaybe<OrderBy>;
  SharingImage: InputMaybe<ContentReferenceOrderByInput>;
};

export type PageSeoSettingsPropertyWhereInput = {
  GraphType: InputMaybe<SearchableStringFilterInput>;
  MetaDescription: InputMaybe<SearchableStringFilterInput>;
  MetaKeywords: InputMaybe<SearchableStringFilterInput>;
  MetaTitle: InputMaybe<SearchableStringFilterInput>;
  SharingImage: InputMaybe<ContentReferenceWhereInput>;
};

export type PageSeoSettingsWhereInput = {
  GraphType: InputMaybe<SearchableStringFilterInput>;
  MetaDescription: InputMaybe<SearchableStringFilterInput>;
  MetaKeywords: InputMaybe<SearchableStringFilterInput>;
  MetaTitle: InputMaybe<SearchableStringFilterInput>;
  SharingImage: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
};

export type ParagraphElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ParagraphElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  text: Maybe<SearchableRichText>;
};


export type ParagraphElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ParagraphElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ParagraphElementAutocomplete = {
  __typename?: 'ParagraphElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ParagraphElementFacet = {
  __typename?: 'ParagraphElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  text: Maybe<SearchableRichTextFacet>;
};

export type ParagraphElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  text: InputMaybe<SearchableRichTextOrderByInput>;
};

export type ParagraphElementOutput = {
  __typename?: 'ParagraphElementOutput';
  autocomplete: Maybe<ParagraphElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ParagraphElementFacet>;
  item: Maybe<ParagraphElement>;
  items: Maybe<Array<Maybe<ParagraphElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ParagraphElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParagraphElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  text: InputMaybe<SearchableRichTextWhereInput>;
};

export type PinnedInput = {
  /** Pinned collection keys */
  collections: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase: InputMaybe<Scalars['String']['input']>;
};

export type PortfolioGridBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'PortfolioGridBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  items: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type PortfolioGridBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioGridBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PortfolioGridBlockAutocomplete = {
  __typename?: 'PortfolioGridBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  items: Maybe<_IContentAutocomplete>;
};

export type PortfolioGridBlockFacet = {
  __typename?: 'PortfolioGridBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  items: Maybe<_IContentFacet>;
};

export type PortfolioGridBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  items: InputMaybe<_IContentOrderByInput>;
};

export type PortfolioGridBlockOutput = {
  __typename?: 'PortfolioGridBlockOutput';
  autocomplete: Maybe<PortfolioGridBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PortfolioGridBlockFacet>;
  item: Maybe<PortfolioGridBlock>;
  items: Maybe<Array<Maybe<PortfolioGridBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PortfolioGridBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioGridBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  items: InputMaybe<_IContentWhereInput>;
};

export type PortfolioItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'PortfolioItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  imageUrl: Maybe<Scalars['String']['output']>;
  link: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type PortfolioItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PortfolioItemBlockAutocomplete = {
  __typename?: 'PortfolioItemBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type PortfolioItemBlockFacet = {
  __typename?: 'PortfolioItemBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type PortfolioItemBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type PortfolioItemBlockOutput = {
  __typename?: 'PortfolioItemBlockOutput';
  autocomplete: Maybe<PortfolioItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PortfolioItemBlockFacet>;
  item: Maybe<PortfolioItemBlock>;
  items: Maybe<Array<Maybe<PortfolioItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PortfolioItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
};

export type ProfileBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ProfileBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  bio: Maybe<Scalars['String']['output']>;
  imageSrc: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ProfileBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProfileBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ProfileBlockAutocomplete = {
  __typename?: 'ProfileBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ProfileBlockFacet = {
  __typename?: 'ProfileBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ProfileBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ProfileBlockOutput = {
  __typename?: 'ProfileBlockOutput';
  autocomplete: Maybe<ProfileBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ProfileBlockFacet>;
  item: Maybe<ProfileBlock>;
  items: Maybe<Array<Maybe<ProfileBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ProfileBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProfileBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
};

export type Query = {
  __typename?: 'Query';
  AnotherGreatPage: Maybe<AnotherGreatPageOutput>;
  ArticleListElement: Maybe<ArticleListElementOutput>;
  AvailabilityBlock: Maybe<AvailabilityBlockOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  BlogPostPage: Maybe<BlogPostPageOutput>;
  BlogSectionExperience: Maybe<BlogSectionExperienceOutput>;
  ButtonBlock: Maybe<ButtonBlockOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  CTAElement: Maybe<CtaElementOutput>;
  CarouselBlock: Maybe<CarouselBlockOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  ContentRecsElement: Maybe<ContentRecsElementOutput>;
  ContinueReadingComponent: Maybe<ContinueReadingComponentOutput>;
  Data: Maybe<DataOutput>;
  Footer: Maybe<FooterOutput>;
  FooterColumn: Maybe<FooterColumnOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  GenericMedia123: Maybe<GenericMedia123Output>;
  Header: Maybe<HeaderOutput>;
  HeadingElement: Maybe<HeadingElementOutput>;
  HelloWorld: Maybe<HelloWorldOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  HomePage: Maybe<HomePageOutput>;
  ImageElement: Maybe<ImageElementOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LandingPage: Maybe<LandingPageOutput>;
  LayoutSettingsBlock: Maybe<LayoutSettingsBlockOutput>;
  LogoItemBlock: Maybe<LogoItemBlockOutput>;
  LogosBlock: Maybe<LogosBlockOutput>;
  MegaMenuGroupBlock: Maybe<MegaMenuGroupBlockOutput>;
  MenuNavigationBlock: Maybe<MenuNavigationBlockOutput>;
  NavItem: Maybe<NavItemOutput>;
  OdpEmbedBlock: Maybe<OdpEmbedBlockOutput>;
  PageSeoSettings: Maybe<PageSeoSettingsOutput>;
  ParagraphElement: Maybe<ParagraphElementOutput>;
  PortfolioGridBlock: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock: Maybe<ProfileBlockOutput>;
  QuoteBlock: Maybe<QuoteBlockOutput>;
  RichTextElement: Maybe<RichTextElementOutput>;
  SEOExperience: Maybe<SeoExperienceOutput>;
  ServiceItem: Maybe<ServiceItemOutput>;
  ServicesBlock: Maybe<ServicesBlockOutput>;
  SocialLink: Maybe<SocialLinkOutput>;
  SomeGreatNewPage: Maybe<SomeGreatNewPageOutput>;
  StartPage: Maybe<StartPageOutput>;
  StoryBlock: Maybe<StoryBlockOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TestBlockPropertyGroup: Maybe<TestBlockPropertyGroupOutput>;
  TestimonialElement: Maybe<TestimonialElementOutput>;
  TestimonialItem: Maybe<TestimonialItemOutput>;
  TestimonialItemBlock: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock: Maybe<TestimonialsBlockOutput>;
  TextBlock: Maybe<TextBlockOutput>;
  VideoElement: Maybe<VideoElementOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _AssetItem: Maybe<_AssetItemOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _ImageItem: Maybe<_ImageItemOutput>;
  _Item: Maybe<_ItemOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryAnotherGreatPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AnotherGreatPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<AnotherGreatPageWhereInput>;
};


export type QueryArticleListElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleListElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticleListElementWhereInput>;
};


export type QueryAvailabilityBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AvailabilityBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<AvailabilityBlockWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryBlogPostPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogPostPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlogPostPageWhereInput>;
};


export type QueryBlogSectionExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogSectionExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlogSectionExperienceWhereInput>;
};


export type QueryButtonBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ButtonBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryCmsPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CmsPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CmsPageWhereInput>;
};


export type QueryCtaElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CtaElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CtaElementWhereInput>;
};


export type QueryCarouselBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CarouselBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryContactBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContactBlockWhereInput>;
};


export type QueryContentRecsElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContentRecsElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContentRecsElementWhereInput>;
};


export type QueryContinueReadingComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContinueReadingComponentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContinueReadingComponentWhereInput>;
};


export type QueryDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DataWhereInput>;
};


export type QueryFooterArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<FooterWhereInput>;
};


export type QueryFooterColumnArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterColumnOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<FooterColumnWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMediaWhereInput>;
};


export type QueryGenericMedia123Args = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMedia123OrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMedia123WhereInput>;
};


export type QueryHeaderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeaderWhereInput>;
};


export type QueryHeadingElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeadingElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeadingElementWhereInput>;
};


export type QueryHelloWorldArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HelloWorldOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HelloWorldWhereInput>;
};


export type QueryHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryHomePageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HomePageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HomePageWhereInput>;
};


export type QueryImageElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageElementWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryLandingPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LandingPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LandingPageWhereInput>;
};


export type QueryLayoutSettingsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LayoutSettingsBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LayoutSettingsBlockWhereInput>;
};


export type QueryLogoItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogoItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LogoItemBlockWhereInput>;
};


export type QueryLogosBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogosBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LogosBlockWhereInput>;
};


export type QueryMegaMenuGroupBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryMenuNavigationBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MenuNavigationBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MenuNavigationBlockWhereInput>;
};


export type QueryNavItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<NavItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<NavItemWhereInput>;
};


export type QueryOdpEmbedBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OdpEmbedBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OdpEmbedBlockWhereInput>;
};


export type QueryPageSeoSettingsArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PageSeoSettingsOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryParagraphElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ParagraphElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryPortfolioGridBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioGridBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PortfolioGridBlockWhereInput>;
};


export type QueryPortfolioItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PortfolioItemBlockWhereInput>;
};


export type QueryProfileBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProfileBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ProfileBlockWhereInput>;
};


export type QueryQuoteBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<QuoteBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<QuoteBlockWhereInput>;
};


export type QueryRichTextElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<RichTextElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<RichTextElementWhereInput>;
};


export type QuerySeoExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SeoExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SeoExperienceWhereInput>;
};


export type QueryServiceItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServiceItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ServiceItemWhereInput>;
};


export type QueryServicesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServicesBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ServicesBlockWhereInput>;
};


export type QuerySocialLinkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialLinkOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SocialLinkWhereInput>;
};


export type QuerySomeGreatNewPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SomeGreatNewPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SomeGreatNewPageWhereInput>;
};


export type QueryStartPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StartPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StartPageWhereInput>;
};


export type QueryStoryBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StoryBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StoryBlockWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTestBlockPropertyGroupArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestBlockPropertyGroupOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestBlockPropertyGroupWhereInput>;
};


export type QueryTestimonialElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryTestimonialItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialItemWhereInput>;
};


export type QueryTestimonialItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialItemBlockWhereInput>;
};


export type QueryTestimonialsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialsBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialsBlockWhereInput>;
};


export type QueryTextBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TextBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TextBlockWhereInput>;
};


export type QueryVideoElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoElementWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoMediaWhereInput>;
};


export type Query_AssetItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_AssetItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_AssetItemWhereInput>;
};


export type Query_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageWhereInput>;
};


export type Query_ImageItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageItemWhereInput>;
};


export type Query_ItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ItemWhereInput>;
};


export type Query_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_VideoWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  AnotherGreatPage: Maybe<AnotherGreatPageOutput>;
  ArticleListElement: Maybe<ArticleListElementOutput>;
  AvailabilityBlock: Maybe<AvailabilityBlockOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  BlogPostPage: Maybe<BlogPostPageOutput>;
  BlogSectionExperience: Maybe<BlogSectionExperienceOutput>;
  ButtonBlock: Maybe<ButtonBlockOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  CTAElement: Maybe<CtaElementOutput>;
  CarouselBlock: Maybe<CarouselBlockOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  ContentRecsElement: Maybe<ContentRecsElementOutput>;
  ContinueReadingComponent: Maybe<ContinueReadingComponentOutput>;
  Data: Maybe<DataOutput>;
  Footer: Maybe<FooterOutput>;
  FooterColumn: Maybe<FooterColumnOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  GenericMedia123: Maybe<GenericMedia123Output>;
  Header: Maybe<HeaderOutput>;
  HeadingElement: Maybe<HeadingElementOutput>;
  HelloWorld: Maybe<HelloWorldOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  HomePage: Maybe<HomePageOutput>;
  ImageElement: Maybe<ImageElementOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LandingPage: Maybe<LandingPageOutput>;
  LayoutSettingsBlock: Maybe<LayoutSettingsBlockOutput>;
  LogoItemBlock: Maybe<LogoItemBlockOutput>;
  LogosBlock: Maybe<LogosBlockOutput>;
  MegaMenuGroupBlock: Maybe<MegaMenuGroupBlockOutput>;
  MenuNavigationBlock: Maybe<MenuNavigationBlockOutput>;
  NavItem: Maybe<NavItemOutput>;
  OdpEmbedBlock: Maybe<OdpEmbedBlockOutput>;
  PageSeoSettings: Maybe<PageSeoSettingsOutput>;
  ParagraphElement: Maybe<ParagraphElementOutput>;
  PortfolioGridBlock: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock: Maybe<ProfileBlockOutput>;
  QuoteBlock: Maybe<QuoteBlockOutput>;
  RichTextElement: Maybe<RichTextElementOutput>;
  SEOExperience: Maybe<SeoExperienceOutput>;
  ServiceItem: Maybe<ServiceItemOutput>;
  ServicesBlock: Maybe<ServicesBlockOutput>;
  SocialLink: Maybe<SocialLinkOutput>;
  SomeGreatNewPage: Maybe<SomeGreatNewPageOutput>;
  StartPage: Maybe<StartPageOutput>;
  StoryBlock: Maybe<StoryBlockOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TestBlockPropertyGroup: Maybe<TestBlockPropertyGroupOutput>;
  TestimonialElement: Maybe<TestimonialElementOutput>;
  TestimonialItem: Maybe<TestimonialItemOutput>;
  TestimonialItemBlock: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock: Maybe<TestimonialsBlockOutput>;
  TextBlock: Maybe<TextBlockOutput>;
  VideoElement: Maybe<VideoElementOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _AssetItem: Maybe<_AssetItemOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _ImageItem: Maybe<_ImageItemOutput>;
  _Item: Maybe<_ItemOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryRefAnotherGreatPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AnotherGreatPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<AnotherGreatPageWhereInput>;
};


export type QueryRefArticleListElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleListElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticleListElementWhereInput>;
};


export type QueryRefAvailabilityBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AvailabilityBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<AvailabilityBlockWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefBlogPostPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogPostPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlogPostPageWhereInput>;
};


export type QueryRefBlogSectionExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogSectionExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlogSectionExperienceWhereInput>;
};


export type QueryRefButtonBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ButtonBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryRefCmsPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CmsPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CmsPageWhereInput>;
};


export type QueryRefCtaElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CtaElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CtaElementWhereInput>;
};


export type QueryRefCarouselBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CarouselBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryRefContactBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContactBlockWhereInput>;
};


export type QueryRefContentRecsElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContentRecsElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContentRecsElementWhereInput>;
};


export type QueryRefContinueReadingComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContinueReadingComponentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContinueReadingComponentWhereInput>;
};


export type QueryRefDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DataWhereInput>;
};


export type QueryRefFooterArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<FooterWhereInput>;
};


export type QueryRefFooterColumnArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterColumnOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<FooterColumnWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefGenericMedia123Args = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMedia123OrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMedia123WhereInput>;
};


export type QueryRefHeaderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeaderWhereInput>;
};


export type QueryRefHeadingElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeadingElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeadingElementWhereInput>;
};


export type QueryRefHelloWorldArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HelloWorldOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HelloWorldWhereInput>;
};


export type QueryRefHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefHomePageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HomePageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HomePageWhereInput>;
};


export type QueryRefImageElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageElementWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefLandingPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LandingPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LandingPageWhereInput>;
};


export type QueryRefLayoutSettingsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LayoutSettingsBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LayoutSettingsBlockWhereInput>;
};


export type QueryRefLogoItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogoItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LogoItemBlockWhereInput>;
};


export type QueryRefLogosBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogosBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LogosBlockWhereInput>;
};


export type QueryRefMegaMenuGroupBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryRefMenuNavigationBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MenuNavigationBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MenuNavigationBlockWhereInput>;
};


export type QueryRefNavItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<NavItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<NavItemWhereInput>;
};


export type QueryRefOdpEmbedBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OdpEmbedBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OdpEmbedBlockWhereInput>;
};


export type QueryRefPageSeoSettingsArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PageSeoSettingsOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryRefParagraphElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ParagraphElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryRefPortfolioGridBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioGridBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PortfolioGridBlockWhereInput>;
};


export type QueryRefPortfolioItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PortfolioItemBlockWhereInput>;
};


export type QueryRefProfileBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProfileBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ProfileBlockWhereInput>;
};


export type QueryRefQuoteBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<QuoteBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<QuoteBlockWhereInput>;
};


export type QueryRefRichTextElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<RichTextElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<RichTextElementWhereInput>;
};


export type QueryRefSeoExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SeoExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SeoExperienceWhereInput>;
};


export type QueryRefServiceItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServiceItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ServiceItemWhereInput>;
};


export type QueryRefServicesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServicesBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ServicesBlockWhereInput>;
};


export type QueryRefSocialLinkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialLinkOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SocialLinkWhereInput>;
};


export type QueryRefSomeGreatNewPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SomeGreatNewPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SomeGreatNewPageWhereInput>;
};


export type QueryRefStartPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StartPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StartPageWhereInput>;
};


export type QueryRefStoryBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StoryBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StoryBlockWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTestBlockPropertyGroupArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestBlockPropertyGroupOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestBlockPropertyGroupWhereInput>;
};


export type QueryRefTestimonialElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryRefTestimonialItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialItemWhereInput>;
};


export type QueryRefTestimonialItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialItemBlockWhereInput>;
};


export type QueryRefTestimonialsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialsBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialsBlockWhereInput>;
};


export type QueryRefTextBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TextBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TextBlockWhereInput>;
};


export type QueryRefVideoElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoElementWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRef_AssetItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_AssetItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_AssetItemWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_ImageItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageItemWhereInput>;
};


export type QueryRef_ItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ItemWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track: InputMaybe<Scalars['String']['input']>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_VideoWhereInput>;
};

export type QuoteBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'QuoteBlock';
  QuoteActive: Maybe<Scalars['Boolean']['output']>;
  QuoteColor: Maybe<Scalars['String']['output']>;
  QuoteProfileLocation: Maybe<Scalars['String']['output']>;
  QuoteProfileName: Maybe<Scalars['String']['output']>;
  QuoteProfilePicture: Maybe<ContentReference>;
  QuoteText: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type QuoteBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type QuoteBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type QuoteBlockAutocomplete = {
  __typename?: 'QuoteBlockAutocomplete';
  QuoteProfilePicture: Maybe<ContentReferenceAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type QuoteBlockFacet = {
  __typename?: 'QuoteBlockFacet';
  QuoteProfilePicture: Maybe<ContentReferenceFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type QuoteBlockOrderByInput = {
  QuoteProfilePicture: InputMaybe<ContentReferenceOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type QuoteBlockOutput = {
  __typename?: 'QuoteBlockOutput';
  autocomplete: Maybe<QuoteBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<QuoteBlockFacet>;
  item: Maybe<QuoteBlock>;
  items: Maybe<Array<Maybe<QuoteBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type QuoteBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuoteBlockWhereInput = {
  QuoteProfilePicture: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
};

export type RangeFacetsInput = {
  from: InputMaybe<Scalars['Int']['input']>;
  to: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type RichText = {
  __typename?: 'RichText';
  html: Maybe<Scalars['String']['output']>;
  json: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompleteHtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'RichTextElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  text: Maybe<SearchableRichText>;
};


export type RichTextElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type RichTextElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type RichTextElementAutocomplete = {
  __typename?: 'RichTextElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type RichTextElementFacet = {
  __typename?: 'RichTextElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  text: Maybe<SearchableRichTextFacet>;
};

export type RichTextElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  text: InputMaybe<SearchableRichTextOrderByInput>;
};

export type RichTextElementOutput = {
  __typename?: 'RichTextElementOutput';
  autocomplete: Maybe<RichTextElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<RichTextElementFacet>;
  item: Maybe<RichTextElement>;
  items: Maybe<Array<Maybe<RichTextElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type RichTextElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type RichTextElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<RichTextElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<RichTextElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<RichTextElementWhereInput>>>;
  text: InputMaybe<SearchableRichTextWhereInput>;
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacetHtmlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html: InputMaybe<StringFilterInput>;
};

export type SeoExperience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'SEOExperience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type SeoExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SeoExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SeoExperienceAutocomplete = {
  __typename?: 'SEOExperienceAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type SeoExperienceFacet = {
  __typename?: 'SEOExperienceFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type SeoExperienceOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type SeoExperienceOutput = {
  __typename?: 'SEOExperienceOutput';
  autocomplete: Maybe<SeoExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SeoExperienceFacet>;
  item: Maybe<SeoExperience>;
  items: Maybe<Array<Maybe<SeoExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SeoExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeoExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type SearchableRichText = {
  __typename?: 'SearchableRichText';
  html: Maybe<Scalars['String']['output']>;
  json: Maybe<Scalars['JSON']['output']>;
};


export type SearchableRichTextHtmlArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type SearchableRichTextFacet = {
  __typename?: 'SearchableRichTextFacet';
  html: Maybe<Array<Maybe<StringFacet>>>;
};


export type SearchableRichTextFacetHtmlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SearchableRichTextOrderByInput = {
  html: InputMaybe<OrderBy>;
};

export type SearchableRichTextWhereInput = {
  html: InputMaybe<SearchableStringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type ServiceItem = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ServiceItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ServiceItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServiceItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ServiceItemAutocomplete = {
  __typename?: 'ServiceItemAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ServiceItemFacet = {
  __typename?: 'ServiceItemFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ServiceItemOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ServiceItemOutput = {
  __typename?: 'ServiceItemOutput';
  autocomplete: Maybe<ServiceItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ServiceItemFacet>;
  item: Maybe<ServiceItem>;
  items: Maybe<Array<Maybe<ServiceItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ServiceItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
};

export type ServicesBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ServicesBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  services: Maybe<Array<Maybe<_IContent>>>;
};


export type ServicesBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServicesBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ServicesBlockAutocomplete = {
  __typename?: 'ServicesBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  services: Maybe<_IContentAutocomplete>;
};

export type ServicesBlockFacet = {
  __typename?: 'ServicesBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  services: Maybe<_IContentFacet>;
};

export type ServicesBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  services: InputMaybe<_IContentOrderByInput>;
};

export type ServicesBlockOutput = {
  __typename?: 'ServicesBlockOutput';
  autocomplete: Maybe<ServicesBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ServicesBlockFacet>;
  item: Maybe<ServicesBlock>;
  items: Maybe<Array<Maybe<ServicesBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ServicesBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServicesBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  services: InputMaybe<_IContentWhereInput>;
};

export type SocialLink = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'SocialLink';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  href: Maybe<Scalars['String']['output']>;
  platform: Maybe<Scalars['String']['output']>;
};


export type SocialLink_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SocialLink_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SocialLinkAutocomplete = {
  __typename?: 'SocialLinkAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SocialLinkFacet = {
  __typename?: 'SocialLinkFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SocialLinkOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SocialLinkOutput = {
  __typename?: 'SocialLinkOutput';
  autocomplete: Maybe<SocialLinkAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SocialLinkFacet>;
  item: Maybe<SocialLink>;
  items: Maybe<Array<Maybe<SocialLink>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SocialLinkOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SocialLinkWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
};

export type SomeGreatNewPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'SomeGreatNewPage';
  AddBlocksHere: Maybe<Array<Maybe<_IContent>>>;
  Body: Maybe<RichText>;
  SeoSettings: Maybe<PageSeoSettingsProperty>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  newLink: Maybe<ContentUrl>;
};


export type SomeGreatNewPageTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SomeGreatNewPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SomeGreatNewPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SomeGreatNewPageAutocomplete = {
  __typename?: 'SomeGreatNewPageAutocomplete';
  AddBlocksHere: Maybe<_IContentAutocomplete>;
  Body: Maybe<RichTextAutocomplete>;
  SeoSettings: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  newLink: Maybe<ContentUrlAutocomplete>;
};

export type SomeGreatNewPageFacet = {
  __typename?: 'SomeGreatNewPageFacet';
  AddBlocksHere: Maybe<_IContentFacet>;
  Body: Maybe<RichTextFacet>;
  SeoSettings: Maybe<PageSeoSettingsPropertyFacet>;
  Title: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  newLink: Maybe<ContentUrlFacet>;
};


export type SomeGreatNewPageFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SomeGreatNewPageOrderByInput = {
  AddBlocksHere: InputMaybe<_IContentOrderByInput>;
  Body: InputMaybe<RichTextOrderByInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  Title: InputMaybe<OrderBy>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  newLink: InputMaybe<ContentUrlOrderByInput>;
};

export type SomeGreatNewPageOutput = {
  __typename?: 'SomeGreatNewPageOutput';
  autocomplete: Maybe<SomeGreatNewPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SomeGreatNewPageFacet>;
  item: Maybe<SomeGreatNewPage>;
  items: Maybe<Array<Maybe<SomeGreatNewPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SomeGreatNewPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SomeGreatNewPageWhereInput = {
  AddBlocksHere: InputMaybe<_IContentWhereInput>;
  Body: InputMaybe<RichTextWhereInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  Title: InputMaybe<SearchableStringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<SomeGreatNewPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SomeGreatNewPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SomeGreatNewPageWhereInput>>>;
  newLink: InputMaybe<ContentUrlWhereInput>;
};

export type StartPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'StartPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type StartPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
};

export type StartPageOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete: Maybe<StartPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StartPageFacet>;
  item: Maybe<StartPage>;
  items: Maybe<Array<Maybe<StartPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  blocks: InputMaybe<_IContentWhereInput>;
};

export type StoryBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'StoryBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  highlights: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  story: Maybe<Scalars['String']['output']>;
};


export type StoryBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StoryBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StoryBlockAutocomplete = {
  __typename?: 'StoryBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type StoryBlockFacet = {
  __typename?: 'StoryBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type StoryBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type StoryBlockOutput = {
  __typename?: 'StoryBlockOutput';
  autocomplete: Maybe<StoryBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StoryBlockFacet>;
  item: Maybe<StoryBlock>;
  items: Maybe<Array<Maybe<StoryBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StoryBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StoryBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & _IItem & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type SysContentFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete: Maybe<SysContentFolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SysContentFolderFacet>;
  item: Maybe<SysContentFolder>;
  items: Maybe<Array<Maybe<SysContentFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TestBlockPropertyGroup = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestBlockPropertyGroup';
  Shared: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type TestBlockPropertyGroup_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestBlockPropertyGroup_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestBlockPropertyGroupAutocomplete = {
  __typename?: 'TestBlockPropertyGroupAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TestBlockPropertyGroupFacet = {
  __typename?: 'TestBlockPropertyGroupFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TestBlockPropertyGroupOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TestBlockPropertyGroupOutput = {
  __typename?: 'TestBlockPropertyGroupOutput';
  autocomplete: Maybe<TestBlockPropertyGroupAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestBlockPropertyGroupFacet>;
  item: Maybe<TestBlockPropertyGroup>;
  items: Maybe<Array<Maybe<TestBlockPropertyGroup>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestBlockPropertyGroupOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestBlockPropertyGroupWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestBlockPropertyGroupWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestBlockPropertyGroupWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestBlockPropertyGroupWhereInput>>>;
};

export type TestimonialElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestimonialElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  customerImage: Maybe<ContentReference>;
  customerLocation: Maybe<Scalars['String']['output']>;
  customerName: Maybe<Scalars['String']['output']>;
  referenceText: Maybe<RichText>;
  referenceTitle: Maybe<Scalars['String']['output']>;
};


export type TestimonialElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialElementAutocomplete = {
  __typename?: 'TestimonialElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  customerImage: Maybe<ContentReferenceAutocomplete>;
  referenceText: Maybe<RichTextAutocomplete>;
};

export type TestimonialElementFacet = {
  __typename?: 'TestimonialElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  customerImage: Maybe<ContentReferenceFacet>;
  referenceText: Maybe<RichTextFacet>;
};

export type TestimonialElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  customerImage: InputMaybe<ContentReferenceOrderByInput>;
  referenceText: InputMaybe<RichTextOrderByInput>;
};

export type TestimonialElementOutput = {
  __typename?: 'TestimonialElementOutput';
  autocomplete: Maybe<TestimonialElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialElementFacet>;
  item: Maybe<TestimonialElement>;
  items: Maybe<Array<Maybe<TestimonialElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  customerImage: InputMaybe<ContentReferenceWhereInput>;
  referenceText: InputMaybe<RichTextWhereInput>;
};

export type TestimonialItem = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestimonialItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  avatarSrc: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  fullName: Maybe<Scalars['String']['output']>;
  position: Maybe<Scalars['String']['output']>;
};


export type TestimonialItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialItemAutocomplete = {
  __typename?: 'TestimonialItemAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestimonialItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  avatarSrc: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  fullName: Maybe<Scalars['String']['output']>;
  position: Maybe<Scalars['String']['output']>;
};


export type TestimonialItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialItemBlockAutocomplete = {
  __typename?: 'TestimonialItemBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialItemBlockFacet = {
  __typename?: 'TestimonialItemBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TestimonialItemBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialItemBlockOutput = {
  __typename?: 'TestimonialItemBlockOutput';
  autocomplete: Maybe<TestimonialItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialItemBlockFacet>;
  item: Maybe<TestimonialItemBlock>;
  items: Maybe<Array<Maybe<TestimonialItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
};

export type TestimonialItemFacet = {
  __typename?: 'TestimonialItemFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TestimonialItemOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialItemOutput = {
  __typename?: 'TestimonialItemOutput';
  autocomplete: Maybe<TestimonialItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialItemFacet>;
  item: Maybe<TestimonialItem>;
  items: Maybe<Array<Maybe<TestimonialItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
};

export type TestimonialsBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestimonialsBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  testimonials: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type TestimonialsBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialsBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialsBlockAutocomplete = {
  __typename?: 'TestimonialsBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  testimonials: Maybe<_IContentAutocomplete>;
};

export type TestimonialsBlockFacet = {
  __typename?: 'TestimonialsBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  testimonials: Maybe<_IContentFacet>;
};

export type TestimonialsBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  testimonials: InputMaybe<_IContentOrderByInput>;
};

export type TestimonialsBlockOutput = {
  __typename?: 'TestimonialsBlockOutput';
  autocomplete: Maybe<TestimonialsBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialsBlockFacet>;
  item: Maybe<TestimonialsBlock>;
  items: Maybe<Array<Maybe<TestimonialsBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialsBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialsBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  testimonials: InputMaybe<_IContentWhereInput>;
};

export type TextBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TextBlock';
  TextBlockDescription: Maybe<RichText>;
  TextBlockHeading: Maybe<Scalars['String']['output']>;
  TextBlockHeadingSize: Maybe<Scalars['String']['output']>;
  TextBlockOverline: Maybe<Scalars['String']['output']>;
  TextBlockWidth: Maybe<Scalars['String']['output']>;
  TextCenter: Maybe<Scalars['Boolean']['output']>;
  TextClassName: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type TextBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TextBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TextBlockAutocomplete = {
  __typename?: 'TextBlockAutocomplete';
  TextBlockDescription: Maybe<RichTextAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TextBlockFacet = {
  __typename?: 'TextBlockFacet';
  TextBlockDescription: Maybe<RichTextFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TextBlockOrderByInput = {
  TextBlockDescription: InputMaybe<RichTextOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TextBlockOutput = {
  __typename?: 'TextBlockOutput';
  autocomplete: Maybe<TextBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TextBlockFacet>;
  item: Maybe<TextBlock>;
  items: Maybe<Array<Maybe<TextBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TextBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextBlockWhereInput = {
  TextBlockDescription: InputMaybe<RichTextWhereInput>;
  _and: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
};

export enum VariationIncludeMode {
  All = 'ALL',
  None = 'NONE',
  Some = 'SOME'
}

export type VariationInput = {
  include: InputMaybe<VariationIncludeMode>;
  includeOriginal: InputMaybe<Scalars['Boolean']['input']>;
  value: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VideoElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'VideoElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  placeholder: Maybe<ContentReference>;
  title: Maybe<Scalars['String']['output']>;
  video: Maybe<ContentReference>;
};


export type VideoElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoElementAutocomplete = {
  __typename?: 'VideoElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  placeholder: Maybe<ContentReferenceAutocomplete>;
  video: Maybe<ContentReferenceAutocomplete>;
};

export type VideoElementFacet = {
  __typename?: 'VideoElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  placeholder: Maybe<ContentReferenceFacet>;
  video: Maybe<ContentReferenceFacet>;
};

export type VideoElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  placeholder: InputMaybe<ContentReferenceOrderByInput>;
  video: InputMaybe<ContentReferenceOrderByInput>;
};

export type VideoElementOutput = {
  __typename?: 'VideoElementOutput';
  autocomplete: Maybe<VideoElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoElementFacet>;
  item: Maybe<VideoElement>;
  items: Maybe<Array<Maybe<VideoElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  placeholder: InputMaybe<ContentReferenceWhereInput>;
  video: InputMaybe<ContentReferenceWhereInput>;
};

export type VideoMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type VideoMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete: Maybe<VideoMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoMediaFacet>;
  item: Maybe<VideoMedia>;
  items: Maybe<Array<Maybe<VideoMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type _AssetItem = IData & _IAssetItem & _IItem & {
  __typename?: '_AssetItem';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _AssetItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _AssetItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _AssetItemAutocomplete = {
  __typename?: '_AssetItemAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
};

export type _AssetItemFacet = {
  __typename?: '_AssetItemFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
};

export type _AssetItemOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _AssetItemOutput = {
  __typename?: '_AssetItemOutput';
  autocomplete: Maybe<_AssetItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_AssetItemFacet>;
  item: Maybe<_IAssetItem>;
  items: Maybe<Array<Maybe<_IAssetItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _AssetItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _AssetItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
};

export type _AssetMetadata = {
  __typename?: '_AssetMetadata';
  fileSize: Maybe<Scalars['Float']['output']>;
  mimeType: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type _AssetMetadataAutocomplete = {
  __typename?: '_AssetMetadataAutocomplete';
  mimeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _AssetMetadataAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _AssetMetadataAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _AssetMetadataFacet = {
  __typename?: '_AssetMetadataFacet';
  fileSize: Maybe<Array<Maybe<NumberFacet>>>;
  mimeType: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<Array<Maybe<StringFacet>>>;
};


export type _AssetMetadataFacetFileSizeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type _AssetMetadataFacetMimeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _AssetMetadataFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _AssetMetadataOrderByInput = {
  fileSize: InputMaybe<OrderBy>;
  mimeType: InputMaybe<OrderBy>;
  url: InputMaybe<OrderBy>;
};

export type _AssetMetadataWhereInput = {
  fileSize: InputMaybe<FloatFilterInput>;
  mimeType: InputMaybe<StringFilterInput>;
  url: InputMaybe<StringFilterInput>;
};

export type _Component = IData & _IComponent & _IContent & _IItem & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Component_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Component_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete: Maybe<_ComponentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ComponentFacet>;
  item: Maybe<_IComponent>;
  items: Maybe<Array<Maybe<_IComponent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & _IItem & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Content_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Content_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete: Maybe<_ContentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ContentFacet>;
  item: Maybe<_IContent>;
  items: Maybe<Array<Maybe<_IContent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Experience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Experience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete: Maybe<_ExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ExperienceFacet>;
  item: Maybe<_IExperience>;
  items: Maybe<Array<Maybe<_IExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & _IItem & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Folder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Folder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete: Maybe<_FolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_FolderFacet>;
  item: Maybe<_IFolder>;
  items: Maybe<Array<Maybe<_IFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IAssetItem = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IAssetItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IAssetItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IComponent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IComponent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IComponentFacet = {
  __typename?: '_IComponentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _IComponentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _IComponentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IContent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IContent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _IExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IImage = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IImage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IImage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IImageItem = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IImageItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IImageItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IItem = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _ISection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _ISection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IVideo_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IVideo_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IAssetItem & _IContent & _IImage & _IImageItem & _IItem & _IMedia & {
  __typename?: '_Image';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Image_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Image_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _imageMetadata: Maybe<_ImageMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ImageItem = IData & _IAssetItem & _IImageItem & _IItem & {
  __typename?: '_ImageItem';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _ImageItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _ImageItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ImageItemAutocomplete = {
  __typename?: '_ImageItemAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
};

export type _ImageItemFacet = {
  __typename?: '_ImageItemFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _imageMetadata: Maybe<_ImageMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
};

export type _ImageItemOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageItemOutput = {
  __typename?: '_ImageItemOutput';
  autocomplete: Maybe<_ImageItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ImageItemFacet>;
  item: Maybe<_IImageItem>;
  items: Maybe<Array<Maybe<_IImageItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ImageItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
};

export type _ImageMetadata = {
  __typename?: '_ImageMetadata';
  height: Maybe<Scalars['Int']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};

export type _ImageMetadataFacet = {
  __typename?: '_ImageMetadataFacet';
  height: Maybe<Array<Maybe<NumberFacet>>>;
  width: Maybe<Array<Maybe<NumberFacet>>>;
};


export type _ImageMetadataFacetHeightArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type _ImageMetadataFacetWidthArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type _ImageMetadataOrderByInput = {
  height: InputMaybe<OrderBy>;
  width: InputMaybe<OrderBy>;
};

export type _ImageMetadataWhereInput = {
  height: InputMaybe<IntFilterInput>;
  width: InputMaybe<IntFilterInput>;
};

export type _ImageOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete: Maybe<_ImageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ImageFacet>;
  item: Maybe<_IImage>;
  items: Maybe<Array<Maybe<_IImage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Item = IData & _IItem & {
  __typename?: '_Item';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Item_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Item_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ItemAutocomplete = {
  __typename?: '_ItemAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
};

export type _ItemFacet = {
  __typename?: '_ItemFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
};

export type _ItemOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ItemOutput = {
  __typename?: '_ItemOutput';
  autocomplete: Maybe<_ItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ItemFacet>;
  item: Maybe<_IItem>;
  items: Maybe<Array<Maybe<_IItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
};

export type _Media = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: '_Media';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Media_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Media_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete: Maybe<_MediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_MediaFacet>;
  item: Maybe<_IMedia>;
  items: Maybe<Array<Maybe<_IMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Metadata = {
  __typename?: '_Metadata';
  displayName: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  type: Maybe<Scalars['String']['output']>;
};


export type _MetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type _MetadataAutocomplete = {
  __typename?: '_MetadataAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _MetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _MetadataAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _MetadataFacet = {
  __typename?: '_MetadataFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  lastModified: Maybe<Array<Maybe<DateFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type _MetadataFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type _MetadataFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _MetadataOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  lastModified: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type _MetadataWhereInput = {
  displayName: InputMaybe<SearchableStringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  lastModified: InputMaybe<DateFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type _Page = IData & _IContent & _IItem & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Page_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Page_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete: Maybe<_PageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_PageFacet>;
  item: Maybe<_IPage>;
  items: Maybe<Array<Maybe<_IPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Section_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Section_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete: Maybe<_SectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_SectionFacet>;
  item: Maybe<_ISection>;
  items: Maybe<Array<Maybe<_ISection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IAssetItem & _IContent & _IItem & _IMedia & _IVideo & {
  __typename?: '_Video';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Video_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Video_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete: Maybe<_VideoAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_VideoFacet>;
  item: Maybe<_IVideo>;
  items: Maybe<Array<Maybe<_IVideo>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type UsePinnedInput = {
  collectionId: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase: InputMaybe<Scalars['String']['input']>;
};

export type AllPagesQueryVariables = Exact<{
  pageType: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type AllPagesQuery = { __typename?: 'Query', _Content: { __typename?: '_ContentOutput', items: Array<{ __typename?: 'AnotherGreatPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ArticleListElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'AvailabilityBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlogPostPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlogSectionExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ButtonBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CMSPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CTAElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CarouselBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContactBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContentRecsElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContinueReadingComponent', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Footer', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'FooterColumn', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia123', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Header', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeadingElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HelloWorld', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HomePage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ImageElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LandingPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LayoutSettingsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogoItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogosBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'MegaMenuGroupBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'MenuNavigationBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'NavItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'OdpEmbedBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PageSeoSettings', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ParagraphElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioGridBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ProfileBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'QuoteBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'RichTextElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SEOExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServiceItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServicesBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SocialLink', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SomeGreatNewPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StartPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StoryBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestBlockPropertyGroup', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TextBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'VideoElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Component', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Content', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Experience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Image', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Media', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Page', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Section', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | null> | null } | null };

export type GetContentByGuidQueryVariables = Exact<{
  guid: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContentByGuidQuery = { __typename?: 'Query', _Content: { __typename?: '_ContentOutput', items: Array<{ __typename?: 'AnotherGreatPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ArticleListElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'AvailabilityBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlogPostPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlogSectionExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ButtonBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CMSPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CTAElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CarouselBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContactBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContentRecsElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContinueReadingComponent', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Footer', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'FooterColumn', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia123', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Header', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeadingElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HelloWorld', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HomePage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ImageElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LandingPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LayoutSettingsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogoItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogosBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'MegaMenuGroupBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'MenuNavigationBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'NavItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'OdpEmbedBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PageSeoSettings', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ParagraphElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioGridBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ProfileBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'QuoteBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'RichTextElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SEOExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServiceItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServicesBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SocialLink', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SomeGreatNewPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StartPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StoryBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestBlockPropertyGroup', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TextBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'VideoElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Component', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Content', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Experience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Image', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Media', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Page', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Section', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | null> | null } | null };

export type GetFooterQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetFooterQuery = { __typename?: 'Query', Footer: { __typename?: 'FooterOutput', items: Array<{ __typename?: 'Footer', copyrightText: string | null, socialLinks: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink', platform: string | null, href: string | null } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null, columns: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn', title: string | null, links: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem', label: string | null, href: string | null } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetHeaderQueryVariables = Exact<{
  locale: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetHeaderQuery = { __typename?: 'Query', Header: { __typename?: 'HeaderOutput', items: Array<{ __typename?: 'Header', logo: string | null, ctaText: string | null, ctaHref: string | null, navItems: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem', label: string | null, href: string | null } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetPageByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPageByUrlQuery = { __typename?: 'Query', CMSPage: { __typename?: 'CMSPageOutput', items: Array<{ __typename?: 'CMSPage', title: string | null, shortDescription: string | null, keywords: string | null, _modified: any | null, blocks: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetStartPageQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetStartPageQuery = { __typename?: 'Query', StartPage: { __typename?: 'StartPageOutput', items: Array<{ __typename?: 'StartPage', title: string | null, shortDescription: string | null, keywords: string | null, blocks: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetVisualBuilderBySlugQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetVisualBuilderBySlugQuery = { __typename?: 'Query', SEOExperience: { __typename?: 'SEOExperienceOutput', items: Array<{ __typename?: 'SEOExperience', title: string | null, shortDescription: string | null, keywords: string | null, composition: { __typename?: 'CompositionStructureNode', nodes: Array<{ __typename?: 'CompositionComponentNode', nodeType: string | null, key: string | null, component: { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'FooterColumn' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', nodeType: string | null, key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, nodeType: string | null, rows: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, columns: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, elements: Array<{ __typename?: 'CompositionComponentNode', key: string | null, component: { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'FooterColumn' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null> | null } | null> | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null } | null> | null } | null };

export type GetAllPagesVersionByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllPagesVersionByUrlQuery = { __typename?: 'Query', CMSPage: { __typename?: 'CMSPageOutput', items: Array<{ __typename?: 'CMSPage', title: string | null, shortDescription: string | null, keywords: string | null, _modified: any | null, _metadata: { __typename?: 'ContentMetadata', version: string | null } | { __typename?: 'InstanceMetadata', version: string | null } | { __typename?: 'ItemMetadata', version: string | null } | { __typename?: 'MediaMetadata', version: string | null } | null, blocks: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetAllStartPageVersionsQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetAllStartPageVersionsQuery = { __typename?: 'Query', StartPage: { __typename?: 'StartPageOutput', items: Array<{ __typename?: 'StartPage', title: string | null, shortDescription: string | null, keywords: string | null, _metadata: { __typename?: 'ContentMetadata', version: string | null } | { __typename?: 'InstanceMetadata', version: string | null } | { __typename?: 'ItemMetadata', version: string | null } | { __typename?: 'MediaMetadata', version: string | null } | null, blocks: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetAllVisualBuilderVesrionsBySlugQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllVisualBuilderVesrionsBySlugQuery = { __typename?: 'Query', SEOExperience: { __typename?: 'SEOExperienceOutput', items: Array<{ __typename?: 'SEOExperience', title: string | null, shortDescription: string | null, keywords: string | null, _metadata: { __typename?: 'ContentMetadata', version: string | null } | { __typename?: 'InstanceMetadata', version: string | null } | { __typename?: 'ItemMetadata', version: string | null } | { __typename?: 'MediaMetadata', version: string | null } | null, composition: { __typename?: 'CompositionStructureNode', nodes: Array<{ __typename?: 'CompositionComponentNode', nodeType: string | null, key: string | null, component: { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'FooterColumn' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', nodeType: string | null, key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, nodeType: string | null, rows: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, columns: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, elements: Array<{ __typename?: 'CompositionComponentNode', key: string | null, component: { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'FooterColumn' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null> | null } | null> | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null } | null> | null } | null };

export type GetComponentByKeyQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  key: InputMaybe<Scalars['String']['input']>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type GetComponentByKeyQuery = { __typename?: 'Query', _Component: { __typename?: '_ComponentOutput', items: Array<{ __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'FooterColumn' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: '_Component' } | { __typename: '_Section' } | null> | null } | null };

export type GetContentByKeyAndVersionQueryVariables = Exact<{
  key: InputMaybe<Scalars['String']['input']>;
  ver: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContentByKeyAndVersionQuery = { __typename?: 'Query', _Content: { __typename?: '_ContentOutput', items: Array<{ __typename: 'AnotherGreatPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ArticleListElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'AvailabilityBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlankExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlankSection', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlogPostPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlogSectionExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ButtonBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'CMSPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'CTAElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'CarouselBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ContactBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ContentRecsElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ContinueReadingComponent', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'Footer', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'FooterColumn', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'GenericMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'GenericMedia123', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'Header', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'HeadingElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'HelloWorld', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'HeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'HomePage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ImageElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ImageMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'LandingPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'LayoutSettingsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'LogoItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'LogosBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'MegaMenuGroupBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'MenuNavigationBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'NavItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'OdpEmbedBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'PageSeoSettings', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ParagraphElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'PortfolioGridBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'PortfolioItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ProfileBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'QuoteBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'RichTextElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SEOExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ServiceItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ServicesBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SocialLink', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SomeGreatNewPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'StartPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'StoryBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SysContentFolder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestBlockPropertyGroup', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TextBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'VideoElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'VideoMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Component', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Content', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Experience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Image', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Media', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Page', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Section', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | null> | null } | null };

export type GetPreviewPageByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPreviewPageByUrlQuery = { __typename?: 'Query', CMSPage: { __typename?: 'CMSPageOutput', items: Array<{ __typename?: 'CMSPage', blocks: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetPreviewStartPageQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPreviewStartPageQuery = { __typename?: 'Query', StartPage: { __typename?: 'StartPageOutput', items: Array<{ __typename?: 'StartPage', blocks: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type VisualBuilderQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  key: InputMaybe<Scalars['String']['input']>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type VisualBuilderQuery = { __typename?: 'Query', SEOExperience: { __typename?: 'SEOExperienceOutput', items: Array<{ __typename?: 'SEOExperience', composition: { __typename?: 'CompositionStructureNode', nodes: Array<{ __typename?: 'CompositionComponentNode', nodeType: string | null, key: string | null, component: { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'FooterColumn' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', nodeType: string | null, key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, nodeType: string | null, rows: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, columns: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, elements: Array<{ __typename?: 'CompositionComponentNode', key: string | null, component: { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null } | { __typename: 'ContinueReadingComponent' } | { __typename: 'FooterColumn' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock', ContentId: string | null } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null } | { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null> | null } | null> | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null, _metadata: { __typename?: 'ContentMetadata', key: string | null, version: string | null } | { __typename?: 'InstanceMetadata', key: string | null, version: string | null } | { __typename?: 'ItemMetadata', key: string | null, version: string | null } | { __typename?: 'MediaMetadata', key: string | null, version: string | null } | null } | null> | null } | null };

export type HeroBlockFragmentFragment = { __typename?: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null };

export type ContactBlockFragmentFragment = { __typename?: 'ContactBlock', title: string | null, description: string | null };

export type LogosBlockFragmentFragment = { __typename?: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

export type PortfolioGridBlockFragmentFragment = { __typename?: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

export type ServicesBlockFragmentFragment = { __typename?: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

export type TestimonialsBlockFragmentFragment = { __typename?: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

export type ProfileBlockFragmentFragment = { __typename?: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null };

export type AvailabilityBlockFragmentFragment = { __typename?: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null };

export type StoryBlockFragmentFragment = { __typename?: 'StoryBlock', story: string | null, highlights: Array<string | null> | null };

export type HeadingElementFragmentFragment = { __typename?: 'HeadingElement', headingText: string | null };

export type ParagraphElementFragmentFragment = { __typename?: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null };

export type RichTextElementFragmentFragment = { __typename?: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null };

export type TextBlockFragmentFragment = { __typename?: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null };

export type QuoteBlockFragmentFragment = { __typename?: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null };

export type ButtonBlockFragmentFragment = { __typename?: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null };

export type CtaElementFragmentFragment = { __typename?: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null };

export type VideoElementFragmentFragment = { __typename?: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null };

export type ImageElementFragmentFragment = { __typename?: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null };

export type CarouselBlockFragmentFragment = { __typename?: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

export type ArticleListElementFragmentFragment = { __typename?: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null };

export type ContentRecsElementFragmentFragment = { __typename?: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null };

export type TestimonialElementFragmentFragment = { __typename?: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null };

export type OdpEmbedBlockFragmentFragment = { __typename?: 'OdpEmbedBlock', ContentId: string | null };

export type MenuNavigationBlockFragmentFragment = { __typename?: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null };

export type MegaMenuGroupBlockFragmentFragment = { __typename?: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null };

type ItemsInContentArea_AnotherGreatPage_Fragment = { __typename: 'AnotherGreatPage' };

type ItemsInContentArea_ArticleListElement_Fragment = { __typename: 'ArticleListElement', articleListCount: number | null, topics: Array<string | null> | null };

type ItemsInContentArea_AvailabilityBlock_Fragment = { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null };

type ItemsInContentArea_BlankExperience_Fragment = { __typename: 'BlankExperience' };

type ItemsInContentArea_BlankSection_Fragment = { __typename: 'BlankSection' };

type ItemsInContentArea_BlogPostPage_Fragment = { __typename: 'BlogPostPage' };

type ItemsInContentArea_BlogSectionExperience_Fragment = { __typename: 'BlogSectionExperience' };

type ItemsInContentArea_ButtonBlock_Fragment = { __typename: 'ButtonBlock', ButtonText: string | null, ButtonClass: string | null, ButtonType: string | null, ButtonVariant: string | null, ButtonUrl: { __typename?: 'ContentUrl', default: string | null } | null };

type ItemsInContentArea_CmsPage_Fragment = { __typename: 'CMSPage' };

type ItemsInContentArea_CtaElement_Fragment = { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null };

type ItemsInContentArea_CarouselBlock_Fragment = { __typename: 'CarouselBlock', CarouselItemsContentArea: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement', Text: string | null, Link: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement', headingText: string | null } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_ContactBlock_Fragment = { __typename: 'ContactBlock', title: string | null, description: string | null };

type ItemsInContentArea_ContentRecsElement_Fragment = { __typename: 'ContentRecsElement', ElementDeliveryApiKey: string | null, ElementRecommendationCount: number | null };

type ItemsInContentArea_ContinueReadingComponent_Fragment = { __typename: 'ContinueReadingComponent' };

type ItemsInContentArea_Footer_Fragment = { __typename: 'Footer' };

type ItemsInContentArea_FooterColumn_Fragment = { __typename: 'FooterColumn' };

type ItemsInContentArea_GenericMedia_Fragment = { __typename: 'GenericMedia' };

type ItemsInContentArea_GenericMedia123_Fragment = { __typename: 'GenericMedia123' };

type ItemsInContentArea_Header_Fragment = { __typename: 'Header' };

type ItemsInContentArea_HeadingElement_Fragment = { __typename: 'HeadingElement', headingText: string | null };

type ItemsInContentArea_HelloWorld_Fragment = { __typename: 'HelloWorld' };

type ItemsInContentArea_HeroBlock_Fragment = { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null };

type ItemsInContentArea_HomePage_Fragment = { __typename: 'HomePage' };

type ItemsInContentArea_ImageElement_Fragment = { __typename: 'ImageElement', altText: string | null, imageLink: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null };

type ItemsInContentArea_ImageMedia_Fragment = { __typename: 'ImageMedia' };

type ItemsInContentArea_LandingPage_Fragment = { __typename: 'LandingPage' };

type ItemsInContentArea_LayoutSettingsBlock_Fragment = { __typename: 'LayoutSettingsBlock' };

type ItemsInContentArea_LogoItemBlock_Fragment = { __typename: 'LogoItemBlock' };

type ItemsInContentArea_LogosBlock_Fragment = { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_MegaMenuGroupBlock_Fragment = { __typename: 'MegaMenuGroupBlock', MenuMenuHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, MegaMenuUrl: { __typename?: 'ContentUrl', default: string | null } | null };

type ItemsInContentArea_MenuNavigationBlock_Fragment = { __typename: 'MenuNavigationBlock', MenuNavigationHeading: string | null, _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null, NavigationLinks: Array<{ __typename?: 'Link', title: string | null, text: string | null, target: string | null, url: { __typename?: 'ContentUrl', default: string | null } | null } | null> | null };

type ItemsInContentArea_NavItem_Fragment = { __typename: 'NavItem' };

type ItemsInContentArea_OdpEmbedBlock_Fragment = { __typename: 'OdpEmbedBlock', ContentId: string | null };

type ItemsInContentArea_PageSeoSettings_Fragment = { __typename: 'PageSeoSettings' };

type ItemsInContentArea_ParagraphElement_Fragment = { __typename: 'ParagraphElement', text: { __typename?: 'SearchableRichText', json: any | null } | null };

type ItemsInContentArea_PortfolioGridBlock_Fragment = { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_PortfolioItemBlock_Fragment = { __typename: 'PortfolioItemBlock' };

type ItemsInContentArea_ProfileBlock_Fragment = { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null };

type ItemsInContentArea_QuoteBlock_Fragment = { __typename: 'QuoteBlock', QuoteText: string | null, QuoteColor: string | null, QuoteActive: boolean | null, QuoteProfileName: string | null, QuoteProfileLocation: string | null, QuoteProfilePicture: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null };

type ItemsInContentArea_RichTextElement_Fragment = { __typename: 'RichTextElement', text: { __typename?: 'SearchableRichText', json: any | null, html: string | null } | null };

type ItemsInContentArea_SeoExperience_Fragment = { __typename: 'SEOExperience' };

type ItemsInContentArea_ServiceItem_Fragment = { __typename: 'ServiceItem' };

type ItemsInContentArea_ServicesBlock_Fragment = { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_SocialLink_Fragment = { __typename: 'SocialLink' };

type ItemsInContentArea_SomeGreatNewPage_Fragment = { __typename: 'SomeGreatNewPage' };

type ItemsInContentArea_StartPage_Fragment = { __typename: 'StartPage' };

type ItemsInContentArea_StoryBlock_Fragment = { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null };

type ItemsInContentArea_SysContentFolder_Fragment = { __typename: 'SysContentFolder' };

type ItemsInContentArea_TestBlockPropertyGroup_Fragment = { __typename: 'TestBlockPropertyGroup' };

type ItemsInContentArea_TestimonialElement_Fragment = { __typename: 'TestimonialElement', customerName: string | null, customerLocation: string | null, referenceTitle: string | null, customerImage: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, referenceText: { __typename?: 'RichText', json: any | null, html: string | null } | null };

type ItemsInContentArea_TestimonialItem_Fragment = { __typename: 'TestimonialItem' };

type ItemsInContentArea_TestimonialItemBlock_Fragment = { __typename: 'TestimonialItemBlock' };

type ItemsInContentArea_TestimonialsBlock_Fragment = { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnotherGreatPage' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPostPage' } | { __typename: 'BlogSectionExperience' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CarouselBlock' } | { __typename: 'ContactBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'ContinueReadingComponent' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HelloWorld' } | { __typename: 'HeroBlock' } | { __typename: 'HomePage' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutSettingsBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'RichTextElement' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'SomeGreatNewPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestBlockPropertyGroup' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_TextBlock_Fragment = { __typename: 'TextBlock', TextBlockOverline: string | null, TextBlockHeading: string | null, TextBlockHeadingSize: string | null, TextCenter: boolean | null, TextBlockWidth: string | null, TextClassName: string | null, TextBlockDescription: { __typename?: 'RichText', json: any | null, html: string | null } | null };

type ItemsInContentArea_VideoElement_Fragment = { __typename: 'VideoElement', title: string | null, video: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, placeholder: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null };

type ItemsInContentArea_VideoMedia_Fragment = { __typename: 'VideoMedia' };

type ItemsInContentArea__Component_Fragment = { __typename: '_Component' };

type ItemsInContentArea__Content_Fragment = { __typename: '_Content' };

type ItemsInContentArea__Experience_Fragment = { __typename: '_Experience' };

type ItemsInContentArea__Folder_Fragment = { __typename: '_Folder' };

type ItemsInContentArea__Image_Fragment = { __typename: '_Image' };

type ItemsInContentArea__Media_Fragment = { __typename: '_Media' };

type ItemsInContentArea__Page_Fragment = { __typename: '_Page' };

type ItemsInContentArea__Section_Fragment = { __typename: '_Section' };

type ItemsInContentArea__Video_Fragment = { __typename: '_Video' };

export type ItemsInContentAreaFragment = ItemsInContentArea_AnotherGreatPage_Fragment | ItemsInContentArea_ArticleListElement_Fragment | ItemsInContentArea_AvailabilityBlock_Fragment | ItemsInContentArea_BlankExperience_Fragment | ItemsInContentArea_BlankSection_Fragment | ItemsInContentArea_BlogPostPage_Fragment | ItemsInContentArea_BlogSectionExperience_Fragment | ItemsInContentArea_ButtonBlock_Fragment | ItemsInContentArea_CmsPage_Fragment | ItemsInContentArea_CtaElement_Fragment | ItemsInContentArea_CarouselBlock_Fragment | ItemsInContentArea_ContactBlock_Fragment | ItemsInContentArea_ContentRecsElement_Fragment | ItemsInContentArea_ContinueReadingComponent_Fragment | ItemsInContentArea_Footer_Fragment | ItemsInContentArea_FooterColumn_Fragment | ItemsInContentArea_GenericMedia_Fragment | ItemsInContentArea_GenericMedia123_Fragment | ItemsInContentArea_Header_Fragment | ItemsInContentArea_HeadingElement_Fragment | ItemsInContentArea_HelloWorld_Fragment | ItemsInContentArea_HeroBlock_Fragment | ItemsInContentArea_HomePage_Fragment | ItemsInContentArea_ImageElement_Fragment | ItemsInContentArea_ImageMedia_Fragment | ItemsInContentArea_LandingPage_Fragment | ItemsInContentArea_LayoutSettingsBlock_Fragment | ItemsInContentArea_LogoItemBlock_Fragment | ItemsInContentArea_LogosBlock_Fragment | ItemsInContentArea_MegaMenuGroupBlock_Fragment | ItemsInContentArea_MenuNavigationBlock_Fragment | ItemsInContentArea_NavItem_Fragment | ItemsInContentArea_OdpEmbedBlock_Fragment | ItemsInContentArea_PageSeoSettings_Fragment | ItemsInContentArea_ParagraphElement_Fragment | ItemsInContentArea_PortfolioGridBlock_Fragment | ItemsInContentArea_PortfolioItemBlock_Fragment | ItemsInContentArea_ProfileBlock_Fragment | ItemsInContentArea_QuoteBlock_Fragment | ItemsInContentArea_RichTextElement_Fragment | ItemsInContentArea_SeoExperience_Fragment | ItemsInContentArea_ServiceItem_Fragment | ItemsInContentArea_ServicesBlock_Fragment | ItemsInContentArea_SocialLink_Fragment | ItemsInContentArea_SomeGreatNewPage_Fragment | ItemsInContentArea_StartPage_Fragment | ItemsInContentArea_StoryBlock_Fragment | ItemsInContentArea_SysContentFolder_Fragment | ItemsInContentArea_TestBlockPropertyGroup_Fragment | ItemsInContentArea_TestimonialElement_Fragment | ItemsInContentArea_TestimonialItem_Fragment | ItemsInContentArea_TestimonialItemBlock_Fragment | ItemsInContentArea_TestimonialsBlock_Fragment | ItemsInContentArea_TextBlock_Fragment | ItemsInContentArea_VideoElement_Fragment | ItemsInContentArea_VideoMedia_Fragment | ItemsInContentArea__Component_Fragment | ItemsInContentArea__Content_Fragment | ItemsInContentArea__Experience_Fragment | ItemsInContentArea__Folder_Fragment | ItemsInContentArea__Image_Fragment | ItemsInContentArea__Media_Fragment | ItemsInContentArea__Page_Fragment | ItemsInContentArea__Section_Fragment | ItemsInContentArea__Video_Fragment;

export const HeroBlockFragmentFragmentDoc = gql`
    fragment HeroBlockFragment on HeroBlock {
  title
  subtitle
  decorationColorsPrimary
  decorationColorsSecondary
  showDecoration
}
    `;
export const ContactBlockFragmentFragmentDoc = gql`
    fragment ContactBlockFragment on ContactBlock {
  title
  description
}
    `;
export const LogosBlockFragmentFragmentDoc = gql`
    fragment LogosBlockFragment on LogosBlock {
  logos {
    __typename
    ... on LogoItemBlock {
      src
      alt
    }
  }
}
    `;
export const PortfolioGridBlockFragmentFragmentDoc = gql`
    fragment PortfolioGridBlockFragment on PortfolioGridBlock {
  title
  items {
    __typename
    ... on PortfolioItemBlock {
      title
      description
      imageUrl
      link
    }
  }
}
    `;
export const ServicesBlockFragmentFragmentDoc = gql`
    fragment ServicesBlockFragment on ServicesBlock {
  services {
    __typename
    ... on ServiceItem {
      title
      description
      icon
    }
  }
}
    `;
export const TestimonialsBlockFragmentFragmentDoc = gql`
    fragment TestimonialsBlockFragment on TestimonialsBlock {
  title
  testimonials {
    __typename
    ... on TestimonialItemBlock {
      fullName
      position
      content
      avatarSrc
    }
  }
}
    `;
export const ProfileBlockFragmentFragmentDoc = gql`
    fragment ProfileBlockFragment on ProfileBlock {
  imageSrc
  bio
  name
  title
}
    `;
export const AvailabilityBlockFragmentFragmentDoc = gql`
    fragment AvailabilityBlockFragment on AvailabilityBlock {
  availability
  projectTypes
}
    `;
export const StoryBlockFragmentFragmentDoc = gql`
    fragment StoryBlockFragment on StoryBlock {
  story
  highlights
}
    `;
export const HeadingElementFragmentFragmentDoc = gql`
    fragment HeadingElementFragment on HeadingElement {
  headingText
}
    `;
export const ParagraphElementFragmentFragmentDoc = gql`
    fragment ParagraphElementFragment on ParagraphElement {
  text {
    json
  }
}
    `;
export const RichTextElementFragmentFragmentDoc = gql`
    fragment RichTextElementFragment on RichTextElement {
  text {
    json
    html
  }
}
    `;
export const TextBlockFragmentFragmentDoc = gql`
    fragment TextBlockFragment on TextBlock {
  TextBlockOverline
  TextBlockHeading
  TextBlockHeadingSize
  TextBlockDescription {
    json
    html
  }
  TextCenter
  TextBlockWidth
  TextClassName
}
    `;
export const QuoteBlockFragmentFragmentDoc = gql`
    fragment QuoteBlockFragment on QuoteBlock {
  QuoteText
  QuoteColor
  QuoteActive
  QuoteProfileName
  QuoteProfilePicture {
    url {
      default
    }
  }
  QuoteProfileLocation
}
    `;
export const ButtonBlockFragmentFragmentDoc = gql`
    fragment ButtonBlockFragment on ButtonBlock {
  ButtonText
  ButtonUrl {
    default
  }
  ButtonClass
  ButtonType
  ButtonVariant
}
    `;
export const CtaElementFragmentFragmentDoc = gql`
    fragment CTAElementFragment on CTAElement {
  Text
  Link {
    default
  }
}
    `;
export const VideoElementFragmentFragmentDoc = gql`
    fragment VideoElementFragment on VideoElement {
  title
  video {
    url {
      default
    }
  }
  placeholder {
    url {
      default
    }
  }
}
    `;
export const ImageElementFragmentFragmentDoc = gql`
    fragment ImageElementFragment on ImageElement {
  altText
  imageLink {
    url {
      default
    }
  }
}
    `;
export const CarouselBlockFragmentFragmentDoc = gql`
    fragment CarouselBlockFragment on CarouselBlock {
  CarouselItemsContentArea {
    __typename
    ...ImageElementFragment
    ...HeadingElementFragment
    ...ParagraphElementFragment
    ...CTAElementFragment
  }
}
    ${ImageElementFragmentFragmentDoc}
${HeadingElementFragmentFragmentDoc}
${ParagraphElementFragmentFragmentDoc}
${CtaElementFragmentFragmentDoc}`;
export const ArticleListElementFragmentFragmentDoc = gql`
    fragment ArticleListElementFragment on ArticleListElement {
  articleListCount
  topics
}
    `;
export const ContentRecsElementFragmentFragmentDoc = gql`
    fragment ContentRecsElementFragment on ContentRecsElement {
  ElementDeliveryApiKey
  ElementRecommendationCount
}
    `;
export const TestimonialElementFragmentFragmentDoc = gql`
    fragment TestimonialElementFragment on TestimonialElement {
  customerName
  customerLocation
  customerImage {
    url {
      default
    }
  }
  referenceTitle
  referenceText {
    json
    html
  }
}
    `;
export const OdpEmbedBlockFragmentFragmentDoc = gql`
    fragment OdpEmbedBlockFragment on OdpEmbedBlock {
  ContentId
}
    `;
export const MenuNavigationBlockFragmentFragmentDoc = gql`
    fragment MenuNavigationBlockFragment on MenuNavigationBlock {
  _metadata {
    displayName
  }
  MenuNavigationHeading
  NavigationLinks {
    title
    text
    target
    url {
      default
    }
  }
}
    `;
export const MegaMenuGroupBlockFragmentFragmentDoc = gql`
    fragment MegaMenuGroupBlockFragment on MegaMenuGroupBlock {
  _metadata {
    displayName
  }
  MenuMenuHeading
  MegaMenuUrl {
    default
  }
}
    `;
export const ItemsInContentAreaFragmentDoc = gql`
    fragment ItemsInContentArea on _IContent {
  __typename
  ...HeroBlockFragment
  ...ContactBlockFragment
  ...LogosBlockFragment
  ...PortfolioGridBlockFragment
  ...ServicesBlockFragment
  ...TestimonialsBlockFragment
  ...ProfileBlockFragment
  ...AvailabilityBlockFragment
  ...StoryBlockFragment
  ...HeadingElementFragment
  ...ParagraphElementFragment
  ...RichTextElementFragment
  ...TextBlockFragment
  ...QuoteBlockFragment
  ...ButtonBlockFragment
  ...CTAElementFragment
  ...VideoElementFragment
  ...ImageElementFragment
  ...CarouselBlockFragment
  ...ArticleListElementFragment
  ...ContentRecsElementFragment
  ...TestimonialElementFragment
  ...OdpEmbedBlockFragment
  ...MenuNavigationBlockFragment
  ...MegaMenuGroupBlockFragment
}
    ${HeroBlockFragmentFragmentDoc}
${ContactBlockFragmentFragmentDoc}
${LogosBlockFragmentFragmentDoc}
${PortfolioGridBlockFragmentFragmentDoc}
${ServicesBlockFragmentFragmentDoc}
${TestimonialsBlockFragmentFragmentDoc}
${ProfileBlockFragmentFragmentDoc}
${AvailabilityBlockFragmentFragmentDoc}
${StoryBlockFragmentFragmentDoc}
${HeadingElementFragmentFragmentDoc}
${ParagraphElementFragmentFragmentDoc}
${RichTextElementFragmentFragmentDoc}
${TextBlockFragmentFragmentDoc}
${QuoteBlockFragmentFragmentDoc}
${ButtonBlockFragmentFragmentDoc}
${CtaElementFragmentFragmentDoc}
${VideoElementFragmentFragmentDoc}
${ImageElementFragmentFragmentDoc}
${CarouselBlockFragmentFragmentDoc}
${ArticleListElementFragmentFragmentDoc}
${ContentRecsElementFragmentFragmentDoc}
${TestimonialElementFragmentFragmentDoc}
${OdpEmbedBlockFragmentFragmentDoc}
${MenuNavigationBlockFragmentFragmentDoc}
${MegaMenuGroupBlockFragmentFragmentDoc}`;
export const AllPagesDocument = gql`
    query AllPages($pageType: [String]) {
  _Content(where: {_metadata: {types: {in: $pageType}}}) {
    items {
      _metadata {
        displayName
        url {
          base
          internal
          hierarchical
          default
          type
        }
        types
        status
      }
    }
  }
}
    `;
export const GetContentByGuidDocument = gql`
    query GetContentByGuid($guid: String) {
  _Content(where: {_metadata: {key: {eq: $guid}}}) {
    items {
      _metadata {
        displayName
        version
        key
        url {
          base
          internal
          hierarchical
          default
          type
        }
      }
    }
  }
}
    `;
export const GetFooterDocument = gql`
    query getFooter($locales: [Locales]) {
  Footer(locale: $locales) {
    items {
      copyrightText
      socialLinks {
        __typename
        ... on SocialLink {
          platform
          href
        }
      }
      columns {
        __typename
        ... on FooterColumn {
          title
          links {
            __typename
            ... on NavItem {
              label
              href
            }
          }
        }
      }
    }
  }
}
    `;
export const GetHeaderDocument = gql`
    query getHeader($locale: [Locales]) {
  Header(locale: $locale) {
    items {
      logo
      ctaText
      ctaHref
      navItems {
        __typename
        ... on NavItem {
          label
          href
        }
      }
    }
  }
}
    `;
export const GetPageByUrlDocument = gql`
    query getPageByURL($locales: [Locales], $slug: String) {
  CMSPage(locale: $locales, where: {_metadata: {url: {default: {eq: $slug}}}}) {
    items {
      title
      shortDescription
      keywords
      _modified
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetStartPageDocument = gql`
    query GetStartPage($locales: [Locales]) {
  StartPage(locale: $locales) {
    items {
      title
      shortDescription
      keywords
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetVisualBuilderBySlugDocument = gql`
    query GetVisualBuilderBySlug($locales: [Locales], $slug: String) {
  SEOExperience(
    locale: $locales
    where: {_metadata: {url: {default: {eq: $slug}}}}
  ) {
    items {
      title
      shortDescription
      keywords
      composition {
        nodes {
          nodeType
          key
          displaySettings {
            value
            key
          }
          ... on CompositionComponentNode {
            component {
              ...ItemsInContentArea
            }
          }
          ... on CompositionStructureNode {
            key
            rows: nodes {
              ... on CompositionStructureNode {
                key
                columns: nodes {
                  ... on CompositionStructureNode {
                    key
                    elements: nodes {
                      key
                      displaySettings {
                        value
                        key
                      }
                      ... on CompositionComponentNode {
                        component {
                          ...ItemsInContentArea
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetAllPagesVersionByUrlDocument = gql`
    query GetAllPagesVersionByURL($locales: [Locales], $slug: String) {
  CMSPage(locale: $locales, where: {_metadata: {url: {default: {eq: $slug}}}}) {
    items {
      _metadata {
        version
      }
      title
      shortDescription
      keywords
      _modified
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetAllStartPageVersionsDocument = gql`
    query GetAllStartPageVersions($locales: [Locales]) {
  StartPage(locale: $locales) {
    items {
      _metadata {
        version
      }
      title
      shortDescription
      keywords
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetAllVisualBuilderVesrionsBySlugDocument = gql`
    query GetAllVisualBuilderVesrionsBySlug($locales: [Locales], $slug: String) {
  SEOExperience(
    locale: $locales
    where: {_metadata: {url: {default: {eq: $slug}}}}
  ) {
    items {
      _metadata {
        version
      }
      title
      shortDescription
      keywords
      composition {
        nodes {
          nodeType
          key
          displaySettings {
            value
            key
          }
          ... on CompositionComponentNode {
            component {
              ...ItemsInContentArea
            }
          }
          ... on CompositionStructureNode {
            key
            rows: nodes {
              ... on CompositionStructureNode {
                key
                columns: nodes {
                  ... on CompositionStructureNode {
                    key
                    elements: nodes {
                      key
                      displaySettings {
                        value
                        key
                      }
                      ... on CompositionComponentNode {
                        component {
                          ...ItemsInContentArea
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetComponentByKeyDocument = gql`
    query GetComponentByKey($locales: [Locales], $key: String, $version: String) {
  _Component(
    locale: $locales
    where: {_metadata: {key: {eq: $key}}, _or: {_metadata: {version: {eq: $version}}}}
  ) {
    items {
      ...ItemsInContentArea
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetContentByKeyAndVersionDocument = gql`
    query GetContentByKeyAndVersion($key: String, $ver: String) {
  _Content(where: {_metadata: {key: {eq: $key}, version: {eq: $ver}}}) {
    items {
      __typename
      _metadata {
        displayName
        version
        key
        url {
          base
          internal
          hierarchical
          default
          type
        }
      }
    }
  }
}
    `;
export const GetPreviewPageByUrlDocument = gql`
    query getPreviewPageByURL($locales: [Locales], $slug: String, $version: String) {
  CMSPage(
    locale: $locales
    where: {_metadata: {version: {eq: $version}}, _and: {_metadata: {url: {default: {eq: $slug}}}}}
  ) {
    items {
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetPreviewStartPageDocument = gql`
    query GetPreviewStartPage($locales: [Locales], $version: String) {
  StartPage(locale: $locales, where: {_metadata: {version: {eq: $version}}}) {
    items {
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const VisualBuilderDocument = gql`
    query VisualBuilder($locales: [Locales], $key: String, $version: String) {
  SEOExperience(
    locale: $locales
    where: {_metadata: {key: {eq: $key}}, _or: {_metadata: {version: {eq: $version}}}}
  ) {
    items {
      composition {
        nodes {
          nodeType
          key
          displaySettings {
            value
            key
          }
          ... on CompositionComponentNode {
            component {
              ...ItemsInContentArea
            }
          }
          ... on CompositionStructureNode {
            key
            rows: nodes {
              ... on CompositionStructureNode {
                key
                columns: nodes {
                  ... on CompositionStructureNode {
                    key
                    elements: nodes {
                      key
                      displaySettings {
                        value
                        key
                      }
                      ... on CompositionComponentNode {
                        component {
                          ...ItemsInContentArea
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      _metadata {
        key
        version
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<ExecutionResult<R, E>> | AsyncIterable<ExecutionResult<R, E>>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    AllPages(variables?: AllPagesQueryVariables, options?: C): Promise<ExecutionResult<AllPagesQuery, E>> {
      return requester<AllPagesQuery, AllPagesQueryVariables>(AllPagesDocument, variables, options) as Promise<ExecutionResult<AllPagesQuery, E>>;
    },
    GetContentByGuid(variables?: GetContentByGuidQueryVariables, options?: C): Promise<ExecutionResult<GetContentByGuidQuery, E>> {
      return requester<GetContentByGuidQuery, GetContentByGuidQueryVariables>(GetContentByGuidDocument, variables, options) as Promise<ExecutionResult<GetContentByGuidQuery, E>>;
    },
    getFooter(variables?: GetFooterQueryVariables, options?: C): Promise<ExecutionResult<GetFooterQuery, E>> {
      return requester<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, variables, options) as Promise<ExecutionResult<GetFooterQuery, E>>;
    },
    getHeader(variables?: GetHeaderQueryVariables, options?: C): Promise<ExecutionResult<GetHeaderQuery, E>> {
      return requester<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, variables, options) as Promise<ExecutionResult<GetHeaderQuery, E>>;
    },
    getPageByURL(variables?: GetPageByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetPageByUrlQuery, E>> {
      return requester<GetPageByUrlQuery, GetPageByUrlQueryVariables>(GetPageByUrlDocument, variables, options) as Promise<ExecutionResult<GetPageByUrlQuery, E>>;
    },
    GetStartPage(variables?: GetStartPageQueryVariables, options?: C): Promise<ExecutionResult<GetStartPageQuery, E>> {
      return requester<GetStartPageQuery, GetStartPageQueryVariables>(GetStartPageDocument, variables, options) as Promise<ExecutionResult<GetStartPageQuery, E>>;
    },
    GetVisualBuilderBySlug(variables?: GetVisualBuilderBySlugQueryVariables, options?: C): Promise<ExecutionResult<GetVisualBuilderBySlugQuery, E>> {
      return requester<GetVisualBuilderBySlugQuery, GetVisualBuilderBySlugQueryVariables>(GetVisualBuilderBySlugDocument, variables, options) as Promise<ExecutionResult<GetVisualBuilderBySlugQuery, E>>;
    },
    GetAllPagesVersionByURL(variables?: GetAllPagesVersionByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetAllPagesVersionByUrlQuery, E>> {
      return requester<GetAllPagesVersionByUrlQuery, GetAllPagesVersionByUrlQueryVariables>(GetAllPagesVersionByUrlDocument, variables, options) as Promise<ExecutionResult<GetAllPagesVersionByUrlQuery, E>>;
    },
    GetAllStartPageVersions(variables?: GetAllStartPageVersionsQueryVariables, options?: C): Promise<ExecutionResult<GetAllStartPageVersionsQuery, E>> {
      return requester<GetAllStartPageVersionsQuery, GetAllStartPageVersionsQueryVariables>(GetAllStartPageVersionsDocument, variables, options) as Promise<ExecutionResult<GetAllStartPageVersionsQuery, E>>;
    },
    GetAllVisualBuilderVesrionsBySlug(variables?: GetAllVisualBuilderVesrionsBySlugQueryVariables, options?: C): Promise<ExecutionResult<GetAllVisualBuilderVesrionsBySlugQuery, E>> {
      return requester<GetAllVisualBuilderVesrionsBySlugQuery, GetAllVisualBuilderVesrionsBySlugQueryVariables>(GetAllVisualBuilderVesrionsBySlugDocument, variables, options) as Promise<ExecutionResult<GetAllVisualBuilderVesrionsBySlugQuery, E>>;
    },
    GetComponentByKey(variables?: GetComponentByKeyQueryVariables, options?: C): Promise<ExecutionResult<GetComponentByKeyQuery, E>> {
      return requester<GetComponentByKeyQuery, GetComponentByKeyQueryVariables>(GetComponentByKeyDocument, variables, options) as Promise<ExecutionResult<GetComponentByKeyQuery, E>>;
    },
    GetContentByKeyAndVersion(variables?: GetContentByKeyAndVersionQueryVariables, options?: C): Promise<ExecutionResult<GetContentByKeyAndVersionQuery, E>> {
      return requester<GetContentByKeyAndVersionQuery, GetContentByKeyAndVersionQueryVariables>(GetContentByKeyAndVersionDocument, variables, options) as Promise<ExecutionResult<GetContentByKeyAndVersionQuery, E>>;
    },
    getPreviewPageByURL(variables?: GetPreviewPageByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetPreviewPageByUrlQuery, E>> {
      return requester<GetPreviewPageByUrlQuery, GetPreviewPageByUrlQueryVariables>(GetPreviewPageByUrlDocument, variables, options) as Promise<ExecutionResult<GetPreviewPageByUrlQuery, E>>;
    },
    GetPreviewStartPage(variables?: GetPreviewStartPageQueryVariables, options?: C): Promise<ExecutionResult<GetPreviewStartPageQuery, E>> {
      return requester<GetPreviewStartPageQuery, GetPreviewStartPageQueryVariables>(GetPreviewStartPageDocument, variables, options) as Promise<ExecutionResult<GetPreviewStartPageQuery, E>>;
    },
    VisualBuilder(variables?: VisualBuilderQueryVariables, options?: C): Promise<ExecutionResult<VisualBuilderQuery, E>> {
      return requester<VisualBuilderQuery, VisualBuilderQueryVariables>(VisualBuilderDocument, variables, options) as Promise<ExecutionResult<VisualBuilderQuery, E>>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;