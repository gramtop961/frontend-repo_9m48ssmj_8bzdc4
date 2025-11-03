import { Utensils, ShoppingBag, CreditCard, Shield } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Dynamic Menus",
    desc: "Admins publish daily menus; students browse live options with prices.",
  },
  {
    icon: ShoppingBag,
    title: "Quick Orders",
    desc: "Students place orders that sync instantly across devices.",
  },
  {
    icon: CreditCard,
    title: "Stripe Payments",
    desc: "Secure, PCI-compliant payments using Stripe test cards.",
  },
  {
    icon: Shield,
    title: "Auth & Roles",
    desc: "Firebase Auth with student/admin access controls.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Everything you need to run a mess smoothly</h2>
          <p className="mt-3 text-slate-600">From registration to payment reconciliation — all in one place.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon: Icon, title, desc}) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-600 grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
