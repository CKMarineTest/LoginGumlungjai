<template>
  <aside class="w-20 z-10 h-screen fixed left-0 bg-gradient-to-b from-blue-800 to-blue-900 shadow-xl">
    <SidebarComponent />
  </aside>

  <div class="ml-20 flex-1 min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
    <br />
    <br />
    <div class="max-w-12xl mx-auto">
      <header class="pt-8 px-6">
        <h1 class="text-2xl font-bold text-gray-800">DashBoard</h1>
      </header>

      <main class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 cursor-pointer">
          <div
            class="bg-white rounded-xl shadow-lg p-6 flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-blue-600"
            @click="handleGotoRegisterForm">
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
                {{ formatNumber }} <span class="text-md">คน</span>
                <!-- <span class="text-green-500 text-sm ml-2">(+{{ newDataCount }} ใหม่)</span> -->
              </h2>
            </div>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-6 flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-red-600">
            <div class="rounded-full bg-red-100 p-4 mr-4">
              <CircleAlert class="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p class="text-gray-500 text-sm font-medium">ที่ต้องแก้ไข</p>
              <h2 class="text-3xl font-bold text-gray-800">{{ statusCounts[0] || 0 }} คน</h2>
            </div>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-6 flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-purple-600">
            <div class="rounded-full bg-purple-100 p-4 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-gray-500 text-sm font-medium">รอดำเนินการตรวจเอกสาร</p>
              <h2 class="text-3xl font-bold text-gray-800">{{ statusCounts[1] || 0 }} คน</h2>
            </div>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-6 flex items-center transform transition hover:scale-105 duration-300 border-l-4 border-green-600">
            <div class="rounded-full bg-green-100 p-4 mr-4">
              <CheckCircle class="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p class="text-gray-500 text-sm font-medium">ตรวจเสร็จสิ้นรอกรรมการลงคะแนน</p>
              <h2 class="text-3xl font-bold text-gray-800">
                {{ statusCounts[2] || 0 }} คน
              </h2>
            </div>
          </div>
        </div>

        <div v-if="isOpen" ref="overlay"
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
                  รายชื่อทุนทั้งหมดที่เปิดรับ
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
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input type="text" v-model="searchQuery" placeholder="ค้นหาชื่อทุน สถาบัน หรือเงื่อนไข..."
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700" />
              </div>

              <div class="flex gap-2">
                <button
                  class="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  ตัวกรอง
                </button>
                <button
                  class="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                  </svg>
                  จัดเรียง
                </button>
              </div>
            </div>
            <div class="max-h-96 overflow-y-auto px-8 py-4">
              <div v-for="(item, index) in filteredData" :key="index"
                class="mb-4 bg-white border border-gray-200 hover:border-blue-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                <div class="p-5">
                  <div class="flex justify-between items-start">
                    <div class="flex-grow">
                      <div class="flex items-start gap-4">
                        <div class="bg-blue-100 text-blue-700 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                          </svg>
                        </div>

                        <div class="flex-grow">
                          <div class="flex items-center">
                            <h3 class="text-xl font-semibold text-gray-800">
                              {{ item.scholarship }}
                            </h3>
                            <span
                              class="ml-3 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">เปิดรับสมัคร</span>
                          </div>

                          <div class="mt-4 grid grid-cols-2 gap-3">
                            <div class="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span class="text-gray-700">หมดเขตรับสมัคร:
                                <span class="font-medium">{{
                                  item.deadline || "31 พฤษภาคม 2568"
                                }}</span></span>
                            </div>

                            <div class="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span class="text-gray-700">จำนวนเงิน:
                                <span class="font-medium">{{
                                  item.amount || "ไม่ระบุ"
                                }}</span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex flex-col space-y-2 ml-4">
                      <button
                        class="text-sm px-5 py-2 text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
                        รายละเอียด
                      </button>
                    </div>
                  </div>
                </div>

                <div class="bg-gray-100 h-2 w-full">
                  <div class="bg-blue-500 h-2 rounded-r-full" :style="`width: ${item.timeLeftPercentage || '100'}%`">
                  </div>
                </div>
              </div>

              <div v-if="scholarship.length === 0"
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
                <button @click="closeModal"
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

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div class="bg-white rounded-xl shadow-lg p-6 lg:col-span-2 border border-gray-100">
            <div class="flex justify-between items-center mb-6">
              <div>
                <h3 class="text-xl font-bold text-gray-800">
                  สถิติการสมัครทุน
                </h3>
                <p class="text-gray-500 text-sm">
                  แสดงจำนวนผู้สมัครตามช่วงเวลา
                </p>
              </div>
              <div class="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg shadow-sm">
                <button @click="setTimeFilter('today')" :class="[
                  'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
                  timeFilter === 'today'
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100',
                ]">
                  <span class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    วันนี้
                  </span>
                </button>
                <button @click="setTimeFilter('week')" :class="[
                  'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
                  timeFilter === 'week'
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100',
                ]">
                  <span class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    สัปดาห์นี้
                  </span>
                </button>
                <button @click="setTimeFilter('month')" :class="[
                  'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
                  timeFilter === 'month'
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100',
                ]">
                  <span class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    เดือนนี้
                  </span>
                </button>
              </div>
            </div>
            <div class="h-72 relative">
              <Bar :data="chartData" :options="chartOptions" class="w-full h-full" />
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div>
              <h3 class="text-xl font-bold text-gray-800">สัดส่วนประเภททุน</h3>
              <p class="text-gray-500 text-sm mb-4">
                การกระจายตัวของผู้สมัครตามประเภททุน
              </p>
            </div>
            <div class="h-64 relative flex items-center justify-center">
              <canvas ref="chartCanvas" width="300" height="300"></canvas>
            </div>
            <div class="grid grid-cols-1 gap-3 mt-4">
              <div v-for="(item, index) in scholarshipData" :key="index"
                class="flex items-center p-2 rounded-lg hover:bg-gray-50">
                <div class="w-4 h-4 rounded-full mr-3" :style="{ backgroundColor: item.color }"></div>
                <span class="text-sm text-gray-700 font-medium flex-1">{{
                  item.name
                }}</span>
                <span class="text-sm font-bold text-gray-800">{{ item.percentage }}%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <RegisterModalComponent />

          <div
            class="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white flex flex-col items-center justify-center hover:from-purple-600 hover:to-purple-700 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <h3 class="text-lg font-bold mb-1">เพิ่มประเภททุน</h3>
            <p class="text-sm text-purple-100 text-center">
              สร้างประเภททุนใหม่เข้าสู่ระบบ
            </p>
          </div>

          <div
            class="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white flex flex-col items-center justify-center hover:from-green-600 hover:to-green-700 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 class="text-lg font-bold mb-1">กำหนดการ</h3>
            <p class="text-sm text-green-100 text-center">
              ตั้งค่ากำหนดการและปฏิทินกิจกรรม
            </p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted, watch, defineProps, computed, nextTick, render } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import gsap from "gsap";
