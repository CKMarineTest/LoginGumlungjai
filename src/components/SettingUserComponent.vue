<template>
    <div class="flex">
        <aside class="w-16 h-screen fixed left-0 bg-gray-900">
            <SidebarComponent />
        </aside>
    </div>

    <main class="bg-blue-500 ml-32 rounded-xl cursor-pointer">
        <br>
        <br>
        <br>
        <div class="text-2xl text-white p-4 px-4">
            แก้ไขโปรไฟล์
        </div>
    </main>
</template>

<script setup>
    import SidebarComponent from './Menu/SidebarComponent.vue';
    
</script>