<template>
    <div class="min-h-screen w-full bg-blue-100 flex">
        <aside class="w-20 fixed z-10 left-0 top-0 bottom-0 bg-gray-900 shadow-lg">
            <SidebarComponent />
        </aside>

        <main class="flex-1 ml-20 p-4 md:p-6 lg:p-8">
            <br>
            <br>
            <div class="w-full max-w-full mx-auto">
                <div class="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2
                            class="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            ข้อมูลผู้สมัคร
                        </h2>
                    </div>

                    <div class="relative mt-4 md:mt-0">
                        <input v-model="searchQuery" type="text" placeholder="ค้นหา..."
                            class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-white/90" />
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 absolute left-3 top-3.5"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div
                    class="bg-white rounded-xl z-0 w-2/12 shadow-lg p-6 cursor-pointer flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-blue-600">
                    <div class="rounded-full bg-blue-100 p-4 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-gray-500 text-sm font-medium">ผู้สมัครเข้าระบบทั้งหมด</p>
                        <h2 class="text-3xl font-bold text-gray-800">
                            {{ dataArray.length }} คน
                        </h2>
                    </div>
                </div>
                <br>
                <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr class="bg-gradient-to-r from-blue-50 to-white" align="center">
                                    <th v-for="header in headers" :key="header.key"
                                        class="px-6 py-5 text-left text-sm font-semibold text-gray-700 tracking-wider cursor-pointer group transition-colors duration-200">
                                        {{ header.label }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr v-for="item in filteredUsers" :key="item.su_id"
                                    class="group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent transition-all duration-300">
                                    <td class="px-6 py-5 whitespace-nowrap text-sm">
                                        <div class="flex items-center gap-3">
                                            <div
                                                class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 flex items-center justify-center text-blue-700 font-semibold shadow-sm">
                                                {{
                                                    item.username
                                                        ? item.username.charAt(0)
                                                : "N/A"
                                                }}
                                            </div>
                                            <span class="font-medium text-gray-700">
                                                {{ item.username }}
                                            </span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-5 whitespace-nowrap">
                                        <span class="text-sm font-medium text-gray-900">
                                            {{ item.su_firstname }} {{ item.su_lastname }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-5 whitespace-nowrap text-right">
                                        <button @click="openDeleteModal(item)"
                                            class="group z-0 relative px-4 py-2 text-red-600 hover:text-white rounded-lg font-medium flex items-center gap-2 transition-all duration-300 overflow-hidden border border-red-300 hover:border-red-600 bg-white hover:bg-red-500 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 transition-transform group-hover:rotate-12 group-hover:scale-110"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M3 6h18" />
                                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                            </svg>
                                            <span class="relative">ลบ</span>
                                            <span
                                                class="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div v-if="selectedUserToDelete" class="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div class="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 space-y-6">
                        <div class="flex items-center justify-between">
                            <h3 class="text-xl font-bold text-gray-800">ยืนยันการลบ</h3>
                            <button @click="closeDeleteModal"
                                class="text-gray-500 hover:text-gray-800 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div class="text-center">
                            <div
                                class="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <p class="text-gray-600 mb-2">คุณแน่ใจหรือไม่ว่าต้องการลบ</p>
                            <p class="font-semibold text-gray-800">
                                {{ selectedUserToDelete.su_firstname }}
                                {{ selectedUserToDelete.su_lastname }}
                            </p>
                        </div>

                        <div class="flex justify-center space-x-4">
                            <button @click="closeDeleteModal"
                                class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                ยกเลิก
                            </button>
                            <button @click="confirmDelete"
                                class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                                ลบข้อมูล
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import SidebarComponent from "./Menu/SidebarComponent.vue";
import Swal from "sweetalert2";
import { useToastService } from "@/lib/toastService";

const { showSuccess } = useToastService();

const showSuccessToast = (message) => {
    showSuccess(message);
}

const dataArray = ref([]);
const searchQuery = ref("");
const selectedUserToDelete = ref(null);

const headers = [
    { key: "id_card", label: "ชื่อผู้ใช้" },
    { key: "name", label: "ชื่อ - นามสกุล" },
    { key: "action", label: "จัดการ" },
];

const fetchData = async () => {
    const baseUrl = process.env.VUE_APP_API_URL + "/user/getadmin";
    try {
        const response = await axios.post(baseUrl);
        if (response.data && Array.isArray(response.data.data)) {
            dataArray.value = response.data.data;
        } else {
            console.error(
                "API response is not an array or is missing the data array"
            );
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const filteredUsers = computed(() => {
    return dataArray.value.filter(user => {
        const query = searchQuery.value.toLowerCase();
        return (
            String(user.card_id).includes(query) ||
            user.su_firstname.toLowerCase().includes(query) ||
            user.su_lastname.toLowerCase().includes(query)
        )
    })
})

const openDeleteModal = (user) => {
    selectedUserToDelete.value = user;
};

const closeDeleteModal = () => {
    selectedUserToDelete.value = null;
};

const confirmDelete = async () => {
    if (selectedUserToDelete.value) {
        try {
            const baseUrl = process.env.VUE_APP_API_URL + "/user/deleteuser";
            const response = await axios.post(baseUrl, {
                su_id: selectedUserToDelete.value.su_id,
            });

            if (response.data.success) {
                dataArray.value = dataArray.value.filter(
                    (user) => user.su_id !== selectedUserToDelete.value.su_id
                );
                showSuccessToast("ลบผู้ใช้สำเร็จ");
                closeDeleteModal();
            } else {
                alert("เกิดข้อผิดพลาดในการลบข้อมูล");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("เกิดข้อผิดพลาดในการลบข้อมูล");
        }
    }
};

onMounted(() => {
    fetchData();
});
</script>