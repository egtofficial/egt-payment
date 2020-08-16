import { PaymentMethodProps } from '@@/types';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { FC } from 'react';

import { formatPrice } from '../utils';
import { CheckIcon } from './CheckIcon';

export const PayPal: FC<PaymentMethodProps> = ({ price }) => {
  const tax = 0.35 + price * 0.0249;
  const disabled = true; // price < 10;

  return (
    <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-span-3">
      <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
        <div className="flex-1 flex flex-col">
          <div className="bg-white px-6 py-10">
            <div>
              <div className="mb-4 flex items-center justify-center">
                <FontAwesomeIcon
                  className="h-12 w-12 text-gray-400"
                  size="lg"
                  icon={faPaypal}
                />
              </div>
              <h3
                className="text-center text-2xl leading-8 font-medium text-gray-900"
                id="tier-scale"
              >
                PayPal
              </h3>
              <div className="mt-4 flex items-center justify-center">
                <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                  <span className="font-extrabold">{price}</span>
                  <span className="mt-2 ml-2 text-4xl font-medium">€</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
            <ul>
              <li className="mt-4 flex items-start">
                <CheckIcon />
                <p className="ml-3 text-sm leading-6 font-medium text-gray-500">
                  Wir erhalten <strong>{formatPrice(price - tax)}</strong> nach
                  Gebührenabzug von <strong>{formatPrice(tax)}</strong>
                </p>
              </li>
              <li className="mt-4 flex items-start">
                <CheckIcon />
                <p className="ml-3 text-sm leading-6 font-medium text-gray-500">
                  Zahlvorgang in Echtzeit
                </p>
              </li>
            </ul>
            <div className="mt-8">
              <div className="rounded-lg shadow-md">
                <button
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
                  {disabled ? 'Noch nicht möglich' : 'Bezahlen per PayPal'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
