<template>
    <div class="p-2 sm:p-4 md:p-8">
        <div class="w-full max-w-7xl mx-auto">
            <div class="overflow-hidden">
                <div class="p-4 sm:p-6 md:p-8 relative">
                    <div class="absolute inset-0 opacity-20">
                    </div>
                    <h1
                        class="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-center mb-2 sm:mb-4 text-shadow relative">
                        การเข้าร่วมกิจกรรมจิตอาสาต่างๆ
                    </h1>
                </div>

                <div class="p-4 sm:p-6 md:p-8">
                    <div class="space-y-3 sm:space-y-4">
                        <TransitionGroup name="list">
                            <div class="p-3 sm:p-4  ">
                                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <div class="flex-1">
                                        <div class="relative">
                                            <input type="text" class="w-full px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base border-2 border-blue-200 rounded-lg 
                               focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
                                                placeholder="ชื่อกิจกรรมอาสา" readonly />

                                            <div class="absolute right-2 top-1/2 -translate-y-1/2">
                                                <button @click="openVolunteerModal"
                                                    class="inline-flex  items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                    <svg v-if="!selectedFile" class="w-4 h-4" fill="none"
                                                        stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M12 4v16m0-16l-4 4m4-4l4 4" />
                                                    </svg>
                                                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span class="text-sm font-medium">
                                                        รูปภาพกิจกรรม
                                                    </span>
                                                </button>
                                            </div>
                                            <transition enter-active-class="transition duration-300 ease-out"
                                                    enter-from-class="opacity-0 scale-95"
                                                    enter-to-class="opacity-100 scale-100"
                                                    leave-active-class="transition duration-200 ease-in"
                                                    leave-from-class="opacity-100 scale-100"
                                                    leave-to-class="opacity-0 scale-95">
                                                    <div v-if="isVolunteerModalOpen"
                                                        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                                                        <div
                                                            class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[26rem] max-w-[90vw] p-6 relative transform transition-all duration-300 ease-in-out">
                                                            <button @click="closeVolunteerModal"
                                                                class="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors group">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-7 w-7 group-hover:rotate-90 transition-transform"
                                                                    fill="none" viewBox="0 0 24 24"
                                                                    stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </button>

                                                            <h1
                                                                class="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center tracking-wide">
                                                                รูปภาพกิจกรรม
                                                            </h1>

                                                            <div class="flex justify-center">
                                                                <button @click="handleCertificateDownload"
                                                                    :disabled="isDownloading" class="group flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-xl 
                                                                        hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 
                                                                        transform hover:scale-105 shadow-md hover:shadow-lg 
                                                                        disabled:opacity-50 disabled:cursor-not-allowed 
                                                                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                                                                        dark:bg-blue-600 dark:hover:bg-blue-700">
                                                                    <Download
                                                                        class="w-6 h-6 transition-transform group-hover:rotate-12" />
                                                                    <span class="text-base font-semibold">
                                                                        {{ isDownloading ? 'กำลังดาวน์โหลด...' :
                                                                            'ดาวน์โหลด' }}
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Download } from 'lucide-vue-next';


const isVolunteerModalOpen = ref(false);
const openVolunteerModal = () => {
    isVolunteerModalOpen.value = true;
}
const closeVolunteerModal = () => {
    isVolunteerModalOpen.value = false;
}
</script>