import { Bar } from "vue-chartjs";
import SidebarComponent from "./Menu/SidebarComponent.vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { CircleAlert, Check, CheckCircle } from "lucide-vue-next";

import { Chart } from "chart.js/auto";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

import RegisterModalComponent from "./RegisterModalComponent.vue";
import dayjs from "dayjs";

const chartDatasets = {
  today: {
    labels: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
    data: [18, 25, 45, 30, 38, 28],
  },
  week: {
    labels: [
      "จันทร์",
      "อังคาร",
      "พุธ",
      "พฤหัสบดี",
      "ศุกร์",
      "เสาร์",
      "อาทิตย์",
    ],
    data: [40, 35, 60, 75, 65, 25, 30],
  },
  month: {
    labels: ["สัปดาห์ 1", "สัปดาห์ 2", "สัปดาห์ 3", "สัปดาห์ 4"],
    data: [150, 180, 210, 190],
  },
};

const calculateTotal = (dataset) =>
  dataset.reduce((sum, value) => sum + value, 0);
const totalData = Object.values(chartDatasets).reduce(
  (sum, dataset) => sum + calculateTotal(dataset.data),
  0
);

const timeFilter = ref("month");

const setTimeFilter = (value) => {
  timeFilter.value = value;
}

const filteredChartData = computed(() => {
  const now = dayjs();
  return dataArray.value.filter((item) => {
    const createdAt = dayjs(item.CreateDate);
    if (timeFilter.value === "today") {
      return createdAt.isSame(now, "day");
    } else if (timeFilter.value === "week") {
      return createdAt.isSame(now, "week");
    } else if (timeFilter.value === "month") {
      return createdAt.isSame(now, "month");
    }
    return true;
  });
});

