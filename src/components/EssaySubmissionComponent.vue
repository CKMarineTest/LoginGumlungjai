<template>
    <div class=" p-2 sm:p-4 md:p-6 lg:p-8 overflow-hidden relative">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">

            <div class="absolute top-[30%] right-[8%] w-20 h-20 opacity-10 transform rotate-12 animate-float">
                <svg viewBox="0 0 100 100" class="w-full h-full text-blue-700">
                    <rect x="10" y="20" width="80" height="60" rx="4" fill="currentColor" />
                    <rect x="15" y="25" width="70" height="50" fill="white" />
                    <path d="M20 35 H70 M20 45 H70 M20 55 H50" stroke="currentColor" stroke-width="2" />
                </svg>
            </div>

            <div class="absolute top-[60%] right-[20%] opacity-10 text-4xl text-blue-600 animate-float-slow">
                ∑ π ∞
            </div>
        </div>



        <div class="overflow-hidden">
            <div class="">
                <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">เอกสาร</h1>
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
</template>

<script setup>

</script>