import React from 'react';

type Project = {
  label: string;
  title: string;
  description: string;
  stack: string[];
};

const projects: Project[] = [
  {
    label: 'NetApp · Client project',
    title: 'DLH Insights Dashboard',
    description:
      'A data-lake operations dashboard for users, storage, infrastructure, data quality, incidents and pipelines. It includes a monthly user-growth graph, an EPROD pipeline monitor with Kafka consumer lag, and a daily job that syncs Dremio users, tables and views into PostgreSQL.',
    stack: ['React', 'TypeScript', 'Material UI', 'FastAPI', 'PostgreSQL', 'Dremio', 'Docker', 'Kubernetes'],
  },
  {
    label: 'NetApp · Client project',
    title: 'CRS Pipeline Dashboard',
    description:
      'One dashboard for Airflow job groups, materialized-view refreshes, DataHub failures and infrastructure health, with run history, error details, Excel export and Kubernetes deployment.',
    stack: ['Python', 'Flask', 'MySQL', 'Oracle', 'Airflow', 'Dynatrace', 'Kubernetes'],
  },
  {
    label: 'NetApp · Client project',
    title: 'SmartSolve UI Modernization',
    description:
      'Migrated legacy ExtJS modules to React with reusable components, a shared AG Grid table with search, filtering and sorting, persisted user preferences, and a side-by-side text comparison view.',
    stack: ['React', 'TypeScript', 'Material UI', 'AG Grid'],
  },
  {
    label: 'Personal project',
    title: 'Smartphone Addiction Prediction',
    description:
      'A Python machine learning model wrapped in a Django web app, so users can check their addiction risk from their phone usage patterns.',
    stack: ['Python', 'Django', 'Machine Learning'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects container section">
      <h2 className="about__title">Projects</h2>
      <hr className="about__hr" />
      <p className="project__note">
        The NetApp projects are internal, so there are no public links. Happy to walk
        through the architecture in an interview.
      </p>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="project-card__label">{project.label}</p>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__text">{project.description}</p>
            <ul className="project-card__stack">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
