<template>
  <div>
    <div class="grid grid-cols-3 gap-3 mt-[24px]">
      <div class="bg-neutral-900 p-5 rounded-lg">
        <h3 class="uppercase font-semibold text-[13px] mb-[12px]">
          Trend Game Assets
        </h3>

        <div
          v-for="(i, index) in 5"
          :key="index"
          class="flex p-4 hover:bg-neutral-800 cursor-pointer rounded-[5px]"
        >
          <div class="text-[12px] flex items-center justify-center w-2/12">
            {{ index + 1 }}
          </div>

          <div class="flex w-10/12">
            <div
              class="w-[80px] h-[60px] bg-center bg-no-repeat bg-cover rounded-[5px]"
              :style="{
                backgroundImage: `url('https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1728436636084d_w_800x800.webp?alt=media&token=0c4d6422-b537-462e-ad60-e6524e0c2f7f')`,
              }"
            ></div>

            <div class="flex flex-col h-full pl-[8px] justify-between">
              <div class="">
                <div
                  class="text-[8px] font-semibold uppercase inline-block px-2 py-1 bg-yellow-700/10 text-yellow-500 border border-yellow-700/30 rounded-[3px]"
                >
                  Dall E
                </div>
              </div>
              <div
                class="text-white max-w-[220px] text-ellipsis overflow-hidden whitespace-nowrap text-[13px]"
              >
                Dreamlike Harmonies And Earthy Minimalisms
              </div>

              <div class="text-white/60 text-[10px] uppercase">FREE</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-neutral-900 p-5 rounded-lg">
        <h3 class="uppercase font-semibold text-[13px] mb-[12px]">
          Trend Game Assets
        </h3>

        <div
          v-for="(i, index) in 5"
          :key="index"
          class="flex p-4 hover:bg-neutral-800 cursor-pointer rounded-[5px]"
        >
          <div class="text-[12px] flex items-center justify-center w-2/12">
            {{ index + 1 }}
          </div>

          <div class="flex w-10/12">
            <div
              class="w-[80px] h-[60px] bg-center bg-no-repeat bg-cover rounded-[5px]"
              :style="{
                backgroundImage: `url('https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1728436636084d_w_800x800.webp?alt=media&token=0c4d6422-b537-462e-ad60-e6524e0c2f7f')`,
              }"
            ></div>

            <div class="flex flex-col h-full pl-[8px] justify-between">
              <div class="">
                <div
                  class="text-[8px] font-semibold uppercase inline-block px-2 py-1 bg-yellow-700/10 text-yellow-500 border border-yellow-700/30 rounded-[3px]"
                >
                  Dall E
                </div>
              </div>
              <div
                class="text-white max-w-[220px] text-ellipsis overflow-hidden whitespace-nowrap text-[13px]"
              >
                Dreamlike Harmonies And Earthy Minimalisms
              </div>

              <div class="text-white/60 text-[10px] uppercase">FREE</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-neutral-900 p-5 rounded-lg">
        <h3 class="uppercase font-semibold text-[13px] mb-[12px]">
          Trend Game Assets
        </h3>

        <div
          v-for="(i, index) in 5"
          :key="index"
          class="flex p-4 hover:bg-neutral-800 cursor-pointer rounded-[5px]"
        >
          <div class="text-[12px] flex items-center justify-center w-2/12">
            {{ index + 1 }}
          </div>

          <div class="flex w-10/12">
            <div
              class="w-[80px] h-[60px] bg-center bg-no-repeat bg-cover rounded-[5px]"
              :style="{
                backgroundImage: `url('https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1728436636084d_w_800x800.webp?alt=media&token=0c4d6422-b537-462e-ad60-e6524e0c2f7f')`,
              }"
            ></div>

            <div class="flex flex-col h-full pl-[8px] justify-between">
              <div class="">
                <div
                  class="text-[8px] font-semibold uppercase inline-block px-2 py-1 bg-yellow-700/10 text-yellow-500 border border-yellow-700/30 rounded-[3px]"
                >
                  Dall E
                </div>
              </div>
              <div
                class="text-white max-w-[220px] text-ellipsis overflow-hidden whitespace-nowrap text-[13px]"
              >
                Dreamlike Harmonies And Earthy Minimalisms
              </div>

              <div class="text-white/60 text-[10px] uppercase">FREE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
