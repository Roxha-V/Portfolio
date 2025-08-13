"use client"

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/language-context'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-2">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant={language === 'es' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLanguage('es')}
          className={language === 'es' ? 'bg-green-700 hover:bg-green-800' : ''}
        >
          ES
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant={language === 'en' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'bg-green-700 hover:bg-green-800' : ''}
        >
          EN
        </Button>
      </motion.div>
    </div>
  )
} 