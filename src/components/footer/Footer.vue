<template>
  <footer class="footer">
    <p>© {{ year }} GIRIRAJ DIGITAL. All Rights Reserved.</p>
  </footer>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { getCurrentYear } from "../../utils/date.util";
const year = ref(getCurrentYear());
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: gray;
  color: white;
  margin-top: 30px;
  p {
    text-align: center;
  }
}
</style>
