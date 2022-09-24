<template>
  <div
    class="app-bg-lagoon-3 app-flex app-flex-row app-flex-justify-between app-w-100-p app-p-3"
  >
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      class="app-link"
      :class="linkClasses"
      >{{ route.name }}</router-link
    >
  </div>
</template>

<script setup>
import { computed, defineProps, toRefs } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  colour: {
    type: String,
    default: "white-4",
  },
  activeColour: {
    type: String,
    default: "forest-4",
  },
});

const { colour } = toRefs(props);

const linkClasses = computed(() => {
  return [`app-text-${colour.value}`];
});

const router = useRouter();
const routes = router.getRoutes();
</script>
