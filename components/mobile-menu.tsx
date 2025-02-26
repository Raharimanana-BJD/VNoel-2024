"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Ouvrir le menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-10 pt-8">
          <Link href="/" className="text-3xl" onClick={() => setOpen(false)}>
            Accueil
          </Link>
          <Link
            href="/about"
            className="text-3xl"
            onClick={() => setOpen(false)}
          >
            À propos
          </Link>
          <Link
            href="/projects"
            className="text-3xl"
            onClick={() => setOpen(false)}
          >
            Projets
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
