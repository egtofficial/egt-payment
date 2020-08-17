// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { capturePayment } from '@@/utils/paypal';

export default async (req, res) => {
  if (req.method === 'POST') {
    res.statusCode = 200;
    const body = JSON.parse(req.body);
    try {
      const response = await capturePayment(body.orderID);
      res.json({
        id: response.id,
        status: response.status,
      });
    } catch (err) {
      res.statusCode = 400;
      res.json({
        error: err.message,
      });
    }
  }
};
