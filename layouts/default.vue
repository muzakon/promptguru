<template>
  <a-config-provider
    :theme="{
      algorithm: theme.darkAlgorithm,
    }"
  >
    <div
      class="__headerSection fixed top-0 left-0 w-full z-[9999] bg-neutral-900 border-b border-neutral-600/30"
    >
      <div class="relative w-full">
        <div class="container mx-auto p-4">
          <div class="flex items-center justify-between">
            <div>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                width="36"
              />
            </div>

            <div class="flex items-center gap-2 text-[13px]">
              <div v-for="item in menuItems">
                <div v-if="item.title !== 'discover'">
                  <div
                    class="flex items-center capitalize py-2 px-4 transition duration-200 cursor-pointer text-white/50 hover:text-white"
                    :class="{
                      'border border-white/20 hover:border-white rounded-full':
                        item.isBtn,
                      'rounded-[5px]': !item.isBtn,
                    }"
                  >
                    <Icon
                      v-if="item.icon"
                      :name="item.icon"
                      :size="20"
                      class="mr-2"
                    />
                    <span>
                      {{ item.title }}
                    </span>
                  </div>
                </div>
                <div v-else>
                  <a-popover
                    placement="bottom"
                    :arrow="false"
                    overlayClassName="test"
                    :overlayInnerStyle="{
                      borderRadius: 0,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }"
                    :overlayStyle="{
                      animation: 'none',
                    }"
                    :mouseEnterDelay="0"
                  >
                    <template #content>
                      <div class="container mx-auto">
                        <div class="grid grid-cols-5 gap-3">
                          <div>
                            <h1 class="text-white text-[13px]">Models</h1>

                            <div
                              class="text-white/40 text-[12px] hover:text-white rounded-[5px] p-3 hover:bg-neutral-700 cursor-pointer mb-1"
                            >
                              Flux
                            </div>
                            <div
                              class="text-white/40 text-[12px] hover:text-white rounded-[5px] p-3 hover:bg-neutral-700 cursor-pointer mb-1"
                            >
                              Dall E
                            </div>
                            <div
                              class="text-white/40 text-[12px] hover:text-white rounded-[5px] p-3 hover:bg-neutral-700 cursor-pointer mb-1"
                            >
                              Midjourney
                            </div>
                            <div
                              class="text-white/40 text-[12px] hover:text-white rounded-[5px] p-3 hover:bg-neutral-700 cursor-pointer mb-1"
                            >
                              Stable Diffusion
                            </div>
                            <div
                              class="text-white/40 text-[12px] hover:text-white rounded-[5px] p-3 hover:bg-neutral-700 cursor-pointer mb-0"
                            >
                              Community Models
                            </div>
                          </div>
                          <div class="col-span-4">
                            <h1 class="text-white text-[13px]">
                              Product Types
                            </h1>

                            <div class="grid grid-rows-5 grid-flow-col gap-1">
                              <div>
                                <div
                                  class="text-white/40 text-[12px] hover:text-white rounded-[5px] p-3 hover:bg-neutral-700 cursor-pointer inline-block"
                                >
                                  Environment
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <div>
                      <div
                        class="flex items-center capitalize py-2 px-4 transition duration-200 cursor-pointer text-white/50 hover:text-white rounded-[5px]"
                      >
                        <Icon
                          v-if="item.icon"
                          :name="item.icon"
                          :size="20"
                          class="mr-2"
                        />
                        <span>
                          {{ item.title }}
                        </span>
                      </div>
                    </div>
                  </a-popover>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div
          ref="megaMenu"
          class="absolute left-0 w-full p-4 bottom-[-50px]"
          v-if="showMegaMenu"
        >
          <div
            class="bg-neutral-800 rounded-[8px] border border-white/10 p-4 w-full"
          >
            <div class="grid grid-cols-5">
              <div>Models</div>
              <div>Categories</div>
              <div>Format</div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <slot />
  </a-config-provider>
</template>

<script lang="ts" setup>
import { theme } from "ant-design-vue";

const menuItems = ref([
  {
    title: "how it works",
    isBtn: false,
    icon: "hugeicons:help-circle",
  },
  {
    title: "blog",
    isBtn: false,
    icon: "material-symbols:forum-outline",
  },
  {
    title: "products",
    isBtn: false,
    icon: "ant-design:product-outlined",
  },
  {
    title: "discover",
    isBtn: false,
    icon: "hugeicons:discover-circle",
  },
  {
    title: "market",
    isBtn: false,
    icon: "healthicons:market-stall-outline",
  },

  {
    title: "login",
    isBtn: true,
    icon: "hugeicons:login-03",
  },
]);

const showMegaMenu = ref(false);

const menuBarItems = ref([
  {
    title: "environment",
    icon: "mdi:environment-outline",
  },
]);
</script>

<style>
.test {
  width: 100%;
  background-color: transparent !important;
  border-radius: 0;
  padding-top: 11px;
}
</style>
