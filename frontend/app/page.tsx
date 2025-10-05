import { Header } from '@/components/Header';
import styles from './page.module.css';

const planetSummaries = [
  {
    name: '11 Com B',
    year: '2007',
    method: 'Radial Velocity',
    facility: 'Xinglong Station'
  },
  {
    name: 'Thestia-1',
    year: '2017',
    method: 'Transit',
    facility: 'Placeholder Laboratory'
  },
  {
    name: '14 And b',
    year: '2008',
    method: 'Radial Velocity',
    facility: 'Qianyan Observatory'
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroImageWrapper} aria-hidden="true" />
          <div className={styles.heroContent}>
            <span className={styles.heroSubtitle}>Current Exoplanets</span>
            <h1 className={styles.heroTitle}>Exploring new worlds beyond our Solar System</h1>
            <p className={styles.heroDescription}>
              Discover catalogued exoplanets, compare discovery methods, and prepare space for
              future data visualisations powered by your mission APIs.
            </p>
          </div>
        </section>

        <section id="explore" className={styles.dashboard}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <h2 className={styles.panelTitle}>Explore the Planets</h2>
                <p className={styles.panelSubtitle}>
                  Search and filter upcoming datasets to curate your observation list.
                </p>
              </div>
            </div>

            <div className={styles.searchBar}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M11 4a7 7 0 1 1-4.95 11.95l-2.5 2.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.7"
                />
              </svg>
              <input
                className={styles.searchInput}
                type="search"
                placeholder="Search exoplanet"
                aria-label="Search exoplanet"
                disabled
              />
            </div>

            <div className={styles.planetList}>
              {planetSummaries.map((planet) => (
                <article key={planet.name} className={styles.planetCard}>
                  <span className={styles.planetName}>{planet.name}</span>
                  <span className={styles.planetMeta}>
                    Discovery Method: {planet.method} · Discovery Year: {planet.year}
                  </span>
                  <span className={styles.planetMeta}>Discovery Facility: {planet.facility}</span>
                </article>
              ))}
            </div>
          </div>

          <div id="data" className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <h2 className={styles.panelTitle}>Exoplanet data (Visuals)</h2>
                <p className={styles.panelSubtitle}>
                  Future graph integrations will render mission telemetry in this canvas.
                </p>
              </div>
            </div>
            <div className={styles.dataPlaceholder}>
              <div>
                <strong>Reserved for interactive visuals</strong>
                <p>
                  Connect your analytics service to stream discovery metrics, orbital charts, or
                  comparative spectra directly into this panel.
                </p>
                <div className={styles.placeholderActions}>
                  <span className={styles.placeholderTag}>API Hook</span>
                  <span className={styles.placeholderTag}>Telemetry Feed</span>
                  <span className={styles.placeholderTag}>Render Surface</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="export" className={styles.exportBar}>
          <button type="button" className={styles.exportButton}>
            Export Data
          </button>
        </section>
      </main>
    </>
  );
}
