import { Footer } from '@@/components/footer';
import { HeroSection } from '@@/components/herosection';
import { Payments } from '@@/components/payments';
import { MemberData } from '@@/types';
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

  let price;
  let subject;

  // We have to check the membership group hardcoded
  const memberGroups =
    !error && memberData
      ? memberData.groups.map((g) => {
          // FIXME: Wrong type from easyverein library?
          const p = (g as any).split('/');
          return p[p.length - 1];
        })
      : [];

  if (memberGroups.includes('5710218')) {
    subject = `Monatsbeitrag M${memberData.membershipNumber} ${member}`;
    price = 2;
  } else if (memberGroups.includes('5710215')) {
    subject = `Halbjahresbeitrag M${memberData.membershipNumber} ${member}`;
    price = 10;
  } else if (memberGroups.includes('34960569')) {
    subject = `Jahresbeitrag M${memberData.membershipNumber} ${member}`;
    price = 20;
  } else {
    subject = `Halbjahresbeitrag U${member || ''}`;
    price = 10;
  }

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
      {memberGroups.length > 0 && (
        <Payments price={price} subject={subject} error={error} />
      )}

      <Footer />
    </div>
  );
}
