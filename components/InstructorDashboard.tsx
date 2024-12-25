import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function InstructorDashboard() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Ajouter un nouveau cours</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="course-title">Titre du cours</Label>
              <Input id="course-title" />
            </div>
            <div>
              <Label htmlFor="course-description">Description</Label>
              <Textarea id="course-description" />
            </div>
            <div>
              <Label htmlFor="course-video">Vidéo d'introduction</Label>
              <Input id="course-video" type="file" accept="video/*" />
            </div>
            <Button type="submit">Créer le cours</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performances des cours</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Introduction à React - 150 inscrits, Note moyenne: 4.8/5</li>
            <li>JavaScript Avancé - 80 inscrits, Note moyenne: 4.6/5</li>
            <li>Design UX/UI - 120 inscrits, Note moyenne: 4.9/5</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

