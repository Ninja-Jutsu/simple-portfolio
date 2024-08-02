import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/pages/Home.module.scss';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  const [contactRef, setContactRef] = useState(null);
  const [heroRef, setHeroRef] = useState(null);

  return (
    <>
      <Head>
        <title>Ismail Bardach</title>
        <link rel="icon" href="/ninja-face-svgrepo-com.svg" />
      </Head>

      <div className={styles.container}>
        <main>
          <HeroSection setHeroRef={setHeroRef} />

          <AboutSection contactRef={contactRef} />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection setContactRef={setContactRef} />

          <Footer heroRef={heroRef} />
        </main>
      </div>
    </>
  );
}
