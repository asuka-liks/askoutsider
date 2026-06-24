import { useT } from '../../i18n/LanguageContext';
import { SOCIALS } from '../../constants/content';

const ICON_PATHS: Record<string, string> = {
  github: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
  bilibili: 'M7.172 2.757 10.414 6h3.171l3.243-3.242a1 1 0 011.415 1.415L16.414 6H18.5A3.5 3.5 0 0122 9.5v8a3.5 3.5 0 01-3.5 3.5h-13A3.5 3.5 0 012 17.5v-8A3.5 3.5 0 015.5 6h2.085L5.757 4.171a1 1 0 011.415-1.415zM18.5 8h-13a1.5 1.5 0 00-1.493 1.356L4 9.5v8a1.5 1.5 0 001.356 1.493L5.5 19h13a1.5 1.5 0 001.493-1.356L20 17.5v-8A1.5 1.5 0 0018.5 8zM8 11a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm8 0a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z',
  email: 'M24 6v12c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V6c0-0.375 0.078-0.73 0.203-1.06L12 14.4l11.797-9.46C23.922 5.27 24 5.625 24 6zM12 16.8L0 7.117C0.087 6.477 0.533 6 1.07 6H22.93c0.537 0 0.983 0.477 1.07 1.117L12 16.8z',
};

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--color-cream)',
        borderTop: '1px solid var(--color-sand)',
        padding: 'clamp(32px, 6vw, 56px) 0',
        marginTop: 'var(--space-section)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'var(--text-lg)',
            fontWeight: 600,
            color: 'var(--color-charcoal)',
          }}
        >
          {t.site.name}
        </p>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {SOCIALS.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target={social.platform === 'Email' ? undefined : '_blank'}
              rel={social.platform === 'Email' ? undefined : 'noopener noreferrer'}
              aria-label={social.platform}
              title={social.platform}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-parchment)',
                border: '1px solid var(--color-sand)',
                color: 'var(--color-ink)',
                transition: 'all 0.2s var(--ease-out-expo)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--color-terracotta)';
                e.currentTarget.style.borderColor = 'var(--color-terracotta)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--color-ink)';
                e.currentTarget.style.borderColor = 'var(--color-sand)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d={ICON_PATHS[social.icon] || ''} />
              </svg>
            </a>
          ))}
        </div>

        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-ink)', opacity: 0.7 }}>
          &copy; {year} {t.site.name}. {t.footer.madeWith}
        </p>

        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-ink)',
            opacity: 0.6,
            textDecoration: 'none',
          }}
        >
          苏ICP备2026041456号-1
        </a>
      </div>
    </footer>
  );
}
