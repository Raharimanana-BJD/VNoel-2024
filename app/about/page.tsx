"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Mail, MapPinIcon, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 max-md:py-20 py-28"
      >
        <div className="flex justify-between items-center max-md:mb-4 mb-14">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
            </Button>
          </Link>
          <Link download href="/CV_RAHARIMANANA_Brayann_(Braharim).pdf">
            <Button variant="outline" className="mb-8">
              <Download className="mr-2 h-4 w-4" />
              Télécharger CV
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Image
              src="/profil.jpg"
              alt="Brayann Juanico"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">À propos de moi</h1>
            <div className="space-y-4 text-gray-600">
              <p>
                Déterminé, sérieux, autonome et conscient du travail qui
                m&apos;attend, je suis persuadé que je serais un élément moteur
                au sein de votre structure !
              </p>
              <p>
                Actuellement en Licence 3 en Informatique Générale, je suis
                passionné par le développement web et la création
                d&apos;expériences numériques innovantes.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-semibold">Formation</h2>
              <div className="space-y-2">
                <div>
                  <p className="font-medium">
                    2025 - Informatique General - Licence 3
                  </p>
                  <p className="text-sm text-gray-600">E.N.I</p>
                </div>
                <div>
                  <p className="font-medium">
                    2024 - Informatique General - Licence 2
                  </p>
                  <p className="text-sm text-gray-600">E.N.I</p>
                </div>
                <div>
                  <p className="font-medium">
                    2023 - Informatique General - Licence 1
                  </p>
                  <p className="text-sm text-gray-600">E.N.I</p>
                </div>
                <div>
                  <p className="font-medium">
                    2022 - Certificat de réussite en UX-UI Design
                  </p>
                  <p className="text-sm text-gray-600">SAYNA</p>
                </div>
                <div>
                  <p className="font-medium">2021 - Bac scientifique</p>
                  <p className="text-sm text-gray-600">Lycée CEP</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-semibold">Compétences Techniques</h2>
              <div className="skills flex flex-wrap gap-2">
                {[
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
                ].map((skill) => (
                  <span
                    key={skill}
                    className="skill px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-semibold">Langues</h2>
              <div className="flex flex-wrap gap-2">
                {["Malagasy", "Français", "Anglais"].map((language) => (
                  <span
                    key={language}
                    className=" px-3 py-1 bg-gray-100 rounded-full overflow-hidden text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <div className="flex flex-col gap-4 text-gray-600">
                <p className="inline-flex gap-1">
                  <MapPinIcon />
                  Tulear - Madagascar
                </p>
                <p className="inline-flex gap-1">
                  <Mail />
                  brayjuanico@gmail.com
                </p>
                <p className="inline-flex gap-1">
                  <Phone />
                  +261 34 55 056 05
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
