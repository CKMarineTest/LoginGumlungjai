<template>
  <aside class="w-16 z-10 h-screen fixed left-0 bg-gray-900">
    <SidebarComponent />
  </aside>

  <div class="ml-16 flex-1 overflow-hidden bg-blue-100">
    <br />
    <br />
    <main class="p-6">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 cursor-pointer overflow-hidden"
      >
        <div
          class="bg-white rounded-xl shadow-sm p-6 flex items-center transform transition hover:scale-105 duration-300"
          @click="handleGotoRegisterForm"
        >
          <div class="rounded-full bg-blue-100 p-3 mr-4">
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
            <p class="text-gray-500 text-sm">ผู้สมัครทั้งหมด</p>
            <h2 class="text-2xl font-bold text-gray-800">{{ formatNumber }}</h2>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-sm p-6 flex items-center transform transition hover:scale-105 duration-300"
        >
          <div class="rounded-full bg-green-100 p-3 mr-4">
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div>
            <p class="text-gray-500 text-sm"></p>
            <h2 class="text-2xl font-bold text-gray-800"></h2>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-sm p-6 flex items-center transform transition hover:scale-105 duration-300"
        >
          <div class="rounded-full bg-purple-100 p-3 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
              />
            </svg>
          </div>
          <div>
            <p class="text-gray-500 text-sm"></p>
            <h2 class="text-2xl font-bold text-gray-800"></h2>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-sm p-6 flex items-center transform transition hover:scale-105 duration-300"
        >
          <div class="rounded-full bg-yellow-100 p-3 mr-4">
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
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
          </div>
          <div>
            <p class="text-gray-500 text-sm"></p>
            <h2 class="text-2xl font-bold text-gray-800"></h2>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div class="bg-white rounded-lg shadow p-6 lg:col-span-2">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-800">สถิติการสมัคร</h3>
            <div
              class="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg shadow-sm"
            >
              <button
                @click="setTimeFilter('today')"
                :class="[
                  'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 shadow-sm',
                  timeFilter === 'today'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100',
                ]"
              >
                <span class="flex items-center">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  วันนี้
                </span>
              </button>
              <button
                @click="setTimeFilter('week')"
                :class="[
                  'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 shadow-sm',
                  timeFilter === 'week'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100',
                ]"
              >
                <span class="flex items-center">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  สัปดาห์นี้
                </span>
              </button>
              <button
                @click="setTimeFilter('month')"
                :class="[
                  'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 shadow-sm',
                  timeFilter === 'month'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100',
                ]"
              >
                <span class="flex items-center">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  เดือนนี้
                </span>
              </button>
            </div>
          </div>
          <div class="h-64">
            <Bar
              :data="chartData"
              :options="chartOptions"
              class="w-full h-full"
            />
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">ประเภททุน</h3>
          <div class="h-64 flex items-center justify-center">
            <div class="relative h-48 w-48">
              <div
                class="absolute inset-0 rounded-full border-8 border-blue-500"
                style="clip-path: polygon(50% 50%, 100% 50%, 100% 0, 50% 0)"
              ></div>
              <div
                class="absolute inset-0 rounded-full border-8 border-green-500"
                style="clip-path: polygon(50% 50%, 50% 0, 0 0, 0 50%)"
              ></div>
              <div
                class="absolute inset-0 rounded-full border-8 border-purple-500"
                style="clip-path: polygon(50% 50%, 0 50%, 0 100%, 30% 100%)"
              ></div>
              <div
                class="absolute inset-0 rounded-full border-8 border-yellow-500"
                style="
                  clip-path: polygon(50% 50%, 30% 100%, 100% 100%, 100% 75%);
                "
              ></div>
              <div
                class="absolute inset-0 rounded-full border-8 border-red-500"
                style="clip-path: polygon(50% 50%, 100% 75%, 100% 50%)"
              ></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="bg-white rounded-full h-32 w-32"></div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-4">
            <div class="flex items-center">
              <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span class="text-sm text-gray-600"
                >ทุนกำลังใจสร้างครูของชาติ (30%)</span
              >
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span class="text-sm text-gray-600"
                >ทุนคุณหมอของกำลังใจ (25%)</span
              >
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span class="text-sm text-gray-600"
                >ทุน Gumlungjai Scholar (20%)</span
              >
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span class="text-sm text-gray-600"
                >ทุนกำลังใจให้พยาบาล (15%)</span
              >
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span class="text-sm text-gray-600"
                >ทุนนักจิตวิทยาสร้างกำลังใจ (10%)</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="p-6 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800"></h3>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                ></th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                ></th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                ></th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                ></th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                ></th>
                <th
                  class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                ></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div
                      class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3"
                    >
                      <span class="text-xs text-gray-600"></span>
                    </div>
                    <div class="text-sm font-medium text-gray-900"></div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  ></span>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                ></td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a href="#" class="text-blue-600 hover:text-blue-900"></a>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div
                      class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3"
                    >
                      <span class="text-xs text-gray-600"></span>
                    </div>
                    <div class="text-sm font-medium text-gray-900"></div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"
                  ></span>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                ></td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a href="#" class="text-blue-600 hover:text-blue-900"></a>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div
                      class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3"
                    >
                      <span class="text-xs text-gray-600"></span>
                    </div>
                    <div class="text-sm font-medium text-gray-900"></div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800"
                  ></span>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                ></td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a href="#" class="text-blue-600 hover:text-blue-900"></a>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div
                      class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3"
                    >
                      <span class="text-xs text-gray-600"></span>
                    </div>
                    <div class="text-sm font-medium text-gray-900"></div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
                  ></span>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                ></td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a href="#" class="text-blue-600 hover:text-blue-900"></a>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div
                      class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3"
                    >
                      <span class="text-xs text-gray-600"></span>
                    </div>
                    <div class="text-sm font-medium text-gray-900"></div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  ></span>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                ></td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a href="#" class="text-blue-600 hover:text-blue-900"></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-500"></div>
            <div class="flex space-x-2">
              <button
                class="px-3 py-1 text-sm rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                disabled
              >
                ก่อนหน้า
              </button>
              <button
                class="px-3 py-1 text-sm rounded border border-gray-300 bg-white text-blue-700 hover:bg-blue-50"
              >
                1
              </button>
              <button
                class="px-3 py-1 text-sm rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                2
              </button>
              <button
                class="px-3 py-1 text-sm rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                3
              </button>
              <button
                class="px-3 py-1 text-sm rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                4
              </button>
              <button
                class="px-3 py-1 text-sm rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                5
              </button>
              <button
                class="px-3 py-1 text-sm rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                ถัดไป
              </button>
            </div>
          </div>
        </div>
      </div> -->
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps, computed } from "vue";
import SidebarComponent from "./Menu/SidebarComponent.vue";
import gsap from "gsap";
import { useRouter } from "vue-router";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartDatasets = {
  today: {
    labels: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
    data: [18, 25, 45, 30, 38, 28],
  },
  week: {
    labels: ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"],
    data: [40, 35, 60, 75, 65, 25, 30],
  },
  month: {
    labels: ["สัปดาห์ 1", "สัปดาห์ 2", "สัปดาห์ 3", "สัปดาห์ 4"],
    data: [150, 180, 210, 190],
  },
};

