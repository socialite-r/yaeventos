import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Calendar, Star, Shield, Heart, TrendingUp, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { icon: Users, number: "50,000+", label: "Usuarios activos" },
    { icon: MapPin, number: "5,000+", label: "Espacios únicos" },
    { icon: Calendar, number: "25,000+", label: "Eventos realizados" },
    { icon: Star, number: "4.8", label: "Valoración promedio" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Pasión por los eventos",
      description: "Creemos que cada evento es único y merece un espacio especial que lo haga memorable.",
    },
    {
      icon: Shield,
      title: "Confianza y seguridad",
      description: "Protegemos tanto a anfitriones como a huéspedes con seguros y verificaciones rigurosas.",
    },
    {
      icon: Globe,
      title: "Comunidad global",
      description: "Conectamos personas de todo el mundo para crear experiencias únicas e inolvidables.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento sostenible",
      description: "Ayudamos a los anfitriones a generar ingresos mientras preservamos espacios únicos.",
    },
  ]

  const team = [
    {
      name: "Ana García",
      role: "CEO & Fundadora",
      description: "Ex-directora de eventos con 15 años de experiencia en la industria.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Carlos Martín",
      role: "CTO",
      description: "Ingeniero de software especializado en plataformas de marketplace.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "María López",
      role: "Head of Operations",
      description: "Experta en operaciones y experiencia del cliente en startups tecnológicas.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Fundación de YaEventos",
      description: "Nace la idea de democratizar el acceso a espacios únicos para eventos.",
    },
    {
      year: "2021",
      title: "Primeros 1,000 espacios",
      description: "Alcanzamos nuestro primer hito con espacios en las principales ciudades españolas.",
    },
    {
      year: "2022",
      title: "Expansión internacional",
      description: "Comenzamos operaciones en Portugal y Francia.",
    },
    {
      year: "2023",
      title: "50,000 usuarios",
      description: "Superamos los 50,000 usuarios registrados y 25,000 eventos realizados.",
    },
    {
      year: "2024",
      title: "Nuevas funcionalidades",
      description: "Lanzamos herramientas avanzadas para anfitriones y sistema de reseñas mejorado.",
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
            <nav className="hidden md:flex space-x-8">
              <Link href="/search" className="text-gray-700 hover:text-purple-600">
                Buscar Espacios
              </Link>
              <Link href="/host" className="text-gray-700 hover:text-purple-600">
                Ser Anfitrión
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 font-medium">
                Acerca de
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost">Iniciar Sesión</Button>
              </Link>
              <Link href="/register">
                <Button>Registrarse</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestra <span className="text-yellow-300">misión</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Conectamos personas con espacios únicos para crear eventos inolvidables. Creemos que cada celebración merece
            un lugar especial.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra historia</h2>
            <p className="text-gray-600">Cómo nació YaEventos</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  YaEventos nació en 2020 de la frustración de nuestra fundadora, Ana García, al buscar el espacio
                  perfecto para la boda de su hermana. Después de semanas de búsqueda infructuosa en directorios
                  desactualizados y llamadas a espacios que ya no existían, se dio cuenta de que había un problema real
                  que resolver.
                </p>
                <p className="text-gray-700 mb-6">
                  "¿Por qué no existe una plataforma donde pueda ver espacios reales, con fotos actuales, precios
                  transparentes y disponibilidad en tiempo real?", se preguntó Ana. Esa pregunta se convirtió en la
                  semilla de YaEventos.
                </p>
                <p className="text-gray-700">
                  Hoy, miles de personas han encontrado el espacio perfecto para sus eventos a través de nuestra
                  plataforma, y cientos de propietarios han convertido sus espacios únicos en fuentes de ingresos
                  sostenibles. Seguimos creciendo con la misión de hacer que cada evento sea especial.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros valores</h2>
            <p className="text-gray-600">Los principios que guían todo lo que hacemos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro camino</h2>
            <p className="text-gray-600">Los hitos más importantes de YaEventos</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro equipo</h2>
            <p className="text-gray-600">Las personas que hacen posible YaEventos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Quieres formar parte de nuestra historia?</h2>
          <p className="text-purple-100 mb-8 text-lg">
            Únete a miles de personas que ya confían en YaEventos para sus eventos especiales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Buscar espacios
              </Button>
            </Link>
            <Link href="/host">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                Ser anfitrión
              </Button>
            </Link>
          </div>
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
              <h5 className="font-semibold mb-4">Para Usuarios</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/search">Buscar Espacios</Link>
                </li>
                <li>
                  <Link href="/favorites">Mis Favoritos</Link>
                </li>
                <li>
                  <Link href="/bookings">Mis Reservas</Link>
                </li>
              </ul>
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
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 YaEventos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
