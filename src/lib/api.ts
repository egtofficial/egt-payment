import fetch from 'isomorphic-unfetch';

export const getMemberPrice = (id: string) =>
  fetch(`https://easyverein.com/api/v1/member/${id}`, {
    headers: {
      Authorization: `Token ${process.env.EASYVEREIN_TOKEN}`,
    },
  });
