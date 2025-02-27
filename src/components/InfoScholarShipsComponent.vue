<template>
  <div class="min-h-screen w-full bg-blue-100 flex">
    <aside class="w-20 fixed left-0 top-0 bottom-0 bg-gray-900 shadow-lg z-10">
      <SidebarComponent />
    </aside>

    <main class="flex-1 ml-20 p-4 md:p-6 lg:p-8">
      <br />
      <br />
      <div class="w-full max-w-full mx-auto">
        <div
          class="mb-8 flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h2
              class="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              ข้อมูลผู้ที่ได้รับทุน
            </h2>
          </div>

          <div class="relative mt-4 md:mt-0">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="ค้นหาผู้สมัคร..."
              class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-white/90"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400 absolute left-3 top-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8"
        >
          <div
            class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition hover:scale-105 duration-300"
          >
            <div
              @click="filterByScholarship()"
              class="flex justify-between items-center cursor-pointer"
            >
              <div>
                <p class="text-gray-500 text-sm">ผู้ได้รับทุนทั้งหมด</p>
                <p class="text-2xl font-bold text-gray-800">
                  {{ data.length }} คน
                </p>
              </div>
              <div class="bg-gray-100 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div
            class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition hover:scale-105 duration-300"
          >
            <div
              @click="filterByScholarship('โครงการกำลังใจสร้างครูของชาติ')"
              class="flex justify-between items-center cursor-pointer"
            >
              <div>
                <p class="text-gray-500 text-sm">โครงการกำลังใจสร้างครูของชาติ</p>
                <p class="text-2xl font-bold text-gray-800">
                    {{ data.filter(item => item.scholarship === 'โครงการกำลังใจสร้างครูของชาติ').length }} คน
                </p>
              </div>
              <div class="bg-blue-100 p-3 rounded-lg">
                <LibraryBig class="text-blue-700" />
              </div>
            </div>
          </div>

          <div
            class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition hover:scale-105 duration-300"
          >
            <div
              @click="filterByScholarship('โครงการทุนคุณหมอของกำลังใจ')"
              class="flex justify-between items-center cursor-pointer"
            >
              <div>
                <p class="text-gray-500 text-sm">โครงการทุนคุณหมอของกำลังใจ</p>
                <p class="text-2xl font-bold text-gray-800">
                  {{ data.filter(item => item.scholarship === 'โครงการทุนคุณหมอของกำลังใจ').length }} คน
                </p>
              </div>
              <div class="bg-green-100 p-3 rounded-lg">
                <Hospital class="text-green-700" />
              </div>
            </div>
          </div>

          <div
            class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition hover:scale-105 duration-300"
          >
            <div
              @click="filterByScholarship('โครงการทุนกำลังใจให้พยาบาล')"
              class="flex justify-between items-center cursor-pointer"
            >
              <div>
                <p class="text-gray-500 text-sm">โครงการทุนกำลังใจให้พยาบาล</p>
                <p class="text-2xl font-bold text-gray-800">
                  {{ data.filter(item => item.scholarship === "โครงการทุนกำลังใจให้พยาบาล").length }} คน
                </p>
              </div>
              <div class="bg-yellow-100 p-3 rounded-lg">
                <Pill class="text-yellow-700" />
              </div>
            </div>
          </div>

          <div
            class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition hover:scale-105 duration-300"
          >
            <div
              @click="filterByScholarship('โครงการทุน Gumlungjai Scholarship')"
              class="flex justify-between items-center cursor-pointer"
            >
              <div>
                <p class="text-gray-500 text-sm">โครงการทุน Gumlungjai Scholarship</p>
                <p class="text-2xl font-bold text-gray-800">
                    {{ data.filter(item => item.scholarship === "โครงการทุน Gumlungjai Scholarship").length }} คน
                </p>
              </div>
              <div class="bg-pink-100 p-3 rounded-lg">
                <GraduationCap class="text-pink-700" />
              </div>
            </div>
          </div>

          <div
            class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition hover:scale-105 duration-300"
          >
            <div
              @click="filterByScholarship('โครงการทุนนักจิตวิทยาสร้างกำลังใจ')"
              class="flex justify-between items-center cursor-pointer"
            >
              <div>
                <p class="text-gray-500 text-sm">โครงการทุนนักจิตวิทยาสร้างกำลังใจ</p>
                <p class="text-2xl font-bold text-gray-800">
                  {{ data.filter(item => item.scholarship === "โครงการทุนนักจิตวิทยาสร้างกำลังใจ").length }} คน
                </p>
              </div>
              <div class="bg-purple-100 p-3 rounded-lg">
                <MessageCircleMore class="text-purple-700" />
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg w-full"
        >
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr
                  class="bg-gradient-to-r from-blue-50 to-white"
                  align="center"
                >
                  <th
                    v-for="header in headers"
                    :key="header.key"
                    class="px-6 py-5 text-left text-sm font-semibold text-gray-700 tracking-wider cursor-pointer group transition-colors duration-200"
                    @click="sortBy(header.key)"
                  >
                    <div
                      class="flex items-center gap-2 group-hover:text-blue-600"
                    >
                      {{ header.label }}
                      <span
                        v-if="sortKey === header.key"
                        class="transition-transform duration-300 text-blue-500"
                        :class="sortOrder === 'asc' ? 'rotate-0' : 'rotate-180'"
                      >
                        ↑
                      </span>
                    </div>
                    <div
                      class="h-0.5 w-0 group-hover:w-full bg-blue-500 transition-all duration-300"
                    ></div>
                  </th>
                  <th
                    class="px-6 py-5 text-right text-sm font-semibold text-gray-700 tracking-wider"
                  >
                    จัดการ
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr
                  v-for="item in sortedAndFilteredData"
                  :key="item.id_card"
                  class="group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent transition-all duration-300"
                >
                  <td class="px-6 py-5 whitespace-nowrap text-sm">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 flex items-center justify-center text-blue-700 font-semibold shadow-sm transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      >
                        {{ item.name.charAt(0) }}
                      </div>
                      <span class="font-medium text-gray-700">{{
                        item.id_card
                      }}</span>
                    </div>
                  </td>
                  <td class="px-6 py-5 whitespace-nowrap">
                    <span
                      class="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200"
                    >
                      {{ item.name }}
                    </span>
                  </td>
                  <td class="px-6 py-5 whitespace-nowrap">
                    <span
                      class="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {{ formatPhone(item.phone) }}
                    </span>
                  </td>
                  <td class="px-6 py-5 whitespace-nowrap max-w-xs truncate">
                    <span
                      class="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      :title="item.scholarship"
                    >
                      {{ item.scholarship }}
                    </span>
                  </td>
                  <td class="px-6 py-5 whitespace-nowrap">
                    <span
                      class="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {{ item.registerdate }}
                    </span>
                  </td>
                  <td class="px-6 py-5 whitespace-nowrap text-right">
                    <div class="flex items-center justify-end gap-3">
                      <button
                        @click="documentData"
                        class="p-2.5 text-blue-600 rounded-xl hover:bg-blue-100 transition-all duration-200 hover:scale-110 hover:shadow-sm"
                        title="ดูเอกสาร"
                      >
                        <DocumentTextIcon class="h-5 w-5" />
                      </button>
                      <button
                        class="p-2.5 text-green-600 rounded-xl hover:bg-green-100 transition-all duration-200 hover:scale-110 hover:shadow-sm"
                        title="แก้ไขข้อมูล"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            class="bg-gradient-to-r from-gray-50 to-white px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-gray-100"
          >
            <p class="text-sm text-gray-600 mb-4 sm:mb-0">
              แสดง
              <span class="font-medium text-gray-900">{{
                sortedAndFilteredData.length
              }}</span>
              รายการ จากทั้งหมด
              <span class="font-medium text-gray-900">{{ data.length }}</span>
              รายการ
            </p>
            <div class="flex gap-2">
              <button
                class="px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                ก่อนหน้า
              </button>
              <button
                class="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow"
              >
                1
              </button>
              <button
                class="px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex items-center gap-1"
              >
                ถัดไป
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
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
import { ref, computed } from "vue";
import { DocumentTextIcon } from "@heroicons/vue/24/outline";
import SidebarComponent from "./Menu/SidebarComponent.vue";
import router from "@/router";
import { LibraryBig, Pill, Hospital, GraduationCap, MessageCircleMore } from "lucide-vue-next";

