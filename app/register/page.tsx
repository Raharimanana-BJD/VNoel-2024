import Layout from '@/components/Layout'
import RegisterForm from '@/components/RegisterForm'

export default function RegisterPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Inscription</h1>
          <RegisterForm />
        </div>
      </div>
    </Layout>
  )
}

