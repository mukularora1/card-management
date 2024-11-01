<template>
  <v-card width="100%">
    <CardTab>
      <v-btn
        size="small"
        elevation="1"
        @click="handleAddCardBtnClick"
        class="card-content__add-card-btn">
        <v-icon class="card-content__add-card-btn--icon">mdi-plus</v-icon
        ><span class="card-content__add-card-btn--text">Add card</span></v-btn
      >
    </CardTab>
    <div v-if="isOpen">
      <AddCardModal
        :isOpen="isOpen"
        @handleAddCardBtnClick="handleAddCardBtnClick"
        @handleSnackBar="handleSnackBar" />
    </div>
    <v-snackbar v-model="isSnackbarShow">
      Card Successfull added

      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="isSnackbarShow = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import AddCardModal from "../add-card-modal/AddCardModal.vue";
import CardTab from "../card-tabs/CardTab.vue";
const isSnackbarShow = ref(false);
const isOpen = ref(false);
const handleAddCardBtnClick = () => {
  isOpen.value = !isOpen.value;
};
const handleSnackBar = () => {
  isSnackbarShow.value = !isSnackbarShow.value;
};
</script>

<style scoped lang="scss">
@import "../../styles/colorVariables.scss";
.card-content {
  &__add-card-btn {
    background-color: $primaryColor;
    color: white;
    &--text {
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
}
</style>
