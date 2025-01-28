<template>
    <div class="flex">
        <aside class="w-16 h-screen fixed left-0 bg-gray-900">
            <SidebarComponent />
        </aside>

        <main class="flex-1 ml-16 p-6 bg-gray-50">
            <br>
            <br>
            <div class="grid grid-cols-12 gap-6 mb-6">
                <div class="bg-white p-4 rounded-lg shadow">
                    <div class="flex items-center  justify-between">
                        <div>
                            <p class="text-lg text-gray-500">จำนวนผู้สมัคร</p>
                            <span class="text-2xl font-semibold" ref="numberRef">{{ displayNumber }}</span>
                        </div>
                        <div class="p-2 bg-blue-100 rounded-lg">
                            <span class="text-blue-500">📄</span>
                        </div>
                    </div>
                </div>

                
            </div>

            <div class="bg-white p-4 rounded-lg shadow mb-6">
                <div class="flex justify-between items-center mb-4">
                    <div>
                        <h2 class="text-lg font-semibold">Campaign Reach</h2>
                        <div class="flex gap-4 mt-2">
                            <div class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                                <p class="text-sm text-gray-500">12 country</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-green-500"></span>
                                <p class="text-sm text-gray-500">180,807,839 user</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                                <p class="text-sm text-gray-500">9 month</p>
                            </div>
                        </div>
                    </div>
                    <button class="px-4 py-2 text-blue-500 text-sm hover:bg-blue-50 rounded-lg transition-colors duration-200">
                        <span class="mr-2">🔄</span>
                        Click to refresh
                    </button>
                </div>
                <WorldMap class="h-64 w-full" :mapData="mapData" />
            </div>

            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-4 bg-white p-4 rounded-lg shadow">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="font-semibold">Influencer</h3>
                        <button class="text-blue-500 text-sm hover:bg-blue-50 px-2 py-1 rounded">
                            + Add Influencer
                        </button>
                    </div>
                    <div class="space-y-4">
                        <div v-for="influencer in influencers" :key="influencer.name" 
                             class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                    <img :src="influencer.avatar" alt="" class="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p class="font-medium">{{ influencer.name }}</p>
                                    <p class="text-sm text-gray-500">{{ influencer.projects }} Projects</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="text-sm font-medium">{{ influencer.followers }}</p>
                                <p class="text-xs text-gray-500">Followers</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-4 bg-white p-4 rounded-lg shadow">
                    <h3 class="font-semibold mb-4">Audience Age & Gender</h3>
                </div>

                <div class="col-span-4 bg-white p-4 rounded-lg shadow">
                    <h3 class="font-semibold mb-4">Follower Interest</h3>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps } from 'vue';
import SidebarComponent from './Menu/SidebarComponent.vue';

import gsap from 'gsap';

const props = defineProps({
    value: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        default: 2
    }
});

const numberRef = ref(null);
const displayNumber = ref(0);

const animateNumber = () => {
    gsap.to(displayNumber, {
        duration: props.duration,
        value: props.value,
        roundProps: 'value',
        ease: 'power1.out',
        onUpdate: () => {
            displayNumber.value = displayNumber.value.toLocaleString();
        }
    });
}

onMounted(() => {
    animateNumber();
});

watch(() => props.value, () => {
    animateNumber();
})

const influencers = ref([
    { 
        name: 'Malie Wewoho', 
        projects: 23, 
        followers: '1,620,208',
        avatar: '/placeholders/avatar1.jpg'
    },
    { 
        name: 'Nancy Aulia', 
        projects: 34, 
        followers: '1,224,820',
        avatar: '/placeholders/avatar2.jpg'
    },
    { 
        name: 'Natasha Viresta', 
        projects: 12, 
        followers: '1,105,549',
        avatar: '/placeholders/avatar3.jpg'
    },
    { 
        name: 'Wilona Hamda', 
        projects: 8, 
        followers: '927,423',
        avatar: '/placeholders/avatar4.jpg'
    },
    { 
        name: 'Reva Nanda', 
        projects: 10, 
        followers: '827,810',
        avatar: '/placeholders/avatar5.jpg'
    }
])

const mapData = ref({
    regions: [
        { id: 'US', value: 87152 },
        { id: 'EU', value: 65089 },
        { id: 'AS', value: 120504 },
    ]
})

</script>

<style scoped>
.transition-colors {
    transition: background-color 0.2s ease;
}

/* Custom scrollbar for the influencer list */
.space-y-4 {
    max-height: calc(100vh - 300px);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #E5E7EB transparent;
}

.space-y-4::-webkit-scrollbar {
    width: 6px;
}

.space-y-4::-webkit-scrollbar-track {
    background: transparent;
}

.space-y-4::-webkit-scrollbar-thumb {
    background-color: #E5E7EB;
    border-radius: 3px;
}
</style>