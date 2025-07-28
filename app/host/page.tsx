import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Euro, Users, Star, ArrowRight, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function HostPage() {
  const benefits = [
    {
      icon: Euro,
      title: "Genera ingresos extra",
      description: "Monetiza tu espacio cuando no lo uses y obtén ingresos adicionales cada mes",
    },
    {
      icon: Users,
      title: "Comunidad confiable",
      description: "Conecta con personas que valoran espacios únicos para sus eventos especiales",
    },
    {
      icon: Shield,
      title: "Protección total",
      description: "Seguro de responsabilidad civil y garantía de pago en todas las reservas",
    },
    {
      icon: Clock,
      title: "Flexibilidad total",
      description: "Tú decides cuándo, cómo y a quién alquilar tu espacio",
    },
  ]

  const steps = [
    {
      number: "1",
      title: "Registra tu espacio",
      description: "Sube fotos, describe tu espacio y establece tus precios",
    },
    {
      number: "2",
      title: "Recibe solicitudes",
      description: "Los huéspedes te contactarán para reservar tu espacio",
    },
    {
      number: "3",
      title: "Acepta y cobra",
      description: "Acepta las reservas que te convengan y recibe el pago automáticamente",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      location: "Madrid",
      earnings: "€2,400",
      period: "últimos 3 meses",
      comment:
        "YaEventos me ha permitido generar ingresos extra con mi salón. Los huéspedes son respetuosos y el proceso es muy sencillo.",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      location: "Barcelona",
      earnings: "€1,800",
      period: "últimos 3 meses",
      comment:
        "Excelente plataforma. He alquilado mi terraza para varios eventos y siempre ha sido una experiencia positiva.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              YaEventos
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost">Iniciar Sesión</Button>
              </Link>
              <Link href="/host/register">
                <Button>Comenzar</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Convierte tu espacio en una fuente de <span className="text-yellow-300">ingresos</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Únete a miles de anfitriones que ya están generando ingresos extra alquilando sus espacios para eventos
            únicos y memorables.
          </p>
          <Link href="/host/register">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Comenzar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué ser anfitrión en YaEventos?</h2>
            <p className="text-gray-600">Descubre todas las ventajas de formar parte de nuestra comunidad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cómo funciona</h2>
            <p className="text-gray-600">Comenzar es muy fácil, solo sigue estos 3 pasos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calcula tus ingresos potenciales</h2>
            <p className="text-gray-600">Estima cuánto podrías ganar alquilando tu espacio</p>
          </div>

          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">€150</div>
                <div className="text-sm text-gray-600">Precio promedio por día</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                <div className="text-sm text-gray-600">Reservas por mes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">€1,200</div>
                <div className="text-sm text-gray-600">Ingresos mensuales estimados</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                *Los ingresos reales pueden variar según la ubicación, tipo de espacio y demanda
              </p>
              <Link href="/host/register">
                <Button size="lg">Comenzar a ganar dinero</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros anfitriones</h2>
            <p className="text-gray-600">Historias reales de éxito de nuestra comunidad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{testimonial.earnings}</div>
                      <div className="text-xs text-gray-600">{testimonial.period}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
          <p className="text-purple-100 mb-8 text-lg">
            Únete a YaEventos hoy y comienza a generar ingresos con tu espacio
          </p>
          <Link href="/host/register">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Registrar mi espacio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">YaEventos</h4>
              <p className="text-gray-400">La plataforma líder para reservar espacios únicos para eventos</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Para Anfitriones</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/host">Ser Anfitrión</Link>
                </li>
                <li>
                  <Link href="/host/dashboard">Panel de Control</Link>
                </li>
                <li>
                  <Link href="/host/pricing">Precios</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Soporte</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help">Centro de Ayuda</Link>
                </li>
                <li>
                  <Link href="/contact">Contacto</Link>
                </li>
                <li>
                  <Link href="/terms">Términos</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Síguenos</h5>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Twitter
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 YaEventos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
