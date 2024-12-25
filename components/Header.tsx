import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          E-Learning
        </Link>
        <div className="space-x-4">
          <Link href="/courses">
            <Button variant="ghost">Cours</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline">Connexion</Button>
          </Link>
          <Link href="/register">
            <Button>S'inscrire</Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

