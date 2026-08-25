import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const accents: Record<string, string> = {
  grape: 'text-grape dark:text-grape-soft',
  coral: 'text-coral',
  mint: 'text-mint',
  sun: 'text-sun',
  sky: 'text-sky',
}

export function SectionHead({
  kicker,
  title,
  accent = 'grape',
  children,
  center,
}: {
  kicker: string
  title: string
  accent?: string
  children?: ReactNode
  center?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <div className={`mb-3 font-mono text-sm font-bold uppercase tracking-[0.2em] ${accents[accent]}`}>
        ✦ {kicker}
      </div>
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-ink/70 dark:text-white/70">{children}</p>}
    </motion.div>
  )
}
