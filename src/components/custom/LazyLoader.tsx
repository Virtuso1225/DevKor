import React, { Suspense } from 'react'
import Fallback from '@/components/custom/FallBack'

const LazyLoader = (Component: React.ComponentType) => (props: JSX.IntrinsicAttributes) => {
  return (
    <Suspense fallback={<Fallback />}>
      <Component {...props} />
    </Suspense>
  )
}

export default LazyLoader
