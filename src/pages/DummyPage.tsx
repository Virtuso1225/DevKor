import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { importAll } from '@/data/dummyImages'
import { Helmet } from 'react-helmet-async'

const DummyPage = () => {
  const imagesSrc = importAll()
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
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <img src={src} alt="dummy" className="object-cover rounded-md" />
                    </CardContent>
                  </Card>
                </div>
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
