<template>
  <div class="card-options">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="card-options__option"
      @click="selectOption(option.status)">
      <div
        :class="[
          'card-options__option--icon-wrapper',
          { 'card-options__option--selected': props.status === option.status },
        ]">
        <v-icon v-if="option.icon" :icon="option.icon" color="white"></v-icon>
        <img v-else :src="option.imgSrc" alt="" width="24" />
      </div>
      <span class="card-options__option--label">{{ option.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(["status", "index", "cardType"]);
const options = [
  { label: "Lock card", icon: "mdi-lock-outline", status: "lock" },
  { label: "Archive", icon: "mdi-archive", status: "archive" },
  { label: "Set as default", icon: "mdi-check", status: "default" },
  { label: "Add to gpay", imgSrc: "/google-pay.svg", status: "gpay" },
];

function selectOption(status: string) {
  store.state.cards[props.cardType][props.index].status =
    store.state.cards[props.cardType][props.index].status === status
      ? null
      : status;
}
</script>

<style lang="scss" scoped>
@import "../../styles/colorVariables.scss";

.card-options {
  height: 200px;
  aspect-ratio: 1;
  border-radius: 5px;
  padding: 9px;
  background-color: $backgroundColor;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9px;
  margin-top: 44px;

  &__option {
    display: flex;
    cursor: pointer;
    align-items: center;
    flex-direction: column;

    &--icon-wrapper {
      padding: 8px;
      background-color: $primaryColor;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      transition: background-color 0.3s ease;

      &.card-options__option--selected {
        background-color: $sidebarBg;
      }
    }

    &--label {
      text-align: center;
    }
  }
}
</style>
