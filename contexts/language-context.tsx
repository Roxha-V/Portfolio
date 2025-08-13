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
    "projects.qrApp.title": "QR Generator App",
    "projects.qrApp.description": "Desarrollé esta aplicación de forma totalmente independiente, desde cero, utilizando React, Vite, TypeScript, Tailwind CSS y varias herramientas del ecosistema moderno como React Query, Jotai, React Router y qrcode.react. El proyecto consiste en una app para generar códigos QR personalizados, con sistema de inicio de sesión, historial de códigos guardados, posibilidad de imprimirlos y editar las URLs en tiempo real. Si el usuario tiene sesión activa, también puede agregar parámetros UTM a los links generados. La app está pensada para facilitar campañas de marketing y organización de enlaces en entornos profesionales.",
    "projects.qrApp.reflection": "Desarrollar esta aplicación fue, una vez más, una experiencia integral de construir algo completamente desde el front, de principio a fin. Desde tomar decisiones de producto hasta definir la arquitectura técnica, me tocó ser mi propia product owner, diseñadora de experiencia y desarrolladora. Eso implicó no solo escribir el código, sino también pensar en el flujo de usuario, los casos de uso reales y cómo hacer que la app aportara valor de forma concreta. Más allá del resultado técnico, lo más valioso fue el proceso fue tener la libertad (y el desafío) de llevar una idea abstracta a algo funcional y usable, fue profundamente enriquecedor.",
    "projects.ptga.title": "Landing PTGA",
    "projects.ptga.description": "Este fue mi primer proyecto completamente individual, desarrollado desde cero para una cooperativa de telecomunicaciones que necesitaba una landing page institucional. Utilicé Next.js como framework principal junto con React, Tailwind CSS y DaisyUI para la maquetación y el diseño. El objetivo fue crear una página clara, accesible y adaptable a distintos dispositivos, con información básica sobre los servicios y contacto. Me ocupé de todo el desarrollo técnico, desde la estructura inicial hasta los estilos finales.",
    "projects.ptga.reflection": "Fue un proyecto muy significativo para mí porque era la primera vez que enfrentaba un encargo real sin un equipo o tutoría directa. Aunque al principio no conocía bien algunas herramientas como Next.js, me animé a investigar, resolver problemas por mi cuenta y tomar decisiones técnicas. También aprendí mucho sobre cómo presentar contenido de forma ordenada y efectiva, adaptándolo a distintos tamaños de pantalla. Me dio mucha confianza ver que podía llevar adelante todo el proceso sola y entregar un producto funcional y visualmente claro.",
    "projects.musicPrism.title": "Music Prism",
    "projects.musicPrism.description": "Es una aplicación web pensada para separar pistas de audio, orientada a músicos, profesionales del audio y usuarios en general. Aunque el objetivo es convertirla en una app móvil en el futuro, actualmente funciona como versión web y sigue en desarrollo activo. Personalmente me dedique como frontend junior. Usamos tecnologías como React JS, Expo (modo web), Tailwind, React Navigation, entre otras. Me encargué de implementar varias secciones del menú, pantallas y funcionalidades de inicio de sesión y registro, descarga de archivos y componentes visuales, adaptados a partir del diseño original. A lo largo del proyecto también profundicé en diseño responsive, asegurando una experiencia funcional en diferentes dispositivos.",
    "projects.musicPrism.reflection": "Este proyecto representó un salto enorme en mi formación. Nunca antes había trabajado en algo pensado para adaptarse a móviles, así que fue un gran desafío entender cómo diseñar y desarrollar en función de múltiples tamaños de pantalla. También fue la primera vez que participé en un equipo de trabajo más organizado, lo que me ayudó a incorporar herramientas, prácticas y flujos nuevos. Me sentí muy cómoda saliendo de mi zona de confort, gané seguridad técnica y aprendí a resolver problemas de forma más estructurada. Estoy muy contenta con lo que logramos y con ganas de seguir aprendiendo a medida que el proyecto crece.",
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
    "projects.qrApp.title": "QR Generator App",
    "projects.qrApp.description": "I developed this application completely independently, from scratch, using React, Vite, TypeScript, Tailwind CSS and various modern ecosystem tools such as React Query, Jotai, React Router and qrcode.react. The project consists of an app to generate personalized QR codes, with login system, saved codes history, possibility to print them and edit URLs in real time. If the user has an active session, they can also add UTM parameters to the generated links. The app is designed to facilitate marketing campaigns and link organization in professional environments.",
    "projects.qrApp.reflection": "Developing this application was, once again, an integral experience of building something completely from the front, from start to finish. From making product decisions to defining the technical architecture, I had to be my own product owner, experience designer and developer. This involved not only writing code, but also thinking about user flow, real use cases and how to make the app provide concrete value. Beyond the technical result, the most valuable thing was the process of having the freedom (and challenge) to take an abstract idea to something functional and usable, it was deeply enriching.",
    "projects.ptga.title": "PTGA Landing",
    "projects.ptga.description": "This was my first completely individual project, developed from scratch for a telecommunications cooperative that needed an institutional landing page. I used Next.js as the main framework along with React, Tailwind CSS and DaisyUI for layout and design. The goal was to create a clear, accessible and adaptable page for different devices, with basic information about services and contact. I handled all the technical development, from the initial structure to the final styles.",
    "projects.ptga.reflection": "It was a very significant project for me because it was the first time I faced a real commission without a team or direct tutoring. Although at first I didn't know some tools like Next.js well, I was encouraged to research, solve problems on my own and make technical decisions. I also learned a lot about how to present content in an orderly and effective way, adapting it to different screen sizes. It gave me a lot of confidence to see that I could carry out the entire process alone and deliver a functional and visually clear product.",
    "projects.musicPrism.title": "Music Prism",
    "projects.musicPrism.description": "It is a web application designed to separate audio tracks, aimed at musicians, audio professionals and general users. Although the goal is to convert it into a mobile app in the future, it currently works as a web version and is still under active development. I personally worked as a junior frontend developer. We used technologies such as React JS, Expo (web mode), Tailwind, React Navigation, among others. I was in charge of implementing various menu sections, screens and login and registration functionalities, file downloads and visual components, adapted from the original design. Throughout the project I also deepened in responsive design, ensuring a functional experience on different devices.",
    "projects.musicPrism.reflection": "This project represented a huge leap in my training. I had never worked on something designed to adapt to mobile before, so it was a great challenge to understand how to design and develop based on multiple screen sizes. It was also the first time I participated in a more organized work team, which helped me incorporate new tools, practices and flows. I felt very comfortable stepping out of my comfort zone, gained technical confidence and learned to solve problems in a more structured way. I am very happy with what we achieved and eager to continue learning as the project grows.",
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