import { Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-24 -right-32 h-72 w-72 bg-indigo-200/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-32 h-72 w-72 bg-sky-200/60 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Smart Mess Management for Students and Admins
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Register, browse menus, place orders, and pay securely — while admins update menus and monitor activity in real time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500">
                Explore Menu
              </a>
              <a href="#dashboard" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-800 font-medium hover:bg-slate-50">
                Live Dashboard
              </a>
            </div>
            <div className="mt-6 flex items-center gap-5 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-600"/>Secure Payments</div>
              <div className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-600"/>Realtime Updates</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/60">
                <div className="h-2 w-20 rounded-full bg-slate-300 mb-1" />
                <div className="h-2 w-12 rounded-full bg-slate-200" />
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                {[
                  { title: "Dal Tadka", price: 40 },
                  { title: "Paneer Butter", price: 80 },
                  { title: "Veg Biryani", price: 90 },
                  { title: "Mixed Salad", price: 25 },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 p-4">
                    <div className="h-24 rounded-lg bg-gradient-to-br from-indigo-100 to-sky-100 mb-3" />
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-slate-800">{item.title}</p>
                      <p className="text-sm text-slate-600">₹{item.price}</p>
                    </div>
                    <button className="mt-3 w-full rounded-md bg-slate-900 text-white text-sm py-2 hover:bg-slate-800">
                      Add to order
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 px-4 py-3 shadow-md">
              Payments secured by Stripe test mode
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
