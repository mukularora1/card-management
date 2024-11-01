<template>
  <v-app class="app">
    <SideBar />
    <TopHeader />
    <v-main>
      <div class="app__main-wrapper">
        <NavigationBreadCrumbs />
        <router-view></router-view>
      </div>
      <Footer />
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import NavigationBreadCrumbs from "./components/NavigationBreadCrumbs.vue";
import Footer from "./components/footer/Footer.vue";
import SideBar from "./layout/SideBar.vue";
import TopHeader from "./layout/TopHeader.vue";
</script>
<style scoped lang="scss">
@import "./styles/colorVariables.scss";
.app {
  background-color: $backgroundColor;
  &__main-wrapper {
    margin: 6px 30px;
  }
}
</style>
