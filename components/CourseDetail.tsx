import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface CourseDetailProps {
  id: string
  title: string
  description: string
  videoUrl: string
  modules: {
    title: string
    lessons: {
      title: string
      duration: string
    }[]
  }[]
}

export default function CourseDetail({ id, title, description, videoUrl, modules }: CourseDetailProps) {
  const [currentModule, setCurrentModule] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(0)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>
        <video src={videoUrl} controls className="w-full aspect-video mb-4"></video>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Programme du cours</h2>
        <Accordion type="single" collapsible className="w-full">
          {modules.map((module, moduleIndex) => (
            <AccordionItem key={moduleIndex} value={`module-${moduleIndex}`}>
              <AccordionTrigger>{module.title}</AccordionTrigger>
              <AccordionContent>
                {module.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <p>{lesson.title}</p>
                    <p className="text-sm text-gray-600">{lesson.duration}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Ressources</h2>
        <ul className="list-disc list-inside">
          <li>
            <Button variant="link" asChild>
              <a href="#" download>Guide du cours (PDF)</a>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <a href="#" download>Exercices pratiques</a>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

