import btoa from 'btoa';

const host = process.env.PP_HOST;

const fetchAccessToken = () => {
  const authString = `${process.env.PP_CLIENT}:${process.env.PP_SECRET}`;
  return fetch(`${host}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(authString)}`,
    },
    body: 'grant_type=client_credentials',
  })
    .then((response) => response.json())
    .then((json) => json.access_token);
};

export const initPaypalPayment = async (price: number, subject: string) => {
  const token = (await fetchAccessToken()) as string;
  const data = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'EUR',
          value: price,
        },
        description: subject,
      },
    ],
    application_context: {
      return_url: 'https://zahldag.egt.community/paypalconfirmation',
    },
  };
  return fetch(`${host}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.name)
        throw new Error(`${json.name as string}: ${json.message as string}`);
      else if (json.id) return json.links[1].href;
      return null;
    });
};

export const capturePayment = async (orderID: string) => {
  const token = (await fetchAccessToken()) as string;
  return fetch(`${host}/v2/checkout/orders/${orderID}/capture`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.name)
        throw new Error(`${json.name as string}: ${json.message as string}`);
      else if (json.id) return json;
      return null;
    });
};
