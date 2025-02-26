import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a
            href="mailto:contact@example.com"
            className="text-sm hover:text-gray-600"
          >
            braharim@gmail.com
          </a>
          <nav className="hidden md:flex gap-4">
            <Link href="#" className="text-sm hover:text-gray-600">
              Copy
            </Link>
            <Link href="#" className="text-sm hover:text-gray-600">
              CV
            </Link>
          </nav>
        </div>
        <nav className="flex gap-4">
          <Link href="#" className="text-sm hover:text-gray-600">
            LinkedIn
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="#" className="text-sm hover:text-gray-600">
            Dribbble
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="#" className="text-sm hover:text-gray-600">
            Instagram
          </Link>
        </nav>
      </div>
    </header>
  );
}
