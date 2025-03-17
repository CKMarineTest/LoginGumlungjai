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
              ข้อมูลผู้สมัคร
            </h2>
            <p class="text-gray-500">จัดการข้อมูลผู้สมัครทุนการศึกษาทั้งหมด</p>
          </div>

          <div class="relative mt-4 md:mt-0">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="ค้นหา..."
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
            class="bg-white rounded-xl shadow-lg p-6 cursor-pointer flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-blue-600"
            @click="filterByStatus()"
          >
            <div class="rounded-full bg-blue-100 p-4 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <p class="text-gray-500 text-sm font-medium">ผู้สมัครทั้งหมด</p>
              <h2 class="text-3xl font-bold text-gray-800">
                {{ data.length }}
              </h2>
            </div>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-6 cursor-pointer flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-red-600"
            @click="filterByStatus('แก้ไขเอกสาร')"
          >
            <div class="bg-red-100 p-4 mr-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div>
              <p class="text-gray-500 text-sm font-medium">ที่ต้องแก้ไข</p>
              <h2 class="text-3xl font-bold text-gray-800">
                {{ statusCounts["แก้ไขเอกสาร"] || 0 }} คน
              </h2>
            </div>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-6 cursor-pointer flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-yellow-500"
            @click="filterByStatus('รอดำเนินการ')"
          >
            <div class="bg-yellow-100 p-4 mr-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p class="text-gray-500 text-sm font-medium">รอดำเนินการ</p>
              <h2 class="text-3xl font-bold text-gray-800">
                {{ statusCounts["รอดำเนินการ"] || 0 }} คน
              </h2>
            </div>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-6 cursor-pointer flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-green-500"
            @click="filterByStatus('ตรวจเสร็จสิ้น')"
          >
            <div class="bg-green-100 p-4 mr-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p class="text-gray-500 text-sm font-medium">ตรวจเสร็จสิ้น</p>
              <h2 class="text-3xl font-bold text-gray-800">
                {{ statusCounts["ตรวจเสร็จสิ้น"] || 0 }} คน
              </h2>
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
                  <td class="px-6 py-5 whitespace-nowrap">
                    <span
                      v-if="item.status === 'ตรวจเสร็จสิ้น'"
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {{ item.status }}
                    </span>
                    <span
                      v-else-if="item.status === 'รอดำเนินการ'"
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {{ item.status }}
                    </span>
                    <span
                      v-else-if="item.status.includes('แก้ไข')"
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      {{ item.status }}
                    </span>
                    <span
                      v-else
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200"
                    >
                      {{ item.status }}
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
import { ref, computed } from "vue";
import { DocumentTextIcon } from "@heroicons/vue/24/outline";
import SidebarComponent from "./Menu/SidebarComponent.vue";
import router from "@/router";

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
  { key: "status", label: "สถานะ" },
];

const data = ref([
  {
    id_card: "USR001",
    name: "สมชาย ใจดี",
    phone: "5555555555",
    scholarship: "โครงการกำลังใจสร้างครูของชาติ",
    registerdate: "1 มีนาคม 2568",
    status: "ตรวจเสร็จสิ้น",
  },
  {
    id_card: "USR002",
    name: "สมหญิง รักดี",
    phone: "0123456789",
    scholarship: "โครงการทุนคุณหมอของกำลังใจ",
    registerdate: "1 มีนาคม 2568",
    status: "รอดำเนินการ",
  },
  {
    id_card: "USR003",
    name: "มานี มีเงิน",
    phone: "2255112365",
    scholarship: "โครงการทุน Gumlungjai Scholarship",
    registerdate: "2 มีนาคม 2568",
    status: "ตรวจเสร็จสิ้น",
  },
  {
    id_card: "USR004",
    name: "สมศรี ศรีสุข",
    phone: "4561234562",
    scholarship: "โครงการทุนกำลังใจให้พยาบาล",
    registerdate: "3 มีนาคม 2568",
    status: "แก้ไขเอกสาร",
  },
  {
    id_card: "USR005",
    name: "สมพร พรเพียง",
    phone: "0931235523",
    scholarship: "โครงการทุนนักจิตวิทยาสร้างกำลังใจ",
    registerdate: "4 มีนาคม 2568",
    status: "รอดำเนินการ",
  },
]);

const statusCounts = computed(() => {
  return data.value.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});
});

const sortedAndFilteredData = computed(() => {
  let result = [...data.value];

  if (filteredStatus.value) {
    result = result.filter((item) => item.status === filteredStatus.value);
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

const filterByStatus = (status) => {
  filteredStatus.value = status;
};

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
