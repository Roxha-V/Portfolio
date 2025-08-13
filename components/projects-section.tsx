"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "QR Generator App",
    description:
      "Desarrollé esta aplicación de forma totalmente independiente, desde cero, utilizando React, Vite, TypeScript, Tailwind CSS y varias herramientas del ecosistema moderno como React Query, Jotai, React Router y qrcode.react. El proyecto consiste en una app para generar códigos QR personalizados, con sistema de inicio de sesión, historial de códigos guardados, posibilidad de imprimirlos y editar las URLs en tiempo real. Si el usuario tiene sesión activa, también puede agregar parámetros UTM a los links generados. La app está pensada para facilitar campañas de marketing y organización de enlaces en entornos profesionales.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "React Query", "Jotai", "React Router", "qrcode.react"],
    image: "/qrapp.png",
    liveUrl: "https://qrapp.wannacode.ar/",
    reflection:
      "Desarrollar esta aplicación fue, una vez más, una experiencia integral de construir algo completamente desde el front, de principio a fin. Desde tomar decisiones de producto hasta definir la arquitectura técnica, me tocó ser mi propia product owner, diseñadora de experiencia y desarrolladora. Eso implicó no solo escribir el código, sino también pensar en el flujo de usuario, los casos de uso reales y cómo hacer que la app aportara valor de forma concreta. Más allá del resultado técnico, lo más valioso fue el proceso fue tener la libertad (y el desafío) de llevar una idea abstracta a algo funcional y usable, fue profundamente enriquecedor.",
  },
  {
    id: 2,
    title: "Landing PTGA",
    description:
      "Este fue mi primer proyecto completamente individual, desarrollado desde cero para una cooperativa de telecomunicaciones que necesitaba una landing page institucional. Utilicé Next.js como framework principal junto con React, Tailwind CSS y DaisyUI para la maquetación y el diseño. El objetivo fue crear una página clara, accesible y adaptable a distintos dispositivos, con información básica sobre los servicios y contacto. Me ocupé de todo el desarrollo técnico, desde la estructura inicial hasta los estilos finales.",
    technologies: ["Next.js", "Framer Motion", "TypeScript"],
    image: "ptga.png",
    liveUrl: "https://ptga.com.ar/",
    reflection:
      "Fue un proyecto muy significativo para mí porque era la primera vez que enfrentaba un encargo real sin un equipo o tutoría directa. Aunque al principio no conocía bien algunas herramientas como Next.js, me animé a investigar, resolver problemas por mi cuenta y tomar decisiones técnicas. También aprendí mucho sobre cómo presentar contenido de forma ordenada y efectiva, adaptándolo a distintos tamaños de pantalla. Me dio mucha confianza ver que podía llevar adelante todo el proceso sola y entregar un producto funcional y visualmente claro.",
  },
  {
    id: 3,
    title: "Music Prism",
    description:
      "Es una aplicación web pensada para separar pistas de audio, orientada a músicos, profesionales del audio y usuarios en general. Aunque el objetivo es convertirla en una app móvil en el futuro, actualmente funciona como versión web y sigue en desarrollo activo. Personalmente me dedique como frontend junior. Usamos tecnologías como React JS, Expo (modo web), Tailwind, React Navigation, entre otras. Me encargué de implementar varias secciones del menú, pantallas y funcionalidades de inicio de sesión y registro, descarga de archivos y componentes visuales, adaptados a partir del diseño original. A lo largo del proyecto también profundicé en diseño responsive, asegurando una experiencia funcional en diferentes dispositivos.",
    technologies: ["React JS", "Expo", "Tailwind", "React Query"],
    image: "/Music Prism.png",
    liveUrl: "https://musicprism.vercel.app/",
    reflection: "Este proyecto representó un salto enorme en mi formación. Nunca antes había trabajado en algo pensado para adaptarse a móviles, así que fue un gran desafío entender cómo diseñar y desarrollar en función de múltiples tamaños de pantalla. También fue la primera vez que participé en un equipo de trabajo más organizado, lo que me ayudó a incorporar herramientas, prácticas y flujos nuevos. Me sentí muy cómoda saliendo de mi zona de confort, gané seguridad técnica y aprendí a resolver problemas de forma más estructurada. Estoy muy contenta con lo que logramos y con ganas de seguir aprendiendo a medida que el proyecto crece.",
  }
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 bg-gradient-to-br from-gray-50 via-green-50/20 to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Mis Proyectos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una selección de proyectos que reflejan mi pasión por el desarrollo web y mi crecimiento profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-medium text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700 hover:bg-green-200 transition-colors duration-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Reflexión Personal</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{project.reflection}</p>
                  </div>

                  <div className="pt-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="sm"
                        className="w-full bg-green-700 hover:bg-green-800 text-white transition-colors duration-300"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Proyecto
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
