import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart } from 'lucide-react'

export default function Featured() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products/featured`)
        if (!res.ok) throw new Error('Failed to load')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError('Could not load featured products')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="products" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Featured Products</h2>
            <p className="text-slate-600 mt-2">Hand‑picked best sellers with excellent reviews</p>
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">View all</a>
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 rounded-2xl bg-slate-100 animate-pulse" />
            ))}
          </div>
        )}

        {!loading && error && (
          <p className="mt-8 text-red-600">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {items.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05 }}
                className="group rounded-2xl border border-slate-200/70 overflow-hidden hover:shadow-xl transition bg-white"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 grid place-items-center">
                  <div className="size-16 rounded-xl bg-blue-600/10 text-blue-700 grid place-items-center font-semibold">
                    {p.title.split(' ')[0]}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900">{p.title}</h3>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mt-1 line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold">${'{'}p.price.toFixed(2){'}'}</span>
                    <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:-translate-y-0.5 hover:shadow-lg transition">
                      <ShoppingCart size={16} /> Add to cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
