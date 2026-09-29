interface OGPortfolioProps {
  eyebrow?: string
  title: string
  subtitle?: string
  chips?: string[]
  accent?: string
}

const AMBER = '#f59e0b'
const CYAN = '#22d3ee'
const SLATE_950 = '#020617'
const SLATE_100 = '#f1f5f9'
const SLATE_400 = '#94a3b8'

export default function OGPortfolio({
  eyebrow = 'ABUBAKRI FAARUQ ADEBOWALE',
  title,
  subtitle,
  chips = ['IT Admin', 'Networking', 'Security', 'Cloud', 'DevOps'],
  accent = AMBER,
}: OGPortfolioProps) {
  const sans = [
    'system-ui',
    '-apple-system',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ].join(', ')
  const mono = ['ui-monospace', 'Menlo', 'Consolas', 'monospace'].join(', ')

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 56,
        backgroundColor: SLATE_950,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: sans,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(148,163,184,0.22) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-14%',
          right: '-6%',
          width: '58%',
          height: '70%',
          background: `radial-gradient(ellipse 70% 55% at 50% 45%, ${accent}40 0%, transparent 60%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-18%',
          left: '-8%',
          width: '55%',
          height: '65%',
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${CYAN}33 0%, transparent 60%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 8,
          background: accent,
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: accent,
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 6,
            fontFamily: mono,
            textTransform: 'uppercase',
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: SLATE_100,
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: 1,
          }}
        >
          AF<span style={{ color: accent }}>.</span>
        </div>
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            color: SLATE_100,
            fontSize: 68,
            lineHeight: 1.06,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              marginTop: 18,
              color: SLATE_400,
              fontSize: 26,
              lineHeight: 1.35,
              maxWidth: 820,
            }}
          >
            {subtitle}
          </div>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
          {chips.map((chip) => (
            <div
              key={chip}
              style={{
                display: 'flex',
                padding: '10px 16px',
                borderRadius: 8,
                border: `1px solid ${accent}66`,
                color: accent,
                fontSize: 17,
                fontFamily: mono,
                backgroundColor: `${accent}14`,
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}