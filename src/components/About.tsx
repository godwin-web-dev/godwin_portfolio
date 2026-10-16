import React from 'react';

const stats = [
  { value: '2+', label: 'Years of experience' },
  { value: '3', label: 'Apps delivered for NetApp' },
  { value: '30 lakh+', label: 'Kafka message backlogs recovered' },
  { value: '25+', label: 'Airflow jobs monitored' },
  { value: '20+', label: 'Nodes patched alongside the SRE team' },
  { value: 'Daily', label: 'Dremio catalog synced into PostgreSQL' },
];

const services = [
  {
    title: 'Frontend Development',
    text: 'React, TypeScript and Material UI apps with reusable components, a shared AG Grid table, a legacy ExtJS-to-React migration, and state that stays consistent across sessions.',
  },
  {
    title: 'Backend and APIs',
    text: 'Python services with FastAPI (async endpoints), Flask and Django over PostgreSQL, MySQL and Oracle, using SQLAlchemy and Redis, with pytest tests and PostgreSQL indexes for faster reads.',
  },
  {
    title: 'Data Platform Operations',
    text: 'Production support for Dremio, Airflow and Kafka: recovering consumer-lag backlogs of 30 lakh+ messages, re-queuing failed events, patching nodes and keeping pipelines inside their SLAs.',
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
            NetApp as the client. For the last 2 years and 1 month I have built and
            delivered 3 internal applications: a data-lake operations dashboard, a
            pipeline monitoring dashboard, and a React rewrite of a legacy UI.
          </p>
          <p>
            I also support NetApp's data platform in production with Dremio, Airflow
            and Kafka. When consumer lag builds up or pods get stuck, I clear the
            backlog and restore the flow so downstream data stays on time. I review pull
            requests as an approver, and I hold a B.Tech in Information Technology. I
            enjoy turning messy operational problems into clear screens that support
            teams can use every day.
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
