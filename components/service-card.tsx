import { Card } from '@/components/ui/card'
import { Layout, Smartphone, PenTool, Code } from 'lucide-react'

const icons = {
  layout: Layout,
  smartphone: Smartphone,
  'pen-tool': PenTool,
  code: Code,
}

interface ServiceCardProps {
  icon: keyof typeof icons
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const Icon = icons[icon]
  
  return (
    <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
      <Icon className="h-8 w-8 mb-4" />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Card>
  )
}

