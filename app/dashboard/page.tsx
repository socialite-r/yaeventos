"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  Heart,
  MapPin,
  Star,
  User,
  Settings,
  CreditCard,
  Bell,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react"
import Link from "next/link"

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("bookings")

  const upcomingBookings = [
    {
      id: 1,
      spaceName: "Salón Elegante Madrid",
      date: "2024-03-15",
      time: "18:00 - 23:00",
      guests: 80,
      status: "confirmed",
      amount: 250,
      image: "/placeholder.svg?height=100&width=150",
      location: "Madrid Centro",
    },
    {
      id: 2,
      spaceName: "Terraza con Vistas",
      date: "2024-04-20",
      time: "16:00 - 22:00",
      guests: 50,
      status: "pending",
      amount: 180,
      image: "/placeholder.svg?height=100&width=150",
      location: "Barcelona, Eixample",
    },
  ]

  const pastBookings = [
    {
      id: 3,
      spaceName: "Loft Industrial",
      date: "2024-01-10",
      time: "19:00 - 02:00",
      guests: 120,
      status: "completed",
      amount: 320,
      image: "/placeholder.svg?height=100&width=150",
      location: "Valencia, Ruzafa",
      rating: 5,
    },
  ]

  const favoriteSpaces = [
    {
      id: 1,
      name: "Jardín Secreto",
      location: "Sevilla Centro",
      price: 200,
      rating: 4.9,
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 2,
      name: "Azotea Moderna",
      location: "Bilbao",
      price: 180,
      rating: 4.7,
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 3,
      name: "Sala Vintage",
      location: "Granada",
      price: 150,
      rating: 4.8,
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  const messages = [
    {
      id: 1,
      from: "María González",
      spaceName: "Salón Elegante Madrid",
      message: "¡Hola! Confirmo que todo está listo para tu evento del 15 de marzo.",
      time: "Hace 2 horas",
      unread: true,
    },
    {
      id: 2,
      from: "Carlos Ruiz",
      spaceName: "Terraza con Vistas",
      message: "Gracias por tu interés. ¿Podrías contarme más sobre tu evento?",
      time: "Hace 1 día",
      unread: false,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmada"
      case "pending":
        return "Pendiente"
      case "completed":
        return "Completada"
      case "cancelled":
        return "Cancelada"
      default:
        return status
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4" />
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "cancelled":
        return <XCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

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
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mi Panel</h1>
          <p className="text-gray-600">Gestiona tus reservas y espacios favoritos</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="bookings">Mis Reservas</TabsTrigger>
            <TabsTrigger value="favorites">Favoritos</TabsTrigger>
            <TabsTrigger value="messages">Mensajes</TabsTrigger>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-6">
            {/* Upcoming Bookings */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Próximas reservas</h2>
              {upcomingBookings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={booking.image || "/placeholder.svg"}
                            alt={booking.spaceName}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold">{booking.spaceName}</h3>
                                <p className="text-gray-600 flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {booking.location}
                                </p>
                              </div>
                              <Badge className={getStatusColor(booking.status)}>
                                {getStatusIcon(booking.status)}
                                <span className="ml-1">{getStatusText(booking.status)}</span>
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                              <div>
                                <Calendar className="h-4 w-4 inline mr-1" />
                                {booking.date}
                              </div>
                              <div>
                                <Clock className="h-4 w-4 inline mr-1" />
                                {booking.time}
                              </div>
                              <div>
                                <User className="h-4 w-4 inline mr-1" />
                                {booking.guests} invitados
                              </div>
                              <div className="font-semibold text-purple-600">€{booking.amount}</div>
                            </div>
                            <div className="flex space-x-2 mt-4">
                              <Link href={`/space/${booking.id}`}>
                                <Button size="sm" variant="outline">
                                  Ver espacio
                                </Button>
                              </Link>
                              <Button size="sm" variant="outline">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Contactar anfitrión
                              </Button>
                              {booking.status === "pending" && (
                                <Button size="sm" variant="destructive">
                                  Cancelar
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No tienes reservas próximas</h3>
                    <p className="text-gray-600 mb-4">Explora espacios únicos para tu próximo evento</p>
                    <Link href="/search">
                      <Button>Buscar espacios</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Past Bookings */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Historial de reservas</h2>
              {pastBookings.length > 0 ? (
                <div className="space-y-4">
                  {pastBookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={booking.image || "/placeholder.svg"}
                            alt={booking.spaceName}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold">{booking.spaceName}</h3>
                                <p className="text-gray-600 flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {booking.location}
                                </p>
                              </div>
                              <Badge className={getStatusColor(booking.status)}>
                                {getStatusIcon(booking.status)}
                                <span className="ml-1">{getStatusText(booking.status)}</span>
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                              <div>
                                <Calendar className="h-4 w-4 inline mr-1" />
                                {booking.date}
                              </div>
                              <div>
                                <Clock className="h-4 w-4 inline mr-1" />
                                {booking.time}
                              </div>
                              <div>
                                <User className="h-4 w-4 inline mr-1" />
                                {booking.guests} invitados
                              </div>
                              <div className="font-semibold text-purple-600">€{booking.amount}</div>
                            </div>
                            {booking.rating && (
                              <div className="flex items-center mb-4">
                                <span className="text-sm text-gray-600 mr-2">Tu valoración:</span>
                                <div className="flex">
                                  {[...Array(booking.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                              </div>
                            )}
                            <div className="flex space-x-2">
                              <Link href={`/space/${booking.id}`}>
                                <Button size="sm" variant="outline">
                                  Ver espacio
                                </Button>
                              </Link>
                              <Button size="sm" variant="outline">
                                Reservar de nuevo
                              </Button>
                              {!booking.rating && (
                                <Button size="sm">
                                  <Star className="h-4 w-4 mr-1" />
                                  Valorar
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No tienes reservas anteriores</h3>
                    <p className="text-gray-600">Tus eventos pasados aparecerán aquí</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Espacios favoritos</h2>
              <Badge variant="secondary">{favoriteSpaces.length} espacios</Badge>
            </div>

            {favoriteSpaces.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteSpaces.map((space) => (
                  <Card key={space.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={space.image || "/placeholder.svg"}
                        alt={space.name}
                        className="w-full h-48 object-cover"
                      />
                      <Button size="sm" variant="secondary" className="absolute top-3 right-3 p-2">
                        <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{space.name}</h3>
                          <p className="text-gray-600 text-sm flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {space.location}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{space.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-bold text-purple-600">
                          €{space.price}
                          <span className="text-sm font-normal text-gray-600">/día</span>
                        </div>
                        <Link href={`/space/${space.id}`}>
                          <Button size="sm">Ver detalles</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No tienes espacios favoritos</h3>
                  <p className="text-gray-600 mb-4">Guarda espacios que te gusten para encontrarlos fácilmente</p>
                  <Link href="/search">
                    <Button>Explorar espacios</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Mensajes</h2>
              <Badge variant="secondary">{messages.filter((m) => m.unread).length} sin leer</Badge>
            </div>

            {messages.length > 0 ? (
              <div className="space-y-4">
                {messages.map((message) => (
                  <Card key={message.id} className={message.unread ? "border-purple-200 bg-purple-50" : ""}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarFallback>{message.from[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium">{message.from}</h4>
                            <span className="text-sm text-gray-500">{message.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{message.spaceName}</p>
                          <p className="text-gray-700">{message.message}</p>
                          {message.unread && (
                            <div className="flex items-center mt-2">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                              <span className="text-xs text-purple-600 font-medium">Nuevo</span>
                            </div>
                          )}
                        </div>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Responder
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No tienes mensajes</h3>
                  <p className="text-gray-600">Tus conversaciones con anfitriones aparecerán aquí</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-bold">Mi Perfil</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Info */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Información personal</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="/placeholder.svg?height=80&width=80" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold">Juan Pérez</h3>
                        <p className="text-gray-600">Miembro desde enero 2023</p>
                        <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                          Cambiar foto
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nombre</label>
                        <input
                          type="text"
                          defaultValue="Juan"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Apellidos</label>
                        <input
                          type="text"
                          defaultValue="Pérez García"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue="juan.perez@email.com"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Teléfono</label>
                        <input
                          type="tel"
                          defaultValue="+34 600 123 456"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Sobre mí</label>
                      <textarea
                        rows={3}
                        defaultValue="Me encanta organizar eventos únicos y descubrir espacios especiales."
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>

                    <Button>Guardar cambios</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Configuración</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Settings className="h-4 w-4 mr-2" />
                      Preferencias
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Métodos de pago
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Bell className="h-4 w-4 mr-2" />
                      Notificaciones
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Estadísticas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">5</div>
                      <div className="text-sm text-gray-600">Eventos realizados</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">4.8</div>
                      <div className="text-sm text-gray-600">Valoración promedio</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">12</div>
                      <div className="text-sm text-gray-600">Espacios favoritos</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
