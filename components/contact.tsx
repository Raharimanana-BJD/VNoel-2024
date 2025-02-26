import { Button } from "@/components/ui/button"
import { HandshakeIcon } from 'lucide-react'

export function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <HandshakeIcon className="w-16 h-16 mx-auto mb-8" />
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Tell me about your next project
        </h2>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="rounded-full">
            Email Me
          </Button>
          <Button size="lg" variant="outline" className="rounded-full">
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}

