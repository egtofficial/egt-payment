import fetch from 'isomorphic-unfetch';

export const getMember = (id: string) =>
  fetch(
    `https://easyverein.com/api/v1/member/${id}?query={id,contactDetails{name, privateEmail},membershipNumber,memberGroups}`,
    {
      headers: {
        Authorization: `Token ${process.env.EASYVEREIN_TOKEN}`,
      },
    },
  );
