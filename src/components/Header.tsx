import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#inicio" className="font-semibold text-slate-800 text-lg tracking-tight">Lic. Silvia <span className="text-blue-600">Iturburu</span></a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="hover:text-blue-600 transition-colors">{item.label}</a>
            ))}
          </nav>

          <button aria-label="Abrir menú" onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 text-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-[9999] bg-white h-dvh min-h-screen overflow-auto animate-fadeIn">
          <div className="h-16 px-4 flex items-center justify-between border-b border-slate-200">
            <a href="#inicio" onClick={() => setOpen(false)} className="font-semibold text-slate-800 text-lg tracking-tight">Lic. Silvia <span className="text-blue-600">Iturburu</span></a>
            <button aria-label="Cerrar menú" onClick={() => setOpen(false)} className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 text-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="px-6 py-4 grid text-lg divide-y divide-slate-200">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-4 text-slate-700 hover:text-blue-600 transition-colors">{item.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}



