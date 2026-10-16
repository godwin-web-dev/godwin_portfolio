import React from 'react';

const points = [
  'Delivered 3 internal applications for NetApp: DLH Insights Dashboard, CRS Pipeline Dashboard and SmartSolve UI Modernization.',
  'Recovered Kafka consumer groups with a lag of 30 lakh (3 million) messages or more when pods got stuck, offsets stopped moving or consumers kept rebalancing, so per-minute ASUP processing thresholds and SLAs were met.',
  'Cleared such backlogs by scaling the consumer pods to 0 replicas, saving the backlog to a file and reprocessing it in chunks one after another, renaming each processed chunk to track progress and avoid reprocessing.',
  'Restored stuck pods by deleting them so Kubernetes recreated them, and used a Dynatrace dashboard to spot SLA breaches (mostly on high-load weekends), raising pod resources and enabling autoscaling for peak load.',
  'Investigated Dremio data dips through event and application logs and re-queued failed ASUP events to the right Kafka consumer groups, confirming the records were processed before closing each incident.',
  "Managed Dremio dataset access, verifying each request and granting only suitable datasets so large unfiltered queries did not block other users' queues.",
  'Monitored 25+ Airflow load jobs across 7 data sources (secure and non-secure), compared each run with the previous day, cleared and retriggered stuck runs, validated row counts against the prior week and backfilled missing data.',
  'Assisted the SRE team during production patching of 20+ nodes, including about 10 Dremio worker nodes (16 executors) patched one at a time with executors paused so no running query was interrupted, then verified through the UI, REST API, JDBC, ODBC and Arrow Flight. Patched the Spark nodes used by Airflow jobs as well.',
  'Troubleshot unresponsive backend APIs and servers on Linux using scripts and logs.',
  'Containerized an internal cache refresher utility with Docker and MongoDB, dockerized the legacy Spark framework, supported chatbot data ingestion and schema tasks, and created Dremio VDS views.',
  'Wrote pytest test cases for the backend components I built, and review pull requests as an approver.',
];

const tech = [
  'React', 'TypeScript', 'Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Dremio',
  'Airflow', 'Kafka', 'Spark', 'Docker', 'Kubernetes', 'Dynatrace', 'Linux', 'pytest',
];

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
