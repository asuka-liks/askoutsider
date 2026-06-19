import type { Project } from '../../constants/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.href.startsWith('http');

  const cardContent = (
    <div
      className="card"
      style={{
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: project.href === '#' ? 'default' : 'pointer',
      }}
    >
      {/* Color top bar */}
      <div
        style={{
          background: project.color,
          height: '8px',
          margin: 'calc(-1 * var(--space-content)) calc(-1 * var(--space-content)) var(--space-content)',
          borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1 }}>
        <span style={{ fontSize: '2rem' }}>{project.emoji}</span>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: 'var(--text-xl)',
            fontWeight: 700,
            marginBottom: '8px',
            fontFamily: "'Playfair Display', serif",
          }}>
            {project.title}
          </h3>
          <p style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-ink)',
            lineHeight: 1.6,
            marginBottom: '14px',
          }}>
            {project.summary}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-parchment)',
              border: '1px solid var(--color-sand)',
              fontSize: 'var(--text-xs)',
              fontWeight: 500,
              color: 'var(--color-ink)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  if (project.href === '#') {
    return <div style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{cardContent}</div>;
  }

  return (
    <a
      href={project.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
    >
      {cardContent}
    </a>
  );
}
