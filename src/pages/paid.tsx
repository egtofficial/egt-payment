import { ThankSection } from '@@/components/thanksection';
import Head from 'next/head';

import styles from '@@/styles/Home.module.css';

export default function Paid() {
  return (
    <div className={`${styles.container} w-full h-full pattern-grid-lg`}>
      <Head>
        <title>Mitgliedsbeitrag - Elysium Gaming Tübingen e.V.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full relative">
        <ThankSection />
      </main>
    </div>
  );
}
