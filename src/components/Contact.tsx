import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const socials = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: '✉️' },
  { label: 'GitHub', value: '@Sahilsagar44', href: profile.socials.github, icon: '🐙' },
  { label: 'LinkedIn', value: 'Sahil Sagar', href: profile.socials.linkedin, icon: '💼' },
]

export function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-black/10 bg-gradient-to-br from-grape via-coral to-sun p-[2px] dark:border-white/10"
      >
        <div className="relative overflow-hidden rounded-[2.4rem] bg-cream px-6 py-16 text-center sm:px-16 dark:bg-[#100d1c]">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 animate-float-med rounded-full bg-grape/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 animate-float-slow rounded-full bg-sun/30 blur-3xl" />

          <div className="relative">
            <div className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-grape dark:text-grape-soft">✦ Let’s talk</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
              Got an app idea?
              <br />
              <span className="bg-gradient-to-r from-grape to-coral bg-clip-text text-transparent">Let’s build it.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-ink/70 dark:text-white/70">
              Open to freelance and full-time mobile roles. Drop a line — I reply fast.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-9 inline-block rounded-2xl bg-ink px-8 py-4 font-bold text-cream transition-transform hover:-translate-y-1 hover:shadow-2xl dark:bg-cream dark:text-ink"
            >
              ✉️ {profile.email}
            </a>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-white/60 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-grape hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-white/50">{s.label}</span>
                    <span className="block truncate font-display font-bold group-hover:text-grape dark:group-hover:text-grape-soft">{s.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
