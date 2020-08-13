import { createMollieClient } from '@mollie/api-client';

export const initPayment = async (price: number, subject: string) => {
  const mollieClient = createMollieClient({
    apiKey: process.env.MOLLIE_API_KEY,
  });

  const payment = await mollieClient.payments.create({
    amount: {
      currency: 'EUR',
      value: price.toFixed(2),
    },
    description: subject,
    redirectUrl: 'http://localhost:3000/paid',
  });
  return payment._links.checkout.href;
};
