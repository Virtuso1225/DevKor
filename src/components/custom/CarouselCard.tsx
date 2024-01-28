import { Card, CardContent } from '@/components/ui/card'

const CarouselCard = ({ src }: { src: string }) => {
  return (
    <div className="p-1">
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <img src={src} alt="dummy" className="object-cover rounded-md w-[500px] h-[600px]" loading="eager" />
        </CardContent>
      </Card>
    </div>
  )
}

export default CarouselCard
