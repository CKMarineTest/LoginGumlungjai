<template>
    <div class="flex">
        <aside class="w-16 h-screen fixed left-0 bg-gray-900">
            <SidebarComponent />
        </aside>
    </div>
    <main class="flex-1 ml-16 p-6 bg-gray-50">
        <br>
        <br>

        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 bg-white p-4 rounded-lg shadow">
                
            </div>
        </div>
        
    </main>
</template>

<script setup>
import SidebarComponent from './Menu/SidebarComponent.vue';
</script>

<style scoped>
.card {
    height: 200px;
}
</style>