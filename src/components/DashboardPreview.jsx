import { LayoutDashboard, Users, CreditCard, ShoppingCart } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Realtime Admin Dashboard</h2>
            <p className="mt-1 text-slate-600">A snapshot of orders, payments, and attendance at a glance.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-600">
            <LayoutDashboard className="h-5 w-5" />
            <span className="text-sm">Preview</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Active Students" value="312" icon={Users} trend="up" />
          <Card title="Orders Today" value="174" icon={ShoppingCart} trend="up" />
          <Card title="Payments (₹)" value="22,460" icon={CreditCard} trend="flat" />
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-slate-900">Live Orders</p>
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded">Auto-refresh</span>
          </div>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Aarav Patel", item: "Paneer Butter", amount: 80 },
              { name: "Isha Gupta", item: "Veg Biryani", amount: 90 },
              { name: "Rahul Verma", item: "Dal Tadka", amount: 40 },
            ].map((o) => (
              <div key={o.name} className="rounded-xl border border-slate-200 p-4">
                <p className="font-medium text-slate-800">{o.name}</p>
                <p className="text-sm text-slate-600">{o.item}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">₹{o.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, value, icon: Icon, trend }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-600">{title}</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
        </div>
        <div className="h-10 w-10 rounded-lg bg-sky-600/10 text-sky-600 grid place-items-center">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-4 h-2 w-full rounded bg-gradient-to-r from-indigo-200 to-sky-200" />
      <p className="mt-2 text-xs text-slate-500">Trend: {trend}</p>
    </div>
  );
}
