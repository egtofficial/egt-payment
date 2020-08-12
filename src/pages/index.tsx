import Head from 'next/head';
import { useEffect } from 'react';

import { Footer } from '../components/footer';
import { HeroSection } from '../components/herosection';
import { Payments } from '../components/payments';
import styles from '../styles/Home.module.css';

export default function Home() {
  useEffect(() => {
    // fetch('/api/hello')
  }, []);
  return (
    <div className={`${styles.container} w-full h-full pattern-grid-lg`}>
      <Head>
        <title>Mitgliedsbeitrag - Elysium Gaming Tübingen e.V.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full relative">
        <HeroSection />
      </main>
      <Payments />

      <Footer />
    </div>
  );
}
