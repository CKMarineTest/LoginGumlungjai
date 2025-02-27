<template>
    <div class="flex min-h-screen">
        <aside class="w-16 h-screen fixed left-0 bg-gray-900">
            <SidebarComponent />
        </aside>


    </div>
</template>

<script setup>
/* eslint-disable */
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