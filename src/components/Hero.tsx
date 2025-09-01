// Placeholder para imagen profesional de Silvia
const SilviaPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='40%25' text-anchor='middle' dy='.3em' fill='%2364748b' font-family='Arial, sans-serif' font-size='16'%3EFoto Profesional%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' dy='.3em' fill='%2364748b' font-family='Arial, sans-serif' font-size='14'%3ELic. Silvia González%3C/text%3E%3C/svg%3E"

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 sm:pt-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-slideUp">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
            Lic. Silvia González,
            <span className="block text-blue-600">Kinesióloga en Buenos Aires</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">Te ayudo a recuperar tu movilidad y bienestar físico con tratamientos personalizados y técnicas especializadas en kinesiología.</p>
          <div className="mt-6">
            <a href="https://wa.me/5491154321098?text=Hola%20Silvia%2C%20quiero%20agendar%20una%20consulta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors">Solicitar una consulta</a>
          </div>
        </div>
        <div className="relative">
          <img className="w-full rounded-xl shadow-lg ring-1 ring-slate-200 object-cover object-[50%_20%] aspect-[4/3]" src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1756767764/medica-hospital-estetoscopio_23-2148827774_wspbaa.webp" />
        </div>
      </div>
    </section>
  )
}



