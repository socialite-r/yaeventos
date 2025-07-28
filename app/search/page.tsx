"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Calendar, Users, Star, Filter, Grid, List, Heart } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [capacity, setCapacity] = useState([0, 500])

  const spaces = [
    {
      id: 1,
      name: "Salón Elegante Madrid",
      location: "Madrid Centro",
      price: 250,
      capacity: "50-150",
      rating: 4.8,
      reviews: 24,
      image: "/placeholder.svg?height=200&width=300",
      features: ["WiFi", "Catering", "Parking", "A/C"],
      type: "Salón de eventos",
    },
    {
      id: 2,
      name: "Terraza con Vistas",
      location: "Barcelona, Eixample",
      price: 180,
      capacity: "30-80",
      rating: 4.9,
      reviews: 18,
      image: "/placeholder.svg?height=200&width=300",
      features: ["Vista panorámica", "Bar", "Música", "Terraza"],
      type: "Terraza",
    },
    {
      id: 3,
      name: "Loft Industrial",
      location: "Valencia, Ruzafa",
      price: 320,
      capacity: "100-200",
      rating: 4.7,
      reviews: 31,
      image: "/placeholder.svg?height=200&width=300",
      features: ["Estilo industrial", "Cocina", "Parking", "Flexible"],
      type: "Loft",
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
              <Link href="/dashboard">
                <Button variant="ghost">Mi Cuenta</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input placeholder="Ubicación" className="pl-10" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input placeholder="Fecha" type="date" className="pl-10" />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input placeholder="Invitados" type="number" className="pl-10" />
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Search className="h-5 w-5 mr-2" />
              Buscar
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Filter className="h-5 w-5 mr-2" />
                  <h3 className="font-semibold">Filtros</h3>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Precio por día</h4>
                  <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={10} className="mb-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>€{priceRange[0]}</span>
                    <span>€{priceRange[1]}</span>
                  </div>
                </div>

                {/* Capacity */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Capacidad</h4>
                  <Slider value={capacity} onValueChange={setCapacity} max={500} step={10} className="mb-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{capacity[0]} personas</span>
                    <span>{capacity[1]} personas</span>
                  </div>
                </div>

                {/* Space Type */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Tipo de espacio</h4>
                  <div className="space-y-2">
                    {["Salón de eventos", "Terraza", "Loft", "Jardín", "Auditorio"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={type} />
                        <label htmlFor={type} className="text-sm">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Servicios</h4>
                  <div className="space-y-2">
                    {["WiFi", "Parking", "Catering", "A/C", "Música", "Bar"].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox id={feature} />
                        <label htmlFor={feature} className="text-sm">
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Limpiar Filtros
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">Espacios disponibles</h2>
                <p className="text-gray-600">{spaces.length} espacios encontrados</p>
              </div>
              <div className="flex items-center space-x-4">
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevancia</SelectItem>
                    <SelectItem value="price-low">Precio: menor a mayor</SelectItem>
                    <SelectItem value="price-high">Precio: mayor a menor</SelectItem>
                    <SelectItem value="rating">Mejor valorados</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
              {spaces.map((space) => (
                <Card key={space.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`${viewMode === "list" ? "flex" : ""}`}>
                    <div className={`relative ${viewMode === "list" ? "w-1/3" : ""}`}>
                      <img
                        src={space.image || "/placeholder.svg"}
                        alt={space.name}
                        className={`object-cover ${viewMode === "list" ? "h-full w-full" : "w-full h-48"}`}
                      />
                      <Button size="sm" variant="secondary" className="absolute top-3 right-3 p-2">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
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
                          <span className="ml-1 text-sm text-gray-600">({space.reviews})</span>
                        </div>
                      </div>

                      <Badge variant="secondary" className="mb-3">
                        {space.type}
                      </Badge>

                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Users className="h-4 w-4 mr-1" />
                        {space.capacity} personas
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {space.features.slice(0, 3).map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {space.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{space.features.length - 3} más
                          </Badge>
                        )}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-purple-600">
                          €{space.price}
                          <span className="text-sm font-normal text-gray-600">/día</span>
                        </div>
                        <Link href={`/space/${space.id}`}>
                          <Button>Ver Detalles</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
