<template>
    <div :class="{ dark: isDarkTheme }">
        <button @click="toggleTheme">
            {{ isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme' }}
        </button>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const isDarkTheme = ref(false);

const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;
    localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
}

// const savedTheme = () => {
//     if (savedTheme) {
//         isDarkTheme.value = savedTheme === 'dark';
//     }
// };

watchEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme.value);
})
</script>

<style>
    body {
        background-color: white;
        color: black;
    }

    .dark-body {
        background-color: black;
        color: white;
    }
</style>