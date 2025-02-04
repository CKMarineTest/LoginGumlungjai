<template>
    <div class="">
        <div class="absolute top-0 left-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" class="w-full h-full text-blue-600">
                <path d="M20,20 L80,20 L80,70 Q50,90 20,70 Z" fill="currentColor" />
                <rect x="25" y="5" width="50" height="15" fill="currentColor" />
            </svg>
        </div>
        <div class="absolute top-10 right-10 w-24 h-24 opacity-10 rotate-12">
            <svg viewBox="0 0 100 100" class="w-full h-full text-blue-600">
                <path d="M30,20 L70,20 L90,40 L90,90 L10,90 L10,40 Z" fill="currentColor" />
                <rect x="40" y="40" width="30" height="5" fill="white" />
                <rect x="40" y="50" width="30" height="5" fill="white" />
            </svg>
        </div>

        <div class="w-full max-w-6xl mx-auto relative">
            <div class="overflow-hidden">
                <div class="">
                    <div class="absolute left-4 top-1/2 -translate-y-1/2">
                        <svg viewBox="0 0 100 100" class="w-12 h-12 text-white opacity-80">
                            <rect x="20" y="20" width="60" height="70" rx="4" fill="currentColor" />
                            <rect x="25" y="25" width="50" height="60" rx="2" fill="white" opacity="0.9" />
                            <path d="M30 35 H70" stroke="currentColor" stroke-width="2" />
                            <path d="M30 45 H70" stroke="currentColor" stroke-width="2" />
                            <path d="M30 55 H60" stroke="currentColor" stroke-width="2" />
                        </svg>
                    </div>
                    <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">เอกสาร</h1>
                </div>
            </div>

            <div class="mt-6 space-y-6">
                <div class="group relative overflow-hidden ">


                    <div class="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
                        <button @click="openCardIdModal"
                            class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            <svg v-if="!selectedFile" class="w-4 h-4" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m0-16l-4 4m4-4l4 4" />
                            </svg>
                            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="text-sm font-medium">
                                ไฟล์สำเนาบัตรประชาชน
                            </span>
                        </button>
                    </div>

                    <transition enter-active-class="transition duration-300 ease-out"
                        enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                        leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100 scale-100"
                        leave-to-class="opacity-0 scale-95">
                        <div v-if="isCardIdModalOpen"
                            class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                            <div
                                class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[26rem] max-w-[90vw] p-6 relative transform transition-all duration-300 ease-in-out">
                                <button @click="closeCardIdModal"
                                    class="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors group">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-7 w-7 group-hover:rotate-90 transition-transform" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <h1
                                    class="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center tracking-wide">
                                    สำเนาบัตรประชาชน
                                </h1>

                                <div class="flex justify-center">
                                    <button @click="handleCertificateDownload" :disabled="isDownloading"
                                        class="group flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-xl 
                                                                                                    hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 
                                                                                                    transform hover:scale-105 shadow-md hover:shadow-lg 
                                                                                                    disabled:opacity-50 disabled:cursor-not-allowed 
                                                                                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                                                                                                    dark:bg-blue-600 dark:hover:bg-blue-700">
                                        <Download class="w-6 h-6 transition-transform group-hover:rotate-12" />
                                        <span class="text-base font-semibold">
                                            {{ isDownloading ?
                                                'กำลังดาวน์โหลด...'
                                                :
                                                'ดาวน์โหลด' }}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </transition>

                    <div class="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
                        <button @click="openHouseIdModal"
                            class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            <svg v-if="!selectedFile" class="w-4 h-4" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m0-16l-4 4m4-4l4 4" />
                            </svg>
                            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="text-sm font-medium">
                                ไฟล์สำเนาทะเบียนบ้าน
                            </span>
                        </button>
                    </div>

                    <transition enter-active-class="transition duration-300 ease-out"
                        enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                        leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100 scale-100"
                        leave-to-class="opacity-0 scale-95">
                        <div v-if="isHouseIdModalOpen"
                            class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                            <div
                                class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[26rem] max-w-[90vw] p-6 relative transform transition-all duration-300 ease-in-out">
                                <button @click="closeHouseIdModal"
                                    class="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors group">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-7 w-7 group-hover:rotate-90 transition-transform" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <h1
                                    class="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center tracking-wide">
                                    สำเนาทะเบียนบ้าน
                                </h1>

                                <div class="flex justify-center">
                                    <button @click="handleCertificateDownload" :disabled="isDownloading"
                                        class="group flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-xl 
                                                                                                    hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 
                                                                                                    transform hover:scale-105 shadow-md hover:shadow-lg 
                                                                                                    disabled:opacity-50 disabled:cursor-not-allowed 
                                                                                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                                                                                                    dark:bg-blue-600 dark:hover:bg-blue-700">
                                        <Download class="w-6 h-6 transition-transform group-hover:rotate-12" />
                                        <span class="text-base font-semibold">
                                            {{ isDownloading ?
                                                'กำลังดาวน์โหลด...'
                                                :
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
</template>

<script setup>
import { ref } from 'vue';
import { Download } from 'lucide-vue-next';

const isCardIdModalOpen = ref(false);
const isHouseIdModalOpen = ref(false);


const openCardIdModal = () => {
    isCardIdModalOpen.value = true;
}

const openHouseIdModal = () => {
    isHouseIdModalOpen.value = true;
}

const closeCardIdModal = () => {
    isCardIdModalOpen.value = false;
}

const closeHouseIdModal = () => {
    isHouseIdModalOpen.value = false;
}

</script>