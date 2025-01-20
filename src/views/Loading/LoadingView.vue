<template>
    <div>
        <header>
            <div v-show="is_show">
                <div class="spinner"></div>
            </div>
        </header>
        <main>
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    is_show: {
        type: Boolean,
        default: false, 
    },
});

const is_show = computed(() => props.is_show);
</script>

<style scoped>
.spinner {
    position: relative;
    width: 22.4px;
    height: 22.4px;
    margin: 20px auto;
}

.spinner::before,
.spinner::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    animation: spinner-b4c8mmmd 0.5s backwards, spinner-49opz7md 1.25s 0.5s infinite ease;
    border: 5.6px solid #474bff;
    border-radius: 50%;
    box-shadow: 0 -33.6px 0 -5.6px #474bff;
    position: absolute;
}

.spinner::after {
    animation-delay: 0s, 1.25s;
}

@keyframes spinner-b4c8mmmd {
    from {
        box-shadow: 0 0 0 -5.6px #474bff;
    }
}

@keyframes spinner-49opz7md {
    to {
        transform: rotate(360deg);
    }
}
</style>