<template>
  <div class="card" style="background-color: #0c3f62">
    <div class="card__header">
      <span class="card__status">
        <v-icon v-if="statusIcon" :icon="statusIcon" />
        <img
          v-else-if="cardDetail.status === 'gpay'"
          src="/google-pay.svg"
          alt="Google Pay"
          width="24" />
      </span>
      <div class="card__bank-name">{{ cardDetail.bankName }}</div>
    </div>
    <div class="card__details">
      <div class="card__details__card-holder-detail">
        <div class="card__details__card-holder-detail--name">
          {{ cardDetail.name }}
        </div>
        <div class="card__details__card-holder-detail--account-number">
          {{ cardDetail.accountNumber }}
        </div>
        <div class="card__details__card-holder-detail--extra-detail">
          <div
            class="card__details__card-holder-detail--extra-detail--expire-date">
            <div>Valid till:</div>
            <div>{{ cardDetail.expiryDate }}</div>
          </div>
          <div class="card__details__card-holder-detail--extra-detail--cvv">
            <div>CVV:</div>
            <div>{{ cardDetail.cvv }}</div>
          </div>
        </div>
      </div>
      <div class="card__details__payment-network-detail">
        <img src="/mastercard.svg" alt="Payment Network" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref, watchEffect } from "vue";
import { formatAccountNumber, maskAccountNumber } from "../../utils/card.util";
import { convertDate } from "../../utils/date.util";
import { CardHolderDetail } from "./cardType";
const props = defineProps(["cardDetail"]);
const cardDetail = ref({
  name: "John Watson",
  accountNumber: "**** **** **** 1234",
  expiryDate: "12/24",
  cvv: "***",
  status: null,
} as CardHolderDetail);
watchEffect(() => {
  if (props.cardDetail) {
    cardDetail.value = {
      name: props.cardDetail.name,
      accountNumber: props.cardDetail.isCardShow
        ? formatAccountNumber(props.cardDetail.accountNumber)
        : maskAccountNumber(props.cardDetail.accountNumber),
      expiryDate: convertDate(props.cardDetail.expiryDate),
      cvv: props.cardDetail.isCardShow ? props.cardDetail.cvv : "***",
      bankName: props.cardDetail.bankName,
      status: props.cardDetail.status,
    };
  }
});

const statusIcon = computed(() => {
  switch (props.cardDetail.status) {
    case "lock":
      return "mdi-lock-outline";
    case "archive":
      return "mdi-archive";
    case "default":
      return "mdi-check";
    default:
      return null;
  }
});
</script>

<style lang="scss" scoped>
.card {
  color: white;
  width: 400px;
  border-radius: 5px;
  padding: 12px;
  min-height: 200px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__status {
    display: flex;
    color: gray;
    opacity: 0.8;
  }
  &__bank-name {
    display: flex;
    justify-content: end;
  }
  &__details {
    display: flex;
    margin-top: 36px;
    align-items: end;
    gap: 4px;
    &__card-holder-detail {
      flex: 0.7;
      &--name {
        font-size: 1.2rem;
      }
      &--account-number {
        letter-spacing: 5px;
        font-weight: 600;
      }
      &--extra-detail {
        display: flex;
        &--expire-date {
          display: flex;
          flex: 1;
        }
        &--cvv {
          display: flex;
          flex: 1;
          justify-content: end;
        }
      }
    }
    &__payment-network-detail {
      flex: 0.3;
      display: flex;
      justify-content: center;
      img {
        width: 60px;
      }
    }
  }
}
</style>
