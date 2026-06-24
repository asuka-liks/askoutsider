import { useT } from '../../i18n/LanguageContext';
import SectionHeading from '../shared/SectionHeading';
import ProjectCard from '../shared/ProjectCard';

const PROJECT_HREFS: Record<string, string> = {
  'fortune': '/project/fortune',
  'imitator': '/project/imitator',
  'coming-soon-1': '#',
};

const PROJECT_COLORS: Record<string, string> = {
  'fortune': '#6B5B7B',
  'imitator': '#C94A4A',
  'coming-soon-1': '#C4946C',
};

const PROJECT_EMOJIS: Record<string, string> = {
  'fortune': '🔮',
  'imitator': '🔥',
  'coming-soon-1': '✨',
};

export default function ProjectsSection() {
  const { t } = useT();

  return (
    <section id="projects" className="section page-section">
      <div className="container">
        <SectionHeading
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(20px, 4vw, 32px)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {t.projects.items.map((project) => (
            <ProjectCard
              key={project.id}
              project={{
                id: project.id,
                title: project.title,
                summary: project.summary,
                tags: project.tags,
                href: PROJECT_HREFS[project.id] || '#',
                color: PROJECT_COLORS[project.id] || '#C4946C',
                emoji: PROJECT_EMOJIS[project.id] || '✨',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
