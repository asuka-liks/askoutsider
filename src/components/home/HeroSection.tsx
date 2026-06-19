import { useT } from '../../i18n/LanguageContext';
import { useTypewriter } from '../../hooks/useTypewriter';
import Button from '../shared/Button';

export default function HeroSection() {
  const { t } = useT();
  const typedText = useTypewriter(t.hero.taglines);

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(175deg, var(--color-parchment) 0%, var(--color-cream) 60%, #EDE0C8 100%)',
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: 'clamp(200px, 25vw, 400px)',
          height: 'clamp(200px, 25vw, 400px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 148, 108, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: 'clamp(150px, 20vw, 300px)',
          height: 'clamp(150px, 20vw, 300px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(125, 155, 118, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <p
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 500,
            color: 'var(--color-terracotta)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          {t.hero.welcome}
        </p>

        <h1
          style={{
            fontSize: 'var(--text-display)',
            fontWeight: 900,
            fontFamily: "'Playfair Display', serif",
            color: 'var(--color-charcoal)',
            lineHeight: 1.05,
            marginBottom: '24px',
            letterSpacing: '-0.02em',
          }}
        >
          AskOutsider
        </h1>

        {/* Typewriter */}
        <div
          style={{
            height: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--color-ink)',
              fontWeight: 400,
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            {typedText}
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1.2em',
              background: 'var(--color-terracotta)',
              marginLeft: '2px',
              animation: 'blink 0.8s infinite',
            }}
          />
        </div>

        <Button href="#projects">
          {t.hero.cta}
        </Button>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-ink)', opacity: 0.5 }}>
            {t.hero.scroll}
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ opacity: 0.4, animation: 'float 2s ease-in-out infinite' }}
          >
            <path d="M10 3v14M5 13l5 5 5-5" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
