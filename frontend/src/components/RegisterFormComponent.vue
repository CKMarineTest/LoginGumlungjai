<template>
  <div class="min-h-screen w-full bg-blue-100 flex">
    <aside class="w-20 fixed left-0 top-0 bottom-0 bg-gray-900 shadow-lg z-10">
      <SidebarComponent />
    </aside>

    <main class="flex-1 ml-20 p-4 md:p-6 lg:p-8">
      <br />
      <br />
      <div class="w-full max-w-full mx-auto">
        <div class="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2
              class="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ข้อมูลผู้สมัคร
            </h2>
            <p class="text-gray-500">จัดการข้อมูลผู้สมัครทุนการศึกษาทั้งหมด</p>
          </div>
          <!-- <button class="mt-4 bg-yellow-400 p-3 w-50 flex rounded-xl hover:bg-yellow-300 transition-all duration-300"
            @click="isSortModalOpen = true">
            <ArrowDownWideNarrow />กรองข้อมูลทุน
          </button> -->

          <div v-if="isSortModalOpen" ref="overlay"
            class="fixed inset-0 bg-black bg-opacity-60 z-40 flex items-center justify-center backdrop-blur-sm transition-all duration-300"
            @click="closeModal">
            <div ref="modal"
              class="bg-white w-full max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden z-50 relative transform transition-all duration-300"
              @click.stop>
              <div
                class="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-8 flex justify-between items-center relative overflow-hidden">
                <div class="absolute -top-12 -right-12 w-40 h-40 bg-blue-400 bg-opacity-30 rounded-full"></div>
                <div class="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-600 bg-opacity-30 rounded-full"></div>

                <div class="relative z-10">
                  <h2 class="text-3xl font-bold flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 10l-7 7-7-7m14 4v2a2 2 0 01-2 2h-5" />
                    </svg>
                    กรองรายชื่อทุน
                  </h2>
                </div>

                <div class="relative z-10 flex items-center">
                  <span
                    class="bg-white text-blue-700 text-lg px-4 py-2 rounded-full font-bold shadow-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    {{ scholarship.length }} ทุน
                  </span>
                </div>
              </div>

              <div
                class="bg-blue-50 px-8 py-4 border-b border-blue-100 flex flex-wrap items-center justify-between gap-4">
                <div class="relative flex-grow max-w-xl">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input type="text" v-model="searchQuery" placeholder="ค้นหาชื่อทุน สถาบัน หรือเงื่อนไข..."
                    class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700" />
                </div>
              </div>
              <div class="max-h-96 overflow-y-auto px-8 py-4">
                <div v-for="(item, index) in scholarship" :key="index"
                  class="mb-4 bg-white border border-gray-200 hover:border-blue-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                  <div class="p-3">
                    <div class="flex justify-between items-start">
                      <div class="flex-grow">
                        <div class="flex items-start gap-4">
                          <div class="bg-blue-100 text-blue-700 p-3 rounded-lg">
                            <component :is="item.icon" class="w-6 h-6" />
                          </div>

                          <div class="flex-grow">
                            <div class="flex items-center">
                              <h3 class="text-xl font-semibold text-gray-800">
                                {{ item.scholarship }}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="flex flex-col space-y-2 ml-4">
                        <button @click="filteredByScholarship(item.id)"
                          class="text-sm px-5 py-2 text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
                          กรอง
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="scholarship === 0"
                  class="py-16 text-center text-gray-500 bg-gray-50 rounded-xl border border-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 class="text-xl font-semibold mb-2">
                    ไม่พบทุนการศึกษาที่ตรงกับการค้นหา
                  </h3>
                  <p class="text-gray-600 max-w-md mx-auto">
                    ลองเปลี่ยนคำค้นหาหรือตัวกรองเพื่อค้นหาทุนที่เหมาะสมกับคุณ
                  </p>
                  <button
                    class="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    ล้างตัวกรอง
                  </button>
                </div>
              </div>

              <div class="border-t border-gray-200 px-8 py-6 flex justify-between items-center bg-white">
                <div class="flex space-x-3">
                  <button @click="closeSortModal"
                    class="px-5 py-2.5 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 flex items-center font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ปิด
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="relative mt-4 md:mt-0">

            <input v-model="searchQuery" type="text" placeholder="ค้นหา..."
              class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-white/90" />
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 absolute left-3 top-3.5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <div
            class="bg-white rounded-xl shadow-lg p-6 cursor-pointer flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-blue-600"
            @click="filterByStatus(null)">
            <div class="rounded-full bg-blue-100 p-4 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p class="text-gray-500 text-sm font-medium">ผู้สมัครทั้งหมด</p>
              <h2 class="text-3xl font-bold text-gray-800">
                {{ dataArray.length }} คน
              </h2>
            </div>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-6 cursor-pointer flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-red-600"
            @click="filterByStatus(0)">
            <div class="bg-red-100 p-4 mr-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <p class="text-gray-500 text-sm font-medium">ที่ต้องแก้ไข</p>
              <h2 class="text-3xl font-bold text-gray-800">
                {{ statusCounts.edit }} คน
              </h2>
            </div>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-6 cursor-pointer flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-yellow-500"
            @click="filterByStatus(1)">
            <div class="bg-yellow-100 p-4 mr-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-gray-500 text-sm font-medium">รอดำเนินการตรวจสอบเอกสาร</p>
              <h2 class="text-3xl font-bold text-gray-800">
                {{ statusCounts.waiting }} คน
              </h2>
            </div>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-6 cursor-pointer flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-green-500"
            @click="filterByStatus(2)">
            <div class="bg-green-100 p-4 mr-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-gray-500 text-sm font-medium">ตรวจเสร็จสิ้น รอกรรมการลงคะแนน</p>
              <h2 class="text-3xl font-bold text-gray-800">
                {{ statusCounts.success }} คน
              </h2>
            </div>
          </div>


          <div class="relative w-12/12">
            <div @click="isOpen = !isOpen"
              class="bg-white rounded-lg shadow px-4 py-3 cursor-pointer flex justify-between items-center border border-gray-200 hover:border-blue-400 transition-colors">
              <div class="flex items-center space-x-2">
                <div class="h-3 w-3 rounded-full bg-blue-500"></div>
                <span class="text-sm text-gray-700">{{ selectedScholarship?.scholarship || 'เลือกทุนการศึกษา' }}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500 transition-transform"
                :class="{ 'rotate-180': isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div v-if="isOpen" class="absolute w-full mt-1 bg-white rounded-lg shadow-lg z-10 border border-gray-100">
              <div class="py-1 max-h-56 overflow-y-auto">
                <div v-for="(scholarship, index) in scholarship" :key="index"
                  @click="selectScholarship(index); isOpen = false;"
                  class="px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer flex items-center space-x-2"
                  :class="{ 'bg-blue-50': selectedIndex === index }">
                  <div class="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                  <span class="text-gray-700">{{ scholarship.scholarship }}</span>
                </div>
              </div>
            </div>

            <button
              class="bg-gray-500 px-2 text-white py-2 mt-2 rounded-md text-sm hover:bg-gray-600 transition-all ease duration-300"
              @click="clearScholarship">ล้างตัวกรองทุนการศึกษา</button>

          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg w-full">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr class="bg-gradient-to-r from-blue-50 to-white">
                  <th v-for="header in headers" :key="header.key"
                    class="px-6 py-5 text-left text-sm font-semibold text-gray-700 tracking-wider cursor-pointer group transition-colors duration-200"
                    @click="sortBy(header.key)">
                    <div class="flex items-center gap-2 group-hover:text-blue-600">
                      {{ header.label }}
                      <span v-if="sortKey === header.key" class="transition-transform duration-300 text-blue-500"
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
                <tr v-for="(item, index) in filteredData" :key="item.id_card"
                  class="group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent transition-all duration-300">
                  <td class="px-6 py-5 whitespace-nowrap text-sm">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 flex items-center justify-center text-blue-700 font-semibold shadow-sm transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {{ index + 1 }}
                      </div>
                      <span class="font-medium text-gray-700">{{
                        item.idcard
                      }}</span>
                    </div>
                  </td>
                  <td class="px-6 py-5 whitespace-nowrap">
                    <span
                      class="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {{ item.FirstName }} {{ item.LastName }}
                    </span>
                  </td>
                  <td class="px-6 py-5 whitespace-nowrap">
                    <span
                      class="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {{ item.NickName }}
                    </span>
                  </td>
                  <td class="px-6 py-5 whitespace-nowrap">
                    <span class="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      {{ formatPhone(item.Mobile) }}
                    </span>
                  </td>
                  <td class="px-6 py-5 whitespace-nowrap max-w-xs truncate">
                    <span class="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      :title="item.scholarship">
                      {{ item.Project_Name }}
                    </span>
                  </td>
                  <td class="px-6 py-5 whitespace-nowrap">
                    <span class="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">

                      <span class="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800"
                        v-if="item.Efilling_statusID === 0">
                        {{ statusMap[item.Efilling_statusID] || 'ไม่พบสถานะ' }}
                      </span>

                      <span class="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800"
                        v-if="item.Efilling_statusID === 1">
                        {{ statusMap[item.Efilling_statusID] || 'ไม่พบสถานะ' }}
                      </span>

                      <span class="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800"
                        v-if="item.Efilling_statusID === 2">
                        {{ statusMap[item.Efilling_statusID] || 'ไม่พบสถานะ' }}
                      </span>

                    </span>
                  </td>
                  <td class="px-6 py-5 whitespace-nowrap">
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">

                      <div class="relative">
                        <div class="absolute top-1 left-1 w-5 h-5 pointer-events-none z-0">
                          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(20, 20)">
                              <path
                                d="M 0,-10 L 2.35,-3.1 9.9,-3.1 3.8,1.2 6.1,8.1 0,3.8 -6.1,8.1 -3.8,1.2 -9.9,-3.1 -2.35,-3.1 Z"
                                fill="#FFD700" stroke="#FFC107" stroke-width="0.5" opacity="0.85">
                              </path>
                              <circle cx="0" cy="0" r="11" fill="url(#miniGlow)" opacity="0.3"></circle>
                            </g>
                            <defs>
                              <radialGradient id="miniGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" stop-color="#FFD700" stop-opacity="0.3" />
                                <stop offset="100%" stop-color="#FFD700" stop-opacity="0" />
                              </radialGradient>
                            </defs>
                          </svg>
                        </div>

                        <textarea rows="1" :value="getNote(item.idcard)"
                          @input="(e) => saveNote(item.idcard, e.target.value)"
                          class="block w-full px-4 py-3 pl-8 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition duration-200"
                          placeholder="เพิ่ม Note..."></textarea>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-5 whitespace-nowrap text-right">
                    <div class="flex items-center justify-end gap-3">
                      <button @click="goToDocument(item.idcard)"
                        class="p-2.5 text-blue-600 rounded-xl hover:bg-blue-100 transition-all duration-200 hover:scale-110 hover:shadow-sm"
                        title="ดูเอกสาร">
                        <DocumentTextIcon class="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, computed, onMounted, watch } from "vue";
