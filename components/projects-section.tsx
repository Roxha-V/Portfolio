"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useLanguage } from '@/contexts/language-context'

const projects = [
  {
    id: 1,
    titleKey: "projects.qrApp.title",
    descriptionKey: "projects.qrApp.description",
    reflectionKey: "projects.qrApp.reflection",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "React Query", "Jotai", "React Router", "qrcode.react"],
    image: "/qrapp.png",
    liveUrl: "https://qrapp.wannacode.ar/",
  },
  {
    id: 2,
    titleKey: "projects.ptga.title",
    descriptionKey: "projects.ptga.description",
    reflectionKey: "projects.ptga.reflection",
    technologies: ["Next.js", "Framer Motion", "TypeScript"],
    image: "ptga.png",
    liveUrl: "https://ptga.com.ar/",
  },
  {
    id: 3,
    titleKey: "projects.musicPrism.title",
    descriptionKey: "projects.musicPrism.description",
    reflectionKey: "projects.musicPrism.reflection",
    technologies: ["React JS", "Expo", "Tailwind", "React Query"],
    image: "/Music Prism.png",
    liveUrl: "https://musicprism.app/",
  }
]

export function ProjectsSection() {
  const { t } = useLanguage()

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
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('projects.description')}
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
                    alt={t(project.titleKey)}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-medium text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {t(project.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {t(project.descriptionKey)}
                  </CardDescription>
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
                    <h4 className="font-medium text-gray-900 mb-2">{t('projects.reflection')}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {t(project.reflectionKey)}
                    </p>
                  </div>

                  <div className="pt-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="sm"
                        className="w-full bg-green-700 hover:bg-green-800 text-white transition-colors duration-300"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t('projects.viewProject')}
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
