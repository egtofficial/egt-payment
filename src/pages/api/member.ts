// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MemberData } from '@@/types';
import { setApiToken, getMember } from 'easyverein';

setApiToken(process.env.EASYVEREIN_TOKEN);

export default async (req, res) => {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    const member = await getMember(
      body.member,
      '{id,contactDetails{name, privateEmail},email,membershipNumber,memberGroups}',
    );
    if (
      member.contactDetails.privateEmail === body.mail ||
      member.email === body.mail
    ) {
      res.statusCode = 200;
      res.json({
        membershipNumber: member.membershipNumber,
        groups: member.memberGroups,
        name: member.contactDetails.name,
      } as MemberData);
    } else {
      res.statusCode = 404;
      res.json({
        message: 'Not found',
      });
    }
  }
};