const totalDataWeek = chartDatasets.week.data.reduce(
  (sum, value) => sum + value,
  0
);
const totalDataDay = chartDatasets.today.data.reduce(
  (sum, value) => sum + value,
  0
);
const totalDataMonth = chartDatasets.month.data.reduce(
  (sum, value) => sum + value,
  0
);

const totalData = totalDataWeek + totalDataDay + totalDataMonth;

const timeFilter = ref("week");

const chartData = computed(() => ({
  labels: chartDatasets[timeFilter.value].labels,
  datasets: [
    {
      label:
        timeFilter.value === "today"
          ? "จำนวนผู้สมัครวันนี้"
          : timeFilter.value === "week"
          ? "จำนวนผู้สมัครสัปดาห์นี้"
          : "จำนวนผู้สมัครเดือนนี้",
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
      labels: {
        font: {
          family: "Sarabun, sans-serif",
        },
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleFont: {
        family: "Sarabun, sans-serif",
      },
      bodyFont: {
        family: "Sarabun, sans-serif",
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
        borderDash: [5, 5],
      },
      ticks: {
        font: {
          family: "Sarabun, sans-serif",
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: "Sarabun, sans-serif",
        },
      },
    },
  },
  animation: {
    duration: 500,
  },
});

const updateChartData = () => {
  const selectedData = chartDatasets[timeFilter.value];
  chartData.value.labels = [...selectedData.labels];
  chartData.value.datasets[0].data = [...selectedData.data];

  if (timeFilter.value === "today") {
    chartData.value.datasets[0].label = "จำนวนผู้สมัครวันนี้";
  } else if (timeFilter.value === "week") {
    chartData.value.datasets[0].label = "จำนวนผู้สมัครสัปดาห์นี้";
  } else if (timeFilter.value === "month") {
    chartData.value.datasets[0].label = "จำนวนผู้สมัครเดือนนี้";
  }
};

const setTimeFilter = (filter) => {
  timeFilter.value = filter;
  updateChartData();
}

const router = useRouter();

const props = defineProps({
  value: {
    type: Number,
    default: 5,
    required: false,
  },
  duration: {
    type: Number,
    default: 2,
  },
  totalData: {
    type: Number,
    default: 0,
  },
});

const displayNumber = ref(0);

const animateNumber = (targetValue) => {
  gsap.to(displayNumber, {
    duration: props.duration,
    value: targetValue,
    ease: "power1.out",
    onUpdate: () => {
      displayNumber.value = Math.round(
        gsap.getProperty(displayNumber, "value")
      );
    },
  });
};

const formatNumber = computed(() => displayNumber.value.toLocaleString());

const handleGotoRegisterForm = () => {
  router.push("/registerform");
};

onMounted(() => {
  updateChartData();
  animateNumber(totalData);
});

watch(
  () => props.totalData,
  (newValue) => {
    animateNumber(newValue);
  },
  { immediate: true }
)

watch(timeFilter, () => {
  updateChartData();
});
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
</style>