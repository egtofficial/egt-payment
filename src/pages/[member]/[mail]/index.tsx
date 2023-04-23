import { Footer } from '@@/components/footer';
import { HeroSection } from '@@/components/herosection';
import { Payments } from '@@/components/payments';
import { MemberData } from '@@/types';
import { getFeeInfo } from '@@/utils';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '@@/styles/Home.module.css';

export default function Member() {
  const router = useRouter();
  const member = router.query.member as string;
  const mail = router.query.mail as string;
  const [memberData, setMemberData] = useState<null | MemberData>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (member && mail) {
      fetch('/api/member', {
        method: 'POST',
        body: JSON.stringify({
          member,
          mail,
        }),
      })
        .then((result) => result.json())
        .then((data) => {
          if (data.message) {
            // eslint-disable-next-line no-console
            console.error('Fehler!', data.message);
            setError(
              'Ungültiger Link oder ein anderer Fehler ist aufgetreten.',
            );
          } else {
            setMemberData(data);
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('Fehler!', err);
          setError('Ungültiger Link oder ein anderer Fehler ist aufgetreten.');
        });
    }
  }, [member, mail]);

  const fee = getFeeInfo(memberData);

  return (
    <div className={`${styles.container} w-full h-full pattern-grid-lg`}>
      <Head>
        <title>Mitgliedsbeitrag - Elysium Gaming Tübingen e.V.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-full">
        <HeroSection
          name={memberData && memberData.name ? memberData.name : undefined}
        />
      </main>
      {fee && (
        <Payments price={fee.price} subject={fee.subject} error={error} />
      )}

      <Footer />
    </div>
  );
}
