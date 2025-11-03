import { Utensils, ShoppingBag, CreditCard, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 grid place-items-center text-white">
            <Utensils className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">MessEase</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#menu" className="hover:text-slate-900 transition-colors">Menu</a>
          <a href="#dashboard" className="hover:text-slate-900 transition-colors">Dashboard</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">
            <ShoppingBag className="h-4 w-4" /> Order
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">
            <CreditCard className="h-4 w-4" /> Pay
          </button>
          <button className="ml-1 inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-slate-900 text-white hover:bg-slate-800">
            <Settings className="h-4 w-4" /> Admin
          </button>
        </div>
      </div>
    </header>
  );
}
