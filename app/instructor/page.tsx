import Layout from '@/components/Layout'
import InstructorDashboard from '@/components/InstructorDashboard'

export default function InstructorPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Tableau de bord du formateur</h1>
        <InstructorDashboard />
      </div>
    </Layout>
  )
}

