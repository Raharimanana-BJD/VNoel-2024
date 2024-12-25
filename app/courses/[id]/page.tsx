import Layout from '@/components/Layout'
import CourseDetail from '@/components/CourseDetail'

const mockCourseData = {
  id: '1',
  title: 'Introduction à React',
  description: 'Apprenez les bases de React et commencez à construire des applications web modernes.',
  videoUrl: 'https://example.com/intro-react-video.mp4',
  modules: [
    {
      title: 'Module 1: Les fondamentaux de React',
      lessons: [
        { title: 'Qu\'est-ce que React?', duration: '10:00' },
        { title: 'Création de composants', duration: '15:00' },
        { title: 'État et props', duration: '20:00' },
      ],
    },
    {
      title: 'Module 2: Hooks et gestion d\'état avancée',
      lessons: [
        { title: 'Introduction aux Hooks', duration: '25:00' },
        { title: 'useEffect en profondeur', duration: '20:00' },
        { title: 'Création de Hooks personnalisés', duration: '30:00' },
      ],
    },
  ],
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  // Dans une vraie application, vous feriez un appel API ici pour récupérer les données du cours
  const courseData = mockCourseData

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <CourseDetail {...courseData} />
      </div>
    </Layout>
  )
}

