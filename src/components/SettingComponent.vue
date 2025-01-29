<template>
  <div class="flex min-h-screen bg-gray-50">
    <aside class="w-16 h-screen fixed left-0 bg-gray-900 z-50">
      <SidebarComponent />
    </aside>
    <main class="flex-1 ml-16">
      <div class="max-w-7xl mx-auto p-8">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
          <h1 class="text-3xl font-bold text-gray-900 flex items-center mb-2">
            <CubeTransparentIcon class="h-8 w-8 text-blue-600 mr-3" />
            Appearance Settings
          </h1>
          <p class="text-gray-600">Personalize your dashboard experience</p>
        </div>

        <div class="space-y-8">
          <section class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
            <h2 class="text-xl font-semibold text-gray-900 mb-2 flex items-center">
              <SunIcon class="h-5 w-5 text-amber-500 mr-2" />
              Color Mode
            </h2>
            <p class="text-gray-500 mb-6">Choose how you'd like your interface to appear</p>

            <!-- <div class="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-full">
              <div v-for="mode in colorModes" :key="mode.name" class="relative cursor-pointer group"
                @click="selectedMode = mode.name">
                <div class="rounded-xl overflow-hidden transition-all duration-300" :class="{
                  'ring-2 ring-blue-500 ring-offset-4': selectedMode === mode.name,
                  'hover:shadow-xl transform hover:-translate-y-1': selectedMode !== mode.name
                }">
                  <div :class="[mode.preview, 'h-36 relative']">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/10"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/20">
                      <component :is="mode.icon" class="h-6 w-6 text-white mb-2" />
                    </div>
                  </div>
                  <div class="p-4 bg-white border-t border-gray-100">
                    <p class="text-sm font-medium text-center text-gray-900">{{ mode.name }}</p>
                    <p class="text-xs text-center text-gray-500 mt-1">{{ mode.description }}</p>
                  </div>
                </div>
              </div>
            </div> -->
          </section>

          <!-- Theme Section -->
          <section class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
            <h2 class="text-xl font-semibold text-gray-900 mb-2 flex items-center">
              <SwatchIcon class="h-5 w-5 text-indigo-500 mr-2" />
              Theme Selection
            </h2>
            <p class="text-gray-500 mb-6">Express yourself with our carefully crafted themes</p>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <button v-for="theme in themes" :key="theme.name"
                class="group relative flex flex-col items-center p-6 rounded-xl transition-all duration-300" :class="{
                  'ring-2 ring-blue-500 ring-offset-2 bg-blue-50': selectedTheme === theme.name,
                  'border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 bg-white': selectedTheme !== theme.name
                }" @click="selectedTheme = theme.name">
                <div class="w-16 h-16 rounded-full shadow-lg mb-4" :class="theme.gradient"></div>
                <span class="text-sm font-medium text-center" :class="{
                  'text-blue-600': selectedTheme === theme.name,
                  'text-gray-700': selectedTheme !== theme.name
                }">{{ theme.name }}</span>
                <span class="text-xs text-gray-500 mt-1">{{ theme.description }}</span>
              </button>
            </div>
          </section>

          <!-- Save Button -->
          <div class="flex justify-end">
            <button
              class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-sm hover:bg-blue-700 transition-colors duration-200 flex items-center"
              @click="saveSettings">
              <CheckIcon class="h-5 w-5 mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SidebarComponent from './Menu/SidebarComponent.vue';
import {
  CubeTransparentIcon,
  SunIcon,
  // MoonIcon,
  // ComputerDesktopIcon,
  SwatchIcon,
  CheckIcon
} from '@heroicons/vue/24/outline';

//   const activeTab = ref('Appearance');
const selectedMode = ref('System Default');
const selectedTheme = ref('Royal Heath');

// const colorModes = [
//   {
//     name: 'Light',
//     preview: 'bg-white',
//     icon: SunIcon,
//     description: 'Perfect for daytime use'
//   },
//   {
//     name: 'Dark',
//     preview: 'bg-gray-900',
//     icon: MoonIcon,
//     description: 'Easy on the eyes at night'
//   },
//   {
//     name: 'System Default',
//     preview: 'bg-gradient-to-r from-gray-100 to-gray-200',
//     icon: ComputerDesktopIcon,
//     description: 'Matches your system settings'
//   }
// ];

const themes = [
  {
    name: 'Royal Heath',
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
    description: 'Elegant & bold'
  },
  {
    name: 'Ocean Breeze',
    gradient: 'bg-gradient-to-r from-blue-400 to-cyan-500',
    description: 'Cool & calming'
  },
  {
    name: 'Sunset Glow',
    gradient: 'bg-gradient-to-r from-orange-400 to-pink-500',
    description: 'Warm & inviting'
  },
  {
    name: 'Forest Mist',
    gradient: 'bg-gradient-to-r from-green-400 to-emerald-500',
    description: 'Natural & fresh'
  },
  {
    name: 'Lavender Dream',
    gradient: 'bg-gradient-to-r from-violet-400 to-purple-500',
    description: 'Soft & dreamy'
  },
  {
    name: 'Golden Hour',
    gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    description: 'Rich & vibrant'
  },
  {
    name: 'Arctic Aurora',
    gradient: 'bg-gradient-to-r from-blue-500 to-green-400',
    description: 'Mystic & serene'
  },
  {
    name: 'Cherry Blossom',
    gradient: 'bg-gradient-to-r from-pink-400 to-rose-300',
    description: 'Gentle & sweet'
  }
];

const saveSettings = () => {
  // Add save functionality here
  console.log('Saving settings:', { selectedMode: selectedMode.value, selectedTheme: selectedTheme.value });
};
</script>

<style scoped>
.transform {
  transition: transform 0.2s ease-in-out;
}
</style>