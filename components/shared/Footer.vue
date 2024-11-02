<template>
  <div>
    <div class="bg-neutral-900 border-t border-white/10 p-5 mt-[60px]">
      <div class="container mx-auto py-12">
        <div class="flex">
          <div class="w-4/12">Logo</div>
          <div class="w-8/12">
            <div class="grid grid-cols-4 gap-2">
              <div>
                <div class="text-[13px] text-white/80">Product</div>

                <div class="flex flex-col mt-[12px] justify-start">
                  <div
                    class="py-2 text-white/40 hover:text-white/60 cursor-pointer text-[13px]"
                  >
                    About
                  </div>
                  <div
                    class="py-2 text-white/40 hover:text-white/60 cursor-pointer text-[13px]"
                  >
                    Canvas
                  </div>
                  <div
                    class="py-2 text-white/40 hover:text-white/60 cursor-pointer text-[13px]"
                  >
                    Market
                  </div>
                  <div
                    class="py-2 text-white/40 hover:text-white/60 cursor-pointer text-[13px]"
                  >
                    Case Studies
                  </div>
                </div>
              </div>
              <div>
                <div class="text-[13px] text-white/80">Support</div>

                <div class="flex flex-col mt-[12px] justify-start">
                  <div
                    class="py-2 text-white/40 hover:text-white/60 cursor-pointer text-[13px]"
                  >
                    FAQ
                  </div>
                  <div
                    class="py-2 text-white/40 hover:text-white/60 cursor-pointer text-[13px]"
                  >
                    Discord
                  </div>
                  <div
                    class="py-2 text-white/40 hover:text-white/60 cursor-pointer text-[13px]"
                  >
                    Contact
                  </div>
                </div>
              </div>
              <div>
                <div class="text-[13px] text-white/80">Company</div>

                <div class="flex flex-col mt-[12px] justify-start">
                  <div
                    class="py-2 text-white/40 hover:text-white/60 cursor-pointer text-[13px]"
                  >
                    About BlazeCore
                  </div>
                  <div
                    class="py-2 text-white/40 hover:text-white/60 cursor-pointer text-[13px]"
                  >
                    Blog
                  </div>
                  <div
                    class="py-2 text-white/40 hover:text-white/60 cursor-pointer text-[13px]"
                  >
                    Careers
                  </div>
                </div>
              </div>
              <div>
                <div class="text-[13px] text-white/80">Legals</div>

                <div class="flex flex-col mt-[12px] justify-start">
                  <div
                    class="py-2 text-white/40 hover:text-white/60 cursor-pointer text-[13px]"
                  >
                    Terms of Services
                  </div>
                  <div
                    class="py-2 text-white/40 hover:text-white/60 cursor-pointer text-[13px]"
                  >
                    Privacy Policy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a-divider style="margin-top: 32px; margin-bottom: 32px"></a-divider>
        <div class="flex items-center justify-between">
          <div class="text-[13px] text-white/40">
            ©2024 BlazeCore Entertainment. All rights reserved.
          </div>

          <div class="flex items-center">
            <Icon
              name="hugeicons:instagram"
              :size="20"
              class="mr-4 text-white/40 hover:text-white/60 cursor-pointer"
            />
            <Icon
              name="jam:linkedin-square"
              :size="20"
              class="mr-4 text-white/40 hover:text-white/60 cursor-pointer"
            />
            <Icon
              name="hugeicons:youtube"
              :size="20"
              class="mr-4 text-white/40 hover:text-white/60 cursor-pointer"
            />
            <Icon
              name="hugeicons:discord"
              :size="20"
              class="mr-0 text-white/40 hover:text-white/60 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
