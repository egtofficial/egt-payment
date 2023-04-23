import { MemberData } from '@@/types';

export const formatPrice = (price: number, decimals = 2, showSymbol = true) =>
  `${price.toFixed(decimals).replace('.', ',')}${showSymbol ? ' €' : ''}`;

export const getFeeInfo = (memberData: MemberData) => {
  if (!memberData) return null;

  const group = memberData.groups[0];
  if (!group) return null;

  let feeType: string;
  const price = parseInt(group.paymentAmount, 10);
  if (price === 2) {
    feeType = 'Monatsbeitrag';
  } else if (price === 20) {
    feeType = 'Jahresbeitrag';
  } else {
    feeType = 'Halbjahresbeitrag';
  }

  return {
    price: parseInt(group.paymentAmount, 10),
    subject: `${feeType} M${memberData.membershipNumber}`,
  };
};
