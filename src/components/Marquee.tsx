const words = ['React Native', 'TypeScript', 'AI · LLM', 'Skia', 'Game Engines', 'Django', 'LiveKit', 'Firebase', 'Reanimated', 'Terraform', 'Physics', 'Play Store']

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-black/10 bg-ink py-4 dark:border-white/10 dark:bg-grape">
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-2xl font-extrabold text-cream/90">
            {w}
            <span className="text-sun">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
