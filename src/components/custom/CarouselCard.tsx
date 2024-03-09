import { Card, CardContent } from '@/components/ui/card'
import { CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { importAll } from '@/data/dummyImages'
// import { useEffect } from 'react'

const CarouselCard = () => {
  const imagesSrc = importAll()

  // useEffect(() => {
  //   const image = new Image()
  //   image.src = imagesSrc[0]
  // }, [])
  return (
    <CarouselContent>
      {imagesSrc.map((src, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <img src={src} alt="dummy" className="object-cover rounded-md w-[500px] h-[600px]" loading="lazy" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  )
}

export default CarouselCard
