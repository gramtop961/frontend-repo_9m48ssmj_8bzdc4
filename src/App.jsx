import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="menu" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Today’s Menu</h2>
                <p className="mt-2 text-gray-600">Hand-picked dishes served fresh. Availability may vary.</p>
              </div>
              <a href="#" className="text-emerald-700 font-medium hover:underline">See full menu →</a>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Paneer Tikka Bowl", price: 90, tag: "Best seller" },
                { title: "Veg Fried Rice", price: 70, tag: "Student favorite" },
                { title: "Masala Dosa", price: 60, tag: "Crispy" },
                { title: "Dal Makhani", price: 65, tag: "Rich & creamy" },
                { title: "Chole Bhature", price: 85, tag: "Hearty" },
                { title: "Lemon Rice", price: 55, tag: "Light" },
              ].map(({ title, price, tag }) => (
                <div key={title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition">
                  <div className="aspect-video rounded-xl bg-gradient-to-tr from-emerald-100 to-cyan-100" />
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{title}</h3>
                      <p className="text-sm text-gray-600">{tag}</p>
                    </div>
                    <div className="text-emerald-700 font-semibold">₹{price}</div>
                  </div>
                  <button className="mt-4 w-full inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-white hover:bg-emerald-700 transition">
                    Add to order
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Features />
        <DashboardPreview />
      </main>
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} MessEase. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
