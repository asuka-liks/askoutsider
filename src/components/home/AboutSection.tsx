import { useT } from '../../i18n/LanguageContext';
import SectionHeading from '../shared/SectionHeading';

export default function AboutSection() {
  const { t } = useT();

  return (
    <section id="about" className="section page-section">
      <div className="container">
        <SectionHeading title={t.about.title} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(32px, 6vw, 64px)',
            alignItems: 'center',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              justifySelf: 'center',
              width: 'clamp(180px, 30vw, 260px)',
              height: 'clamp(180px, 30vw, 260px)',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--color-cream), var(--color-sand))',
              border: '3px solid var(--color-clay)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity={0.4}>
              <circle cx="40" cy="30" r="14" stroke="var(--color-clay)" strokeWidth="1.5" />
              <path d="M20 56c0-11 9-20 20-20s20 9 20 20" stroke="var(--color-clay)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          <div>
            {t.about.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.8,
                  color: 'var(--color-ink)',
                  marginBottom: i < t.about.paragraphs.length - 1 ? '20px' : 0,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
