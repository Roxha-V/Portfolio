"use client"

import type React from "react"
import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { contactConfig } from "@/lib/contact-config"

const contactSchema = yup.object({
  name: yup
    .string()
    .required("El nombre es requerido")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres"),
  email: yup
    .string()
    .required("El correo electrónico es requerido")
    .email("Por favor ingresa un correo electrónico válido"),
  subject: yup
    .string()
    .required("El asunto es requerido")
    .min(5, "El asunto debe tener al menos 5 caracteres")
    .max(100, "El asunto no puede tener más de 100 caracteres"),
  message: yup
    .string()
    .required("El mensaje es requerido")
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede tener más de 1000 caracteres"),
})

type ContactFormData = yup.InferType<typeof contactSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const message = `Hola! Mi nombre es ${data.name}.\n\nAsunto: ${data.subject}\n\nMensaje: ${data.message}\n\n Puedes contactarme a través de mi correo: ${data.email}`
      
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodedMessage}`
      
      window.open(whatsappUrl, '_blank')
      
      toast({
        title: "¡Redirigiendo a WhatsApp!",
        description: "Se abrirá WhatsApp para enviar tu mensaje.",
      })
      
      reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al abrir WhatsApp. Por favor intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Hablemos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y colaborar contigo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-green-700 rounded-md flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">{contactConfig.email}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-green-700 rounded-md flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Teléfono</p>
                    <p className="text-gray-600">{contactConfig.phone}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-green-700 rounded-md flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Ubicación</p>
                    <p className="text-gray-600">{contactConfig.location}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="p-6 bg-green-50 rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="font-medium text-gray-900 mb-3">¿Por qué trabajar conmigo?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                  Desarrollo web moderno y escalable
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                  Diseño centrado en el usuario
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                  Comunicación clara y constante
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-sm border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-medium text-gray-900">Envíame un mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y me pondré en contacto contigo lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className={`border-gray-300 focus:border-green-700 focus:ring-green-700 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        placeholder="Tu nombre completo"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">