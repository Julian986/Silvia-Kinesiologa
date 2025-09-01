import { StarIcon } from '@heroicons/react/24/solid'

type Testimonio = {
	nombre: string
	texto: string
	rating: number
	fecha: string
	fuente: string
	avatar: string
}

const testimonios: Testimonio[] = [
	{
		nombre: 'Carmen L.',
		texto: 'Después de mi cirugía de rodilla, pensé que nunca volvería a caminar normalmente. Silvia me ayudó a recuperar completamente la movilidad.',
		rating: 5,
		fecha: 'Nov 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1753711317/photo-1544005313-94ddf0286df2_qicg9u.webp',
	},
	{
		nombre: 'Roberto M.',
		texto: 'Como futbolista amateur, las lesiones son frecuentes. El tratamiento de Silvia me permitió volver a jugar sin dolor.',
		rating: 5,
		fecha: 'Oct 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1753711316/photo-1500648767791-00dcc994a43e_alwlur.webp',
	},
	{
		nombre: 'Elena F.',
		texto: 'Años de dolor de espalda se solucionaron con el método RPG. Un enfoque integral que realmente funciona.',
		rating: 5,
		fecha: 'Sep 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755631766/photo-1502685104226-ee32379fefbe_dc6oxf.webp',
	},
]

// Eliminado: ya no usamos iniciales para el avatar

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">Testimonios</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">Lo que dicen mis pacientes sobre su experiencia de recuperación.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((t) => (
            <blockquote key={t.nombre} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={`Foto de ${t.nombre}`} className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" />
                <div className="min-w-0">
                  <div className="font-medium text-slate-900 truncate">{t.nombre}</div>
                  <div className="text-xs text-slate-500 truncate">{t.fuente} • {t.fecha}</div>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1" aria-label={`${t.rating} de 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className={`h-4 w-4 ${i < t.rating ? 'text-yellow-400' : 'text-slate-300'}`} />
                ))}
              </div>

              <p className="mt-3 text-slate-700">“{t.texto}”</p>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#contacto" className="inline-block text-blue-600 font-medium hover:underline">Ver más testimonios</a>
        </div>
      </div>
    </section>
  )
}