import axios from "axios";
import { DocumentTextIcon } from "@heroicons/vue/24/outline";
import { Hospital, Book, Heart, MessageCircleMore, Pill } from "lucide-vue-next";
import SidebarComponent from "./Menu/SidebarComponent.vue";
import router from "@/router";

// ใช้ ref เพื่อเก็บข้อมูล
const data = ref([]);
const dataArray = ref([]);
const searchQuery = ref("");
const sortKey = ref("id_card");
const sortOrder = ref("asc");
const filteredStatus = ref(null);
const isSortModalOpen = ref(false);

const selectedScholarship = ref(null);

const selectedIndex = ref(null);

const selectScholarship = (index) => {
  selectedScholarship.value = scholarship[index];
  selectedIndex.value = index;
  filteredScholarship.value = scholarship[index].id;
  isOpen.value = false;
};

const clearScholarship = () => {
  selectedScholarship.value = null;
  selectedIndex.value = null;
  filteredScholarship.value = null;
  isOpen.value = false;
}


const isOpen = ref(false);

const headers = [
  { key: "id_card", label: "รหัสประจำตัวประชาชน" },
  { key: "name", label: "ชื่อ - นามสกุล" },
  { key: "nickname", label: "ชื่อเล่น" },
  { key: "phone", label: "เบอร์โทรศัพท์" },
  { key: "scholarship", label: "ชื่อทุน" },
  { key: "status", label: "สถานะ" },
  { key: "note", label: "NOTE" },
];

