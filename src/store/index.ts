import { createStore } from "vuex";
import { State } from "./store";

const store = createStore<State>({
  state: {
    isSideShow: true,
    isCardNumberShow: false,
    cardDetail: {
      name: "",
      bankName: "",
      cardType: "Credit",
      cardNumber: null,
      validTill: "",
      cvv: null,
      isDefaultCard: false,
      isGPay: false,
    },
    cards: {
      Credit: [
        {
          name: "John Watson",
          accountNumber: "1234123412341234",
          expiryDate: "12/24",
          cvv: "123",
          status: null,
          isCardShow: false,
          bankName: "HDFC",
        },
        {
          name: "Adam seeker",
          accountNumber: "1234123412341234",
          expiryDate: "12/24",
          cvv: "123",
          status: null,
          isCardShow: true,
          bankName: "HDFC",
        },
      ],
      Debit: [
        {
          name: "Adam seeker",
          accountNumber: "1234123412341234",
          expiryDate: "12/24",
          cvv: "123",
          status: null,
          isCardShow: false,
          bankName: "HDFC",
        },
      ],
    },
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
