import FalllBack from '@/components/custom/FalllBack'
import React, { Suspense } from 'react'

const LazyLoader = (Component: React.ComponentType) => (props: JSX.IntrinsicAttributes) => {
  return (
    <Suspense fallback={<FalllBack />}>
      <Component {...props} />
    </Suspense>
  )
}

export default LazyLoader
