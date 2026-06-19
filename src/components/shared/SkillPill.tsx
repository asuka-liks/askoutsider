interface SkillPillProps {
  label: string;
}

export default function SkillPill({ label }: SkillPillProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        padding: '8px 18px',
        borderRadius: 'var(--radius-full)',
        background: 'var(--color-cream)',
        border: '1px solid var(--color-sand)',
        color: 'var(--color-ink)',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        fontFamily: "'Noto Sans SC', sans-serif",
        whiteSpace: 'nowrap',
        transition: 'all 0.25s var(--ease-out-expo)',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = 'var(--color-terracotta)';
        e.currentTarget.style.color = '#FDF6E3';
        e.currentTarget.style.borderColor = 'var(--color-terracotta)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = 'var(--color-cream)';
        e.currentTarget.style.color = 'var(--color-ink)';
        e.currentTarget.style.borderColor = 'var(--color-sand)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {label}
    </span>
  );
}