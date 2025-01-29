<template>
    <div class=" bg-gradient-to-br from-blue-50 to-blue-100 p-2 sm:p-4 md:p-6 lg:p-8">
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
            <div class="bg-white shadow-xl rounded-2xl overflow-hidden">
                <div
                    class="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-6 text-white text-center relative">
                    <div class="absolute left-4 top-1/2 -translate-y-1/2">
                        <svg viewBox="0 0 100 100" class="w-12 h-12 text-white opacity-80">
                            <rect x="20" y="20" width="60" height="70" rx="4" fill="currentColor" />
                            <rect x="25" y="25" width="50" height="60" rx="2" fill="white" opacity="0.9" />
                            <path d="M30 35 H70" stroke="currentColor" stroke-width="2" />
                            <path d="M30 45 H70" stroke="currentColor" stroke-width="2" />
                            <path d="M30 55 H60" stroke="currentColor" stroke-width="2" />
                        </svg>
                    </div>
                    <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">แนบเอกสาร</h1>
                </div>
            </div>

            <div class="mt-6 space-y-6">
                <div
                    class="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100/50">


                    <div class="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
                        <button
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

                    <div class="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
                        <button
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
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>