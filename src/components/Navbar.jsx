import { useState } from 'react'
import { Menu, ShoppingBag, Search, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border border-white/40 shadow-sm">
          <div className="flex h-14 items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <button className="sm:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
                <Menu size={20} />
              </button>
              <a href="#" className="flex items-center gap-2 font-semibold">
                <div className="size-6 rounded bg-gradient-to-br from-blue-600 to-violet-600" />
                <span>NovaCommerce</span>
              </a>
            </div>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
              <a href="#products" className="hover:text-slate-900">Products</a>
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-slate-100" aria-label="Search"><Search size={18} /></button>
              <button className="p-2 rounded-full hover:bg-slate-100" aria-label="Account"><User size={18} /></button>
              <a href="#cart" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm">
                <ShoppingBag size={16} /> Cart
              </a>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="sm:hidden mx-auto max-w-7xl px-6">
          <div className="mt-2 rounded-2xl bg-white border p-4 space-y-3 shadow">
            <a href="#products" className="block">Products</a>
            <a href="#about" className="block">About</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
