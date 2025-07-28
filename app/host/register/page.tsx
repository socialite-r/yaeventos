"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, MapPin, Users, Euro, Camera, X, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function HostRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const totalSteps = 4

  const spaceTypes = [
    "Salón de eventos",
    "Terraza",
    "Loft",
    "Jardín",
    "Auditorio",
    "Galería de arte",
    "Restaurante",
    "Hotel",
    "Casa particular",
    "Espacio coworking",
  ]

  const features = [
    "WiFi gratuito",
    "Parking incluido",
    "Servicio de catering",
    "Aire acondicionado",
    "Sistema de sonido",
    "Iluminación profesional",
    "Cocina completa",
    "Baños adaptados",
    "Zona de carga y descarga",
    "Pista de baile",
    "Zona VIP",
    "Jardín/Terraza",
    "Vista panorámica",
    "Acceso 24h",
  ]

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Información básica</h2>
              <p className="text-gray-600">Cuéntanos sobre tu espacio</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre del espacio *</label>
                <Input placeholder="Ej: Salón Elegante Madrid Centro" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tipo de espacio *</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tipo de espacio" />
                  </SelectTrigger>
                  <SelectContent>
                    {spaceTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Descripción *</label>
                <Textarea placeholder="Describe tu espacio, su ambiente, características especiales..." rows={4} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Capacidad mínima *</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input type="number" placeholder="20" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Capacidad máxima *</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input type="number" placeholder="150" className="pl-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Ubicación</h2>
              <p className="text-gray-600">¿Dónde se encuentra tu espacio?</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Dirección completa *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Calle, número, ciudad, código postal" className="pl-10" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ciudad *</label>
                  <Input placeholder="Madrid" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Código postal *</label>
                  <Input placeholder="28001" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Instrucciones de acceso</label>
                <Textarea placeholder="Información adicional para llegar al espacio (opcional)" rows={3} />
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Vista previa del mapa</h4>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">El mapa se mostrará aquí</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Fotos y características</h2>
              <p className="text-gray-600">Muestra lo mejor de tu espacio</p>
            </div>

            <div className="space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Fotos del espacio *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Arrastra y suelta tus fotos aquí</p>
                  <p className="text-sm text-gray-500 mb-4">o</p>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Seleccionar archivos
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    Sube al menos 5 fotos. Formatos: JPG, PNG. Máximo 10MB por foto.
                  </p>
                </div>

                {uploadedImages.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Foto ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <Button
                          size="sm"
                          variant="destructive"
                          className="absolute -top-2 -right-2 h-6 w-6 p-0"
                          onClick={() => setUploadedImages((prev) => prev.filter((_, i) => i !== index))}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-medium mb-2">Características y servicios</label>
                <p className="text-sm text-gray-600 mb-4">Selecciona todas las que apliquen a tu espacio</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      onClick={() => toggleFeature(feature)}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedFeatures.includes(feature)
                          ? "border-purple-600 bg-purple-50 text-purple-700"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{feature}</span>
                        {selectedFeatures.includes(feature) && <CheckCircle className="h-4 w-4 text-purple-600" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Precios y disponibilidad</h2>
              <p className="text-gray-600">Establece tus tarifas y condiciones</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Precio base por día *</label>
                <div className="relative">
                  <Euro className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input type="number" placeholder="150" className="pl-10" />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Este será tu precio base. Podrás ajustarlo según la temporada o tipo de evento.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Precio fin de semana</label>
                  <div className="relative">
                    <Euro className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input type="number" placeholder="200" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Precio festivos</label>
                  <div className="relative">
                    <Euro className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input type="number" placeholder="250" className="pl-10" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Política de cancelación</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu política" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flexible">Flexible - Cancelación gratuita hasta 24h antes</SelectItem>
                    <SelectItem value="moderate">Moderada - Cancelación gratuita hasta 5 días antes</SelectItem>
                    <SelectItem value="strict">Estricta - Cancelación gratuita hasta 14 días antes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Normas del espacio</label>
                <Textarea
                  placeholder="Ej: No se permite fumar, Música hasta las 23:00, Limpieza obligatoria..."
                  rows={4}
                />
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">Resumen de ganancias estimadas</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">€150</div>
                    <div className="text-sm text-purple-700">Precio base</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">8</div>
                    <div className="text-sm text-purple-700">Reservas/mes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">€1,020</div>
                    <div className="text-sm text-purple-700">Ingresos netos/mes</div>
                  </div>
                </div>
                <p className="text-xs text-purple-600 mt-2 text-center">
                  *Después de comisiones (15%). Los ingresos reales pueden variar.
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return null
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
              <span className="text-sm text-gray-600">¿Necesitas ayuda?</span>
              <Button variant="ghost" size="sm">
                Contactar soporte
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Registrar mi espacio</h1>
            <span className="text-sm text-gray-600">
              Paso {currentStep} de {totalSteps}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <Card>
          <CardContent className="p-8">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Anterior
              </Button>

              {currentStep < totalSteps ? (
                <Button onClick={nextStep}>
                  Siguiente
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Publicar espacio
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">¿Tienes dudas sobre el proceso?</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm">
              Ver guía completa
            </Button>
            <Button variant="outline" size="sm">
              Hablar con un experto
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
