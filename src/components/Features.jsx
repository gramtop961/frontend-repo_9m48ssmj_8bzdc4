import { Clock, Shield, CreditCard, Sparkles } from "lucide-react";

const features = [
  {
    title: "Real-time orders",
    description: "See live order queue and estimated pickup times.",
    icon: Clock,
  },
  {
    title: "Digital payments",
    description: "Fast, secure checkout with instant receipts.",
    icon: CreditCard,
  },
  {
    title: "Admin controls",
    description: "Manage menu, inventory, and reconcile payments.",
    icon: Shield,
  },
  {
    title: "Delightful UX",
    description: "Clean, responsive design loved by students.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section className="py-16" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Everything you need</h2>
          <p className="mt-3 text-gray-600">
            A complete toolkit for modern mess operations — from student ordering to admin analytics.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
