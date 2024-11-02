<template>
  <div>
    <div class="bg-neutral-900 p-5 mt-[24px] rounded-lg relative">
      <h3 class="uppercase font-semibold text-[13px]">Community Creations</h3>

      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-4 invisible absolute left-0 top-0 w-full p-5"
      >
        <div id="fakeGrid"></div>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto max-h-[4000px] overflow-hidden mt-[12px]"
      >
        <div
          class="flex h-full gap-4 flex-col"
          v-for="(item, index) in masonryView"
          :key="index"
        >
          <Popper
            v-for="(product, productIndex) in item"
            :key="productIndex"
            hover
            :open-delay="1000"
            :close-delay="500"
            :offset-distance="`-${fakeGridWidth}px`"
            :offset-skid="'0px'"
            placement="left-start"
            @open:popper="showPopper = true"
            @close:popper="showPopper = false"
          >
            <template #content>
              <div class="h-[500px] w-[268px]">This is the Popper content</div>
            </template>
            <div class="cursor-pointer">
              <img
                :src="product.image"
                class="max-w-full rounded-lg"
                :alt="product.id"
                :id="`masonryImage_${index}${productIndex}`"
              />
            </div>
          </Popper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Popper from "vue3-popper";

const showPopper = ref(false);
const fakeGridWidth: Ref<number> = ref(0);
const masonryView: any = ref([]);
const products: Ref<any[]> = ref([]);

const possibleImages = ref([
  "https://images.pexels.com/photos/4488636/pexels-photo-4488636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4489767/pexels-photo-4489767.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/19499409/pexels-photo-19499409/free-photo-of-busy-automobile-workshop-mechanics-at-work-in-a-garage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&w=800",
]);

function chunkProducts() {
  const productLength = 32;

  for (let i = 0; i < productLength; i++) {
    const random = Math.floor(Math.random() * possibleImages.value.length);
    products.value.push({
      id: i,
      image: possibleImages.value[random],
    });
  }

  const chunks = useChunk(
    products.value,
    Math.round(products.value.length / 4)
  );

  masonryView.value = chunks;
}

onMounted(() => {
  chunkProducts();

  const fakeGrid: HTMLElement | null = document.getElementById("fakeGrid");
  if (fakeGrid) {
    fakeGridWidth.value = fakeGrid.clientWidth;
  }
});
</script>

<style scoped></style>
