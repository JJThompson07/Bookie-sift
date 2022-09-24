<template>
  <div class="home"></div>
</template>

<script setup>
import { onMounted } from "vue";
import axios from "axios";

const eloApi = axios.create({
  baseURL: "https://api.coindesk.com/v1/bpi/",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "http://api.clubelo.com",
  },
});

onMounted(() => {
  eloApi
    .get("currentprice.json")
    .then((result) => {
      console.log(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style lang="scss" scoped></style>
