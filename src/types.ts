export interface PaymentMethodProps {
  price?: number;
  subject: string;
}

export interface MemberData {
  membershipNumber: string;
  groups: number[];
  name: string;
}
