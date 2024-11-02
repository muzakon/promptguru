<template>
  <div class="pt-[90px]">
    <div class="container mx-auto">
      <Slider />

      <Categories />

      <BestsOfMonth />

      <Trends />

      <Logos />

      <Environment />

      <CommunityCreations />
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import Slider from "@/components/index/Slider.vue";
import Categories from "~/components/index/Categories.vue";
import BestsOfMonth from "~/components/index/BestsOfMonth.vue";
import Trends from "~/components/index/Trends.vue";
import Logos from "~/components/index/Logos.vue";
import Environment from "~/components/index/Environment.vue";
import CommunityCreations from "~/components/index/CommunityCreations.vue";
</script>

<style scoped></style>
