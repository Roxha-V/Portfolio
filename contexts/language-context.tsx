"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    "navigation.home": "Inicio",
    "navigation.projects": "Proyectos",
    "navigation.contact": "Contacto",
    "hero.title.developer": "Desarrolladora",
    "hero.title.frontend": "Frontend",
    "hero.description": "Transformo ideas en experiencias digitales únicas. Especializada en desarrollo web moderno con pasión por el diseño y la innovación.",
    "hero.viewProjects": "Ver Proyectos",
    "projects.title": "Mis Proyectos",
    "projects.description": "Una selección de proyectos que reflejan mi pasión por el desarrollo web y mi crecimiento profesional.",
    "projects.viewProject": "Ver Proyecto",
    "projects.reflection": "Reflexión Personal",
    "contact.title": "Hablemos",
    "contact.description": "¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y colaborar contigo.",
    "contact.contactInfo": "Información de Contacto",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.whyWorkWithMe": "¿Por qué trabajar conmigo?",
    "contact.reasons.modern": "Desarrollo web moderno y escalable",
    "contact.reasons.userCentered": "Diseño centrado en el usuario",
    "contact.reasons.communication": "Comunicación clara y constante",
    "contact.form.title": "Envíame un mensaje",
    "contact.form.description": "Completa el formulario y me pondré en contacto contigo lo antes posible.",
    "contact.form.name": "Nombre *",
    "contact.form.email": "Correo Electrónico *",
    "contact.form.subject": "Asunto *",
    "contact.form.message": "Mensaje *",
    "contact.form.namePlaceholder": "Tu nombre completo",
    "contact.form.emailPlaceholder": "tu@email.com",
    "contact.form.subjectPlaceholder": "¿De qué quieres hablar?",
    "contact.form.messagePlaceholder": "Cuéntame sobre tu proyecto o idea...",
    "contact.form.sendWhatsApp": "Enviar por WhatsApp",
    "contact.form.openingWhatsApp": "Abriendo WhatsApp...",
    "contact.form.redirecting": "¡Redirigiendo a WhatsApp!",
    "contact.form.redirectingDescription": "Se abrirá WhatsApp para enviar tu mensaje.",
    "contact.form.error": "Error",
    "contact.form.errorDescription": "Hubo un problema al abrir WhatsApp. Por favor intenta nuevamente.",
    "contact.validation.nameRequired": "El nombre es requerido",
    "contact.validation.nameMin": "El nombre debe tener al menos 2 caracteres",
    "contact.validation.nameMax": "El nombre no puede tener más de 50 caracteres",
    "contact.validation.emailRequired": "El correo electrónico es requerido",
    "contact.validation.emailInvalid": "Por favor ingresa un correo electrónico válido",
    "contact.validation.subjectRequired": "El asunto es requerido",
    "contact.validation.subjectMin": "El asunto debe tener al menos 5 caracteres",
    "contact.validation.subjectMax": "El asunto no puede tener más de 100 caracteres",
    "contact.validation.messageRequired": "El mensaje es requerido",
    "contact.validation.messageMin": "El mensaje debe tener al menos 10 caracteres",
    "contact.validation.messageMax": "El mensaje no puede tener más de 1000 caracteres"
  },
  en: {
    "navigation.home": "Home",
    "navigation.projects": "Projects",
    "navigation.contact": "Contact",
    "hero.title.developer": "Developer",
    "hero.title.frontend": "Frontend",
    "hero.description": "I transform ideas into unique digital experiences. Specialized in modern web development with a passion for design and innovation.",
    "hero.viewProjects": "View Projects",
    "projects.title": "My Projects",
    "projects.description": "A selection of projects that reflect my passion for web development and my professional growth.",
    "projects.viewProject": "View Project",
    "projects.reflection": "Personal Reflection",
    "contact.title": "Let's Talk",
    "contact.description": "Do you have a project in mind? I'd love to hear your ideas and collaborate with you.",
    "contact.contactInfo": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.whyWorkWithMe": "Why work with me?",
    "contact.reasons.modern": "Modern and scalable web development",
    "contact.reasons.userCentered": "User-centered design",
    "contact.reasons.communication": "Clear and constant communication",
    "contact.form.title": "Send me a message",
    "contact.form.description": "Complete the form and I'll get back to you as soon as possible.",
    "contact.form.name": "Name *",
    "contact.form.email": "Email *",
    "contact.form.subject": "Subject *",
    "contact.form.message": "Message *",
    "contact.form.namePlaceholder": "Your full name",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.subjectPlaceholder": "What do you want to talk about?",
    "contact.form.messagePlaceholder": "Tell me about your project or idea...",
    "contact.form.sendWhatsApp": "Send via WhatsApp",
    "contact.form.openingWhatsApp": "Opening WhatsApp...",
    "contact.form.redirecting": "Redirecting to WhatsApp!",
    "contact.form.redirectingDescription": "WhatsApp will open to send your message.",
    "contact.form.error": "Error",
    "contact.form.errorDescription": "There was a problem opening WhatsApp. Please try again.",
    "contact.validation.nameRequired": "Name is required",
    "contact.validation.nameMin": "Name must have at least 2 characters",
    "contact.validation.nameMax": "Name cannot have more than 50 characters",
    "contact.validation.emailRequired": "Email is required",
    "contact.validation.emailInvalid": "Please enter a valid email",
    "contact.validation.subjectRequired": "Subject is required",
    "contact.validation.subjectMin": "Subject must have at least 5 characters",
    "contact.validation.subjectMax": "Subject cannot have more than 100 characters",
    "contact.validation.messageRequired": "Message is required",
    "contact.validation.messageMin": "Message must have at least 10 characters",
    "contact.validation.messageMax": "Message cannot have more than 1000 characters"
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 