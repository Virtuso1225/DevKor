// import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
// import { importAll } from '@/data/dummyImages'
import { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'
const CarouselCard = lazy(() => import('@/components/custom/CarouselCard'))

const DummyPage = () => {
  return (
    <div>
      <Helmet>
        <title>DummyPage</title>
      </Helmet>
      <div className="flex flex-col p-1">
        <Carousel className="w-full max-w-lg mt-10">
          <Suspense
            fallback={
              <div className="flex justify-center">
                <Skeleton className="w-[500px] h-[600px] rounded-md" />
              </div>
            }
          >
            <CarouselCard />
            <CarouselPrevious />
            <CarouselNext />
          </Suspense>
          {/* <CarouselContent>
            {imagesSrc.map((src, index) => (
              <CarouselItem key={index}>
                <Suspense
                  fallback={
                    <div className="flex justify-center">
                      <Skeleton className="w-[500px] h-[600px] rounded-md" />
                    </div>
                  }
                >
                  <CarouselCard src={src} />
                </Suspense>
              </CarouselItem>
            ))}
          </CarouselContent> */}
        </Carousel>
      </div>
    </div>
  )
}

export default DummyPage
