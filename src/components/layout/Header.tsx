import { useState, useEffect } from 'react';
import { useT } from '../../i18n/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, toggleLang } = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.header.about, href: '#about' },
    { label: t.header.skills, href: '#skills' },
    { label: t.header.projects, href: '#projects' },
    { label: t.header.contact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled
          ? 'rgba(253, 246, 227, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-sand)' : '1px solid transparent',
        transition: 'all 0.3s var(--ease-out-expo)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a
          href="/"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'var(--text-xl)',
            fontWeight: 700,
            color: 'var(--color-charcoal)',
            textDecoration: 'none',
          }}
        >
          {t.site.name}
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 2vw, 24px)' }}>
          <nav aria-label="Main navigation">
            <ul style={{ display: 'flex', gap: 'clamp(12px, 2vw, 24px)', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      color: 'var(--color-ink)',
                      textDecoration: 'none',
                      padding: '4px 0',
                      borderBottom: '2px solid transparent',
                      transition: 'all 0.2s var(--ease-out-expo)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = 'var(--color-terracotta)';
                      e.currentTarget.style.borderBottomColor = 'var(--color-terracotta)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'var(--color-ink)';
                      e.currentTarget.style.borderBottomColor = 'transparent';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label={lang === 'zh' ? 'Switch to English' : '切换到中文'}
            title={lang === 'zh' ? 'Switch to English' : '切换到中文'}
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              padding: '4px 10px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-sand)',
              background: 'var(--color-cream)',
              color: 'var(--color-ink)',
              cursor: 'pointer',
              transition: 'all 0.2s var(--ease-out-expo)',
              whiteSpace: 'nowrap',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-terracotta)';
              e.currentTarget.style.color = 'var(--color-terracotta)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-sand)';
              e.currentTarget.style.color = 'var(--color-ink)';
            }}
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </div>
    </header>
  );
}
