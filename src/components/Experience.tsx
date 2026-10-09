import React from 'react';

const points = [
  'Delivered 3 internal applications for NetApp: DLH Insights Dashboard, CRS Pipeline Dashboard and SmartSolve UI Modernization.',
  'Investigated Dremio data dips through event and application logs and re-queued failed ASUP events to the right Kafka consumer groups, confirming the records were processed before closing each incident.',
  "Managed Dremio dataset access, verifying each request and granting only suitable datasets so large unfiltered queries did not block other users' queues.",
  'Monitored 25+ Airflow jobs across 7 data sources, clearing and retriggering stuck runs and backfilling missing data.',
  'Supported production patching of Dremio worker nodes one at a time without interrupting running queries, and verified access through the UI, REST API, JDBC, ODBC and Arrow Flight.',
  'Wrote pytest test cases for the backend components I built.',
];

const tech = ['React', 'TypeScript', 'Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Dremio', 'Airflow', 'Kafka', 'Docker', 'Kubernetes'];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="about container section">
      <h2 className="about__title">Experience</h2>
      <hr className="about__hr" />

      <div className="timeline">
        <div className="job">
          <span className="job__dot" aria-hidden="true" />
          <div className="job__card">
            <div className="job__head">
              <div>
                <h3 className="job__role">Software Engineer</h3>
                <p className="job__company">Onstak Technologies Pvt Ltd · Client: NetApp</p>
                <p className="job__place">Bengaluru, India</p>
              </div>
              <span className="job__date">Sep 2024 – Present</span>
            </div>

            <ul className="job__list">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <ul className="skills__chips job__tech">
              {tech.map((item) => (
                <li className="skills__chip" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
