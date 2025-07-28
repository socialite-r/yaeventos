import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Calendar, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-purple-600">YaEventos</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/search" className="text-gray-700 hover:text-purple-600">
                Buscar Espacios
              </Link>
              <Link href="/host" className="text-gray-700 hover:text-purple-600">
                Ser Anfitrión
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Encuentra el espacio perfecto para tu <span className="text-purple-600">evento</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubre y reserva espacios únicos para bodas, conferencias, fiestas y más. Conecta con propietarios locales
            y haz realidad tu evento soñado.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="¿Dónde?" className="pl-10 h-12" />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="¿Cuándo?" type="date" className="pl-10 h-12" />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="¿Cuántos invitados?" type="number" className="pl-10 h-12" />
              </div>
              <Link href="/search">
                <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700">
                  <Search className="h-5 w-5 mr-2" />
                  Buscar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spaces */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Espacios Destacados</h3>
            <p className="text-gray-600">Descubre los espacios más populares para tu próximo evento</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={`/placeholder.svg?height=200&width=300&query=elegant event space ${i}`}
                    alt={`Espacio ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-purple-600">Destacado</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">Salón Elegante {i}</h4>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-600">4.8</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Espacio moderno perfecto para eventos corporativos y celebraciones
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      50-200 personas
                    </div>
                    <div className="text-lg font-bold text-purple-600">€{150 + i * 50}/día</div>
                  </div>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">¿Cómo funciona?</h3>
            <p className="text-gray-600">Reservar tu espacio perfecto es más fácil que nunca</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">1. Busca</h4>
              <p className="text-gray-600">Utiliza nuestros filtros avanzados para encontrar el espacio perfecto</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">2. Reserva</h4>
              <p className="text-gray-600">Selecciona fechas, revisa detalles y confirma tu reserva de forma segura</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">3. Disfruta</h4>
              <p className="text-gray-600">Celebra tu evento y comparte tu experiencia con otros usuarios</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">¿Tienes un espacio para eventos?</h3>
          <p className="text-purple-100 mb-8 text-lg">
            Únete a nuestra comunidad de anfitriones y comienza a generar ingresos con tu espacio
          </p>
          <Link href="/host/register">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Convertirse en Anfitrión
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
