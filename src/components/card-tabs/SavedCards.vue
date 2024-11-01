<template>
  <div class="saved-cards">
    <div class="saved-cards__collapse-wrapper">
      <CardTransactionDetail :transactions="transactions" />
    </div>
    <div class="saved-cards__cards-detail">
      <div
        class="saved-cards__cards-detail__cards"
        v-for="(card, index) in store.state.cards"
        :key="index">
        <div>
          <div class="saved-cards__cards-detail__cards__heading">
            {{ index }} Cards
          </div>
          <div>
            <div
              class="saved-cards__cards-detail__cards__card-items"
              v-for="(cds, idx) in card"
              :key="idx">
              <div class="saved-cards__cards-detail__cards__card-items--item">
                <div
                  class="saved-cards__cards-detail__cards__card-items--item__visibility"
                  @click="handleShowCardNumber(index, idx)">
                  <span
                    class="saved-cards__cards-detail__cards__card-items--item__visibility-wrapper">
                    <v-icon
                      :icon="
                        cds.isCardShow ? 'mdi-eye' : 'mdi-eye-off'
                      "></v-icon>
                    <span
                      class="saved-cards__cards-detail__cards__card-items--item__visibility--text">
                      {{ cds.isCardShow ? "Hide" : "Show" }} card number
                    </span>
                  </span>
                </div>
                <Card :cardDetail="cds" />
              </div>
              <CardOptions
                :cardType="index"
                :index="idx"
                :status="cds.status" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import Card from "../card/Card.vue";
import CardOptions from "./CardOptions.vue";
import CardTransactionDetail from "./CardTransactionDetail.vue";
const store = useStore();
const handleShowCardNumber = (cardType: string, index: number) => {
  store.state.cards[cardType][index].isCardShow =
    !store.state.cards[cardType][index].isCardShow;
};
const transactions = ref([
  {
    isDebit: true,
    description: "Ordered Food",
    date: "20th May 2022",
    details: "Charges applied on credit card",
    amount: -150.5,
  },
  {
    isDebit: false,
    description: "Ticket Refund",
    date: "20th May 2022",
    details: "Amount credited on debit card",
    amount: 50.5,
  },
]);
</script>

<style scoped lang="scss">
@import "../../styles/colorVariables.scss";
.saved-cards {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media (max-width: 950px) {
    display: unset;
  }
  &__collapse-wrapper {
    flex: 0.4;
    margin-bottom: 8px;
  }
  &__cards-detail {
    flex: 0.6;
    &__cards {
      &__heading {
        width: fit-content;
        font-size: 1.2rem;
        color: $primaryColor;
        font-weight: 500;
        border-bottom: 1px solid $primaryColor;
      }
      &__card-items {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
        &--item {
          &__visibility {
            display: flex;
            justify-content: end;
            cursor: pointer;
            margin: 8px;
            &--text {
              @media (max-width: 600px) {
                display: none;
              }
            }
          }
          &__visibility-wrapper {
            background-color: $backgroundColor;
            padding: 1px;
            color: $primaryColor;
            width: 180px;
            display: flex;
            justify-content: space-between;
            @media (max-width: 600px) {
              width: auto;
            }
          }
        }
      }
    }
  }
}
</style>
