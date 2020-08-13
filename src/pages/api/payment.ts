// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { initPayment } from '@@/utils/mollie';

export default async (req, res) => {
  if (req.method === 'POST') {
    res.statusCode = 200;
    const body = JSON.parse(req.body);
    const paymentResponse = await initPayment(body.price, body.subject);
    res.json({
      checkout: paymentResponse,
    });
  }
};
