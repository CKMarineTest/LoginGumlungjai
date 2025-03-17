<template>
    <div class="">
        <div class="absolute top-0 left-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" class="w-full h-full text-blue-600">
                <path d="M20,20 L80,20 L80,70 Q50,90 20,70 Z" fill="currentColor" />
                <rect x="25" y="5" width="50" height="15" fill="currentColor" />
            </svg>
        </div>
        <!-- <div class="absolute top-10 right-10 w-24 h-24 opacity-10 rotate-12">
            <svg viewBox="0 0 100 100" class="w-full h-full text-blue-600">
                <path d="M30,20 L70,20 L90,40 L90,90 L10,90 L10,40 Z" fill="currentColor" />
                <rect x="40" y="40" width="30" height="5" fill="white" />
                <rect x="40" y="50" width="30" height="5" fill="white" />
            </svg>
        </div> -->

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
                    <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">เอกสารราชการ</h1>
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

                    <transition enter-active-class="transition duration-500 ease-out"
                        enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                        leave-active-class="transition duration-300 ease-in" leave-from-class="opacity-100 scale-100"
                        leave-to-class="opacity-0 scale-95">
                        <div v-if="isCardIdModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                            <div class="relative w-[48rem] max-w-[95vw] max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl 
                                shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]
                                transform transition-all duration-300 ease-in-out overflow-hidden">

                                <button @click="closeCardIdModal" class="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 
                                    dark:text-gray-500 dark:hover:text-gray-300 
                                    hover:bg-red-400 dark:hover:bg-gray-700/50
                                    rounded-xl transition-all group">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 group-hover:rotate-90 transition-transform duration-300"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div
                                    class="bg-white dark:bg-gray-900 p-8 border-b border-gray-100 dark:border-gray-800">
                                    <h1
                                        class="text-3xl font-bold tracking-wide text-center text-gray-900 dark:text-white">
                                        เอกสารสำเนาบัตรประชาชน
                                    </h1>
                                </div>

                                <div class="p-8 bg-gray-50 dark:bg-gray-900/50">
                                    <div
                                        class="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center justify-between mb-4">
                                            <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                เอกสาร
                                            </h2>
                                            <div class="flex gap-2">
                                                <button
                                                    class="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                    <ZoomIn class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                                </button>
                                                <button
                                                    class="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                    <ZoomOut class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                                </button>
                                            </div>
                                        </div>

                                        <div class="relative bg-gray-50 dark:bg-gray-700/30 rounded-xl h-[300px] overflow-hidden
                                            border border-blue-100 dark:border-gray-700">
                                            <div v-if="documentPreviewUrl" class="w-full h-full">
                                                <img :src="documentPreviewUrl" alt="Document Preview"
                                                    class="w-full h-full object-contain" />
                                            </div>
                                            <div v-else class="w-full h-full flex items-center justify-center">
                                                <div class="text-center">
                                                    <CreditCard
                                                        class="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                                                    <p class="text-gray-400 dark:text-gray-500">ไม่พบเอกสาร</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="space-y-4">
                                        <!-- <div class="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-between
                                    border border-blue-100 dark:border-gray-700 shadow-sm">
                                </div> -->

                                        <button @click="handleCertificateDownload" :disabled="isDownloading" class="group flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 dark:bg-white
                                    hover:bg-blue-600 dark:hover:bg-gray-100 w-full rounded-xl
                                    transform transition-all duration-300 hover:scale-[1.02]
                                    shadow-sm hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-white/10
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                    focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                                            <Download class="w-6 h-6 text-white dark:text-gray-900 transition-transform duration-300 
                                        group-hover:rotate-12 group-hover:scale-110" />
                                            <span class="text-lg font-semibold text-white dark:text-gray-900">
                                                {{ isDownloading ? 'กำลังดาวน์โหลด...' : 'ดาวน์โหลดเอกสาร' }}
                                            </span>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>

                    <transition enter-active-class="transition duration-500 ease-out"
                        enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                        leave-active-class="transition duration-300 ease-in" leave-from-class="opacity-100 scale-100"
                        leave-to-class="opacity-0 scale-95">
                        <div v-if="isHouseIdModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                            <div class="relative w-[48rem] max-w-[95vw] max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl 
                        shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]
                        transform transition-all duration-300 ease-in-out overflow-hidden">

                                <button @click="closeHouseIdModal" class="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 
                                    dark:text-gray-500 dark:hover:text-gray-300 
                                    hover:bg-red-400 dark:hover:bg-gray-700/50
                                    rounded-xl transition-all group">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 group-hover:rotate-90 transition-transform duration-300"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div
                                    class="bg-white dark:bg-gray-900 p-8 border-b border-gray-100 dark:border-gray-800">
                                    <h1
                                        class="text-3xl font-bold tracking-wide text-center text-gray-900 dark:text-white">
                                        เอกสารสำเนาทะเบียนบ้าน
                                    </h1>
                                </div>

                                <div class="p-8 bg-gray-50 dark:bg-gray-900/50">
                                    <div
                                        class="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center justify-between mb-4">
                                            <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                เอกสาร
                                            </h2>
                                            <div class="flex gap-2">
                                                <button
                                                    class="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                    <ZoomIn class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                                </button>
                                                <button
                                                    class="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                    <ZoomOut class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                                </button>
                                            </div>
                                        </div>

                                        <div class="relative bg-gray-50 dark:bg-gray-700/30 rounded-xl h-[300px] overflow-hidden
                                            border border-blue-100 dark:border-gray-700">
                                            <div v-if="documentPreviewUrl" class="w-full h-full">
                                                <img :src="documentPreviewUrl" alt="Document Preview"
                                                    class="w-full h-full object-contain" />
                                            </div>
                                            <div v-else class="w-full h-full flex items-center justify-center">
                                                <div class="text-center">
                                                    <Home
                                                        class="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                                                    <p class="text-gray-400 dark:text-gray-500">ไม่พบเอกสาร</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="space-y-4">
                                        <!-- <div class="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-between
                                    border border-blue-100 dark:border-gray-700 shadow-sm">
                                </div> -->

                                        <button @click="handleCertificateDownload" :disabled="isDownloading" class="group flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 dark:bg-white
                                    hover:bg-blue-600 dark:hover:bg-gray-100 w-full rounded-xl
                                    transform transition-all duration-300 hover:scale-[1.02]
                                    shadow-sm hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-white/10
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                    focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                                            <Download class="w-6 h-6 text-white dark:text-gray-900 transition-transform duration-300 
                                        group-hover:rotate-12 group-hover:scale-110" />
                                            <span class="text-lg font-semibold text-white dark:text-gray-900">
                                                {{ isDownloading ? 'กำลังดาวน์โหลด...' : 'ดาวน์โหลดเอกสาร' }}
                                            </span>
                                        </button>

                                    </div>
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
import { Download, Home, ZoomIn, ZoomOut, CreditCard } from 'lucide-vue-next';

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