"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import {
  MapPin,
  Star,
  Users,
  Wifi,
  Car,
  UtensilsCrossed,
  Snowflake,
  Music,
  Heart,
  Share2,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function SpaceDetailPage({ params }: { params: { id: string } }) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [guests, setGuests] = useState(50)

  const space = {
    id: params.id,
    name: "Salón Elegante Madrid",
    location: "Madrid Centro, Calle Gran Vía 123",
    price: 250,
    capacity: { min: 50, max: 150 },
    rating: 4.8,
    reviews: 24,
    description:
      "Un elegante salón en el corazón de Madrid, perfecto para bodas, eventos corporativos y celebraciones especiales. Con techos altos, iluminación profesional y una decoración sofisticada que se adapta a cualquier estilo de evento.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      { icon: Wifi, name: "WiFi gratuito" },
      { icon: Car, name: "Parking incluido" },
      { icon: UtensilsCrossed, name: "Servicio de catering" },
      { icon: Snowflake, name: "Aire acondicionado" },
      { icon: Music, name: "Sistema de sonido" },
    ],
    host: {
      name: "María González",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 4.9,
      responseTime: "1 hora",
      joinedDate: "2022",
    },
    rules: [
      "No se permite fumar en el interior",
      "Música hasta las 23:00",
      "Capacidad máxima: 150 personas",
      "Se requiere limpieza posterior",
    ],
    amenities: [
      "Cocina completa",
      "Baños adaptados",
      "Zona de carga y descarga",
      "Iluminación profesional",
      "Pista de baile",
      "Zona VIP",
    ],
  }

  const reviews = [
    {
      id: 1,
      user: "Ana Martín",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "Hace 2 semanas",
      comment: "Perfecto para nuestra boda. El espacio es precioso y María fue muy atenta en todo momento.",
    },
    {
      id: 2,
      user: "Carlos Ruiz",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "Hace 1 mes",
      comment: "Excelente para eventos corporativos. Muy profesional y bien equipado.",
    },
  ]

  const calculateTotal = () => {
    const basePrice = space.price
    const serviceFee = Math.round(basePrice * 0.1)
    const taxes = Math.round((basePrice + serviceFee) * 0.21)
    return basePrice + serviceFee + taxes
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/search" className="text-2xl font-bold text-purple-600">
              YaEventos
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/search" className="text-purple-600 hover:underline">
            ← Volver a resultados
          </Link>
        </nav>

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{space.name}</h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">{space.rating}</span>
              <span className="ml-1">({space.reviews} reseñas)</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{space.location}</span>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="relative">
            <img
              src={space.images[currentImageIndex] || "/placeholder.svg"}
              alt={space.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <Button
              variant="secondary"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
              disabled={currentImageIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={() => setCurrentImageIndex(Math.min(space.images.length - 1, currentImageIndex + 1))}
              disabled={currentImageIndex === space.images.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex space-x-2 mt-4">
            {space.images.map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${space.name} ${index + 1}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer ${
                  index === currentImageIndex ? "ring-2 ring-purple-600" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Descripción</TabsTrigger>
                <TabsTrigger value="amenities">Servicios</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                <TabsTrigger value="location">Ubicación</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Acerca de este espacio</h3>
                    <p className="text-gray-700 mb-6">{space.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-medium mb-2">Capacidad</h4>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {space.capacity.min} - {space.capacity.max} personas
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Precio por día</h4>
                        <div className="text-2xl font-bold text-purple-600">€{space.price}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Características principales</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {space.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <feature.icon className="h-5 w-5 text-purple-600 mr-2" />
                            <span className="text-sm">{feature.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Host Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Tu anfitrión</h3>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={space.host.avatar || "/placeholder.svg"} />
                        <AvatarFallback>MG</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold">{space.host.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            {space.host.rating}
                          </div>
                          <span>Responde en {space.host.responseTime}</span>
                          <span>Anfitrión desde {space.host.joinedDate}</span>
                        </div>
                      </div>
                      <Button variant="outline">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contactar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amenities">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Servicios incluidos</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {space.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="font-semibold mb-3">Normas del espacio</h4>
                    <ul className="space-y-2">
                      {space.rules.map((rule, index) => (
                        <li key={index} className="text-gray-700">
                          • {rule}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold">Reseñas ({space.reviews})</h3>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-semibold">{space.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                          <div className="flex items-center space-x-3 mb-3">
                            <Avatar>
                              <AvatarImage src={review.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{review.user[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{review.user}</h4>
                              <div className="flex items-center space-x-2">
                                <div className="flex">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-600">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="location">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                      <p className="text-gray-600">Mapa interactivo (Google Maps API)</p>
                    </div>
                    <p className="text-gray-700">{space.location}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-600 mb-1">€{space.price}</div>
                  <div className="text-gray-600">por día</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Fecha del evento</label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Número de invitados</label>
                    <Input
                      type="number"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      min={space.capacity.min}
                      max={space.capacity.max}
                    />
                    <p className="text-xs text-gray-600 mt-1">
                      Capacidad: {space.capacity.min}-{space.capacity.max} personas
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje para el anfitrión</label>
                    <Textarea placeholder="Cuéntanos sobre tu evento..." rows={3} />
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span>€{space.price} x 1 día</span>
                    <span>€{space.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Tarifa de servicio</span>
                    <span>€{Math.round(space.price * 0.1)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Impuestos</span>
                    <span>€{Math.round((space.price + Math.round(space.price * 0.1)) * 0.21)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>€{calculateTotal()}</span>
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 mb-3">Reservar ahora</Button>

                <Button variant="outline" className="w-full bg-transparent">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contactar anfitrión
                </Button>

                <p className="text-xs text-gray-600 text-center mt-4">
                  No se realizará ningún cargo hasta confirmar la reserva
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
