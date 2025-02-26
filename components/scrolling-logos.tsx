import Image from 'next/image'

const logos = [
  { src: "/placeholder.svg", alt: "National Bank" },
  { src: "/placeholder.svg", alt: "Mattered" },
  { src: "/placeholder.svg", alt: "Coca Cola" },
  { src: "/placeholder.svg", alt: "Adobe" },
  { src: "/placeholder.svg", alt: "Subway" },
  { src: "/placeholder.svg", alt: "Code Academy" },
]

export function ScrollingLogos() {
  return (
    <div className="w-full overflow-hidden bg-white py-10">
      <div className="flex animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
            <Image src={logo.src} alt={logo.alt} width={100} height={40} />
          </div>
        ))}
      </div>
    </div>
  )
}

