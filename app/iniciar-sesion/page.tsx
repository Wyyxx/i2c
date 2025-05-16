"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function IniciarSesionPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulación de inicio de sesión
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // En una implementación real, aquí se enviarían las credenciales al servidor
      console.log("Iniciando sesión con:", { email, password })

      // Redirigir al dashboard
      router.push("/dashboard")
    } catch (error) {
      console.error("Error al iniciar sesión:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container max-w-md mx-auto py-10 px-4">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-blue-900">Iniciar sesión</h1>
          <p className="text-blue-600">Accede a tu cuenta de investigador en SECCTI</p>
        </div>

        <Card className="bg-white border-blue-100">
          <CardHeader>
            <CardTitle className="text-blue-900">Ingresa tus credenciales</CardTitle>
            <CardDescription className="text-blue-600">
              Introduce tu correo electrónico y contraseña para acceder
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none text-blue-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="maria.rodriguez@universidad.edu"
                  className="bg-white border-blue-200 text-blue-900 placeholder:text-blue-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium leading-none text-blue-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Contraseña
                  </label>
                  <Link
                    href="/recuperar-contrasena"
                    className="text-sm text-blue-600 underline underline-offset-4 hover:text-blue-900"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white border-blue-200 text-blue-900"
                  required
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full bg-blue-700 text-white hover:bg-blue-800">
                {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="border-t border-blue-100 flex flex-col items-center pt-6">
            <div className="relative w-full mb-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-blue-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-blue-600">O continúa con</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                Google
              </Button>
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                ORCID
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="text-center text-sm text-blue-600">
          <p>
            ¿No tienes una cuenta?{" "}
            <Link href="/registro" className="text-blue-700 underline underline-offset-4 hover:text-blue-900">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
