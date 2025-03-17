<template>
    <div class="hidden sm:block absolute top-10 left-[5%] transform -rotate-12 opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="w-24 h-24 lg:w-32 lg:h-32">
            <rect x="20" y="80" width="80" height="20" fill="#3B82F6" rx="2" />
            <rect x="25" y="60" width="70" height="20" fill="#60A5FA" rx="2" />
            <rect x="30" y="40" width="60" height="20" fill="#93C5FD" rx="2" />
        </svg>
    </div>

    <div class="hidden sm:block absolute bottom-10 right-[5%] transform rotate-12 opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="w-20 h-20 lg:w-28 lg:h-28">
            <rect x="20" y="10" width="60" height="10" fill="#60A5FA" transform="rotate(45 50 50)" />
            <path d="M75 25 L85 35 L80 40 L70 30 Z" fill="#3B82F6" />
            <path d="M25 75 L20 80 L15 65 L30 70 Z" fill="#93C5FD" />
        </svg>
    </div>

    <div class="hidden md:block absolute top-1/4 right-1/4 transform rotate-45 opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16 lg:w-24 lg:h-24">
            <path d="M40 10 L70 25 L40 40 L10 25 Z" fill="#3B82F6" />
            <rect x="38" y="40" width="4" height="30" fill="#60A5FA" />
            <path d="M30 65 L50 65 L40 75 Z" fill="#93C5FD" />
        </svg>
    </div>

    <div ref="decorRight" class="hidden sm:block absolute bottom-10 right-[5%] transform rotate-12 opacity-0">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="w-20 h-20 lg:w-28 lg:h-28">
            <rect x="20" y="10" width="60" height="10" fill="#60A5FA" transform="rotate(45 50 50)" />
            <path d="M75 25 L85 35 L80 40 L70 30 Z" fill="#3B82F6" />
            <path d="M25 75 L20 80 L15 65 L30 70 Z" fill="#93C5FD" />
        </svg>
    </div>

    <div ref="decorCenter" class="hidden md:block absolute top-1/4 right-1/4 transform rotate-45 opacity-0">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16 lg:w-24 lg:h-24">
            <path d="M40 10 L70 25 L40 40 L10 25 Z" fill="#3B82F6" />
            <rect x="38" y="40" width="4" height="30" fill="#60A5FA" />
            <path d="M30 65 L50 65 L40 75 Z" fill="#93C5FD" />
        </svg>
    </div>
</template>

<script setup>

</script>