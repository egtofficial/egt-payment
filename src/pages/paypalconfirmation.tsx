import { ErrorSection } from '@@/components/errorsection';
import { ValidateSection } from '@@/components/validatesection';
import { usePaypalToken } from '@@/lib/hooks';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '@@/styles/Home.module.css';

export default function PayPalConfirmation() {
  const orderID = usePaypalToken();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (orderID) {
      fetch('/api/captureOrder', {
        method: 'POST',
        body: JSON.stringify({
          orderID,
        }),
      })
        .then((result) => result.json())
        .then((payment) => {
          if (payment.error) {
            setError(payment.error);
          } else {
            router.push('/paid');
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('Fehler!', err);
        });
    }
  }, [orderID]);

  return (
    <div className={`${styles.container} w-full h-full pattern-grid-lg`}>
      <Head>
        <title>Mitgliedsbeitrag - Elysium Gaming Tübingen e.V.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-full">
        {error ? <ErrorSection errorMessage={error} /> : <ValidateSection />}
      </main>
    </div>
  );
}
