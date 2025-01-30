<template>
    <div class="flex min-h-screen">
        <aside class="w-16 h-screen fixed left-0 bg-gray-900">
            <SidebarComponent />
        </aside>

        <main class="flex-1 ml-32 p-6">
            <br>
            <br>
            <br>
            <div class="grid grid-cols-12 md:grid-cols-12 gap-2 mb-8">
                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500 font-medium">จำนวนผู้สมัคร</p>
                            <p class="text-3xl font-bold mt-2">{{ formatNumber }}</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500 font-medium">ยอดเข้าชม</p>
                            <p class="text-3xl font-bold mt-2">1,200</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500 font-medium">อัตราการสมัคร</p>
                            <p class="text-3xl font-bold mt-2">95%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                        <h2 class="text-xl font-bold text-gray-800"></h2>
                        <div class="flex flex-wrap gap-6 mt-4">
                            <div class="flex items-center gap-2">
                                <p class="text-sm text-gray-600"></p>
                            </div>
                            <div class="flex items-center gap-2">
                                <p class="text-sm text-gray-600"></p>
                            </div>
                            <div class="flex items-center gap-2">
                                <p class="text-sm text-gray-600"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-bold text-gray-800"></h3>
                        <button class="text-blue-600 hover:text-blue-700"></button>
                    </div>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-3 rounded-lg transition-colors duration-200">
                            <div class="flex items-center gap-4">
                                <div>
                                    <p class="font-semibold text-gray-800"></p>
                                    <p class="text-sm text-gray-500"></p>
                                </div>
                            </div>
                            <button class="text-gray-400 hover:text-gray-600">
                            </button>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-6"></h3>
                </div>

                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-6"></h3>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps, computed } from 'vue';
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
    },
});

const displayNumber = ref(0);

const animateNumber = () => {
    gsap.to(displayNumber, {
        duration: props.duration,
        value: props.value,
        ease: 'power1.out',
        onUpdate: () => {
            displayNumber.value = Math.round(gsap.getProperty(displayNumber, "value"));
        },
    });
};

const formatNumber = computed(() => displayNumber.value.toLocaleString());

onMounted(() => {
    animateNumber();
});

watch(() => props.value, () => {
    animateNumber();
})

</script>

<style scoped>
.transition-colors {
    transition: background-color 0.2s ease;
}

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