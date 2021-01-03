import fetch from 'isomorphic-unfetch';

export const getBTCPrice = () =>
  fetch('https://api.coindesk.com/v1/bpi/currentprice/EUR.json')
    .then((result) => result.json())
    .then((json) => json.bpi.EUR);
