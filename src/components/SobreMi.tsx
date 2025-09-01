

// Placeholder para segunda imagen de Silvia

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <img className="w-full rounded-xl shadow-md ring-1 ring-slate-200 object-cover aspect-[4/3]" src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1756767764/para-que-sirve-la-kinesiologia_degjs9.webp" alt="Lic. Silvia González en su consulta de kinesiología" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Sobre mí</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">Soy la Lic. Silvia González, kinesióloga con más de 12 años de experiencia especializada en rehabilitación física, fisioterapia y reeducación postural. Mi enfoque busca generar un espacio de confianza y profesionalismo para trabajar juntos en tu recuperación y bienestar físico.</p>
          <p className="mt-3 text-slate-600 leading-relaxed">Trabajo con técnicas basadas en evidencia científica, adaptadas a tus necesidades específicas, para que puedas recuperar tu movilidad, aliviar el dolor y alcanzar una mejora sostenible en tu calidad de vida.</p>
          <div className="mt-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Matrícula Profesional N° 54321
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



