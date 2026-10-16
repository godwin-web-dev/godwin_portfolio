import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero container">
      <div className="hero__grid">
        <div className="hero__content">
          <h2 className="hero__subtitle">Hi, I'm Godwin 👋</h2>
          <h1 className="hero__title">
            <span>Full-stack</span>
            <span>software engineer.</span>
          </h1>
          <p className="hero__description">
            Software Engineer with <strong>2 years and 1 month</strong> of experience
            building dashboards and web applications with <strong>React, TypeScript</strong> and{' '}
            <strong>Python (FastAPI, Flask)</strong>, and keeping a large data
            platform running in production.
          </p>
        </div>

        <aside className="hero__card" aria-label="Profile summary">
          <div className="hero__card-bar">
            <span className="hero__dot" />
            <span className="hero__dot" />
            <span className="hero__dot" />
            <span className="hero__card-file">godwin.ts</span>
          </div>
<pre className="hero__code">{`const godwin = {
  role: "Software Engineer",
  company: "Onstak Technologies Pvt Ltd",
  client: "NetApp",
  experience: "2 years 1 month",
  location: "Bengaluru",
  languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  frontend: ["React", "TypeScript"],
  backend: ["FastAPI", "Flask", "Django"],
  databases: ["PostgreSQL", "MySQL", "Oracle", "MongoDB"],
  data: ["Dremio", "Kafka", "Airflow"],
  openToWork: true,
};`}</pre>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
