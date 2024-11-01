<template>
  <div v-if="isOpen">
    <v-dialog v-model="props.isOpen" width="500" class="add-card-modal">
      <v-card class="add-card-modal__card">
        <v-card elevation="4" class="add-card-modal__card__header">
          <v-card-title style="display: flex"
            >New Card <v-spacer></v-spacer>
            <v-icon icon="mdi-close" @click="handleModalClose"></v-icon
          ></v-card-title>
        </v-card>

        <v-card-text class="add-card-modal__card__body">
          <div>
            <label for="" :class="{ 'error-label': formError.name }"
              >Name:</label
            >
            <div
              :class="{
                'add-card-modal__card__body__input-wrapper': true,
                'error-input': formError.name,
              }">
              <input
                type="text"
                v-model="store.state.cardDetail.name"
                class="add-card-modal__card__body__input-wrapper--input" />
              <v-icon
                v-if="formError.name"
                icon="mdi-alert-circle-outline"
                class="add-card-modal__card__body__input-wrapper--icon"></v-icon>
            </div>
            <div class="error">{{ formError.name }}</div>
          </div>
          <div>
            <label for="" :class="{ 'error-label': formError.bankName }"
              >Bank Name:</label
            >
            <div
              :class="{
                'add-card-modal__card__body__input-wrapper': true,
                'error-input': formError.bankName,
              }">
              <input
                type="text"
                v-model="store.state.cardDetail.bankName"
                class="add-card-modal__card__body__input-wrapper--input" />
              <v-icon
                icon="mdi-alert-circle-outline"
                v-if="formError.bankName"
                class="add-card-modal__card__body__input-wrapper--icon"></v-icon>
            </div>
            <div class="error">
              {{ formError.bankName }}
            </div>
          </div>
          <div>
            <label for="cardType">Card Type:</label>
            <div class="add-card-modal__card__body__input-wrapper">
              <select
                id="cardType"
                v-model="store.state.cardDetail.cardType"
                class="add-card-modal__card__body__input-wrapper--input">
                <option value="" disabled selected>Select Card Type</option>
                <option value="Credit">Credit card</option>
                <option value="Debit">Debit card</option>
              </select>
              <v-icon
                icon="mdi-menu-down-outline"
                color="#355366"
                class="add-card-modal__card__body__input-wrapper--icon"></v-icon>
            </div>
          </div>
          <div>
            <label for="" :class="{ 'error-label': formError.cardNumber }"
              >Card number:</label
            >
            <div
              :class="{
                'add-card-modal__card__body__input-wrapper': true,
                'error-input': formError.cardNumber,
              }">
              <input
                type="number"
                class="add-card-modal__card__body__input-wrapper--input"
                v-model="store.state.cardDetail.cardNumber" />
              <v-icon
                icon="mdi-alert-circle-outline"
                v-if="formError.cardNumber"
                class="add-card-modal__card__body__input-wrapper--icon"></v-icon>
            </div>
            <div class="error">{{ formError.cardNumber }}</div>
          </div>
          <div style="display: flex; flex-wrap: wrap">
            <div>
              <label for="" :class="{ 'error-label': formError.validDate }"
                >Valid till:</label
              >
              <div
                :class="{
                  'add-card-modal__card__body__mask-input-wrapper': true,
                  'error-input': formError.validDate,
                }"
                class="add-card-modal__card__body__mask-input-wrapper"
                style="display: flex; gap: 4px">
                <v-icon icon="mdi-calendar-week-outline"></v-icon>
                <input
                  ref="expireDate"
                  type="text"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  style="outline: none" />
              </div>
              <div class="error">{{ formError.validDate }}</div>
            </div>
            <div>
              <label for="" :class="{ 'error-label': formError.validCVV }"
                >CVV</label
              >
              <div
                :class="{
                  'add-card-modal__card__body__mask-input-wrapper': true,
                  'error-input': formError.validCVV,
                }">
                <input
                  ref="cvv"
                  type="text"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  style="outline: none" />
              </div>
              <div class="error">{{ formError.validCVV }}</div>
            </div>
          </div>
          <div>
            <div class="add-card-modal__card__body__checkbox-wrapper">
              <input
                type="checkbox"
                name="Set this card as Default"
                id="Set this card as Default"
                v-model="store.state.cardDetail.isDefaultCard" />
              <label for="Set this card as Default"
                >Set this card as Default</label
              >
            </div>
            <div class="add-card-modal__card__body__checkbox-wrapper">
              <input
                type="checkbox"
                name="Add this card to GPay"
                id="Add this card to GPay"
                v-model="store.state.cardDetail.isGPay" />
              <label for="Add this card to GPay">Add this card to GPay</label>
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="add-card-modal__card__footer">
          <v-spacer></v-spacer>
          <v-btn
            style="background-color: #f0f5ff; color: #2684fc"
            @click="handleModalClose"
            >Cancel</v-btn
          >
          <v-btn
            style="background-color: #0c3f62; color: white"
            @click="handleSubmit"
            >Submit</v-btn
          >
           
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
import IMask from "imask";
import { defineEmits, defineProps, onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
const isOpen = ref(props.isOpen);
const expireDate = ref(null);
const cvv = ref(null);
const defaultFormError = {
  name: "",
  bankName: "",
  cardType: "",
  cardNumber: "",
  validDate: "",
  validCVV: "",
};
const formError = ref({ ...defaultFormError });

const emit = defineEmits(["handleAddCardBtnClick", "handleSnackBar"]);
onMounted(() => {
  store.state.cardDetail = {
    name: "",
    bankName: "",
    cardType: "Credit",
    cardNumber: null,
    validTill: "",
    cvv: null,
    isDefaultCard: false,
    isGPay: false,
  };
  if (expireDate.value) {
    const expireDateMask = IMask(expireDate.value, {
      mask: "00/0000",
      lazy: false,
      blocks: {
        MM: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
        },
        YYYY: {
          mask: IMask.MaskedPattern,
          mask: "0000",
        },
      },
    });
    expireDateMask.on("accept", () => {
      store.state.cardDetail.validTill = expireDateMask.displayValue;
    });
  }
  if (cvv.value) {
    const cvvMask = IMask(cvv.value, {
      mask: "000",
      lazy: false,
      placeholderChar: "_",
    });
    cvvMask.on("accept", () => {
      store.state.cardDetail.cvv = cvvMask.displayValue;
    });
  }
});
const handleModalClose = () => {
  isOpen.value = false;
  emit("handleAddCardBtnClick");
};
const validateForm = () => {
  if (!store.state.cardDetail.name) {
    formError.value = {
      ...defaultFormError,
      name: "name can't be empty !",
    };
    return false;
  }
  if (store.state.cardDetail.name.length >= 35) {
    formError.value = {
      ...defaultFormError,
      name: "name can't be too long",
    };
    return false;
  }
  if (!store.state.cardDetail.bankName) {
    formError.value = {
      ...defaultFormError,
      bankName: "Bank name can't be empty !",
    };
    return false;
  }
  if (!store.state.cardDetail.cardNumber) {
    formError.value = {
      ...defaultFormError,
      cardNumber: "card number can't be empty !",
    };
    return false;
  }
  if (store.state.cardDetail.cardNumber.toString().length !== 16) {
    formError.value = {
      ...defaultFormError,
      cardNumber: "card number should be 16!",
    };
    return false;
  }

  if (
    !store.state.cardDetail.validTill ||
    store.state.cardDetail.validTill.includes("_")
  ) {
    formError.value = {
      ...defaultFormError,
      validDate: "Expire date is  not valid!",
    };
    return false;
  }
  if (!store.state.cardDetail.cvv || store.state.cardDetail.cvv.includes("_")) {
    formError.value = {
      ...defaultFormError,
      validCVV: "cvv is  not valid!",
    };
    return false;
  }
  formError.value = { ...defaultFormError };
  return true;
};
const handleSubmit = () => {
  if (validateForm()) {
    const obj = {
      name: store.state.cardDetail.name,
      accountNumber: store.state.cardDetail.cardNumber,
      bankName: store.state.cardDetail.bankName,
      expiryDate: store.state.cardDetail.validTill,
      cvv: store.state.cardDetail.cvv,
      status: store.state.cardDetail.isDefaultCard ? "default" : null,
      isCardShow: false,
    };
    store.state.cards[store.state.cardDetail.cardType].push(obj);
    handleModalClose();
    emit("handleSnackBar");
  }
};
</script>

<style scoped lang="scss">
.add-card-modal {
  &__card {
    &__body {
      &__input-wrapper {
        border: 1px solid #0c3f62;
        border-radius: 5px;
        padding: 8px 16px;
        display: flex;
        margin: 4px 0;
        justify-content: space-between;
        &--input {
          outline: none;
          flex: 0.9;
        }
        &--icon {
          flex: 0.1;
          color: red;
        }
      }
      &__mask-input-wrapper {
        border: 1px solid #0c3f62;
        border-radius: 5px;
        padding: 8px 16px;
        margin: 4px;
        input {
          width: 100px;
        }
      }
      &__checkbox-wrapper {
        display: flex;
        align-items: center;
        gap: 4px;
        margin: 8px 0;
      }
    }
  }
}
label {
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #0c3f62;
  display: block;
}
.error {
  color: red;
  &-input {
    border-color: red !important;
  }
  &-label {
    color: red !important;
  }
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
