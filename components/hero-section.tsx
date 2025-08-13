"use client"

import { ArrowDown, Gitlab, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { contactConfig } from "@/lib/contact-config"
import { useLanguage } from '@/contexts/language-context'

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const element = document.getElementById("proyectos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 bg-white">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="mb-12" variants={itemVariants}>
            <motion.div
              className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-green-200"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/Roxha.png"
                alt="Rocio Valverde"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-light mb-6 text-gray-900"
              variants={itemVariants}
            >
              <span className="block">{t('hero.title.developer')}</span>
              <span className="block font-medium text-green-700">{t('hero.title.frontend')}</span>
            
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {t('hero.description')}
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-md transition-colors duration-300"
              >
                {t('hero.viewProjects')}
              </Button>
            </motion.div>
            
            <div className="flex gap-4">
              <motion.a 
                href={contactConfig.social.gitlab} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md hover:bg-green-50 hover:border-green-300 border-gray-300"
                >
                  <Gitlab className="h-5 w-5" />
                </Button>
              </motion.a>
              <motion.a 
                href={contactConfig.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md hover:bg-green-50 hover:border-green-300 border-gray-300"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </motion.a>
              <motion.a 
                href={`mailto:${contactConfig.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md hover:bg-green-50 hover:border-green-300 border-gray-300"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <ArrowDown className="h-6 w-6 mx-auto text-green-600" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
