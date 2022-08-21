import { FC } from 'react';

import { Bitcoin } from './bitcoin';
import { CreditCard } from './creditCard';
import { PayPal } from './paypal';
import { Sepa } from './sepa';

interface PaymentsProps {
  price?: number;
  subject: string;
  error?: string;
}

export const Payments: FC<PaymentsProps> = ({ price, subject, error }) => (
  <div className="bg-gray-900">
    <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <div className="text-center">
        <p className="text-3xl font-extrabold leading-9 text-white mt- sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
          Zahlungsmethoden
        </p>
        <p className="max-w-4xl mx-auto mt-3 text-xl leading-7 text-gray-300 sm:mt-5 sm:text-2xl sm:leading-8">
          Bitte wähle eine Zahlungsmethode für deinen Mitgliedsbeitrag
        </p>
      </div>
    </div>

    <div className="pb-12 mt-16 bg-white pattern-grid-lg lg:mt-20 lg:pb-20">
      <div className="relative z-0">
        <div className="absolute inset-0 bg-gray-900 h-5/6 lg:h-2/3" />
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-12">
            {error ? (
              <div className="max-w-md mx-auto text-xl text-center text-red-500 mb-15 lg:col-span-12">
                {error}
              </div>
            ) : (
              <>
                <CreditCard price={price} subject={subject} />
                <Sepa price={price} subject={subject} />
                <Bitcoin price={price} subject={subject} />
                <PayPal price={price} subject={subject} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
