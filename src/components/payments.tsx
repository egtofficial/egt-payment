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

export const Payments: FC<PaymentsProps> = ({ price, subject, error }) => {
  return (
    <div className="bg-gray-900">
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <p className="mt- text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
            Zahlungsmethoden
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl leading-7 text-gray-300 sm:mt-5 sm:text-2xl sm:leading-8">
            Bitte wähle eine Zahlungsmethode für deinen Mitgliedsbeitrag
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white pattern-grid-lg pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-12">
              {error ? (
                <div className="text-xl text-center text-red-500 mx-auto max-w-md mb-15 lg:col-span-12">
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
};
