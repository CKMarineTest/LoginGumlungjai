<template>
    <div class="flex justify-end">
        <button class="bg-blue-500 shadow-lg w-20 rounded-lg p-2 text-white hover:bg-blue-600" @click="handlePrintData">
            <center>
                <PrinterIcon class="w-10 h-10" />
                <p class="mt-1">Print</p>
            </center>
        </button>
    </div>
</template>

<script setup>
import { PrinterIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';

const router = useRouter();

const handlePrintData = () => {
    router.push('/pdf');
}
</script>

<style scoped>
button:hover {
    transition: 0.3s ease;
}

button:hover {
    transform: translateY(-2px);
}
</style>