const fetchData = async () => {
  const baseUrl = process.env.VUE_APP_API_URL + "/efilling/GetlistEfilling";

  try {
    const response = await axios.post(baseUrl);

    if (response.data && Array.isArray(response.data.data)) {
      dataArray.value = response.data.data;
    } else {
      console.error("API response is not an array or is missing the data array");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    data.value = [];
  }
};


const getNote = (id) => localStorage.getItem(`note_${id}`) || '';
const saveNote = (id, note) => localStorage.setItem(`note_${id}`, note);

// const filteredData = computed(() => {
//   return dataArray.value.filter(data => {
//     const query = searchQuery.value.toLowerCase();
//     return (
//       String(data.idcard).includes(query) ||
//       data.FirstName.toLowerCase().includes(query) ||
//       data.LastName.toLowerCase().includes(query) ||
//       data.Mobile.toLowerCase().includes(query) ||
//       data.Project_Name.toLowerCase().includes(query)
//     )
//   })
// })

const selectedStatus = ref(null);


const filteredData = computed(() => {
  const query = searchQuery.value.toLowerCase();
  const statusFilter = selectedStatus.value;
  const scholarshipFilter = filteredScholarship.value;

  return dataArray.value.filter((data) => {
    const matchQuery =
      String(data.idcard).includes(query) ||
      data.FirstName.toLowerCase().includes(query) ||
      data.LastName.toLowerCase().includes(query) ||
      data.NickName.toLowerCase().includes(query) ||
      data.Mobile.toLowerCase().includes(query) ||
      data.Project_Name.toLowerCase().includes(query);

    const matchScholarship =
      !scholarshipFilter || String(data.Project_ID).toLowerCase() === scholarshipFilter.toLowerCase();

    const matchStatus =
      statusFilter === null || data.Efilling_statusID === statusFilter;

    return matchQuery && matchScholarship && matchStatus;
  });
});

const statusArray = ref([]);

onMounted(async () => {
  const baseUrl = process.env.VUE_APP_API_URL + "/efilling/GetlistEfilling";
  const statusUrl = process.env.VUE_APP_API_URL + "/efilling/GetEfillingStatus";
  const [dataArrayRes, statusRes] = await Promise.all([
    axios.post(baseUrl),
    axios.post(statusUrl)
  ]);

  dataArray.value = Array.isArray(dataArrayRes.data.data) ? dataArrayRes.data.data : [];
  statusArray.value = Array.isArray(statusRes.data.data) ? statusRes.data.data : [];

})

const statusMap = computed(() => {
  const map = {};
  for (const status of statusArray.value) {
    map[status.Efilling_StatusID] = status.Efilling_DescriptionLocal;
  }
  return map;
})

const statusCounts = computed(() => {
  return {
    edit: dataArray.value.filter(item => item.Efilling_statusID === 0).length,
    waiting: dataArray.value.filter(item => item.Efilling_statusID === 1).length,
    success: dataArray.value.filter(item => item.Efilling_statusID === 2).length,
  };
});

function filterByStatus(statusID) {
  selectedStatus.value = statusID;
}

onMounted(async () => {
  await fetchData(); // รอให้ข้อมูลโหลดเสร็จก่อน
});

const sortBy = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortOrder.value = "asc";
  }
};

