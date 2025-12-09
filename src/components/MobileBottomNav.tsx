"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Briefcase, Building2, MapPin, Phone } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/real-estate", label: "Real Estate", icon: Building2 },
    { href: "/paraiso-inmobiliario", label: "Paraíso", icon: MapPin },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 mobile-nav">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-item ${isActive ? "active" : ""}`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
