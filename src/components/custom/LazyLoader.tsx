import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'

const LazyLoader = (Component: React.ComponentType) => (props: JSX.IntrinsicAttributes) => {
  return (
    <Suspense fallback={<Skeleton className="flex flex-1 rounded-full" />}>
      <Component {...props} />
    </Suspense>
  )
}

export default LazyLoader
