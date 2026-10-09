import React from 'react';

const groups: { icon: string; title: string; items: string[] }[] = [
  {
    icon: '</>',
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    icon: '◧',
    title: 'Frameworks and Libraries',
    items: ['React.js', 'Material UI', 'AG Grid', 'FastAPI', 'Flask', 'Django', 'Node.js', 'REST APIs'],
  },
  {
    icon: '≡',
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'],
  },
  {
    icon: '⚙',
    title: 'Tools and Platforms',
    items: [
      'Git', 'Linux', 'Jira', 'pytest', 'Jenkins', 'Docker', 'Kubernetes',
      'Kafka', 'Airflow', 'Dynatrace', 'Dremio', 'AWS (S3)',
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="about container section">
      <h2 className="about__title">Skills</h2>
      <hr className="about__hr" />

      <div className="skills__grid">
        {groups.map((group) => (
          <div className="skills__card" key={group.title}>
            <div className="skills__head">
              <span className="skills__icon" aria-hidden="true">{group.icon}</span>
              <h3 className="skills__title">{group.title}</h3>
            </div>
            <ul className="skills__chips">
              {group.items.map((item) => (
                <li className="skills__chip" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
