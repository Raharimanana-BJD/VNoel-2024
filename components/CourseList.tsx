import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

interface Course {
  id: string
  title: string
  progress: number
}

interface CourseListProps {
  courses: Course[]
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={course.progress} className="mb-2" />
            <p className="text-sm text-gray-600 mb-4">{course.progress}% complété</p>
            <Button asChild>
              <a href={`/courses/${course.id}`}>Continuer</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

