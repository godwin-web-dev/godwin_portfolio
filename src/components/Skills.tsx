import React from 'react';

const groups: { icon: string; title: string; items: string[] }[] = [
  {
    icon: '</>',
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    icon: '◧',
    title: 'Front End',
    items: ['React.js', 'TypeScript', 'Material UI', 'AG Grid', 'Next.js (basic)'],
  },
  {
    icon: '▤',
    title: 'Back End',
    items: [
      'FastAPI (async)', 'Flask', 'Django', 'Django REST Framework', 'Pydantic',
      'SQLAlchemy', 'REST APIs', 'Node.js', 'Express',
    ],
  },
  {
    icon: '≡',
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Redis'],
  },
  {
    icon: '⚙',
    title: 'Data and DevOps',
    items: [
      'Airflow', 'Kafka', 'Dremio', 'Spark', 'Docker', 'Kubernetes', 'Jenkins CI/CD',
      'Git', 'Linux', 'AWS (S3)', 'Dynatrace', 'Jira', 'pytest',
    ],
  },
  {
    icon: '✦',
    title: 'AI and ML',
    items: [
      'scikit-learn', 'TensorFlow', 'NumPy and Pandas (basic)',
      'Basic knowledge of LLMs and RAG',
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
