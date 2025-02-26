import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutGrid, Smartphone, Palette, Code } from 'lucide-react'

const services = [
  {
    title: "UX & UI",
    description: "Designing interfaces that are intuitive, efficient and enjoyable to use.",
    icon: LayoutGrid,
  },
  {
    title: "Web & Mobile App",
    description: "Transforming ideas into exceptional web and mobile app experiences.",
    icon: Smartphone,
  },
  {
    title: "Design & Creative",
    description: "Crafting visually stunning designs that connect with your audience.",
    icon: Palette,
  },
  {
    title: "Development",
    description: "Bringing your ideas to life with the latest technology and design trends.",
    icon: Code,
  },
]

export function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Collaborate with brands and agencies
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          to create impactful results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-none shadow-lg">
              <CardHeader>
                <service.icon className="w-8 h-8 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

