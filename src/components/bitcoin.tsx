import { getBTCPrice } from '@@/lib/api';
import { PaymentMethodProps } from '@@/types';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';

import { formatPrice } from '../utils';
import { CheckIcon } from './CheckIcon';

export const Bitcoin: FC<PaymentMethodProps> = ({ price }) => {
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [btcRate, setBtcRate] = useState(0);
  const [btcPrice, setBtcPrice] = useState<null | any>(null);

  useEffect(() => {
    getBTCPrice().then((rate) => {
      setBtcRate(rate.rate_float);
    });
  }, []);

  useEffect(() => {
    if (btcRate > 0) {
      setBtcPrice({
        price: (price / btcRate).toFixed(5),
        rate: btcRate,
      });
    }
  }, [price, btcRate]);

  const disabled = false;

  return (
    <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-span-3">
      <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none">
        <div className="flex-1 flex flex-col">
          <div className="bg-white px-6 py-10 relative">
            <div>
              <div className="mb-4 flex items-center justify-center">
                <FontAwesomeIcon
                  className="h-12 w-12 text-gray-400"
                  size="lg"
                  icon={faBitcoin}
                />
              </div>
              <h3
                className="text-center text-2xl leading-8 font-medium text-gray-900"
                id="tier-scale"
              >
                Bitcoin
              </h3>
              <div className="mt-4 flex items-center justify-center">
                <span className="px-3 flex items-start text-5xl leading-none tracking-tight text-gray-900">
                  <span className="font-extrabold">
                    {btcPrice ? btcPrice.price : ''}
                  </span>
                  <span className="mt-2 ml-2 text-3xl font-medium">BTC</span>
                </span>
              </div>
              {btcRate > 0 && (
                <div className="absolute left-0 w-full mt-4 text-sm text-gray-700 text-center">
                  Echtzeit-Kurs von{' '}
                  <a
                    className="text-teal-600 underline"
                    href="https://www.coindesk.com/price/bitcoin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CoinDesk
                  </a>
                  <br />1 BTC = {formatPrice(btcRate)}
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
            <ul>
              <li className="mt-4 flex items-start">
                <CheckIcon />
                <p className="ml-3 text-sm leading-6 font-medium text-gray-500">
                  Wir erhalten den vollen Betrag
                </p>
              </li>
              <li className="mt-4 flex items-start">
                <CheckIcon />
                <p className="ml-3 text-sm leading-6 font-medium text-gray-500">
                  Zahlvorgang in Echtzeit
                </p>
              </li>
            </ul>
            {showPaymentDetails ? (
              <div className="mt-10">
                <p className="text-md font-bold text-gray-900">
                  Bitte sende den Betrag an folgende Adresse (bech32):
                </p>
                <img
                  src="/img/btcaddress.png"
                  className="h-40 mt-4 mx-auto"
                  alt="Bitcoin-Adresse"
                />
                <code className="text-xs mt-2 text-gray-900 block break-all">
                  bc1q339z9ke2c8jzhgj7za86jyagjprxa739m7q8zc
                </code>
                <p className="text-xs mt-4 text-gray-900">
                  Informiere uns anschließend persönlich über deine getätigte
                  Zahlung!
                  <br />
                  Wir verwenden eine einzige, nicht-personalisierte
                  Empfangsadresse und können die Zahlung andernfalls nicht
                  zuordnen.
                </p>
              </div>
            ) : (
              <div className="mt-8">
                <div className="rounded-lg shadow-md">
                  <button
                    type="button"
                    onClick={() => setShowPaymentDetails(true)}
                    disabled={disabled}
                    className={clsx(
                      'block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium ease-in-out duration-150',
                      {
                        'text-teal-600 hover:text-teal-500 focus:outline-none focus:shadow-outline': !disabled,
                        'text-gray-400 cursor-not-allowed': disabled,
                      },
                    )}
                  >
                    {disabled
                      ? 'Derzeit nicht möglich'
                      : 'Bezahlen mit Bitcoin'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
