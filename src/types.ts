export interface PaymentMethodProps {
  price?: number;
  subject: string;
}

export interface MemberData {
  membershipNumber: string;
  groups: { id: number; paymentAmount: string }[];
  name: string;
}
