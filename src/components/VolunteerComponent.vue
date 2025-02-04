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
                                                    class="fixed inset-0 z-50 flex items-center justify-center">
                                                    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                                                    <div
                                                        class="relative w-[28rem] max-w-[90vw] bg-white dark:bg-gray-800 rounded-2xl 
                                                        shadow-[0_0_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)]
                                                        transform transition-all duration-300 ease-in-out overflow-hidden">

                                                        <button @click="closeVolunteerModal" class="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 
                                                            dark:text-gray-500 dark:hover:text-gray-300 
                                                            hover:bg-gray-100 dark:hover:bg-gray-700/50
                                                            rounded-xl transition-all group z-10">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                class="h-6 w-6 group-hover:rotate-90 transition-transform duration-300"
                                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>

                                                        <div class="p-8">
                                                            <div class="mb-6 flex justify-center">
                                                                <div
                                                                    class="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
                                                                    <Camera
                                                                        class="w-8 h-8 text-gray-600 dark:text-gray-300" />
                                                                </div>
                                                            </div>

                                                            <h1
                                                                class="text-2xl font-bold text-gray-800 dark:text-white text-center tracking-wide mb-2">
                                                                รูปภาพกิจกรรม
                                                            </h1>

                                                            <p
                                                                class="text-gray-500 dark:text-gray-400 text-center mb-6">
                                                                ภาพกิจกรรมจิตอาสาและการบำเพ็ญประโยชน์
                                                            </p>

                                                            <div
                                                                class="mb-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4">
                                                                <div
                                                                    class="aspect-video w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                                                                    <div v-if="imagePreviewUrl" class="w-full h-full">
                                                                        <img :src="imagePreviewUrl"
                                                                            alt="Activity Preview"
                                                                            class="w-full h-full object-cover" />
                                                                    </div>
                                                                    <div v-else
                                                                        class="w-full h-full flex items-center justify-center">
                                                                        <div class="text-center">
                                                                            <Image
                                                                                class="w-12 h-12 mx-auto mb-2 text-gray-300 dark:text-gray-600" />
                                                                            <p
                                                                                class="text-sm text-gray-400 dark:text-gray-500">
                                                                                ไม่พบรูปภาพตัวอย่าง</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="mb-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 flex items-center justify-between">
                                                                <!-- <div class="flex items-center gap-3">
                                                                    <Image
                                                                        class="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                                                    <div>
                                                                        <p
                                                                            class="font-medium text-gray-700 dark:text-gray-200">
                                                                            กิจกรรมจิตอาสา.zip</p>
                                                                        <p
                                                                            class="text-sm text-gray-500 dark:text-gray-400">
                                                                            ZIP · 15.2 MB · 12 รูป</p>
                                                                    </div>
                                                                </div> -->
                                                            </div>

                                                            <button @click="handleCertificateDownload"
                                                                :disabled="isDownloading" class="group text-white flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 dark:bg-white
                                                                    hover:bg-blue-600 dark:hover:bg-gray-100 w-full rounded-xl
                                                                    transform transition-all duration-300 hover:scale-[1.02]
                                                                    shadow-sm hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-white/10
                                                                    disabled:opacity-50 disabled:cursor-not-allowed
                                                                    focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                                                                <Download
                                                                    class="w-5 h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                                                                <span class="font-semibold">
                                                                    {{ isDownloading ? 'กำลังดาวน์โหลด...' : 'ดาวน์โหลด'
                                                                    }}
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
import { Download, Camera } from 'lucide-vue-next';


const isVolunteerModalOpen = ref(false);
const openVolunteerModal = () => {
    isVolunteerModalOpen.value = true;
}
const closeVolunteerModal = () => {
    isVolunteerModalOpen.value = false;
}
</script>