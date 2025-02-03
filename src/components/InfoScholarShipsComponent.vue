<template>
    <div class="flex">
        <aside class="w-16 h-screen fixed left-0 bg-gray-900">
            <SidebarComponent />
        </aside>
    </div>

    <main class="flex-1 ml-16 p-6 bg-gray-50">
        <div class="p-6 ml-16 bg-gray-50 min-h-screen">
            <br>
            <br>
            <div class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">ข้อมูลผู้ได้รับทุน</h2>
            </div>
            <!-- <div class="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div class="flex flex-wrap gap-4 justify-between items-center">
                    <div class="relative flex-grow max-w-md group">
                        <input v-model="searchQuery" type="text" placeholder="ค้นหาข้อมูล..."
                            class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out group-hover:bg-white group-hover:shadow-md ml-auto" />
                        <div
                            class="absolute left-4 top-3.5 text-gray-400 transition-transform duration-300 group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div> -->

            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr class="bg-gradient-to-r from-gray-50 to-white">
                            <th v-for="header in headers" :key="header.key"
                                class="px-6 py-4 text-left text-sm font-semibold text-gray-600 tracking-wider cursor-pointer hover:bg-gray-50 transition-colors"
                                @click="sortBy(header.key)">
                                <div class="flex items-center gap-2">
                                    {{ header.label }}
                                    <span v-if="sortKey === header.key" class="transition-transform duration-200"
                                        :class="sortOrder === 'asc' ? 'rotate-0' : 'rotate-180'">
                                        ↑
                                    </span>
                                </div>
                            </th>
                            <th class="px-6 py-4 text-right text-sm font-semibold text-gray-600 tracking-wider">
                                จัดการ
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        <tr v-for="item in sortedAndFilteredData" :key="item.id"
                            class="group hover:bg-blue-50/30 transition-colors duration-200">
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                <div class="flex items-center gap-3">
                                    <!-- <div
                                        class="w-8 h-8 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 font-medium">
                                        {{ item.name.charAt(0) }}
                                    </div> -->
                                    {{ item.id }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{{ item.name }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ item.email }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-right">
                                <div
                                    class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <button
                                        class="p-2 text-blue-600 hover:bg-blue-200 rounded-lg transition-colors duration-200">
                                        <DocumentTextIcon class="h-5 w-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div
                    class="bg-gradient-to-r from-gray-50 to-white px-6 py-4 flex items-center justify-between border-t border-gray-100">
                    <div class="flex-1 flex justify-between sm:hidden">
                        <button
                            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                            ก่อนหน้า
                        </button>
                        <button
                            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                            ถัดไป
                        </button>
                    </div>
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                แสดง
                                <span class="font-medium text-gray-900">1</span>
                                ถึง
                                <span class="font-medium text-gray-900">10</span>
                                จาก
                                <span class="font-medium text-gray-900">97</span>
                                รายการ
                            </p>
                        </div>
                        <div class="flex gap-2">
                            <button
                                class="relative inline-flex items-center px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                            <button
                                class="px-3 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                                1
                            </button>
                            <button
                                class="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                                2
                            </button>
                            <button
                                class="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                                3
                            </button>
                            <button
                                class="relative inline-flex items-center px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import { ref, computed } from 'vue';

import { DocumentTextIcon } from '@heroicons/vue/24/outline';

import SidebarComponent from './Menu/SidebarComponent.vue';

const searchQuery = ref('')
const sortKey = ref('id')
const sortOrder = ref('asc')

const headers = [
    { key: 'id', label: 'รหัส' },
    { key: 'name', label: 'ชื่อ' },
    { key: 'email', label: 'อีเมล' },
]

const data = ref([
    { id: 'USR001', name: 'สมชาย ใจดี', email: 'somchai@example.com', status: 'กำลังใช้งาน' },
    { id: 'USR002', name: 'สมหญิง รักดี', email: 'somying@example.com', status: 'ไม่ได้ใช้งาน' },
    { id: 'USR003', name: 'มานี มีเงิน', email: 'manee@example.com', status: 'กำลังใช้งาน' },
    { id: 'USR004', name: 'สมศรี ศรีสุข', email: 'somsri@example.com', status: 'กำลังใช้งาน' },
    { id: 'USR005', name: 'สมพร พรเพียง', email: 'somporn@example.com', status: 'ไม่ได้ใช้งาน' },
])

const sortedAndFilteredData = computed(() => {
    let result = [...data.value]

    if (searchQuery.value) {
        result = result.filter(item =>
            Object.values(item).some(value =>
                String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
            )
        )
    }

    result.sort((a, b) => {
        const aValue = a[sortKey.value]
        const bValue = b[sortKey.value]

        if (sortOrder.value === 'asc') {
            return aValue > bValue ? 1 : -1
        } else {
            return aValue < bValue ? 1 : -1
        }
    })

    return result
})

const sortBy = (key) => {
    if (sortKey.value === key) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
        sortKey.value = key
        sortOrder.value = 'asc'
    }
}
</script>