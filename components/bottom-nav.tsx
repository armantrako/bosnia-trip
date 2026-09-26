"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Map, Briefcase, BookMarked } from "lucide-react";

const ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/map", label: "Map", icon: Map },
  { href: "/trips", label: "Trips", icon: Briefcase },
  { href: "/passport", label: "Passport", icon: BookMarked },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 flex justify-around glass md:hidden">
      {ITEMS.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-0.5 py-2 px-3 text-xs ${
              active ? "text-primary" : "text-muted"
            }`}
          >
            <Icon size={20} strokeWidth={active ? 2.5 : 2} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
