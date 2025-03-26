import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { MobileMenu } from "@/components/mobile-menu";

export const metadata: Metadata = {
  icons: "./favicon.svg",
  title: "Braharim | Personal Portfolio",
  description:
    "Déterminé, sérieux, autonome et conscient du travail qui m'attend, je suis persuadé que je serais un élément moteur au sein de votre structure! Actuellement en Licence 3 en Informatique Générale, je suis passionné par le développement web et la création d'expériences numériques innovantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {/* Header */}
        <header className="fixed w-full max-md:px-8 px-20 backdrop-blur-md flex justify-between items-center p-6 z-10">
          <div className="flex items-center">
            <Link href="/" className="text-xl text-primary">
              <span className="font-bold">Bra</span>-harim
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm">
              Aceille
            </Link>
            <Link href="/about" className="text-sm">
              A propos
            </Link>
            <Link href="/projects" className="text-sm">
              Projets
            </Link>
          </nav>
          <nav className="hidden md:flex gap-4">
            <a href="#" className="text-sm text-gray-600">
              GitHub
            </a>
            <span className="text-gray-600">/</span>
            <a href="#" className="text-sm text-gray-600">
              LinkedIn
            </a>
          </nav>
          <MobileMenu />
        </header>

        {children}

        {/* Footer */}
        <footer className="py-6 px-4 text-center text-sm text-gray-600">
          <p>© 2024 Brayann Juanico. Tous droits réservés.</p>
          <nav className="flex justify-center gap-4 mt-4">
            <a href="#">GitHub</a>
            <span>/</span>
            <a href="#">LinkedIn</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
