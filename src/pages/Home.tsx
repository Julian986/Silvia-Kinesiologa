import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Clock, CheckCircle, Star, Menu, X, Heart, Activity, Users, Award } from 'lucide-react';

// Componente principal de la landing page
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Form validation
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.nombre.trim()) errors.nombre = 'El nombre es requerido';
    if (!formData.email.trim()) errors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email inválido';
    if (!formData.telefono.trim()) errors.telefono = 'El teléfono es requerido';
    if (!formData.mensaje.trim()) errors.mensaje = 'El mensaje es requerido';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Aquí se integraría con el backend
      console.log('Form submitted:', formData);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      }, 3000);
    }
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Datos de testimonios
  const testimonials = [
    {
      name: "Carmen López",
      age: "45 años",
      condition: "Rehabilitación post-operatoria",
      text: "Después de mi cirugía de rodilla, pensé que nunca volvería a caminar normalmente. La Lic. Silvia me ayudó no solo a recuperar la movilidad, sino a sentirme más fuerte que antes.",
      rating: 5
    },
    {
      name: "Roberto Martín",
      age: "32 años", 
      condition: "Lesión deportiva",
      text: "Como futbolista amateur, las lesiones son parte del juego. Pero gracias al tratamiento profesional y personalizado de Silvia, pude volver a la cancha en tiempo récord.",
      rating: 5
    },
    {
      name: "Elena Fernández",
      age: "58 años",
      condition: "RPG - Reeducación Postural",
      text: "Años de dolor de espalda afectaban mi calidad de vida. El método RPG que aplica Silvia no solo alivió mi dolor, sino que me enseñó a mantener una postura correcta.",
      rating: 5
    },
    {
      name: "Miguel Torres",
      age: "28 años",
      condition: "Kinesiología respiratoria",
      text: "Después del COVID, mi capacidad pulmonar estaba muy afectada. El programa de kinesiología respiratoria de Silvia me devolvió la confianza y la respiración normal.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Lic. Silvia González
              </h1>
              <p className="text-xs text-gray-600">Kinesióloga Profesional</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('sobre-mi')} className="text-gray-700 hover:text-blue-600 transition-colors">
                  Sobre Mí
                </button>
                <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-600 transition-colors">
                  Servicios
                </button>
                <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-blue-600 transition-colors">
                  Testimonios
                </button>
                <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contacto
                </button>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Reservar Cita
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-lg mt-2">
                <button onClick={() => scrollToSection('inicio')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('sobre-mi')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left">
                  Sobre Mí
                </button>
                <button onClick={() => scrollToSection('servicios')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left">
                  Servicios
                </button>
                <button onClick={() => scrollToSection('testimonios')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left">
                  Testimonios
                </button>
                <button onClick={() => scrollToSection('contacto')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left">
                  Contacto
                </button>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="w-full mt-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
                >
                  Reservar Cita
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
        {/* Formas geométricas decorativas */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-teal-200/30 rounded-full blur-lg"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Recupera tu{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  bienestar
                </span>{' '}
                con kinesiología profesional
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Más de 12 años de experiencia ayudando a personas a recuperar su movilidad, 
                aliviar el dolor y mejorar su calidad de vida con tratamientos personalizados y técnicas avanzadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Reservar Consulta
                </button>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Ver Servicios
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">12+</div>
                  <div className="text-sm text-gray-600">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">1500+</div>
                  <div className="text-sm text-gray-600">Pacientes atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">97%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Placeholder para imagen profesional */}
              <div className="relative bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Atención Profesional</h3>
                  <p className="text-gray-600">Imagen profesional de la Lic. Silvia González en su consulta, mostrando calidez y profesionalismo</p>
                </div>
                
                {/* Elementos flotantes */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mí Section */}
      <section id="sobre-mi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Placeholder para foto profesional */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-lg">
                  <div className="bg-white rounded-2xl p-8 text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-600">Foto profesional de la Lic. Silvia González</p>
                  </div>
                </div>
                
                {/* Certificaciones flotantes */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-lg text-xs font-semibold">
                  Especialista Certificada
                </div>
                <div className="absolute bottom-4 left-4 bg-teal-600 text-white p-2 rounded-lg text-xs font-semibold">
                  12+ Años Exp.
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Conocé a la{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Lic. Silvia González
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Licenciada en Kinesiología y Fisiatría por la Universidad Nacional de La Plata, con más de 12 años 
                  de experiencia dedicados a mejorar la calidad de vida de mis pacientes a través de tratamientos 
                  personalizados y basados en evidencia científica.
                </p>
                <p>
                  Mi enfoque integral combina técnicas tradicionales con las últimas innovaciones en rehabilitación, 
                  siempre priorizando el bienestar y la recuperación completa de cada persona que confía en mi atención profesional.
                </p>
              </div>

              {/* Especialidades y Credenciales */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Especialidades y Certificaciones</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Rehabilitación Deportiva',
                    'Fisioterapia Neurológica',
                    'Terapia Manual Ortopédica',
                    'Kinesiología Respiratoria',
                    'Rehabilitación Post-Quirúrgica',
                    'Reeducación Postural Global'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Membresías */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl">
                <h4 className="font-semibold text-gray-900 mb-2">Membresías Profesionales</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Colegio de Kinesiólogos de la Provincia de Buenos Aires</li>
                  <li>• Asociación Argentina de Fisioterapia</li>
                  <li>• International Federation of Sports Physical Therapy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Especializados
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de tratamientos kinésicos personalizados para cada necesidad, 
              utilizando las técnicas más avanzadas y efectivas del mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Rehabilitación Deportiva',
                description: 'Recuperación específica para atletas y deportistas. Tratamiento de lesiones deportivas con protocolos especializados.',
                icon: <Activity className="w-8 h-8" />,
                features: ['Prevención de lesiones', 'Retorno al deporte', 'Fortalecimiento específico']
              },
              {
                title: 'Fisioterapia Traumatológica',
                description: 'Tratamiento de lesiones del sistema músculo-esquelético. Rehabilitación de fracturas, esguinces y contusiones.',
                icon: <Heart className="w-8 h-8" />,
                features: ['Recuperación post-fractura', 'Tratamiento de esguinces', 'Movilización articular']
              },
              {
                title: 'Terapia Manual Ortopédica',
                description: 'Técnicas manuales especializadas para el tratamiento de disfunciones articulares y musculares.',
                icon: <Users className="w-8 h-8" />,
                features: ['Movilización articular', 'Liberación miofascial', 'Manipulación vertebral']
              },
              {
                title: 'Kinesiología Respiratoria',
                description: 'Tratamiento especializado para mejorar la función pulmonar y capacidad respiratoria.',
                icon: <Activity className="w-8 h-8" />,
                features: ['Reeducación respiratoria', 'Drenaje postural', 'Ejercicios respiratorios']
              },
              {
                title: 'Rehabilitación Post-Quirúrgica',
                description: 'Recuperación integral después de cirugías ortopédicas y traumatológicas.',
                icon: <CheckCircle className="w-8 h-8" />,
                features: ['Movilización temprana', 'Fortalecimiento progresivo', 'Retorno funcional']
              },
              {
                title: 'Reeducación Postural Global (RPG)',
                description: 'Método de fisioterapia que trata las deformaciones corporales de manera global.',
                icon: <Award className="w-8 h-8" />,
                features: ['Corrección postural', 'Estiramiento global', 'Educación corporal']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-200">
                  Consultar Servicio
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Proceso de Trabajo
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un enfoque sistemático y personalizado para garantizar tu recuperación exitosa
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Evaluación Inicial',
                description: 'Análisis completo de tu condición física, historial médico y objetivos de recuperación.',
                icon: <Users className="w-12 h-12" />
              },
              {
                step: '02',
                title: 'Diagnóstico Funcional',
                description: 'Identificación precisa de las disfunciones y elaboración del diagnóstico kinésico.',
                icon: <Activity className="w-12 h-12" />
              },
              {
                step: '03',
                title: 'Plan de Tratamiento',
                description: 'Diseño de un programa terapéutico personalizado con objetivos claros y medibles.',
                icon: <CheckCircle className="w-12 h-12" />
              },
              {
                step: '04',
                title: 'Seguimiento Continuo',
                description: 'Evaluación constante del progreso y ajustes del tratamiento según la evolución.',
                icon: <Award className="w-12 h-12" />
              }
            ].map((process, index) => (
              <div key={index} className="relative text-center group">
                {/* Línea conectora (excepto en el último elemento) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-teal-200 transform translate-x-8"></div>
                )}
                
                <div className="relative bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                  
                  <div className="text-blue-600 mb-6 flex justify-center mt-4">
                    {process.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="testimonios" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Pacientes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La satisfacción de nuestros pacientes es nuestro mayor logro
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 bg-blue-600 rounded-br-3xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              
              <div className="pt-8">
                <div className="flex mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[activeTestimonial].age} • {testimonials[activeTestimonial].condition}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === activeTestimonial 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ChevronDown className="w-6 h-6 text-gray-600 transform rotate-90" />
            </button>
            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ChevronDown className="w-6 h-6 text-gray-600 transform -rotate-90" />
            </button>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contacto y{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Ubicación
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Contactanos para agendar tu consulta
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Teléfono</h4>
                      <p className="text-gray-600">+54 11 5432-1098</p>
                      <p className="text-sm text-gray-500">Lun a Vie: 9:00 - 19:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">consultas@silviagonzalez.com</p>
                      <p className="text-sm text-gray-500">Te responderemos en 24hs</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ubicación</h4>
                      <p className="text-gray-600">Av. Corrientes 2456, 3° Piso "B"</p>
                      <p className="text-gray-600">Balvanera, CABA</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Horarios de Atención</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Lunes a Viernes: 9:00 - 19:00</p>
                        <p>Sábados: 9:00 - 13:00</p>
                        <p>Domingos: Cerrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa Placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Ubicación en el Mapa</h4>
                <p className="text-gray-600 mb-4">
                  Fácil acceso en transporte público. A 3 cuadras de la estación Carlos Gardel (Línea B)
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Ver en Google Maps
                </button>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Consulta</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-gray-600">Te contactaremos en las próximas 24 horas para confirmar tu cita.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.nombre ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="Tu nombre completo"
                    />
                    {formErrors.nombre && <p className="mt-1 text-sm text-red-600">{formErrors.nombre}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="tu@email.com"
                    />
                    {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.telefono ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="+54 11 1234-5678"
                    />
                    {formErrors.telefono && <p className="mt-1 text-sm text-red-600">{formErrors.telefono}</p>}
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.mensaje ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none`}
                      placeholder="Contanos sobre tu consulta, síntomas o tratamiento que necesitás..."
                    />
                    {formErrors.mensaje && <p className="mt-1 text-sm text-red-600">{formErrors.mensaje}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Enviar Consulta
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo y Descripción */}
            <div className="col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                Lic. Silvia González
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Más de 12 años brindando atención kinesiológica de excelencia. 
                Comprometida con tu recuperación y bienestar.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">@</span>
                </div>
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('inicio')} className="hover:text-blue-400 transition-colors">Inicio</button></li>
                <li><button onClick={() => scrollToSection('sobre-mi')} className="hover:text-blue-400 transition-colors">Sobre Mí</button></li>
                <li><button onClick={() => scrollToSection('servicios')} className="hover:text-blue-400 transition-colors">Servicios</button></li>
                <li><button onClick={() => scrollToSection('testimonios')} className="hover:text-blue-400 transition-colors">Testimonios</button></li>
                <li><button onClick={() => scrollToSection('contacto')} className="hover:text-blue-400 transition-colors">Contacto</button></li>
              </ul>
            </div>

            {/* Información Legal */}
            <div>
              <h4 className="font-semibold mb-4">Información</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Obras Sociales</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Lic. Silvia González - Kinesióloga. Todos los derechos reservados.</p>
            <p className="mt-2">Matrícula Profesional N° 54321 - Colegio de Kinesiólogos de Buenos Aires</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;