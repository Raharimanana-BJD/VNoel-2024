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
        className="container text-center px-4 pt-36"
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
          Développeur Web <br />
          et Designer UX/UI
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
      <div className="wrapper p-16 max-md:p-2 max-md:pt-9">
        <div className="marquee-text max-w-6xl md:max-w-4xl mx-auto overflow-x-clip fade-out">
          <div className="marquee-text-track flex gap-4 w-[max-content]">
            {/* {[
              "HTML/CSS",
              "PHP",
              "JavaScript",
              "React",
              "Next.js",
              "Laravel",
              "Prisma",
              "MySQL",
              "Postgres",
              "Bootstrap",
              "Tailwind CSS",
              "Figma",
              "VSCode",
              "Xamp",
              "HTML/CSS",
              "PHP",
              "JavaScript",
              "React",
              "Next.js",
              "Laravel",
              "Prisma",
              "MySQL",
              "Postgres",
              "Bootstrap",
              "Tailwind CSS",
              "Figma",
              "VSCode",
              "Xamp",
            ].map((skill, index) => (
              <>
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm border"
                >
                  {skill}
                </span>
              </>
            ))} */}
            <p>HTML/CSS</p>
            <p>PHP</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Next JS</p>
            <p>TypeScript</p>
            <p>Laravel</p>
            <p>Prisma</p>
            <p>PostgresQL</p>
            <p>Tailwind CSS</p>
            <p>Figma</p>
            <p>VSCode</p>
            <p>Adobe Xd</p>
            <p>Adobe Ps</p>
            <p>Adobe Ai</p>
            <p>Adobe Af</p>
            <p>Adobe Pro</p>
            <p>HTML/CSS</p>
            <p>PHP</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Next JS</p>
            <p>TypeScript</p>
            <p>Laravel</p>
            <p>Prisma</p>
            <p>PostgresQL</p>
            <p>Tailwind CSS</p>
            <p>Figma</p>
            <p>VSCode</p>
            <p>Adobe Xd</p>
            <p>Adobe Ps</p>
            <p>Adobe Ai</p>
            <p>Adobe Af</p>
            <p>Adobe Pro</p>

            <p aria-hidden="true">HTML/CSS</p>
            <p aria-hidden="true">PHP</p>
            <p aria-hidden="true">JavaScript</p>
            <p aria-hidden="true">React</p>
            <p aria-hidden="true">Next JS</p>
            <p aria-hidden="true">TypeScript</p>
            <p aria-hidden="true">Laravel</p>
            <p aria-hidden="true">Prisma</p>
            <p aria-hidden="true">PostgresQL</p>
            <p aria-hidden="true">Tailwind CSS</p>
            <p aria-hidden="true">Figma</p>
            <p aria-hidden="true">VSCode</p>
            <p aria-hidden="true">Adobe Xd</p>
            <p aria-hidden="true">Adobe Ps</p>
            <p aria-hidden="true">Adobe Ai</p>
            <p aria-hidden="true">Adobe Af</p>
            <p aria-hidden="true">Adobe Pro</p>
          </div>
        </div>
      </div>
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