const chartData = computed(() => ({
  labels: chartDatasets[timeFilter.value].labels,
  datasets: [
    {
      label: `จำนวนผู้สมัคร${timeFilter.value === "today"
          ? "วันนี้"
          : timeFilter.value === "week"
            ? "สัปดาห์นี้"
            : "เดือนนี้"
        }`,
      data: chartDatasets[timeFilter.value].data,
      backgroundColor:
        timeFilter.value === "week"
          ? [
            "rgba(255, 221, 51, 0.8)",
            "rgba(255, 105, 180, 0.8)",
            "rgba(76, 175, 80, 0.8)",
            "rgba(255, 152, 0, 0.8)",
            "rgba(33, 150, 243, 0.8)",
            "rgba(156, 39, 176, 0.8)",
            "rgba(244, 67, 54, 0.8)",
          ]
          : ["rgba(255, 87, 34, 0.8)"],
      borderColor:
        timeFilter.value === "week"
          ? [
            "rgb(255, 221, 51)",
            "rgb(255, 105, 180)",
            "rgb(76, 175, 80)",
            "rgb(255, 152, 0)",
            "rgb(33, 150, 243)",
            "rgb(156, 39, 176)",
            "rgb(244, 67, 54)",
          ]
          : ["rgb(255, 87, 34)"],
      borderWidth: 1,
      borderRadius: 4,
      maxBarThickness: 50,
    },
  ],
}));

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: { font: { family: "Sarabun, sans-serif" } },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleFont: { family: "Sarabun, sans-serif" },
      bodyFont: { family: "Sarabun, sans-serif" },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: "rgba(0, 0, 0, 0.05)", borderDash: [5, 5] },
      ticks: { font: { family: "Sarabun, sans-serif" } },
    },
    x: {
      grid: { display: false },
      ticks: { font: { family: "Sarabun, sans-serif" } },
    },
  },
  animation: { duration: 500 },
});

const colors = [
  "#3B82F6", 
  "#10B981", 
  "#F59E0B", 
  "#EF4444",
  "#8B5CF6", 
  "#EC4899", 
];

const scholarshipData = computed(() => {
  const counts = {};
  let total = 0;

  dataArray.value.filter((item) => {
    const projectId = item.Project_Name;
    if(!counts[projectId]) {
      counts[projectId] = 0;
    }
    counts[projectId]++;
    total++
  });

  return Object.entries(counts).map(([projectId, count], index) => {
    return {
      name: projectId,
      count,
      percentage: ((count / total) * 100).toFixed(1),
      color: colors[index % colors.length],
    }
  })
});

