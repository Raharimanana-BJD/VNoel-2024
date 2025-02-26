import React from "react";

export default function Hero() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={stagger}
      className="text-center px-4 py-20 max-w-4xl mx-auto"
    >
      <motion.div variants={fadeIn} className="relative w-24 h-24 mx-auto mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1712344789808.jpg-gTBwZlJd3lFiJmOIdg0zxGVas5XhPo.jpeg"
          alt="Brayann Juanico"
          fill
          className="rounded-full object-cover"
        />
        <div className="absolute -right-2 -top-2 bg-white px-2 py-1 rounded-full shadow-sm">
          <span className="text-sm">Hello 👋</span>
        </div>
      </motion.div>
      <motion.h1
        variants={fadeIn}
        className="text-4xl md:text-5xl font-semibold leading-tight mb-8"
      >
        Braharim
        <br />
        Développeur Web
      </motion.h1>
      <motion.div variants={fadeIn}>
        <Link href="/about">
          <Button className="rounded-full px-6" variant="default">
            En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
