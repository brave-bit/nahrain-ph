"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Clock,
  Cross,
  Home,
  Info,
  Phone,
  Pill,
} from "lucide-react";
import { pharmacy } from "@/lib/data";

const links = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/services", label: "الخدمات", icon: Pill },
  { href: "/hours", label: "أوقات العمل", icon: Clock },
  { href: "/about", label: "عن الصيدلية", icon: Info },
  { href: "/contact", label: "تواصل", icon: Phone },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0b132b]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-md shadow-emerald-500/20 transition group-hover:from-emerald-300 group-hover:to-teal-500 sm:h-10 sm:w-10">
            <Cross className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
          </span>
          <span className="truncate text-base font-bold tracking-tight text-white sm:text-lg">
            {pharmacy.name}
          </span>
        </Link>

        <nav className="flex items-center gap-1.5 sm:gap-2">
          {links.map((l) => {
            const active = path === l.href;
            const Icon = l.icon;
            return (
              <Link
                key={l.href}
                href={l.href}
                title={l.label}
                aria-label={l.label}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${
                  active
                    ? "border-cyan-300/50 bg-white/10 text-cyan-200"
                    : "border-white/20 text-slate-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