const renderChart = () => {
  if (chartInstance.value) {
    chartInstance.value.destroy(); 
  }

  const ctx = chartCanvas.value.getContext("2d");
  const data = scholarshipData.value;

  chartInstance.value = new Chart(ctx, {
    type: "pie",
    data: {
      labels: data.map((d) => d.name),
      datasets: [
        {
          data: data.map((d) => d.count),
          backgroundColor: data.map((d) => d.color),
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
};

const chartCanvas = ref(null);
const chartInstance = ref(null);

let isOpen = ref(false);
let modal = ref(null);
let overlay = ref(null);

const openModal = () => {
  isOpen.value = true;

  nextTick(() => {
    gsap.fromTo(overlay.value, { opacity: 0 }, { opacity: 1, duration: 0.3 });

    gsap.fromTo(
      modal.value,
      {
        y: -50,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      }
    );
  });
};

const closeModal = () => {
  const timeline = gsap.timeline();

  timeline.to(modal.value, {
    y: 50,
    opacity: 0,
    scale: 0.9,
    duration: 0.3,
    ease: "power2.in",
  });

  timeline.to(
    overlay.value,
    {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        isOpen.value = false;
      },
    },
    "-=0.1"
  );
};

const data = ref([]);
const dataArray = ref([]);

const router = useRouter();
const props = defineProps({
  value: { type: Number, default: 5 },
  duration: { type: Number, default: 2 },
  totalData: { type: Number, default: 0 },
});
const displayNumber = ref(0);
const formatNumber = computed(() => displayNumber.value.toLocaleString());

const animateNumber = () => {
  const targetValue = dataArray.value.length;

  gsap.to(displayNumber, {
    duration: 2, // เวลาที่ใช้ในการแอนิเมชัน
    value: targetValue,
    ease: "power1.out",
    onUpdate: () => {
      displayNumber.value = Math.round(gsap.getProperty(displayNumber, "value"));
    },
  });
};

const fetchData = async () => {
  const baseUrl = process.env.VUE_APP_API_URL + "/efilling/GetlistEfilling";
  // console.log(process.env.VUE_APP_API_URL);
  try {
    const response = await axios.post(baseUrl);
    if (response.data && Array.isArray(response.data.data)) {
      dataArray.value = response.data.data; // Set the data to the reactive variable
      // console.log(dataArray.value);
    } else {
      console.error(
        "API response is not an array or is missing the data array"
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    data.value = [];
  }
};

onMounted(async () => {
  await fetchData();
});

const searchQuery = ref("");

const filteredData = computed(() => {
  return scholarship.filter(data => {
    const query = searchQuery.value.toLowerCase();
    return (
      data.id.toLowerCase().includes(query) ||
      data.scholarship.toLowerCase().includes(query)
    )
  })
})

const scholarship = [
  {
    id: "PJ1",
    scholarship: "โครงการกำลังใจสร้างครูของชาติ",
    amount: "30,000",
  },
  {
    id: "PJ2",
    scholarship: "โครงการทุนคุณหมอของกำลังใจ",
    amount: "50,000",
  },
  {
    id: "PJ3",
    scholarship: "โครงการทุน Gumlungjai Scholarship",
    amount: "40,000",
  },
  {
    id: "PJ4",
    scholarship: "โครงการทุนกำลังใจให้พยาบาล",
    amount: "40,000",
  },
  {
    id: "PJ5",
    scholarship: "โครงการทุนนักจิตวิทยาสร้างกำลังใจ",
    amount: "40,000",
  },
];

const statusMap = {
  1: { label: "รอพิจารณา", color: "purple", icon: "Clock" },
  2: { label: "อนุมัติแล้ว", color: "green", icon: "CheckCircle" },
  3: { label: "รอแก้ไข", color: "yellow", icon: "RefreshCcw" },
};

const statusCounts = computed(() => {
  const counts = {};
  dataArray.value.forEach((item) => {
    const statusID = item.Efilling_statusID;
    if(!counts[statusID]) {
      counts[statusID] = 0;
    }
    counts[statusID]++;
  });
  return counts;
})

const handleGotoRegisterForm = () => {
  router.push("/registerform");
};

onMounted(() => {
  animateNumber(totalData);
});
watch(() => dataArray.value.length, animateNumber, { immediate: true });
watch(scholarshipData, () => { renderChart(); })

watch(timeFilter, () => { });
</script>

<style scoped>
.transition-colors {
  transition: background-color 0.2s ease;
}

.space-y-4 {
  max-height: calc(100vh - 300px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #e5e7eb transparent;
}

.space-y-4::-webkit-scrollbar {
  width: 6px;
}

.space-y-4::-webkit-scrollbar-track {
  background: transparent;
}

.space-y-4::-webkit-scrollbar-thumb {
  background-color: #e5e7eb;
  border-radius: 3px;
}

.bar-chart-container {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  padding: 1rem;
}

@keyframes dash-1 {
  from {
    stroke-dashoffset: 100;
  }

  to {
    stroke-dashoffset: 0;
  }
}

@keyframes dash-2 {
  from {
    stroke-dashoffset: 125;
  }

  to {
    stroke-dashoffset: 30;
  }
}

@keyframes dash-3 {
  from {
    stroke-dashoffset: 145;
  }

  to {
    stroke-dashoffset: 55;
  }
}

@keyframes dash-4 {
  from {
    stroke-dashoffset: 165;
  }

  to {
    stroke-dashoffset: 75;
  }
}

@keyframes dash-5 {
  from {
    stroke-dashoffset: 190;
  }

  to {
    stroke-dashoffset: 90;
  }
}

.animate-dash-1 {
  animation: dash-1 1.5s ease-in-out forwards;
}

.animate-dash-2 {
  animation: dash-2 1.5s ease-in-out forwards;
  animation-delay: 0.3s;
}

.animate-dash-3 {
  animation: dash-3 1.5s ease-in-out forwards;
  animation-delay: 0.6s;
}

.animate-dash-4 {
  animation: dash-4 1.5s ease-in-out forwards;
  animation-delay: 0.9s;
}

.animate-dash-5 {
  animation: dash-5 1.5s ease-in-out forwards;
  animation-delay: 1.2s;
}
</style>
