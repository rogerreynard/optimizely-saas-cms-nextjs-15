'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const DraftActions = () => {
  const router = useRouter()

  const handleDisableDraft = () => {
    fetch('/api/draft/disable')
  }

  return (
    <div className="fixed top-2 right-4 z-50 flex gap-2">
      <Button size="sm" onClick={() => router.refresh()}>
        Refresh Page
      </Button>
      <Button size="sm" onClick={() => handleDisableDraft()}>
        Disable Draft
      </Button>
    </div>
  )
}

export default DraftActions
