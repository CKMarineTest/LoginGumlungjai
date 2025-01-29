<template>
    <div class=" bg-gradient-to-br from-blue-50 to-blue-100 p-2 sm:p-4 md:p-6 lg:p-8">
        <div class="w-full max-w-6xl mx-auto relative">
            <div class="absolute -top-4 -left-2 transform -rotate-12 hidden md:block">
                <div
                    class="w-16 h-24 bg-yellow-100 rounded-lg shadow-md flex flex-col items-center justify-end border-2 border-yellow-200">
                    <div class="w-4 h-16 bg-yellow-400 relative">
                        <div class="absolute top-0 w-full h-4 bg-pink-400 rounded-t-sm"></div>
                        <div class="absolute bottom-0 w-full h-4 bg-gray-800 transform rotate-180"></div>
                    </div>
                </div>
            </div>

            <div class="absolute -top-6 right-8 transform rotate-6 hidden md:block">
                <div
                    class="w-20 h-24 bg-blue-100 rounded shadow-md flex items-center justify-center border-2 border-blue-200 relative">
                    <div class="absolute inset-2 bg-white rounded"></div>
                    <div class="absolute inset-4 flex flex-col space-y-2">
                        <div class="h-0.5 bg-blue-200 w-full"></div>
                        <div class="h-0.5 bg-blue-200 w-full"></div>
                        <div class="h-0.5 bg-blue-200 w-full"></div>
                    </div>
                </div>
            </div>

            <div class="absolute top-20 -left-4 transform rotate-45 hidden lg:block">
                <div
                    class="w-32 h-8 bg-white rounded shadow-md border-2 border-blue-200 flex items-center justify-around">
                    <div class="h-4 w-0.5 bg-blue-300"></div>
                    <div class="h-3 w-0.5 bg-blue-300"></div>
                    <div class="h-4 w-0.5 bg-blue-300"></div>
                    <div class="h-3 w-0.5 bg-blue-300"></div>
                    <div class="h-4 w-0.5 bg-blue-300"></div>
                </div>
            </div>

            <div class="bg-white shadow-xl rounded-2xl overflow-hidden">
                <div
                    class="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-4 sm:p-6 md:p-8 text-white relative">
                    <div
                        class="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.5),rgba(255,255,255,0))]">
                    </div>

                    <h1
                        class="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-center mb-2 sm:mb-4 text-shadow relative">
                        ให้ผู้ขอรับทุนแสดงความคิดเห็น " ทำไมข้าพเจ้าควรได้รับทุนการศึกษาโครงการนี้ "
                    </h1>
                    <p class="text-center text-sm sm:text-base md:text-lg opacity-90 mb-4 sm:mb-6">
                        บรรยายรายละเอียดชัดเจนตามความจริงเพื่อประกอบพิจารณาทุนการศึกษา
                    </p>

                    <div
                        class="space-y-2 bg-blue-800/30 p-4 rounded-xl backdrop-blur-sm text-sm sm:text-base border border-white/20">
                        <p class="flex items-center space-x-2">
                            <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full flex-shrink-0"></span>
                            <span>Scholars,คุณหมอของกำลังใจ,กำลังใจให้พยาบาล : พิมพ์เรียงความ</span>
                        </p>
                    </div>
                </div>

                <div class="p-4 sm:p-6 md:p-8 relative">
                    <div class="group">
                        <div class="flex flex-col items-center justify-center space-y-4 sm:space-y-6 h-full">
                            <div class="w-full max-w-3xl mx-auto p-6">
                                <div class="relative rounded-2xl p-[3px] transition-all duration-500"
                                    :class="{ 'shadow-lg ring-2 ring-blue-100': isFocused, 'shadow-md': !isFocused }">

                                    <div class="relative rounded-2xl bg-white backdrop-blur-sm p-8">
                                        <div
                                            class="absolute inset-0 flex flex-col space-y-8 pointer-events-none opacity-10">
                                            <div v-for="i in 8" :key="i" class="w-full h-px bg-blue-400"></div>
                                        </div>

                                        <div class="absolute top-2 right-2 text-blue-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M12 3C3 3 3 12 3 12H12V3Z" />
                                                <path d="M12 12H21C21 12 21 3 12 3V12Z" />
                                                <path d="M12 21C21 21 21 12 21 12H12V21Z" />
                                                <path d="M12 12H3C3 12 3 21 12 21V12Z" />
                                            </svg>
                                        </div>

                                        <textarea v-model="text"
                                            class="w-full min-h-[150px] border-none outline-none resize-none text-lg bg-transparent relative z-10"
                                            placeholder="เริ่มพิมพ์ที่นี่..." @focus="isFocused = true"
                                            @blur="isFocused = false"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>