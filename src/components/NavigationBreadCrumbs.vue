<template>
  <v-breadcrumbs :items="items">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

interface BreadcrumbItem {
  title: string;
  href: string;
  disabled?: boolean;
}

const items = ref<BreadcrumbItem[]>([]);
const route = useRoute();

watchEffect(() => {
  const pathArray = route.path.split("/").filter(Boolean);
  items.value = [
    { title: "Home", href: "/", disabled: false },
    ...pathArray.map((el, index) => ({
      title: el.charAt(0).toUpperCase() + el.slice(1),
      href: `/${pathArray.slice(0, index + 1).join("/")}`,
    })),
  ];
});
</script>

<style scoped></style>
