import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50 to-white" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-emerald-700 text-xs mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Smart campus mess management
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Eat better. Queue less. Pay faster.
            </h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              MessEase helps students browse today’s menu, place orders, and pay seamlessly —
              while admins track inventory, orders, and payments in real-time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700 transition"
              >
                Browse today’s menu <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#admin"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-emerald-700 border border-emerald-200 hover:bg-emerald-50 transition"
              >
                View admin preview
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                {["Paneer Tikka Bowl","Veg Fried Rice","Dal Makhani","Masala Dosa"].map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-100 p-4 bg-gray-50">
                    <div className="aspect-video rounded-lg bg-gradient-to-tr from-emerald-100 to-cyan-100" />
                    <div className="mt-3 font-medium text-gray-900">{item}</div>
                    <div className="text-sm text-gray-600">Starting at ₹60</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
