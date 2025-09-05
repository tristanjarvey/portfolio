import Link from "next/link";
import { ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-theme text-theme">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-theme hover:text-theme-hover transition-colors">
            Tristan Jarvey
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-theme hover:text-theme-hover transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-theme hover:text-theme-hover transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-theme hover:text-theme-hover transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {children}
    </div>
  );
} 