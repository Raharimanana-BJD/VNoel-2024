"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen pt-20 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-24 h-24 mx-auto mb-8"
      >
        <Image
          src="../app/assets/profil.jpg"
          alt="Profile"
          fill
          className="rounded-full object-cover"
        />
      </motion.div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-8">
        Building digital products, brands, and experience.
      </h1>
      <Button size="lg" className="rounded-full">
        <Link href={"about"}>Learn More</Link>
      </Button>
    </section>
  );
}
