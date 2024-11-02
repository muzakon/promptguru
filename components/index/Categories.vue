<template>
  <div>
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
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>
