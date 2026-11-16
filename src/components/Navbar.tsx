"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "CP", href: "/#cp" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Experience", href: "/#experience" },
  { name: "Leadership", href: "/#leadership" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Logo: Sabit */}
        <Link
          href="/#home"
          className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-slate-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-lg font-extrabold text-white shadow-md shadow-indigo-500/25">
            S
          </span>
          <span>
            Sabit<span className="text-indigo-600"></span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Resume CTA */}
        <div className="hidden xl:flex items-center">
          <a
            href={personalInfo.resumePath}
            download="Tarik-Saidul-Islam-Sabit-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:opacity-95 hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 xl:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl xl:hidden">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a
            href={personalInfo.resumePath}
            download="Tarik-Saidul-Islam-Sabit-Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-md"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}