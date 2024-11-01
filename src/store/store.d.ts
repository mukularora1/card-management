export interface CardDetail {
  name: string;
  bankName: string;
  cardType: string | null;
  cardNumber: string | null;
  validTill: string;
  cvv: number | null;
  isDefaultCard: boolean;
  isGPay: boolean;
}
export interface State {
  isSideShow: boolean;
  isCardNumberShow: boolean;
  cardDetail: CardDetail;
}
export interface Card {
  name: string;
  accountNumber: string;
  expiryDate: string;
  cvv: string;
  status: "lock" | "archive" | "default" | "gpay" | null;
  isCardShow: false;
}
export interface Cards {
  Credit: Card[];
  Debit: Card[];
  isCardShow: false;
}
