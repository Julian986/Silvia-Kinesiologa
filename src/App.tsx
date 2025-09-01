import Header from './components/Header'
import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import Servicios from './components/Servicios'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      <Header />
      <main>
        <Hero />
        <SobreMi />
        <Servicios />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

