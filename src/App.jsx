import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="menu" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold tracking-tight">Today’s Menu</h2>
                <p className="text-sm text-slate-600">Fetched via API in the full app</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Chapati", "Rice", "Dal", "Seasonal Veg", "Curd", "Salad", "Papad", "Sweet"].map((m) => (
                  <div key={m} className="rounded-xl border border-slate-200 p-4 hover:shadow-sm transition-shadow">
                    <div className="h-20 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 mb-3" />
                    <p className="font-medium">{m}</p>
                    <p className="text-sm text-slate-600">Included in standard meal</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <DashboardPreview />
      </main>
      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} MessEase. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
