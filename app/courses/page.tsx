import Layout from '@/components/Layout'
import CourseList from '@/components/CourseList'

const mockCourses = [
  { id: '1', title: 'Introduction à React', progress: 60 },
  { id: '2', title: 'JavaScript Avancé', progress: 30 },
  { id: '3', title: 'Design UX/UI', progress: 0 },
]

export default function CoursesPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Mes cours</h1>
        <CourseList courses={mockCourses} />
      </div>
    </Layout>
  )
}

