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
                <h2 class="text-2xl font-bold text-gray-800 mb-2">ข้อมูลผู้สมัคร</h2>
            </div>

            <div
                class="mb-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 transition-all duration-200 hover:shadow-md">
                <div class="flex flex-wrap gap-4 justify-between items-center">
                    <div class="relative flex-grow max-w-md group">
                        <input v-model="searchQuery" type="text" placeholder="ค้นหาข้อมูล..." @focus="isFocused = true"
                            @blur="isFocused = false" class="w-full pl-10 pr-12 py-2.5 rounded-xl border border-gray-200 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                 transition-all duration-200 bg-gray-50/50 hover:bg-white" />

                        <div
                            class="absolute left-4 top-3.5 text-gray-400 transition-transform duration-300 group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <button v-if="searchQuery" @click="clearSearch"
                            class="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr class="bg-gradient-to-r from-blue-50 to-white">
                            <th v-for="header in headers" :key="header.key"
                                class="px-6 py-5 text-left text-sm font-semibold text-gray-700 tracking-wider cursor-pointer group transition-colors duration-200"
                                @click="sortBy(header.key)">
                                <div class="flex items-center gap-2 group-hover:text-blue-600">
                                    {{ header.label }}
                                    <span v-if="sortKey === header.key"
                                        class="transition-transform duration-300 text-blue-500"
                                        :class="sortOrder === 'asc' ? 'rotate-0' : 'rotate-180'">
                                        ↑
                                    </span>
                                </div>
                                <div class="h-0.5 w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></div>
                            </th>
                            <th class="px-6 py-5 text-right text-sm font-semibold text-gray-700 tracking-wider">
                                จัดการ
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        <tr v-for="item in sortedAndFilteredData" :key="item.id"
                            class="group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent transition-all duration-300">
                            <td class="px-6 py-5 whitespace-nowrap text-sm">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 flex items-center justify-center text-blue-700 font-semibold shadow-sm transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        {{ item.name.charAt(0) }}
                                    </div>
                                    <span class="font-medium text-gray-700">{{ item.id }}</span>
                                </div>
                            </td>
                            <td class="px-6 py-5 whitespace-nowrap">
                                <span
                                    class="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                    {{ item.name }}
                                </span>
                            </td>
                            <td class="px-6 py-5 whitespace-nowrap">
                                <span
                                    class="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                    {{ item.email }}
                                </span>
                            </td>
                            <td class="px-6 py-5 whitespace-nowrap text-right">
                                <div class="flex items-center justify-end gap-3">
                                    <button @click="documentData"
                                        class="p-2.5 text-blue-600 rounded-xl hover:bg-blue-100 transition-all duration-200 hover:scale-110"
                                        title="ดูเอกสาร">
                                        <DocumentTextIcon class="h-5 w-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div
                    class="bg-gradient-to-r from-gray-50 to-white px-6 py-4 flex items-center justify-between border-t border-gray-100">
                    <p class="text-sm text-gray-600">
                        แสดง <span class="font-medium text-gray-900">{{ sortedAndFilteredData.length }}</span> รายการ
                    </p>
                    <div class="flex gap-2">
                        <button
                            class="px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                            ก่อนหน้า
                        </button>
                        <button
                            class="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow">
                            1
                        </button>
                        <button
                            class="px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
                            ถัดไป
                        </button>
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
import router from '@/router';

const searchQuery = ref('')
const sortKey = ref('id')
const sortOrder = ref('asc')

const headers = [
    { key: 'id', label: 'รหัส' },
    { key: 'name', label: 'ชื่อ' },
    { key: 'email', label: 'อีเมล' },
]

const data = ref([
    { id: 'USR001', name: 'สมชาย ใจดี', email: 'somchai@example.com' },
    { id: 'USR002', name: 'สมหญิง รักดี', email: 'somying@example.com' },
    { id: 'USR003', name: 'มานี มีเงิน', email: 'manee@example.com' },
    { id: 'USR004', name: 'สมศรี ศรีสุข', email: 'somsri@example.com' },
    { id: 'USR005', name: 'สมพร พรเพียง', email: 'somporn@example.com' },
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

const documentData = () => {
    router.push('/documentdata')
}
</script>