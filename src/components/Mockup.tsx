type MockupKind = 'tilzo' | 'mergio' | 'chess' | 'sonar' | 'generous'

function Screen({ kind }: { kind: MockupKind }) {
  switch (kind) {
    case 'tilzo':
      return (
        <div className="relative h-full w-full bg-[#120a24] p-4">
          <div className="grid h-full w-full grid-cols-4 grid-rows-6 gap-1.5">
            {Array.from({ length: 24 }).map((_, i) => {
              const on = [1, 2, 5, 6, 9, 10, 13, 14, 17, 18, 21].includes(i)
              return (
                <div
                  key={i}
                  className="rounded-md border"
                  style={{
                    borderColor: on ? '#9b5de5' : 'rgba(155,93,229,0.18)',
                    background: on
                      ? 'radial-gradient(circle at 50% 40%, rgba(180,127,255,0.55), rgba(46,26,77,0.6))'
                      : 'rgba(26,15,48,0.6)',
                    boxShadow: on ? '0 0 10px rgba(155,93,229,0.6)' : 'none',
                  }}
                >
                  {on && (
                    <div
                      className="m-auto mt-1.5 h-1 w-6 rounded-full"
                      style={{ background: '#f8bf46', transform: i % 3 === 0 ? 'rotate(90deg)' : 'none', marginLeft: 'auto', marginRight: 'auto' }}
                    />
                  )}
                </div>
              )
            })}
          </div>
          <div className="absolute inset-x-0 bottom-3 text-center font-mono text-[10px] tracking-widest text-[#f8bf46]">
            ◆ ROTATE &amp; REVEAL ◆
          </div>
        </div>
      )
    case 'mergio':
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#2a1550] to-[#4a1d6b] p-3">
          <div className="mx-auto flex h-6 w-full items-center justify-between px-1 text-[10px] font-bold text-white/90">
            <span>🍒 1,240</span>
            <span>NEXT 🍊</span>
          </div>
          <div className="relative mx-auto mt-2 h-[78%] w-[86%] rounded-2xl border-2 border-white/25 bg-white/5">
            {[
              { c: '#ef4444', s: 30, l: '18%', b: '4%' },
              { c: '#f97316', s: 26, l: '52%', b: '3%' },
              { c: '#a3e635', s: 22, l: '70%', b: '18%' },
              { c: '#facc15', s: 34, l: '30%', b: '20%' },
              { c: '#ec4899', s: 20, l: '62%', b: '36%' },
              { c: '#22c55e', s: 18, l: '20%', b: '44%' },
            ].map((f, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: f.s, height: f.s, left: f.l, bottom: f.b,
                  background: `radial-gradient(circle at 35% 30%, #fff8, ${f.c})`,
                  boxShadow: `0 3px 8px ${f.c}66`,
                }}
              />
            ))}
            <div className="absolute left-1/2 top-2 h-10 w-[2px] -translate-x-1/2 bg-white/40" />
            <div
              className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 rounded-full"
              style={{ background: 'radial-gradient(circle at 35% 30%, #fff8, #38bdf8)' }}
            />
          </div>
        </div>
      )
    case 'chess':
      return (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#3a2410] to-[#1c1408] p-4">
          <div className="mb-3 font-mono text-[10px] tracking-widest text-amber-300">PUZZLE #128 · ★★★</div>
          <div className="grid grid-cols-8 overflow-hidden rounded-lg border-2 border-amber-500/40 shadow-lg">
            {Array.from({ length: 64 }).map((_, i) => {
              const r = Math.floor(i / 8)
              const dark = (r + i) % 2 === 1
              const pieces: Record<number, string> = { 4: '♛', 12: '♞', 27: '♟', 36: '♙', 52: '♘', 60: '♔' }
              return (
                <div
                  key={i}
                  className="flex h-6 w-6 items-center justify-center text-base leading-none"
                  style={{ background: dark ? '#6b4a1f' : '#e8cd94', color: i < 32 ? '#1a1208' : '#fff' }}
                >
                  {pieces[i] ?? ''}
                </div>
              )
            })}
          </div>
          <div className="mt-3 rounded-full bg-amber-500 px-4 py-1 text-[10px] font-bold text-black">HINT · 50 🪙</div>
        </div>
      )
    case 'sonar':
      return (
        <div className="relative h-full w-full overflow-hidden bg-black">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="animate-ping-ring absolute -left-16 -top-16 h-32 w-32 rounded-full border-2"
                style={{ borderColor: '#38bdf8', animationDelay: `${i * 0.8}s` }}
              />
            ))}
            <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_6px_rgba(56,189,248,0.9)]" />
          </div>
          <div className="absolute right-6 top-10 h-2 w-2 rounded-full bg-rose-500 shadow-[0_0_12px_3px_rgba(244,63,94,0.7)]" />
          <div className="absolute bottom-14 left-8 h-2 w-2 rounded-full bg-rose-500/80" />
          <div className="absolute inset-x-0 top-6 text-center font-mono text-[9px] tracking-[0.3em] text-cyan-400/70">
            PULSE ·· LISTEN ·· SURVIVE
          </div>
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
            {['NORM', 'SILENT', 'HEAVY', 'BURST'].map((p, i) => (
              <span key={p} className="rounded border border-cyan-500/40 px-1.5 py-0.5 font-mono text-[8px]" style={{ color: i === 0 ? '#67e8f9' : '#0891b2' }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      )
    case 'generous':
      return (
        <div className="relative flex h-full w-full flex-col bg-gradient-to-b from-[#04231d] to-[#062a34] p-4">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400" />
            <div>
              <div className="text-[11px] font-bold text-white">Aria · your mentor</div>
              <div className="text-[9px] text-emerald-300">listening…</div>
            </div>
          </div>
          <div className="ml-auto mb-2 max-w-[70%] rounded-2xl rounded-tr-sm bg-emerald-500/25 px-3 py-2 text-[10px] text-emerald-50">
            I keep putting off my goals.
          </div>
          <div className="mb-3 max-w-[75%] rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2 text-[10px] text-white/90">
            Let’s start with one small win today. What feels easiest?
          </div>
          <div className="mt-auto flex items-end justify-center gap-1">
            {[8, 16, 26, 14, 30, 20, 34, 18, 24, 10, 28, 12].map((h, i) => (
              <div key={i} className="w-1.5 rounded-full bg-gradient-to-t from-emerald-400 to-sky-400" style={{ height: h }} />
            ))}
          </div>
        </div>
      )
  }
}

export function Mockup({ kind, accent }: { kind: MockupKind; accent: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[220px]">
      <div
        className="relative rounded-[2.2rem] border-[6px] border-black/85 bg-black p-1.5 shadow-2xl"
        style={{ boxShadow: `0 24px 60px -18px ${accent}88, 0 0 0 1px rgba(255,255,255,0.06)` }}
      >
        <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
        <div className="aspect-[9/17] overflow-hidden rounded-[1.7rem]">
          <Screen kind={kind} />
        </div>
      </div>
    </div>
  )
}
