<template>
    <div class="flex min-h-screen bg-gray-50">
        <aside class="w-16 h-screen fixed left-0 bg-gray-900 z-50">
            <SidebarComponent />
        </aside>
    </div>
    <main class="flex-1 ml-16">
        <br>
        <br>
        <div class="max-w-12xl mx-auto p-8">
            <nav class="mb-8 border-b">
                <div class="flex space-x-1">
                    <button v-for="tab in tabs" :key="tab"
                        class="px-6 py-3 text-sm font-medium transition-colors duration-200" :class="{
                            'border-b-2 border-blue-600 text-blue-600': activeTab === tab,
                            'text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-t-lg': activeTab !== tab
                        }" @click="activeTab = tab">
                        {{ tab }}
                    </button>
                </div>
            </nav>

            <div v-if="activeTab === 'Appearance'" class="space-y-12">
                <header>
                    <h1 class="text-2xl font-semibold text-gray-900">Appearance</h1>
                    <p class="mt-1 text-sm text-gray-500">Customize how your dashboard looks and feels</p>
                </header>

                <section class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 class="text-lg font-medium text-gray-900 mb-2">Color Mode</h2>
                    <p class="text-sm text-gray-500 mb-6">Select your preferred color scheme</p>

                    <div class="grid grid-cols-3 gap-6 max-w-3xl">
                        <div v-for="mode in colorModes" :key="mode.name" class="relative cursor-pointer group"
                            @click="selectedMode = mode.name">
                            <div class="rounded-lg overflow-hidden transition-all duration-200 hover:scale-102" :class="{
                                'ring-2 ring-blue-500 ring-offset-2': selectedMode === mode.name,
                                'hover:shadow-lg': selectedMode !== mode.name
                            }">
                                <div :class="[mode.preview, 'h-32 relative']">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/5"></div>
                                </div>
                                <div class="p-4 bg-white border border-gray-100">
                                    <p class="text-sm font-medium text-center text-gray-900">{{ mode.name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 class="text-lg font-medium text-gray-900 mb-2">Themes</h2>
                    <p class="text-sm text-gray-500 mb-6">Choose from our curated theme collection</p>

                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <button v-for="theme in themes" :key="theme.name"
                            class="group relative flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 hover:shadow-md"
                            :class="{
                                'ring-2 ring-blue-500 ring-offset-2 bg-blue-50': selectedTheme === theme.name,
                                'border border-gray-100 hover:border-blue-200 bg-white': selectedTheme !== theme.name
                            }" @click="selectedTheme = theme.name">
                            <div class="w-10 h-10 rounded-full shadow-inner" :class="theme.gradient"></div>
                            <span class="text-sm font-medium" :class="{
                                'text-blue-600': selectedTheme === theme.name,
                                'text-gray-700': selectedTheme !== theme.name
                            }">{{ theme.name }}</span>
                        </button>
                    </div>
                </section>

                <!-- <section class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div class="flex items-center justify-between">
                        <div>
                            <h2 class="text-lg font-medium text-gray-900 mb-2">Transparent Sidebar</h2>
                            <p class="text-sm text-gray-500">Enable transparency for the desktop sidebar</p>
                        </div>

                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="isTransparent" class="sr-only peer">
                            <div class="w-14 h-7 bg-gray-200 rounded-full peer 
                             peer-checked:after:translate-x-full peer-checked:bg-blue-600
                             after:content-[''] after:absolute after:top-0.5 after:left-[4px]
                             after:bg-white after:rounded-full after:h-6 after:w-6 
                             after:transition-all after:border-gray-300 after:border
                             peer-checked:after:border-white">
                            </div>
                        </label>
                    </div>
                </section> -->
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import SidebarComponent from './Menu/SidebarComponent.vue';

const activeTab = ref('Appearance');
const selectedMode = ref('System Default');
const selectedTheme = ref('Royal Heath');
// const isTransparent = ref(false);

// const theme = ref('light');

// const themes = {
//     light: 'theme-light',
//     dark: 'theme-dark',
//     custom: 'theme-custom'
// }

// const changeTheme = (newTheme) => {
//     theme.value = newTheme;

//     document.documentElement.classList.remove(...Object.values(themes));

//     document.documentElement.classList.add(themes[newTheme]);
// }

const tabs = ['Appearance'];

const colorModes = [
    {
        name: 'Dark',
        preview: 'bg-gray-900'
    },
    {
        name: 'System Default',
        preview: 'bg-white border border-gray-200'
    },
    {
        name: 'Light',
        preview: 'bg-gray'
    }
]

const themes = [
    { name: 'Royal Heath', gradient: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { name: 'Egg Sour', gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
    { name: 'Snowy Mint', gradient: 'bg-gradient-to-r from-green-400 to-cyan-500' },
    { name: 'Hopbush', gradient: 'bg-gradient-to-r from-purple-400 to-pink-400' },
    { name: 'Flax', gradient: 'bg-gradient-to-r from-yellow-200 to-green-300' },
    { name: 'Fuchsia', gradient: 'bg-gradient-to-r from-fuchsia-500 to-pink-500' },
    { name: 'Tumbleweed', gradient: 'bg-gradient-to-r from-orange-300 to-rose-300' },
    { name: 'Buttercup', gradient: 'bg-gradient-to-r from-yellow-300 to-green-400' },
    { name: 'Can Can', gradient: 'bg-gradient-to-r from-red-300 to-pink-300' },
    { name: 'Cornflower Blue', gradient: 'bg-gradient-to-r from-blue-400 to-indigo-400' },
    { name: 'Tonys', gradient: 'bg-gradient-to-r from-orange-400 to-rose-400' },
    { name: 'Rise Flower', gradient: 'bg-gradient-to-r from-violet-300 to-purple-300' }
]
</script>

<style scoped>
.scale-102 {
    transform: scale(1.02);
}
</style>