export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">Contacto</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">Completá el formulario para agendar tu consulta de kinesiología. También podés escribirme o llamarme directamente.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-medium text-slate-700">Nombre</label>
            <input type="text" className="mt-1 w-full rounded-md bg-white border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Tu nombre" />

            <label className="block text-sm font-medium text-slate-700 mt-4">Email</label>
            <input type="email" className="mt-1 w-full rounded-md bg-white border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="tu@email.com" />

            <label className="block text-sm font-medium text-slate-700 mt-4">Mensaje</label>
            <textarea rows={5} className="mt-1 w-full rounded-md bg-white border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Contame sobre tu lesión, dolor o necesidad de rehabilitación" />

            <button type="submit" className="mt-5 inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors">Agendar consulta</button>
          </form>

          <div className="grid gap-4 content-start">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Contacto directo</h3>
              <p className="mt-2 text-slate-600">Tel: <a className="text-blue-600 hover:underline" href="tel:+5491154321098">+54 11 5432-1098</a></p>
              <p className="text-slate-600">Email: <a className="text-blue-600 hover:underline" href="mailto:consultas@silviagonzalez.com">consultas@silviagonzalez.com</a></p>
              <p className="mt-3 text-sm text-slate-500">
                <strong>Horarios:</strong><br />
                Lun-Vie: 9:00-19:00<br />
                Sáb: 9:00-13:00<br />
                <strong>Ubicación:</strong> Consultorio profesional
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-0 overflow-hidden shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24903.95455724448!2d-62.29183698437499!3d-38.717939399999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda359db6721fb%3A0x4dcaac8e0303d6b8!2sLic.%20Silvia%20Iturburu!5e0!3m2!1ses!2sar!4v1756766486563!5m2!1ses!2sar" 
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Lic. Silvia González - Kinesióloga"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



