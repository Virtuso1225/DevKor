import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'

const LazyLoader = (Component: React.ComponentType) => (props: JSX.IntrinsicAttributes) => {
  return (
    <Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />}>
      <Component {...props} />
    </Suspense>
  )
}

export default LazyLoader
