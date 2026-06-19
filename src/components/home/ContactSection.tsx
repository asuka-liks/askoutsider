import { useT } from '../../i18n/LanguageContext';
import SectionHeading from '../shared/SectionHeading';
import Button from '../shared/Button';

export default function ContactSection() {
  const { t } = useT();

  return (
    <section id="contact" className="section page-section" style={{ background: 'var(--color-cream)' }}>
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <SectionHeading
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <Button href={`mailto:${t.site.email}`} variant="primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 6v12c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V6c0-0.375 0.078-0.73 0.203-1.06L12 14.4l11.797-9.46C23.922 5.27 24 5.625 24 6zM12 16.8L0 7.117C0.087 6.477 0.533 6 1.07 6H22.93c0.537 0 0.983 0.477 1.07 1.117L12 16.8z" />
            </svg>
            {t.site.email}
          </Button>

          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-ink)', opacity: 0.6 }}>
            {t.contact.response}
          </p>
        </div>
      </div>
    </section>
  );
}
