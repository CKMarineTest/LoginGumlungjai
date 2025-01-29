<template>
    <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-2 sm:p-4 md:p-6 lg:p-8 overflow-hidden relative">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-[10%] left-[5%] w-16 h-16 opacity-10 transform -rotate-45 animate-float-slow">
                <svg viewBox="0 0 100 100" class="w-full h-full text-blue-600">
                    <rect x="20" y="10" width="60" height="10" rx="2" fill="#FCD34D" />
                    <path d="M20,10 L40,20 L20,30" fill="#4B5563" />
                    <rect x="40" y="15" width="40" height="2" fill="#374151" />
                </svg>
            </div>

            <div class="absolute top-[30%] right-[8%] w-20 h-20 opacity-10 transform rotate-12 animate-float">
                <svg viewBox="0 0 100 100" class="w-full h-full text-blue-700">
                    <rect x="10" y="20" width="80" height="60" rx="4" fill="currentColor" />
                    <rect x="15" y="25" width="70" height="50" fill="white" />
                    <path d="M20 35 H70 M20 45 H70 M20 55 H50" stroke="currentColor" stroke-width="2" />
                </svg>
            </div>

            <div class="absolute bottom-[20%] left-[15%] w-16 h-16 opacity-10 transform -rotate-6 animate-float-fast">
                <svg viewBox="0 0 100 100" class="w-full h-full text-gray-600">
                    <rect x="10" y="10" width="80" height="80" fill="white" stroke="currentColor" stroke-width="2" />
                    <path d="M20 30 H70 M20 50 H70 M20 70 H50" stroke="currentColor" stroke-width="2" />
                </svg>
            </div>

            <div class="absolute top-[60%] right-[20%] opacity-10 text-4xl text-blue-600 animate-float-slow">
                ∑ π ∞
            </div>
        </div>

        <div class="w-full max-w-6xl mx-auto relative">
            <div class="absolute -top-6 -right-2 transform rotate-12 hidden md:block">
                <div class="w-12 h-20 bg-gray-300 rounded-sm shadow-md flex items-center justify-center">
                    <div class="w-8 h-16 bg-gray-400 rounded-sm"></div>
                </div>
            </div>

            <div class="absolute -top-4 -left-2 transform -rotate-6 hidden md:block">
                <div
                    class="w-16 h-20 bg-blue-100 rounded shadow-md flex flex-col justify-center px-2 border-2 border-blue-200">
                    <div class="space-y-2">
                        <div class="h-0.5 bg-blue-300 w-full"></div>
                        <div class="h-0.5 bg-blue-300 w-full"></div>
                        <div class="h-0.5 bg-blue-300 w-full"></div>
                    </div>
                </div>
            </div>

            <div class="bg-white shadow-xl rounded-t-2xl overflow-hidden">
                <div
                    class="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-4 sm:p-6 md:p-8 text-white relative">
                    <div
                        class="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.5),rgba(255,255,255,0))]">
                    </div>
                    <h1
                        class="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-center mb-4 text-shadow relative z-10">
                        การเขียนเรียงความ
                    </h1>
                    <div class="space-y-2 bg-blue-800/30 p-3 sm:p-4 rounded-lg backdrop-blur-sm text-sm sm:text-base">
                        <p class="flex items-center space-x-2">
                            <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full flex-shrink-0"></span>
                            <span>ทุน Scholars,คุณหมอของกำลังใจ,กำลังใจให้พยาบาล : พิมพ์เรียงความและสแกนแนบไฟล์</span>
                        </p>
                    </div>
                </div>

                <div class="p-4 sm:p-6 md:p-8">
                    <button
                        class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <svg v-if="!selectedFile" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 4v16m0-16l-4 4m4-4l4 4" />
                        </svg>
                        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-sm font-medium">
                            ไฟล์เรียงความ
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>