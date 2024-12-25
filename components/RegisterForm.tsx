import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function RegisterForm() {
  const [role, setRole] = useState('student')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'inscription à implémenter
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Nom</Label>
        <Input id="name" type="text" required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required />
      </div>
      <div>
        <Label htmlFor="password">Mot de passe</Label>
        <Input id="password" type="password" required />
      </div>
      <RadioGroup value={role} onValueChange={setRole}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="student" id="student" />
          <Label htmlFor="student">Étudiant</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="instructor" id="instructor" />
          <Label htmlFor="instructor">Formateur</Label>
        </div>
      </RadioGroup>
      <Button type="submit" className="w-full">S'inscrire</Button>
      <div className="text-center">
        <Button variant="outline" className="w-full mb-2">S'inscrire avec Google</Button>
        <Button variant="outline" className="w-full">S'inscrire avec LinkedIn</Button>
      </div>
    </form>
  )
}

