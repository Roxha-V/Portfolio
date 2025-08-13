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
import { useLanguage } from '@/contexts/language-context'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { t } = useLanguage()

  const contactSchema = yup.object({
    name: yup
      .string()
      .required(t("contact.validation.nameRequired"))
      .min(2, t("contact.validation.nameMin"))
      .max(50, t("contact.validation.nameMax")),
    email: yup
      .string()
      .required(t("contact.validation.emailRequired"))
      .email(t("contact.validation.emailInvalid")),
    subject: yup
      .string()
      .required(t("contact.validation.subjectRequired"))
      .min(5, t("contact.validation.subjectMin"))
      .max(100, t("contact.validation.subjectMax")),
    message: yup
      .string()
      .required(t("contact.validation.messageRequired"))
      .min(10, t("contact.validation.messageMin"))
      .max(1000, t("contact.validation.messageMax")),
  })

  type ContactFormData = yup.InferType<typeof contactSchema>

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
        title: t("contact.form.redirecting"),
        description: t("contact.form.redirectingDescription"),
      })
      
      reset()
    } catch (error) {
      toast({
        title: t("contact.form.error"),
        description: t("contact.form.errorDescription"),
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
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">{t('contact.contactInfo')}</h3>
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
                    <p className="font-medium text-gray-900">{t('contact.email')}</p>
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
                    <p className="font-medium text-gray-900">{t('contact.phone')}</p>
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
                    <p className="font-medium text-gray-900">{t('contact.location')}</p>
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
              <h4 className="font-medium text-gray-900 mb-3">{t('contact.whyWorkWithMe')}</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                  {t('contact.reasons.modern')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                  {t('contact.reasons.userCentered')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                  {t('contact.reasons.communication')}
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-sm border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-medium text-gray-900">{t('contact.form.title')}</CardTitle>
                <CardDescription>
                  {t('contact.form.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.form.name')}</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className={`border-gray-300 focus:border-green-700 focus:ring-green-700 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className={`border-gray-300 focus:border-green-700 focus:ring-green-700 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      className={`border-gray-300 focus:border-green-700 focus:ring-green-700 ${
                        errors.subject ? "border-red-500" : ""
                      }`}
                      placeholder={t('contact.form.subjectPlaceholder')}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={5}
                      className={`border-gray-300 focus:border-green-700 focus:ring-green-700 resize-none ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-md transition-colors duration-300 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          {t('contact.form.openingWhatsApp')}
                        </div>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          {t('contact.form.sendWhatsApp')}
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}