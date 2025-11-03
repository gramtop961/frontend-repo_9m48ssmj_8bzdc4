import { TrendingUp, Users, ClipboardCheck, Wallet } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="admin">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Live admin snapshot</h2>
            <p className="mt-2 text-gray-600">A quick look at today’s performance and activity.</p>
          </div>
          <a href="#" className="text-emerald-700 font-medium hover:underline">Open full dashboard →</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Revenue", value: "₹18,420", icon: Wallet },
            { label: "Orders", value: "236", icon: ClipboardCheck },
            { label: "Active users", value: "128", icon: Users },
            { label: "Growth", value: "+12.4%", icon: TrendingUp },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{label}</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">{value}</p>
                </div>
                <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Live orders</h3>
            <span className="text-xs text-gray-500">Auto-refresh every minute</span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-xl border border-gray-100 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-900">Order #{1200 + i}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700 border border-emerald-100">
                    Ready
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600">2 × Paneer Bowl, 1 × Dosa</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
