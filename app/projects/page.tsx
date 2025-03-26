"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// const projects = [
//   {
//     title: "Portfolio Khepri Service",
//     description:
//       "Conception et développement d'un site portfolio en utilisant Next.js pour une performance optimisée et un rendu côté serveur. Intégration de Framer Motion pour des animations fluides et dynamiques.",
//     image: "/project-1.png",
//     tags: ["Next.js", "Framer Motion", "TailwindCSS"],
//     link: "#",
//     github: "#",
//   },
//   {
//     title: "Application de Gestion d'Examens",
//     description:
//       "Application web permettant la gestion des étudiants et examens. Les étudiants font l'examen qcm sur la plateforme et le résultat est envoyé par mail.",
//     image: "/project-2.png",
//     tags: ["PHP", "Bootstrap", "MySQL"],
//     link: "#",
//     github: "#",
//   },
//   {
//     title: "Application Mobile AMPELA",
//     description:
//       "Élaboration des maquettes et des prototypes pour l'application mobile dédiée à la gestion des cycles menstruels. Développement du site web associé.",
//     image: "/project-4.png",
//     tags: ["UI/UX", "Figma", "Web Design"],
//     link: "#",
//     github: "#",
//   },
//   {
//     title: "Gestion des Heures Complémentaires",
//     description:
//       "Application desktop développée en C# pour la gestion des heures complémentaires des enseignants. Utilisation du Framework QT pour l'interface.",
//     image: "/project-5.png",
//     tags: ["C#", "Framework QT", "Desktop"],
//     link: "#",
//     github: "#",
//   },
// ];

const projects = [
  {
    title: "Stock media app",
    description: "Stock media application",
    image: "/project-1.png",
    tags: ["Javascript", "API Pixlir"],
    link: "",
    github: "",
  },
  {
    title: "Recipe app",
    description: "Receip application",
    image: "/project-2.png",
    tags: ["Javascript", "Rest API", "node.js"],
    link: "",
    github: "",
  },
  {
    title: "Live weather app",
    description: "Live weather application",
    image: "/project-4.png",
    tags: ["Javascript", "Tailwindcss"],
    link: "",
    github: "",
  },
  {
    title: "Netflix Clone 2.0 app",
    description: "Netflix Clone 2.0 application",
    image: "/project-5.png",
    tags: ["CSS3", "Javascript", "API", "Postman"],
    link: "",
    github: "",
  },
  {
    title: "Travel Website",
    description: "Travel Website",
    image: "/project-6.png",
    tags: ["HTML", "CSS3", "Javascript"],
    link: "",
    github: "",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        <div className="flex items-center justify-between mb-12">
          <Link href="/">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Retour
            </Button>
          </Link>
          <Link href="https://github.com/votre-username" target="_blank">
            <Button variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </Link>
        </div>

        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-4xl font-bold mb-12"
        >
          Projets Récents
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Voir le projet{" "}
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
