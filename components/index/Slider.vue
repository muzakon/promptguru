<template>
  <div>
    <div class="w-full flex items-center h-[440px] gap-3">
      <div class="w-9/12">
        <Flicking
          ref="slider"
          :options="{ align: 'prev', circular: true, disableOnInit: true }"
        >
          <div
            class="panel w-full rounded-[5px] h-[440px] bg-center bg-no-repeat bg-cover relative sliderCover"
            v-for="(slider, index) in sliderItems"
            :key="index"
          >
            <div
              class="absolute w-full h-full left-0 top-0 flex items-center flex-col justify-center p-4 text-white z-[5]"
            >
              <div class="text-[16px] font-bold text-left w-full uppercase">
                asd
              </div>

              <div class="text-[52px] font-black text-left w-full my-[12px]">
                {{ slider.title }}
              </div>

              <div class="leading-[22px] text-left w-full">
                Unleash your creativity with our Fuzzy Animals Coloring Book
                Pages prompt!
              </div>

              <div class="mt-[12px] text-left w-full"></div>
            </div>
          </div>
        </Flicking>
      </div>

      <div class="w-3/12 h-full flex flex-col justify-between gap-2">
        <div
          class="h-full rounded bg-neutral-900 flex items-center justify-center transition-all duration-300"
          v-for="item in sliderItems"
          :key="item.id"
          :class="{
            'scale-[0.95]': item.active,
            'hover:scale-[0.95]': !item.active,
          }"
        >
          <div
            class="min-w-[120px] h-full rounded-r-[5px] bg-center bg-no-repeat bg-cover"
            :style="{
              backgroundImage: `url(${item.previewImage})`,
            }"
          ></div>
          <div class="pl-[12px] w-full relative h-full flex items-center">
            <div
              class="absolute w-full h-full z-[-1] left-0 top-0 progress-loader"
              v-if="item.active"
            >
              <div
                class="absolute h-full z-[-1] left-0 top-0 rounded-r-[5px]"
                :style="{
                  backgroundColor: `rgba(255, 255, 255, 0.05)`,
                }"
              ></div>
            </div>

            <div>
              <div
                class="font-semibold w-full text-left"
                :class="{
                  'text-white': item.active,
                  'text-white/30': !item.active,
                }"
              >
                {{ item.title }}
              </div>

              <div class="w-full mt-[12px]">
                <a-tag v-for="(tag, tagIndex) in item.tags" :key="tagIndex">
                  <span
                    :class="{
                      'text-white': item.active,
                      'text-white/30': !item.active,
                    }"
                    >{{ tag }}</span
                  >
                </a-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";

const slider: any = ref(null);
const activeSliderIndex: any = ref(0);
const fakeGridWidth: Ref<number> = ref(0);

const sliderItems = ref([
  {
    title: "Rome - Italian Town",
    id: 1,
    description: "asdfsadfasdfasdfasdfa",
    tags: ["Dall-E", "Environment"],
    previewImage:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729434534131k_w_800x800.webp?alt=media&token=f8c41370-9504-4dac-b1aa-42cec95b484f",
    active: true,
  },
  {
    title: "Rome - Italian Town 2",
    description: "asdfsadfasdfasdfasdfa",
    id: 2,
    tags: ["Dall-E", "Environment"],
    previewImage:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729434534131k_w_800x800.webp?alt=media&token=f8c41370-9504-4dac-b1aa-42cec95b484f",
    active: false,
  },
  {
    title: "Rome - Italian Town 3",
    description: "asdfsadfasdfasdfasdfa",
    id: 3,
    tags: ["Dall-E", "Environment"],
    previewImage:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729434534131k_w_800x800.webp?alt=media&token=f8c41370-9504-4dac-b1aa-42cec95b484f",
    active: false,
  },
  {
    title: "Rome - Italian Town 4",
    description: "asdfsadfasdfasdfasdfa",
    id: 4,
    tags: ["Dall-E", "Environment"],
    previewImage:
      "https://assets.promptbase.com/DALLE_IMAGES%2FKUdSsjKBLAfVJ1vUqfTJTO2dhZ32%2Fresized%2F1729434534131k_w_800x800.webp?alt=media&token=f8c41370-9504-4dac-b1aa-42cec95b484f",
    active: false,
  },
]);

const sliderItemInterval = ref(null);

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

const masonryView: any = ref([]);

function setSliderItemInterval() {
  if (!sliderItemInterval.value) {
    setInterval(() => {
      const activeItemIndex = sliderItems.value.findIndex(
        (slider) => slider.active
      );

      activeSliderIndex.value =
        activeItemIndex === sliderItems.value.length - 1
          ? 0
          : activeItemIndex + 1;

      sliderItems.value[activeItemIndex].active = false;
      sliderItems.value[activeSliderIndex.value].active = true;
      slider.value.moveTo(activeSliderIndex.value);
    }, 5000);
  }
}

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
  setSliderItemInterval();
  chunkProducts();

  const fakeGrid: HTMLElement | null = document.getElementById("fakeGrid");
  if (fakeGrid) {
    fakeGridWidth.value = fakeGrid.clientWidth;
  }
});

onUnmounted(() => {
  if (sliderItemInterval.value) {
    clearInterval(sliderItemInterval.value);
  }
});
</script>

<style scoped lang="less">
.masonry-item::before {
  padding-bottom: 100%;
  content: "";
  display: inline-block;
  vertical-align: top;
  height: auto;
}

.sliderCover {
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.75),
      transparent 100%
    ),
    url("");
  background-color: rgba(52, 109, 213, 0.389);
  &::after {
    background-color: rgba(0, 0, 0, 0.35);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}

@keyframes widthIncrease {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.progress-loader {
  background-color: rgba(255, 255, 255, 0.03);
  animation: widthIncrease 5s linear infinite;
}
</style>
