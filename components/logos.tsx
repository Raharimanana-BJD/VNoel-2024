"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "National Bank", width: 120, logoImg: "css3" },
  { name: "Mattered", width: 120, logoImg: "github-linear" },
  { name: "Coca Cola", width: 100, logoImg: "github" },
  { name: "Adobe", width: 100, logoImg: "html5" },
  { name: "Subway", width: 120, logoImg: "javascript" },
  { name: "Code Academy", width: 130, logoImg: "node.js" },
];

export function Logos() {
  return (
    <div className="py-20 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1920, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center"
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} style={{ width: logo.width }} className="flex-shrink-0">
            <Image
              src={`/${logo.logoImg}.svg`}
              alt={logo.name}
              width={logo.width}
              height={40}
              className="opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
