export type Project = {
  id: string
  name: string
  aka?: string
  tagline: string
  blurb: string
  category: string
  year: string
  status: 'Live on Play Store' | 'In production'
  accent: string
  accent2: string
  emoji: string
  mockup: 'tilzo' | 'mergio' | 'chess' | 'sonar' | 'generous'
  tech: string[]
  features: string[]
  engineering: string[]
  platforms: string[]
  link?: { label: string; href: string }
}

export const projects: Project[] = [
  {
    id: 'generous',
    name: 'Generous',
    tagline: 'An AI mentor you talk to — in real time, with your voice.',
    blurb:
      'A full-stack AI voice-coaching platform. Users hold live voice conversations with a personalized mentor that profiles them across 21 life pillars and recommends tailored content.',
    category: 'Full-Stack · AI',
    year: '2025',
    status: 'In production',
    accent: '#34d3a6',
    accent2: '#38bdf8',
    emoji: '🎙️',
    mockup: 'generous',
    tech: ['Django + DRF', 'LiveKit / WebRTC', 'Claude + multi-LLM', 'FastAPI', 'PostgreSQL', 'Redis', 'React Native / Expo', 'Turborepo', 'Terraform', 'Docker'],
    features: [
      'Real-time AI mentor over voice and text — Deepgram STT → LLM → ElevenLabs TTS',
      'Selectable AI characters and voices with live switching mid-conversation',
      'Message analysis across 21 life subpillars for a personal “predictive index”',
      'RAG content recommendation engine over an ingested knowledge corpus',
      'Daily mood & dreams tracking, onboarding, and subscription monetization',
    ],
    engineering: [
      'Microservices architecture — five deployable services orchestrated by Docker locally and ECS/Terraform in production',
      'Custom LiveKit voice agent with subagent decomposition (analyser, summarizer, recommender) and pgvector RAG',
      'Multi-model AI strategy (Claude, Mistral, OpenAI, Google) with Langfuse observability',
      'Turborepo web monorepo — admin, dashboard, auth & docs apps behind a shared design system',
    ],
    platforms: ['iOS', 'Android', 'Web'],
  },
  {
    id: 'sonaze',
    name: 'Sonaze',
    aka: 'PulseVeil',
    tagline: 'You’re blind. Sound is your only sight — and it can get you killed.',
    blurb:
      'A minimalist stealth-survival game. The screen is pure black until you fire a sonar pulse that reveals the world for a moment — but every pulse makes noise the enemies can hear.',
    category: 'Mobile Game',
    year: '2025',
    status: 'In production',
    accent: '#38bdf8',
    accent2: '#7c3aed',
    emoji: '🔊',
    mockup: 'sonar',
    tech: ['React Native', 'Skia', 'Reanimated', 'Gesture Handler', 'react-native-audio-api', 'TypeScript'],
    features: [
      'Four tactical pulse types trading reveal radius against noise and cooldown',
      'Three enemy archetypes — patroller, lurker, chaser — each with distinct AI',
      'Fog-of-memory: revealed geometry fades, forcing you to navigate on recall',
      'Per-level 3-star mastery, cosmetic pulse skins, achievements and stats',
      'Handcrafted Chapter 1 authored as plain ASCII grids, ending in a boss',
    ],
    engineering: [
      'Pure framework-free GameEngine (~890 lines) — collision, line-of-sight reveal, noise propagation and a per-enemy state machine',
      'Automated level-solvability audit: BFS flood-fill proves every level is winnable and fair',
      'Enemy-fairness & balance test suites keep encounters beatable — 371 passing tests total',
      'Robust save layer with schema normalization and legacy mastery backfill',
    ],
    platforms: ['iOS', 'Android'],
  },
  {
    id: 'tilzo',
    name: 'Tilzo',
    tagline: 'Rotate & Reveal — wire the loop and rebuild the picture in one move.',
    blurb:
      'A neon Egyptian-themed puzzle game with a dual-layer twist: every tile rotation wires a glowing loop AND reassembles a hidden image at the same time. Win only when both click.',
    category: 'Mobile Game',
    year: '2025',
    status: 'Live on Play Store',
    accent: '#9b5de5',
    accent2: '#f8bf46',
    emoji: '🔷',
    mockup: 'tilzo',
    tech: ['React Native', 'Zustand', 'react-native-svg', 'Reanimated', 'Lottie', 'Firebase', 'i18next'],
    features: [
      'Dual-layer rotate-to-solve core — loop connectivity + image reconstruction together',
      'Five board geometries: square, hex, polygon, image and ice-adventure',
      'Classic, Image & Challenge modes plus a deterministic seeded Daily Puzzle',
      'Adventure map progression, coins, shop, rewarded hints and leaderboards',
      'Multiple Egyptian-Neon themes, localized across 7 languages',
    ],
    engineering: [
      'Procedural generation via a Hamiltonian-loop topology generator with seeded scramble',
      'BoardAdapter / PlayLoop seam — one mode-invariant play loop drives five board types',
      'LevelCatalog registry with a uniform build/warmup lifecycle per geometry',
      'Domain-driven rigor: CONTEXT.md glossary, numbered ADRs, 120 test files, CI',
    ],
    platforms: ['iOS', 'Android'],
    link: { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=io.codenovatech.tilzo&hl=en_IN' },
  },
  {
    id: 'chessmate',
    name: 'ChessMate',
    tagline: 'Chess puzzles against a chess AI I wrote from scratch.',
    blurb:
      'A polished chess puzzle game. Solve a progression of Lichess-format puzzles against a custom minimax engine that thinks on any board from 3×3 up to 8×8.',
    category: 'Mobile Game',
    year: '2024',
    status: 'Live on Play Store',
    accent: '#f59e0b',
    accent2: '#fb5f6d',
    emoji: '♟️',
    mockup: 'chess',
    tech: ['React Native', 'Redux Toolkit', 'chess.js', 'MMKV', 'Firebase Remote Config', 'Reanimated'],
    features: [
      'Level-based puzzle progression with unlock gating and persisted progress',
      'Rotating Daily Puzzle with date-based seeding and completion tracking',
      'Coin economy — earn per level, spend on hints, coin packs via IAP',
      'Full ad integration gated by remote feature flags and a remove-ads entitlement',
      'Puzzle content pushed remotely — new levels without an app update',
    ],
    engineering: [
      'Custom multi-size chess engine (~19KB): minimax with alpha-beta, iterative deepening, move ordering and piece-square tables',
      'Dynamic search depth (4–10) on a 5-second budget with a cancellable abort flag',
      'MMKV-backed Redux with synchronous hydration and auto-persist on every reducer',
      'Remote-config-driven puzzles, pricing and monetization tunable server-side',
    ],
    platforms: ['iOS', 'Android'],
    link: { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.chessmate&hl=en_IN' },
  },
  {
    id: 'mergio',
    name: 'Mergio',
    aka: 'mello merge',
    tagline: 'Drop, merge, chain — now with an AI opponent that plays to win.',
    blurb:
      'A physics-driven Suika-style merge puzzler. Drop fruit, merge matching pairs into bigger fruit, and battle a sophisticated on-device AI bot in turn-based multiplayer.',
    category: 'Mobile Game',
    year: '2024',
    status: 'Live on Play Store',
    accent: '#fb5f6d',
    accent2: '#a3e635',
    emoji: '🍉',
    mockup: 'mergio',
    tech: ['React Native', 'matter-js', 'react-native-game-engine', 'Zustand', 'Reanimated', 'Firebase', 'Game Center'],
    features: [
      'Physics-accurate fruit merging with drop guide, next preview and juicy effects',
      'Solo endless mode plus turn-based multiplayer against an AI bot',
      'Power-ups: bomb, shake, shrink and upgrade',
      'Cosmetic theme system, coin economy, IAP shop and remove-ads',
      'Daily rewards, streaks, achievements and Game Center leaderboards',
    ],
    engineering: [
      'Fully on-device game AI — MergePredictor, PositionAnalyzer, DefenseStrategy and threat evaluation make “multiplayer” work offline',
      'Collision-shape pipeline: fruit hulls baked from Python into TypeScript for accurate concave physics with no runtime cost',
      'Responsive physics arena that adapts to device size and performance tier',
      'Clean separation into many focused Zustand stores per game system',
    ],
    platforms: ['iOS', 'Android'],
    link: { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.mellomerge.codenova&hl=en_IN' },
  },
]
