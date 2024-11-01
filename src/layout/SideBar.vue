<template>
  <v-navigation-drawer
    class="sidebar"
    theme="dark"
    permanent
    v-model="store.state.isSideShow">
    <div class="sidebar__heading"><span>GIRIRAJ</span> DIGITAL</div>
    <div class="sidebar__sub-heading">
      Software and web development company - Umbraco Gold Partner
    </div>
    <v-list color="transparent" class="sidebar__list-wrapper">
      <div v-for="(item, index) in menuItems" :key="index">
        <router-link
          :to="item.path"
          class="sidebar__list-wrapper__list"
          :style="{ color: selectedItem === index ? primaryColor : '' }"
          @click="selectItem(index)">
          <div class="sidebar__list-wrapper__list--wrapper">
            <v-icon :icon="item.icon"></v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </div>
        </router-link>
        <v-divider />
      </div>
    </v-list>

    <template v-slot:append>
      <v-btn prepend-icon="mdi-logout" class="sidebar__logout"> Logout </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const primaryColor = "#2684fc";
const menuItems = [
  { title: "Home", icon: "mdi-home-outline", path: "/" },
  { title: "Card", icon: "mdi-credit-card-chip-outline", path: "/card" },
  { title: "Transactions", icon: "mdi-swap-horizontal", path: "/transactions" },
  { title: "Settings", icon: "mdi-cog", path: "/settings" },
];

const selectedItem = ref<number | null>(0);

function selectItem(index: number) {
  selectedItem.value = index;
}
</script>

<style scoped lang="scss">
@import "../styles/colorVariables.scss";

.sidebar {
  padding: 30px 18px;
  background-color: $sidebarBg;
  &__heading {
    font-size: 1.2rem;
    color: white;
    text-align: center;
    span {
      font-weight: 600;
    }
  }
  &__sub-heading {
    text-align: center;
  }
  &__list-wrapper {
    cursor: pointer;
    margin-top: 36px;
    &__list {
      text-decoration: none;
      color: white;
      &--wrapper {
        display: flex;
        gap: 8px;
        padding: 12px;
      }
    }
    &__list:hover {
      transition: all 300ms;
      color: $primaryColor;
    }
  }
  &__logout {
    background-color: $sidebarBg;
  }
}
</style>
