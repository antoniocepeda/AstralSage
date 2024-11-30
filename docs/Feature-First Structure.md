# Celestial Insights - Feature-First Structure

src/
├── features/                    # Main features
│   ├── auth/                   # Authentication feature
│   │   ├── components/
│   │   │   ├── LoginForm/
│   │   │   │   ├── index.tsx
│   │   │   │   └── LoginForm.types.ts
│   │   │   ├── SignupForm/
│   │   │   │   ├── index.tsx
│   │   │   │   └── SignupForm.types.ts
│   │   │   └── PrivateRoute/
│   │   │       └── index.tsx
│   │   ├── hooks/
│   │   │   └── useFirebaseAuth.ts
│   │   ├── services/
│   │   │   └── auth.service.ts
│   │   ├── contexts/
│   │   │   └── AuthContext.tsx
│   │   ├── schemas/
│   │   │   └── auth.schema.ts
│   │   └── types/
│   │       └── index.ts
│   │
│   ├── dashboard/              # Dashboard feature
│   │   ├── components/
│   │   │   ├── AstroCard/
│   │   │   │   ├── index.tsx
│   │   │   │   └── AstroCard.types.ts
│   │   │   ├── InsightCard/
│   │   │   ├── PlanetaryChart/
│   │   │   └── TransitTimeline/
│   │   ├── hooks/
│   │   │   └── useAstrologicalData.ts
│   │   ├── services/
│   │   │   └── dashboard.service.ts
│   │   └── types/
│   │       └── index.ts
│   │
│   ├── astrology/             # Astrology calculations & data
│   │   ├── components/
│   │   │   ├── ZodiacWheel/
│   │   │   └── AspectGrid/
│   │   ├── services/
│   │   │   └── calculations.service.ts
│   │   ├── utils/
│   │   │   └── zodiac.utils.ts
│   │   └── types/
│   │       └── index.ts
│   │
│   └── theme/                 # Theming feature
│       ├── components/
│       │   └── ThemeToggle/
│       ├── contexts/
│       │   └── ThemeContext.tsx
│       └── hooks/
│           └── useTheme.ts
│
├── shared/                    # Shared resources
│   ├── components/            # Common components
│   │   ├── Button/
│   │   │   ├── index.tsx
│   │   │   ├── Button.types.ts
│   │   │   └── Button.test.tsx
│   │   ├── Input/
│   │   ├── Card/
│   │   └── Layout/
│   │       ├── Navbar/
│   │       └── PageContainer/
│   ├── hooks/
│   │   └── useMediaQuery.ts
│   ├── utils/
│   │   ├── cn.ts
│   │   └── validation.ts
│   └── types/
│       └── index.ts
│
├── config/                    # App configuration
│   ├── firebase.ts
│   ├── routes.ts
│   └── constants.ts
│
├── pages/                     # Page components
│   ├── Landing/
│   │   ├── index.tsx
│   │   └── Landing.types.ts
│   ├── Login/
│   ├── Signup/
│   └── Dashboard/
│
├── styles/                    # Global styles
│   ├── index.css
│   └── themes/
│       ├── light.css
│       └── dark.css
│
├── App.tsx                    # Root component
└── main.tsx                   # Entry point
