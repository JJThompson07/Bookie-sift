<template>
  <component :is="Nav" />
  <router-view />
</template>

<script setup>
import Nav from "./components/Nav.vue";
</script>
