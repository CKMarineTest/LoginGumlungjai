<template>
    <div v-show="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
        <div ref="modalRef" class="bg-white w-full max-w-5xl p-8 rounded-2xl shadow-2xl relative">
            <button @click="closeModal"
                class="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold">×</button>
            <slot />
        </div>
    </div>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch, nextTick } from 'vue';
import gsap from 'gsap';

const props = defineProps({ show: Boolean });
const emit = defineEmits(['close']);

const visible = ref(false);
const modalRef = ref(null);

watch(() => props.show, async (newVal) => {
    if (newVal) {
        visible.value = true;
        await nextTick();
        gsap.fromTo(modalRef.value,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' }
        )
    } else {
        gsap.to(modalRef.value, {
            opacity: 0,
            scale: 0.9,
            duration: 0.25,
            ease: 'power1.in',
            onComplete: () => {
                visible.value = false
            }
        })
    }
})

const closeModal = () => emit('close');
</script>