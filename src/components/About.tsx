import React from 'react';

const stats = [
  { value: '2+', label: 'Years of experience' },
  { value: '3', label: 'Apps delivered for NetApp' },
  { value: 'Daily', label: 'Dremio catalog synced into PostgreSQL' },
  { value: '25+', label: 'Airflow jobs monitored' },
];

const services = [
  {
    title: 'Frontend Development',
    text: 'React, TypeScript and Material UI apps with reusable components, AG Grid tables, and state that stays consistent across sessions.',
  },
  {
    title: 'Backend and APIs',
    text: 'Python services with FastAPI and Flask over PostgreSQL, MySQL and Oracle, with pytest tests for the backend components I build.',
  },
  {
    title: 'Data Platform Operations',
    text: 'Production support for Dremio, Airflow and Kafka: investigating data issues, re-queuing failed events and keeping pipelines healthy.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="about container section">
      <h2 className="about__title">About</h2>
      <hr className="about__hr" />

      <div className="bio">
        <div className="bio__text">
          <p>
            I'm a Software Engineer at Onstak Technologies in Bengaluru, working with
            NetApp as the client. For the last 2 years I have built and delivered 3
            internal applications: a data-lake operations dashboard, a pipeline
            monitoring dashboard, and a React rewrite of a legacy UI.
          </p>
          <p>
            I also support NetApp's data platform in production with Dremio, Airflow
            and Kafka. I hold a B.Tech in Information Technology, and I enjoy turning
            messy operational problems into clear screens that support teams can use
            every day.
          </p>
        </div>

        <ul className="stats">
          {stats.map((stat) => (
            <li className="stat" key={stat.label}>
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="block-title">What I do</h3>
      <div className="services">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <span className="service-card__num">{String(index + 1).padStart(2, '0')}</span>
            <h4 className="service-card__title">{service.title}</h4>
            <p className="service-card__text">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
