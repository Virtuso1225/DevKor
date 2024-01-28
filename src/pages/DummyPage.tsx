// import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import { importAll } from '@/data/dummyImages'
import { Suspense, lazy, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
const DummyPage = () => {
  const imagesSrc = importAll()
  const CarouselCard = lazy(() => import('@/components/custom/CarouselCard'))
  useEffect(() => {
    const preload = (imageSet: string[]) => {
      if (!imageSet || !imageSet.length) return
      imageSet.forEach(src => {
        const image = new Image()
        image.src = src
      })
    }
    preload(imagesSrc)
  }, [])

  return (
    <div>
      <Helmet>
        <title>DummyPage</title>
      </Helmet>
      <div className="flex flex-col p-1">
        <Carousel className="w-full max-w-lg mt-10">
          <CarouselContent>
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
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default DummyPage
