import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <section id="about" className="py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">Designed for conversion</h2>
                <p className="mt-3 text-slate-600">Smooth motion, crisp typography, and a frictionless shopping flow. Built with attention to detail and performance best practices.</p>
                <ul className="mt-6 space-y-2 text-slate-700">
                  <li>• Responsive, mobile‑first layout</li>
                  <li>• Subtle micro‑interactions</li>
                  <li>• Accessible and keyboard‑friendly</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-blue-50 to-violet-50" />
                <p className="mt-3 text-sm text-slate-600">Polished building blocks for a premium storefront.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
