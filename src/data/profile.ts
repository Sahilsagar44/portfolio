export const profile = {
  name: 'Sahil Sagar',
  role: 'Mobile Application Developer',
  location: 'Surat, Gujarat, India',
  yearsExperience: 1,
  tagline: 'I turn playful ideas into shipped apps.',
  bio: `Mobile Application Developer based in Surat, building production React Native games and full-stack AI products end to end. Over the past year I've shipped four polished titles to the Play Store — from a chess-puzzle engine to a physics merge game to a sound-as-sight stealth game — and helped build Generous, a real-time AI voice-coaching platform. I care about crisp mechanics, buttery motion, and code that scales from a single tap to five microservices.`,
  email: 'sagarsahil3690@gmail.com',
  socials: {
    github: 'https://github.com/Sahilsagar44',
    linkedin:
      'https://www.linkedin.com/in/sahil-sagar-946717257',
  },
  stats: [
    { value: '5', label: 'Products shipped' },
    { value: '4', label: 'Live on Play Store' },
    { value: '490+', label: 'Automated tests' },
    { value: '7', label: 'Languages localized' },
  ],
}

export type SkillGroup = { title: string; accent: string; items: string[] }

export const skills: SkillGroup[] = [
  {
    title: 'Mobile',
    accent: 'grape',
    items: ['React Native (CLI)', 'TypeScript', 'Reanimated', 'Skia', 'Gesture Handler', 'Expo / EAS'],
  },
  {
    title: 'State & Data',
    accent: 'sky',
    items: ['Zustand', 'Redux Toolkit', 'MMKV', 'AsyncStorage', 'Firebase Remote Config'],
  },
  {
    title: 'Game Craft',
    accent: 'coral',
    items: ['matter-js physics', 'Custom AI (minimax)', 'Procedural levels', 'Game engines', 'Level solvability'],
  },
  {
    title: 'Backend & AI',
    accent: 'mint',
    items: ['Django + DRF', 'FastAPI', 'LiveKit / WebRTC', 'Claude & multi-LLM', 'PostgreSQL', 'Redis', 'RAG / pgvector'],
  },
  {
    title: 'Ship & Scale',
    accent: 'sun',
    items: ['Firebase (Analytics/Crashlytics)', 'AdMob + IAP', 'Fastlane', 'GitHub Actions', 'Docker', 'Terraform', 'Vercel'],
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Mobile Application Developer',
    company: 'CodeNova Tech',
    period: '2024 — Present',
    location: 'Surat, Gujarat',
    points: [
      'Shipped four React Native titles to the Play Store under the io.codenovatech / codenova namespace — Tilzo, Mergio, ChessMate and Sonaze.',
      'Built game engines from scratch: a multi-size minimax chess AI, a matter-js merge simulation with an on-device bot opponent, and a pure-domain stealth engine backed by 371 automated tests.',
      'Owned the full release pipeline — Fastlane, GitHub Actions CI, AdMob + IAP monetization, Firebase analytics/crashlytics and Remote-Config-driven live-ops.',
      'Contributed to Generous, a production real-time AI voice-coaching platform, across the Django API, LiveKit voice agents and Turborepo web dashboards.',
    ],
  },
]
