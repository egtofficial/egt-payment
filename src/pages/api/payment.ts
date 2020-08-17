// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { initMolliePayment } from '@@/utils/mollie';
import { initPaypalPayment } from '@@/utils/paypal';

export default async (req, res) => {
  if (req.method === 'POST') {
    res.statusCode = 200;
    const body = JSON.parse(req.body);
    let paymentResponse;
    if (body.method === 'cc') {
      paymentResponse = await initMolliePayment(body.price, body.subject);
      res.json({
        checkout: paymentResponse,
      });
    } else if (body.method === 'paypal') {
      paymentResponse = await initPaypalPayment(body.price, body.subject);
      res.json({
        checkout: paymentResponse,
      });
    } else {
      res.json({
        checkout: null,
      });
    }
  }
};
