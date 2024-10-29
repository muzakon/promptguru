<template>
  <div class="pt-[120px]">
    <div class="container mx-auto">
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

      <div class="mt-[24px] w-full">
        <span
          class="inline-block bg-blue-400/10 text-[12px] text-blue-300 hover:text-white hover:bg-blue-400/20 mr-2 px-4 py-2 rounded-full cursor-pointer mb-[8px]"
          v-for="(category, index) in generativeAiImageCategories.slice(0, 15)"
          :key="index"
          >{{ category }}</span
        >

        <div class="mt-[12px] flex items-center justify-center">
          <div
            class="inline-block cursor-pointer text-center hover:text-white text-white/50 uppercase text-[12px] font-semibold"
          >
            <div class="flex items-center group">
              <span class="transition-all duration-200 group-hover:mr-2.5 mr-2">
                Browse All
              </span>
              <Icon
                name="icon-park-outline:arrow-right"
                class="transition-all duration-200"
                :size="20"
              />
            </div>
          </div>
        </div>

        <div class="bg-neutral-900 p-4">
          <h3 class="uppercase font-semibold">Bests of the month</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
const slider: any = ref(null);
const activeSliderIndex: any = ref(0);

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

const generativeAiImageCategories = ref([
  "Food",
  "Marketing",
  "Environment",
  "Furniture",
  "Character Design",
  "Fashion",
  "Architecture",
  "Healthcare",
  "Travel",
  "Gaming",
  "Education",
  "Art",
  "Sports",
  "Technology",
  "Entertainment",
  "Product Design",
  "Interior Design",
  "Nature",
  "Transportation",
  "Finance",
  "Social Media",
  "Photography",
  "Virtual Reality",
  "Augmented Reality",
  "Web Design",
  "Graphic Design",
  "E-commerce",
  "Events",
  "Branding",
  "Music",
  "Film",
  "Animation",
  "Lifestyle",
  "Beauty",
  "Animals",
  "Illustration",
  "Public Relations",
  "Real Estate",
  "Retail",
  "Home Decor",
  "Culinary Arts",
  "Science",
  "Historical Recreation",
  "Sportswear",
  "Toys",
  "Jewelry",
  "Crafts",
  "Wellness",
  "Fitness",
  "DIY Projects",
  "Children's Books",
  "Comics",
  "Cultural Heritage",
  "Social Impact",
  "Fictional Worlds",
  "Fantasy",
  "Mythology",
  "Digital Collectibles",
  "Urban Planning",
  "Nature Conservation",
  "Sustainability",
  "Smart Cities",
  "Data Visualization",
  "User Experience Design",
  "Corporate Training",
  "Non-profit Campaigns",
  "Public Safety",
  "Space Exploration",
  "Weather Patterns",
  "Political Campaigns",
  "Crisis Management",
  "Virtual Events",
  "Online Education",
  "Community Engagement",
  "Mental Health",
  "Personal Branding",
  "Cybersecurity",
  "Historical Documentaries",
  "Pet Care",
  "Gardening",
  "Home Renovation",
  "Personal Finance",
  "Travel Guides",
  "Language Learning",
  "Crisis Communications",
  "Disaster Relief",
  "Social Entrepreneurship",
  "Cultural Festivals",
  "Seasonal Promotions",
  "Trend Analysis",
  "Sports Analysis",
  "Influencer Marketing",
  "Virtual Influencers",
  "Augmented Learning",
  "Bioengineering",
  "Ecological Studies",
  "Anthropology",
  "Philosophy",
  "Psychology",
  "Personal Growth",
  "Retreats",
  "Volunteer Work",
  "Adventure Tourism",
  "Local Experiences",
  "Home Office Design",
  "Pet Fashion",
  "Health and Nutrition",
  "Retirement Planning",
  "Elder Care",
  "Hobbies",
  "Tech Gadgets",
  "Smart Home Devices",
  "Eco-friendly Products",
  "Luxury Lifestyle",
  "Culinary Tourism",
  "Cultural Education",
  "Historical Preservation",
  "Online Communities",
  "Futurism",
  "Metaverse",
  "Digital Art",
  "Mixed Media",
  "Community Arts",
  "Social Movements",
  "Activism",
  "Environmental Justice",
  "Ethical Fashion",
  "Sustainable Living",
  "Green Technologies",
  "Digital Nomad Lifestyle",
]);

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

onMounted(() => {
  setSliderItemInterval();
});

onUnmounted(() => {
  if (sliderItemInterval.value) {
    clearInterval(sliderItemInterval.value);
  }
});
</script>

<style scoped>
.sliderCover {
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.75),
      transparent 100%
    ),
    url("");
  background-color: rgba(52, 109, 213, 0.389);
}

.sliderCover::after {
  background-color: rgba(0, 0, 0, 0.35);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  /* box-shadow: inset rgba(0, 0, 0, 1) 0px 0px 80px 40px,
    rgba(0, 0, 0, 1) 0px 0px 40px 10px; */
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
