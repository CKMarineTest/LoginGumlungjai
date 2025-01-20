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
            <div class="col-span-8 bg-red-300 p-4 rounded-lg shadow">
               
            </div>

            <div class="col-span-4 bg-green-300 p-4 rounded-lg shadow">
                <h3 class="text-gray-500 mb-4"></h3>
                <div class="h-64 w-full">
                    <div class="w-full h-full rounded flex items-center justify-center">
                        
                    </div>
                </div>
            </div>

            <div class="col-span-4 bg-orange-300 p-4 rounded-lg shadow">
                <h3 class="text-gray-500 mb-4"></h3>
                <div class="h-64">
                    <div class="w-full h-full rounded flex items-center justify-center">
                        
                    </div>
                </div>
            </div>

            <div class="col-span-4 bg-purple-300 p-4 rounded-lg shadow">
                <h3 class="text-gray-500 mb-4"></h3>
                <div class="space-y-4">
                    
                </div>
            </div>

            <div class="col-span-4 bg-yellow-300 p-4 rounded-lg shadow">
                <h3 class="text-gray-500 mb-4"></h3>
                <div class="space-y-4">
                   
                </div>
            </div>

            <div class="col-span-12 bg-blue-300 p-4 rounded-lg shadow">
                <h3 class="text-gray-500 mb-4"></h3>
                <div class="h-64">
                    <div class="w-full h-full rounded flex items-center justify-center">
                        
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
    import SidebarComponent from './Menu/SidebarComponent.vue';
</script>