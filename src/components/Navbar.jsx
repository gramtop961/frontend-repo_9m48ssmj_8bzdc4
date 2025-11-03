import { Utensils, ClipboardList, CreditCard, ShieldCheck, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Menu", icon: Utensils, href: "#menu" },
    { label: "Orders", icon: ClipboardList, href: "#orders" },
    { label: "Pay", icon: CreditCard, href: "#pay" },
    { label: "Admin", icon: ShieldCheck, href: "#admin" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 grid place-items-center text-white">
              <Utensils className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg">MessEase</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-1">
              {navItems.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition"
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
