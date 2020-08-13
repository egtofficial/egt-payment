import { PaymentMethodProps } from '@@/types';
import { faMoneyCheck } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { CheckIcon } from './CheckIcon';

export const Sepa: FC<PaymentMethodProps> = ({ price, subject }) => {
  return (
    <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4">
      <div className="relative z-10 rounded-lg shadow-xl">
        <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-teal-800" />
        <div className="absolute inset-x-0 top-0 transform translate-y-px">
          <div className="flex justify-center transform -translate-y-1/2">
            <span className="inline-flex rounded-full bg-teal-800 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
              Empfohlen
            </span>
          </div>
        </div>
        <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
          <div>
            <div className="mb-4 flex items-center justify-center">
              <FontAwesomeIcon
                className="h-12 w-12 text-gray-400"
                size="lg"
                icon={faMoneyCheck}
              />
            </div>
            <h3
              className="text-center text-3xl leading-9 font-semibold text-gray-900 sm:-mx-6"
              id="tier-growth"
            >
              SEPA-Überweisung
            </h3>
            <div className="mt-4 flex items-center justify-center">
              <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                <span className="font-extrabold">{price}</span>
                <span className="mt-2 ml-2 text-4xl font-medium">€</span>
              </span>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
          <ul>
            <li className="flex items-start">
              <CheckIcon />
              <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                Wir erhalten den vollen Betrag
              </p>
            </li>
            <li className="mt-4 flex items-start">
              <CheckIcon />
              <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                1-2 Werktage
              </p>
            </li>
          </ul>
          <div className="mt-10">
            <p className="text-md font-bold text-gray-900">
              Bitte überweise den Betrag per
              <br />
              SEPA-Überweisung:
            </p>
            <p className="text-md mt-4 text-gray-900">
              Elysium Gaming Tübingen e.V.
              <br />
              DE37 6415 0020 0004 3987 18
              <br />
              SOLADES1TUB
            </p>
            <p className="text-md mt-4 text-gray-900">
              <strong>Betreff:</strong> {subject}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
