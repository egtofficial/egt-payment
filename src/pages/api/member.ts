// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getMember } from '@@/lib/api';
import { MemberData } from '@@/types';

export default async (req, res) => {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    const memberResult = await getMember(body.member);
    const member = await memberResult.json();
    if (member.contactDetails.privateEmail === body.mail) {
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
