<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="handleSideBarToggle"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Cards</v-app-bar-title>
    <div class="top-header__right-side-actions">
      <v-btn
        icon="mdi-account"
        class="top-header__right-side-actions--account"></v-btn>
      <v-icon icon="mdi-menu-down" color="#2684fc"></v-icon>
    </div>
  </v-app-bar>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
onMounted(() => {
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      store.state.isSideShow = false;
    } else store.state.isSideShow = true;
  });
});
const handleSideBarToggle = () => {
  store.state.isSideShow = !store.state.isSideShow;
};
</script>

<style scoped lang="scss">
@import "../styles/colorVariables.scss";
.top-header {
  &__right-side-actions {
    margin-right: 18px;
    &--account {
      border: 1px solid $primaryColor;
      color: $primaryColor;
      margin-right: 4px;
    }
  }
}
</style>
