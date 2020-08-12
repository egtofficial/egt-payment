// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getMemberPrice } from '@@/lib/api';

export default async (req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    const priceResult = await getMemberPrice('1');
    res.json(priceResult.body);
  }
  // Handle any other HTTP method
};
