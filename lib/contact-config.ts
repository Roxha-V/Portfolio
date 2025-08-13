// Este archivo SÍ se sube al repositorio como ejemplo
export const contactConfig = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'rociovalverde1@gmail.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+54 9 3512280243',
  location: process.env.NEXT_PUBLIC_CONTACT_LOCATION || 'Córdoba Capital, Argentina',
  whatsappNumber: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBER || '5493512280243',
  social: {
    gitlab: process.env.NEXT_PUBLIC_SOCIAL_GITLAB || 'https://gitlab.com/rociovalverde1',
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || 'https://www.linkedin.com/in/rocio-valverde/',
  }
} 