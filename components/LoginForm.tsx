import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique de connexion à implémenter
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required />
      </div>
      <div>
        <Label htmlFor="password">Mot de passe</Label>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">Se connecter</Button>
      <div className="text-center">
        <Button variant="outline" className="w-full mb-2">Se connecter avec Google</Button>
        <Button variant="outline" className="w-full">Se connecter avec LinkedIn</Button>
      </div>
    </form>
  )
}