const searchQuery = ref("");
const sortKey = ref("id_card");
const sortOrder = ref("asc");
const filteredStatus = ref(null);

const headers = [
  { key: "id_card", label: "รหัสประจำตัวประชาชน" },
  { key: "name", label: "ชื่อ - นามสกุล" },
  { key: "phone", label: "เบอร์โทรศัพท์" },
  { key: "scholarship", label: "ชื่อทุน" },
  { key: "registerdate", label: "วันที่สมัคร" },
//   { key: "status", label: "สถานะ" },
];

const data = ref([
  {
    id_card: "USR001",
    name: "สมชาย ใจดี",
    phone: "0824462690",
    scholarship: "โครงการกำลังใจสร้างครูของชาติ",
    registerdate: "1 มีนาคม 2568",
    // status: "ตรวจเสร็จสิ้น",
  },
  {
    id_card: "USR002",
    name: "สมหญิง รักดี",
    phone: "0123456789",
    scholarship: "โครงการทุนคุณหมอของกำลังใจ",
    registerdate: "1 มีนาคม 2568",
    // status: "รอดำเนินการ",
  },
  {
    id_card: "USR003",
    name: "มานี มีเงิน",
    phone: "5555555555",
    scholarship: "โครงการทุน Gumlungjai Scholarship",
    registerdate: "2 มีนาคม 2568",
    // status: "ตรวจเสร็จสิ้น",
  },
  {
    id_card: "USR004",
    name: "สมศรี ศรีสุข",
    phone: "4561234562",
    scholarship: "โครงการทุนกำลังใจให้พยาบาล",
    registerdate: "3 มีนาคม 2568",
    // status: "แก้ไขเอกสาร",
  },
  {
    id_card: "USR005",
    name: "สมพร พรเพียง",
    phone: "0931235523",
    scholarship: "โครงการทุนนักจิตวิทยาสร้างกำลังใจ",
    registerdate: "4 มีนาคม 2568",
    // status: "รอดำเนินการ",
  },
]);

const sortedAndFilteredData = computed(() => {
  let result = [...data.value];

  if (filteredStatus.value) {
    result = result.filter((item) => item.status === filteredStatus.value);
  }

  if(filteredScholarship.value) {
    result = result.filter((item) => item.scholarship === filteredScholarship.value);
  }

  if (searchQuery.value) {
    result = result.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );
  }

  result.sort((a, b) => {
    const aValue = a[sortKey.value];
    const bValue = b[sortKey.value];

    if (sortOrder.value === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return result;
});

const filteredScholarship = ref(null);

const filterByScholarship = (scholarship) => {
    filteredScholarship.value = scholarship;
}

const sortBy = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortOrder.value = "asc";
  }
};

const formatPhone = (phone) => {
  if (phone.length === 10) {
    return `${phone.substring(0, 3)}-${phone.substring(3, 6)}-${phone.substring(
      6
    )}`;
  }
  return phone;
};

const documentData = () => {
  router.push("/documentdata");
};
</script>
