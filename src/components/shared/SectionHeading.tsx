interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 56px)' }}>
      <h2
        style={{
          fontSize: 'var(--text-4xl)',
          fontWeight: 700,
          fontFamily: "'Playfair Display', serif",
          color: 'var(--color-charcoal)',
          marginBottom: '12px',
        }}
      >
        {title}
      </h2>
      {/* Squiggly divider */}
      <svg
        width="100"
        height="12"
        viewBox="0 0 100 12"
        fill="none"
        style={{ margin: '0 auto 12px', display: 'block' }}
      >
        <path
          d="M5 6 Q15 1 25 6 Q35 11 45 6 Q55 1 65 6 Q75 11 85 6 Q95 1 95 6"
          stroke="var(--color-clay)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {subtitle && (
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-ink)', maxWidth: '560px', margin: '0 auto' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}