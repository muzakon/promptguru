<template>
  <div>
    <div class="bg-neutral-900 p-5 mt-[24px] rounded-lg">
      <h3 class="uppercase font-semibold text-[13px]">Bests of the month</h3>

      <div class="mt-3 grid grid-rows-5 grid-flow-col gap-3">
        <div
          v-for="(item, index) in bestOfMonths"
          :key="index"
          class="hover:bg-neutral-800 p-4 rounded-[5px] cursor-pointer"
        >
          <div class="grid grid-cols-12">
            <div
              class="text-[12px] flex items-center justify-center col-span-2"
            >
              {{ index + 1 }}
            </div>
            <div class="col-span-10 flex">
              <div
                class="w-[80px] h-[60px] bg-center bg-no-repeat bg-cover rounded-[5px]"
                :style="{ backgroundImage: `url(${item.image})` }"
              ></div>

              <div class="flex flex-col h-full pl-[8px] justify-between">
                <div class="">
                  <div
                    class="text-[8px] font-semibold uppercase inline-block px-2 py-1 bg-yellow-700/10 text-yellow-500 border border-yellow-700/30 rounded-[3px]"
                  >
                    {{ item.model }}
                  </div>
                </div>
                <div
                  class="text-white max-w-[220px] text-ellipsis overflow-hidden whitespace-nowrap text-[13px]"
                >
                  {{ item.title }}
                </div>

                <div class="text-white/60 text-[10px] uppercase">
                  {{ item.price ? `$ ${item.price}` : "free" }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bestOfMonths = ref([
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: 1.99,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
  {
    image:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729775493990x_w_800x800.webp?alt=media&token=8ab2b91f-c89b-4459-8700-f729d82e4ea6",
    title: "Atmospheric Anime Dark Dreams Unveiled",
    model: "midjourney",
    price: null,
  },
]);
</script>

<style scoped></style>
