import { Footer } from '@@/components/footer';
import { HeroSection } from '@@/components/herosection';
import { Payments } from '@@/components/payments';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '@@/styles/Home.module.css';

export default function Member() {
  const router = useRouter();
  const member = router.query.member as string;
  const interval = router.query.interval as string;

  let price;
  let subject;

  // FIXME: Really dirty, but the easyVerein API does not provide correct values currently
  if (interval && interval.includes('Monatszahlung')) {
    subject = `Monatsbeitrag M${member}`;
    price = 2;
  } else {
    subject = `Halbjahresbeitrag M${member}`;
    price = 10;
  }

  return (
    <div className={`${styles.container} w-full h-full pattern-grid-lg`}>
      <Head>
        <title>Mitgliedsbeitrag - Elysium Gaming Tübingen e.V.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full relative">
        <HeroSection />
      </main>
      <Payments price={price} subject={subject} />

      <Footer />
    </div>
  );
}
