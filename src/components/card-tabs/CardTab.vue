<template>
  <div class="card-tab">
    <v-tabs v-model="tab" align-tabs="start" color="deep-purple-accent-4">
      <v-tab value="saved-cards">Saved Cards</v-tab>
      <v-tab value="gd-cards">GD Cards</v-tab>
    </v-tabs>
    <slot></slot>
  </div>
  <v-divider></v-divider>
  <v-tabs-window v-model="tab" style="padding: 24px">
    <v-tabs-window-item value="saved-cards">
      <SavedCards />
    </v-tabs-window-item>

    <v-tabs-window-item value="gd-cards">
      <GDCards />
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GDCards from "./GDCards.vue";
import SavedCards from "./SavedCards.vue";

const tab = ref<string>("saved-cards");
</script>
<style scoped lang="scss">
.card-tab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
}
</style>
