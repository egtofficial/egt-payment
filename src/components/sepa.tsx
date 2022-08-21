import { PaymentMethodProps } from '@@/types';
import { faMoneyCheck } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { CheckIcon } from './CheckIcon';

export const Sepa: FC<PaymentMethodProps> = ({ price, subject }) => (
  <div className="max-w-lg mx-auto mt-10 lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-3">
    <div className="relative z-10 rounded-lg shadow-xl">
      <div className="absolute inset-0 border-2 border-teal-800 rounded-lg pointer-events-none" />
      <div className="absolute inset-x-0 top-0 transform translate-y-px">
        <div className="flex justify-center transform -translate-y-1/2">
          <span className="inline-flex px-4 py-1 text-sm font-semibold leading-5 tracking-wider text-white uppercase bg-teal-800 rounded-full">
            Empfohlen
          </span>
        </div>
      </div>
      <div className="px-6 pt-12 pb-10 bg-white rounded-t-lg">
        <div>
          <div className="flex items-center justify-center mb-4">
            <FontAwesomeIcon
              className="w-12 h-12 text-gray-400"
              size="lg"
              icon={faMoneyCheck}
            />
          </div>
          <h3
            className="text-3xl font-semibold leading-9 text-center text-gray-900 sm:-mx-6"
            id="tier-growth"
          >
            SEPA-Überweisung
          </h3>
          <div className="flex items-center justify-center mt-4">
            <span className="flex items-start px-3 text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
              <span className="font-extrabold">{price}</span>
              <span className="mt-2 ml-2 text-4xl font-medium">€</span>
            </span>
          </div>
        </div>
      </div>
      <div className="px-6 pt-10 pb-8 border-t-2 border-gray-100 rounded-b-lg bg-gray-50 sm:px-10 sm:py-10">
        <ul>
          <li className="flex items-start">
            <CheckIcon />
            <p className="ml-3 text-sm font-medium leading-6 text-gray-500">
              Wir erhalten den vollen Betrag
            </p>
          </li>
          <li className="flex items-start mt-4">
            <CheckIcon />
            <p className="ml-3 text-sm font-medium leading-6 text-gray-500">
              1-2 Werktage
            </p>
          </li>
        </ul>
        <div className="mt-10">
          <p className="font-bold text-gray-900 text-md">
            Bitte überweise den Betrag per
            <br />
            SEPA-Überweisung:
          </p>
          <p className="mt-4 text-gray-900 text-md">
            Elysium Gaming Tübingen e.V.
            <br />
            DE37 6415 0020 0004 3987 18
            <br />
            SOLADES1TUB
          </p>
          <p className="mt-4 text-sm text-gray-900">
            <strong>Betreff:</strong> {subject}
          </p>
        </div>
      </div>
    </div>
  </div>
);