const formatPhone = (phone) => {
  if (!phone) return "N/A";

  if (phone.length === 10) {
    return `${phone.substring(0, 3)}-${phone.substring(3, 6)}-${phone.substring(
      6
    )}`;
  }
  return phone;
};

const filteredScholarship = ref(null);

const filteredByScholarship = (scholarship) => {
  // alert(scholarship);
  filteredScholarship.value = scholarship;
  isSortModalOpen.value = false;
}

watch(filteredScholarship, (val) => {
  // console.log("Selected", val);
})

const closeSortModal = () => {
  isSortModalOpen.value = false;
}


const scholarship = [
  {
    id: "PJ1",
    scholarship: "โครงการกำลังใจสร้างครูของชาติ",
    amount: "30,000",
    icon: Book,
  },
  {
    id: "PJ2",
    scholarship: "โครงการทุนคุณหมอของกำลังใจ",
    amount: "50,000",
    icon: Hospital,
  },
  {
    id: "PJ3",
    scholarship: "โครงการทุน Gumlungjai Scholarship",
    amount: "40,000",
    icon: Heart,
  },
  {
    id: "PJ4",
    scholarship: "โครงการทุนกำลังใจให้พยาบาล",
    amount: "40,000",
    icon: Pill,
  },
  {
    id: "PJ5",
    scholarship: "โครงการทุนนักจิตวิทยาสร้างกำลังใจ",
    amount: "40,000",
    icon: MessageCircleMore,
  },
];

const goToDocument = (idCard) => {
  if (idCard) {
    router.push({ name: 'documentdatabyid', params: { idcard: idCard } });
  } else {
    console.error("ID Card is missing!");
  }
};
</script>
