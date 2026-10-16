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
      'A data-lake operations dashboard for the Dremio platform team. It tracks users, with a monthly cumulative user-growth graph that was not tracked before, plus storage, table counts by namespace, the latest load date of each database, node health and memory usage, data quality checks, incidents and vulnerabilities. An EPROD pipeline monitor combines per-service Kafka consumer lag with Dremio counts over four lookback windows (6, 12, 18 and 24 hours) to show where data stopped flowing, supported by a separate collector that snapshots partition-level lag for every service behind a read-only API. A daily 6:00 AM IST job syncs Dremio users, tables and views into PostgreSQL with an email alert, and an index on a frequently filtered column made reads faster.',
    stack: ['React', 'TypeScript', 'Material UI', 'FastAPI', 'PostgreSQL', 'Dremio', 'Kafka', 'Docker', 'Kubernetes'],
  },
  {
    label: 'NetApp · Client project',
    title: 'CRS Pipeline Dashboard',
    description:
      'One dashboard for three groups of Airflow jobs (CRS, DEDL and EDL), materialized-view refreshes, DataHub failures and server health. A Flask backend pulls from MySQL, Oracle and Dynatrace to show run status, history, error details and health metrics, with Excel export and Kubernetes deployment behind an Ingress with health probes.',
    stack: ['Python', 'Flask', 'MySQL', 'Oracle', 'Airflow', 'Dynatrace', 'Kubernetes'],
  },
  {
    label: 'NetApp · Client project',
    title: 'SmartSolve UI Modernization',
    description:
      'Migrated legacy ExtJS modules to React, TypeScript and Material UI with reusable components, including a shared AG Grid table with search, filtering and sorting. UI state such as the drawer is saved through a user-preferences API so layouts stay the same across logins and devices, and a side-by-side text comparison view highlights differences between two sections. Rendering is tuned with shared state and memoization, with authentication and route-level access checks, and production defects fixed with QA through release cycles.',
    stack: ['React', 'TypeScript', 'Material UI', 'AG Grid'],
  },
  {
    label: 'Personal project',
    title: 'Smartphone Addiction Predictor',
    description:
      'A full-stack web app that predicts smartphone addiction from 19 survey inputs. A FastAPI backend serves four trained models (Decision Tree, Random Forest, Logistic Regression and a 1D CNN) through /predict and /health endpoints, with Pydantic request validation and CORS configured for the deployed frontend. The React and TypeScript frontend collects answers in a 4-step form with per-step validation, a dark mode and a backend status indicator, and users sign in with Firebase email and password authentication, then choose which model runs each prediction.',
    stack: ['Python', 'FastAPI', 'scikit-learn', 'TensorFlow', 'React', 'TypeScript', 'Firebase Auth'],
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
