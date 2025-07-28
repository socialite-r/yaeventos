"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Euro, Eye, MessageSquare, Plus, Settings, Star, TrendingUp, Bell, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function HostDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = {
    totalEarnings: 3250,
    monthlyEarnings: 850,
    totalBookings: 24,
    monthlyBookings: 6,
    totalViews: 1240,
    monthlyViews: 320,
    averageRating: 4.8,
  }

  const recentBookings = [
    {
      id: 1,
      guestName: "Ana Martín",
      spaceName: "Salón Elegante",
      date: "2024-02-15",
      status: "confirmed",
      amount: 250,
      guests: 80,
    },
    {
      id: 2,
      guestName: "Carlos Ruiz",
      spaceName: "Terraza Premium",
      date: "2024-02-20",
      status: "pending",
      amount: 180,
      guests: 50,
    },
    {
      id: 3,
      guestName: "Laura García",
      spaceName: "Salón Elegante",
      date: "2024-02-25",
      status: "confirmed",
      amount: 250,
      guests: 120,
    },
  ]

  const spaces = [
    {
      id: 1,
      name: "Salón Elegante",
      image: "/placeholder.svg?height=100&width=150",
      status: "active",
      bookings: 18,
      rating: 4.8,
      earnings: 2100,
    },
    {
      id: 2,
      name: "Terraza Premium",
      image: "/placeholder.svg?height=100&width=150",
      status: "active",
      bookings: 6,
      rating: 4.9,
      earnings: 1150,
    },
  ]

  const messages = [
    {
      id: 1,
      from: "Ana Martín",
      message: "¿Está disponible para el 15 de marzo?",
      time: "Hace 2 horas",
      unread: true,
    },
    {
      id: 2,
      from: "Carlos Ruiz",
      message: "Gracias por la excelente experiencia",
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
      case "cancelled":
        return "Cancelada"
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-purple-600">
                YaEventos
              </Link>
              <Badge variant="secondary">Panel de Anfitrión</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Panel de Control</h1>
          <p className="text-gray-600">Gestiona tus espacios y reservas</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="bookings">Reservas</TabsTrigger>
            <TabsTrigger value="spaces">Mis Espacios</TabsTrigger>
            <TabsTrigger value="messages">Mensajes</TabsTrigger>
            <TabsTrigger value="analytics">Analíticas</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
                  <Euro className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">€{stats.totalEarnings}</div>
                  <p className="text-xs text-muted-foreground">+€{stats.monthlyEarnings} este mes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Reservas Totales</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalBookings}</div>
                  <p className="text-xs text-muted-foreground">+{stats.monthlyBookings} este mes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Visualizaciones</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalViews}</div>
                  <p className="text-xs text-muted-foreground">+{stats.monthlyViews} este mes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Valoración Media</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.averageRating}</div>
                  <p className="text-xs text-muted-foreground">Basado en todas las reseñas</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reservas Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.slice(0, 3).map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{booking.guestName}</p>
                          <p className="text-sm text-gray-600">{booking.spaceName}</p>
                          <p className="text-xs text-gray-500">{booking.date}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(booking.status)}>{getStatusText(booking.status)}</Badge>
                          <p className="text-sm font-medium mt-1">€{booking.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mensajes Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{message.from[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-sm">{message.from}</p>
                            <span className="text-xs text-gray-500">{message.time}</span>
                          </div>
                          <p className="text-sm text-gray-600">{message.message}</p>
                          {message.unread && <div className="w-2 h-2 bg-purple-600 rounded-full mt-1"></div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-20 flex flex-col items-center justify-center">
                    <Plus className="h-6 w-6 mb-2" />
                    Añadir Nuevo Espacio
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                    <Settings className="h-6 w-6 mb-2" />
                    Configurar Precios
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                    <TrendingUp className="h-6 w-6 mb-2" />
                    Promocionar Espacios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Gestión de Reservas</h2>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Ver Calendario
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Huésped
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Espacio
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fecha
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Invitados
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Estado
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Importe
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentBookings.map((booking) => (
                        <tr key={booking.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback>{booking.guestName[0]}</AvatarFallback>
                              </Avatar>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{booking.guestName}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.spaceName}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.guests}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={getStatusColor(booking.status)}>{getStatusText(booking.status)}</Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            €{booking.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                Ver
                              </Button>
                              {booking.status === "pending" && (
                                <>
                                  <Button size="sm">Aceptar</Button>
                                  <Button size="sm" variant="destructive">
                                    Rechazar
                                  </Button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="spaces" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Mis Espacios</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Añadir Espacio
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spaces.map((space) => (
                <Card key={space.id}>
                  <CardContent className="p-0">
                    <img
                      src={space.image || "/placeholder.svg"}
                      alt={space.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{space.name}</h3>
                        <Badge variant={space.status === "active" ? "default" : "secondary"}>
                          {space.status === "active" ? "Activo" : "Inactivo"}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Reservas</p>
                          <p className="font-semibold">{space.bookings}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Valoración</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="font-semibold">{space.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Ingresos generados</p>
                        <p className="text-xl font-bold text-purple-600">€{space.earnings}</p>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Settings className="h-4 w-4 mr-1" />
                          Editar
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <BarChart3 className="h-4 w-4 mr-1" />
                          Stats
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Centro de Mensajes</h2>
              <Badge variant="secondary">{messages.filter((m) => m.unread).length} sin leer</Badge>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-200">
                  {messages.map((message) => (
                    <div key={message.id} className={`p-6 hover:bg-gray-50 ${message.unread ? "bg-blue-50" : ""}`}>
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarFallback>{message.from[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium">{message.from}</h4>
                            <span className="text-sm text-gray-500">{message.time}</span>
                          </div>
                          <p className="text-gray-700">{message.message}</p>
                          {message.unread && (
                            <div className="flex items-center mt-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                              <span className="text-xs text-blue-600 font-medium">Nuevo</span>
                            </div>
                          )}
                        </div>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Responder
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold">Analíticas y Rendimiento</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ingresos Mensuales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">Gráfico de ingresos mensuales</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Visualizaciones por Espacio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">Gráfico de visualizaciones</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tasa de Conversión</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Visualizaciones a consultas</span>
                      <span className="font-semibold">12.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Consultas a reservas</span>
                      <span className="font-semibold">68.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tasa de conversión total</span>
                      <span className="font-semibold text-purple-600">8.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rendimiento por Temporada</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { season: "Primavera", bookings: 8, revenue: 1200 },
                      { season: "Verano", bookings: 12, revenue: 1800 },
                      { season: "Otoño", bookings: 6, revenue: 900 },
                      { season: "Invierno", bookings: 4, revenue: 600 },
                    ].map((item) => (
                      <div key={item.season} className="flex justify-between items-center">
                        <span>{item.season}</span>
                        <div className="text-right">
                          <div className="font-semibold">€{item.revenue}</div>
                          <div className="text-sm text-gray-600">{item.bookings} reservas</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
