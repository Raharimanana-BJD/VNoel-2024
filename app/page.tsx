"use client";

import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with animations */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={stagger}
        className="container text-center px-4 pt-36 pb-20 max-md:pb-[8.5rem]"
      >
        <motion.div
          variants={fadeIn}
          className="relative w-24 h-24 mx-auto mb-8"
        >
          <Image
            src="/profil.jpg"
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

      {/* LOGO */}
      {/* <div className="marquee w-full overflow-hidden bg-white py-10">
        <div className="marquee-track flex gap-2">
          {[
            "HTML/CSS",
            "PHP",
            "JavaScript",
            "React",
            "Next.js",
            "Vue.js",
            "Laravel",
            "Prisma",
            "MySQL",
            "Postgres",
            "Bootstrap",
            "Tailwind CSS",
            "Figma",
            "VSCode",
            "Xamp",
          ].map((skill) => (
            <span
              key={skill}
              className="marquee-item px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div> */}
      {/* Services Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="py-20 px-4 max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-2">
            Compétences et Technologies
          </h2>
          <p className="text-gray-600">
            Création d&apos;expériences web modernes et performantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon="layout"
            title="UI & UX Design"
            description="Conception d'interfaces utilisateur intuitives et création de prototypes avec Figma"
          />
          <ServiceCard
            icon="code"
            title="Développement Frontend"
            description="React, Next.js, Vue.js avec focus sur la performance et l'accessibilité"
          />
          <ServiceCard
            icon="smartphone"
            title="Responsive Design"
            description="Sites web adaptatifs optimisés pour tous les appareils"
          />
          <ServiceCard
            icon="pen-tool"
            title="Backend Development"
            description="PHP, Laravel, Node.js avec bases de données MySQL et PostgreSQL"
          />
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-20 px-4 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">
          Parlons de votre
          <br />
          prochain projet
        </h2>
        <div className="flex justify-center gap-4">
          <Button className="rounded-full px-6">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button variant="outline" className="rounded-full px-6">
            +261 34 55 056 05
          </Button>
        </div>
      </section>
    </div>
  );
}
