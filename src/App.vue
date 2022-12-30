<template>
  <navbar-all-pages></navbar-all-pages>
  <div class="app">
    <router-view> </router-view>
  </div>
</template>

<script>
import NavbarAllPages from "@/components/UI/NavbarAllPages.vue";
export default {
  components: {
    NavbarAllPages,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
