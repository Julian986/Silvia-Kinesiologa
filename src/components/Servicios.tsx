import { HeartIcon, UserGroupIcon, CogIcon, ArrowPathIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

const servicios = [
  {
    icon: HeartIcon,
    titulo: 'Rehabilitación Deportiva',
    descripcion: 'Recuperación especializada para atletas y deportistas con protocolos específicos para lesiones deportivas.',
  },
  {
    icon: UserGroupIcon,
    titulo: 'Fisioterapia Traumatológica',
    descripcion: 'Tratamiento de lesiones del sistema músculo-esquelético, fracturas, esguinces y contusiones.',
  },
  {
    icon: CogIcon,
    titulo: 'Terapia Manual Ortopédica',
    descripcion: 'Técnicas manuales especializadas para el tratamiento de disfunciones articulares y musculares.',
  },
  {
    icon: ArrowPathIcon,
    titulo: 'Kinesiología Respiratoria',
    descripcion: 'Tratamiento especializado para mejorar la función pulmonar y capacidad respiratoria.',
  },
  {
    icon: ShieldCheckIcon,
    titulo: 'Rehabilitación Post-Quirúrgica',
    descripcion: 'Recuperación integral después de cirugías ortopédicas y traumatológicas.',
  },
  {
    icon: AdjustmentsHorizontalIcon,
    titulo: 'Reeducación Postural Global (RPG)',
    descripcion: 'Método de fisioterapia que trata las deformaciones corporales de manera global.',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">Servicios</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">Ofrezco tratamientos especializados en kinesiología con técnicas avanzadas para tu recuperación y bienestar físico.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, titulo, descripcion }) => (
            <div key={titulo} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{titulo}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{descripcion}</p>
              <a href="#contacto" className="mt-4 inline-block text-blue-600 font-medium hover:underline">Más información</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



