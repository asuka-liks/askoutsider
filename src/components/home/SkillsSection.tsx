import { useT } from '../../i18n/LanguageContext';
import SectionHeading from '../shared/SectionHeading';
import SkillPill from '../shared/SkillPill';

export default function SkillsSection() {
  const { t } = useT();

  return (
    <section id="skills" className="section page-section" style={{ background: 'var(--color-cream)' }}>
      <div className="container">
        <SectionHeading title={t.skills.title} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(24px, 4vw, 40px)',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {t.skills.categories.map((group) => (
            <div key={group.name}>
              <h4
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 600,
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--color-terracotta)',
                  marginBottom: '14px',
                }}
              >
                {group.name}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {group.items.map((skill) => (
                  <SkillPill key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
