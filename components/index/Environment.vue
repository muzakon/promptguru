<template>
  <div>
    <div class="bg-neutral-900 p-5 mt-[24px] rounded-lg">
      <h3 class="uppercase font-semibold text-[13px] mb-[12px]">Environment</h3>
      <div>
        <Flicking
          :options="{ align: 'prev', circular: true, panelsPerView: 1 }"
        >
          <div v-for="idx in 3" class="flicking-panel" :key="idx">
            <div class="grid grid-cols-5 gap-2">
              <div
                v-for="item in 5"
                class="bg-center bg-cover bg-no-repeat rounded-[5px] h-[180px] bg-neutral-600"
                :style="{
                  backgroundImage: `url('https://imagekraft.ai/wp-content/uploads/2023/03/logo-prompt-18.jpeg')`,
                }"
              ></div>
            </div>
          </div>
        </Flicking>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
</script>

<style scoped></style>
