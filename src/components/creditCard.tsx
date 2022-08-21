import { PaymentMethodProps } from '@@/types';
import { faCreditCard } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { FC, useState } from 'react';

import { formatPrice } from '../utils';
import { CheckIcon } from './CheckIcon';

export const CreditCard: FC<PaymentMethodProps> = ({ price, subject }) => {
  const [fetching, setFetching] = useState(false);
  const tax = 0.25 + price * 0.04;
  const tooLow = price < 10;
  const disabled = fetching || tooLow;

  const onButtonClick = () => {
    setFetching(true);
    fetch('/api/payment', {
      method: 'POST',
      body: JSON.stringify({
        method: 'cc',
        subject,
        price,
      }),
    })
      .then((result) => result.json())
      .then((payment) => {
        if (payment.checkout) window.location.href = payment.checkout;
      })
      .catch((err) => {
        console.error('Fehler!', err);
      });
  };

  return (
    <div className="max-w-md mx-auto lg:mx-0 lg:max-w-none lg:col-span-3">
      <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
        <div className="flex flex-col flex-1">
          <div className="px-6 py-10 bg-white">
            <div>
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  className="w-12 h-12 text-gray-400"
                  size="lg"
                  icon={faCreditCard}
                />
              </div>
              <h3
                className="text-2xl font-medium leading-8 text-center text-gray-900"
                id="tier-hobby"
              >
                Kreditkarte
              </h3>
              <div className="flex items-center justify-center mt-4">
                <span className="flex items-start px-3 text-6xl leading-none tracking-tight text-gray-900">
                  <span className="font-extrabold">{price}</span>
                  <span className="mt-2 ml-2 text-4xl font-medium">€</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-gray-100 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
            <ul>
              <li className="flex items-start mt-4">
                <CheckIcon />
                <p className="ml-3 text-sm font-medium leading-6 text-gray-500">
                  Wir erhalten <strong>{formatPrice(price - tax)}</strong> nach
                  Gebührenabzug von <strong>{formatPrice(tax)}</strong>
                </p>
              </li>
              <li className="flex items-start mt-4">
                <CheckIcon />
                <p className="ml-3 text-sm font-medium leading-6 text-gray-500">
                  Zahlvorgang in Echtzeit
                </p>
              </li>
            </ul>
            <div className="mt-8">
              <div className="rounded-lg shadow-md">
                <button
                  onClick={onButtonClick}
                  type="button"
                  disabled={disabled}
                  className={clsx(
                    'block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium ease-in-out duration-150',
                    {
                      'text-teal-600 hover:text-teal-500 focus:outline-none focus:shadow-outline': !disabled,
                      'text-gray-400 cursor-not-allowed': disabled,
                    },
                  )}
                >
                  {tooLow
                    ? 'Nur bei Halbjahreszahlung'
                    : 'Bezahlen per Kreditkarte'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
