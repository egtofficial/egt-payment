import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/pro-light-svg-icons';
import { faCreditCard, faMoneyCheck } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { formatPrice } from './utils';

interface PaymentsProps {
  price?: number;
}

export const Payments = ({ price = 10 }) => {
  const paypalTax = 0.35 + price * 0.0249;
  const ccTax = 0.25 + price * 0.018;

  const check = () => (
    <FontAwesomeIcon
      icon={faCheck}
      size="lg"
      className="h-6 w-6 text-green-500"
    />
  );
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
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <div className="mb-4 flex items-center justify-center">
                          <FontAwesomeIcon
                            className="h-12 w-12 text-gray-400"
                            size="lg"
                            icon={faCreditCard}
                          />
                        </div>
                        <h3
                          className="text-center text-2xl leading-8 font-medium text-gray-900"
                          id="tier-hobby"
                        >
                          Kreditkarte
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              €
                            </span>
                            <span className="font-extrabold">10</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul>
                        <li className="mt-4 flex items-start">
                          <div className="flex-shrink-0">{check()}</div>
                          <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                            Wir erhalten{' '}
                            <strong>{formatPrice(10 - ccTax)}</strong> nach
                            Abzug der Gebühren
                            <br /> von <strong>{formatPrice(ccTax)}</strong>
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">{check()}</div>
                          <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                            Zahlvorgang in Echtzeit
                          </p>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-teal-600 hover:text-teal-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                            aria-describedby="tier-hobby"
                          >
                            Bezahlen per Kreditkarte
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
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
                        Überweisung
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">
                            €
                          </span>
                          <span className="font-extrabold">10</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                    <ul>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">{check()}</div>
                        <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                          Wir erhalten den vollen Betrag
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">{check()}</div>
                        <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                          1-2 Werktage
                        </p>
                      </li>
                    </ul>
                    <div className="mt-10">
                      <p className="text-md font-bold text-gray-900">
                        Bitte überweise den Betrag per SEPA-Überweisung:
                      </p>
                      <p className="text-md mt-4 text-gray-900">
                        Elsysium Gaming Tübingen e.V.
                        <br />
                        DE37 6415 0020 0004 3987 18
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
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
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              €
                            </span>
                            <span className="font-extrabold">10</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul>
                        <li className="mt-4 flex items-start">
                          <div className="flex-shrink-0">{check()}</div>
                          <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                            Wir erhalten{' '}
                            <strong>{formatPrice(10 - paypalTax)}</strong> nach
                            Abzug der Gebühren
                            <br /> von <strong>{formatPrice(paypalTax)}</strong>
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">{check()}</div>
                          <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                            Zahlvorgang in Echtzeit
                          </p>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-teal-600 hover:text-teal-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                            aria-describedby="tier-scale"
                          >
                            Bezahlen per Paypal
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
