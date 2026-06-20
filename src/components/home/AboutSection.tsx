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
            <img
              src="/avatar.jpg"
              alt="avatar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
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
