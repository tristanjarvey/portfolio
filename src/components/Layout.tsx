import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-neutral-300 transition-colors">
            Tristan Jarvey
          </Link>
          <div className="flex gap-6">
            <Link href="/about" className="text-white hover:text-neutral-300 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-white hover:text-neutral-300 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-white hover:text-neutral-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {children}
    </div>
  );
} 