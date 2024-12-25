import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface CourseCardProps {
  title: string
  description: string
  image: string
  slug: string
}

export default function CourseCard({ title, description, image, slug }: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Image src={image} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <a href={`/courses/${slug}`}>Voir le cours</a>
        </Button>
      </CardFooter>
    </Card>
  )
}

