<template>
  <div class="min-h-screen w-full bg-blue-100 flex">
    <aside class="w-20 fixed left-0 top-0 bottom-0 bg-gray-900 shadow-lg z-10">
      <SidebarComponent />
    </aside>

    <main class="flex-1 ml-20 p-4 md:p-6 lg:p-8">
      <br />
      <br />
      <div class="w-full max-w-full mx-auto">
        <div class="flex justify-end">
          <button
            class="bg-green-500 flex px-4 mb-3 p-2 w-40 rounded-lg text-white hover:bg-green-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-send"
            >
              <path
                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
              />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
            &nbsp; ส่งลงคะแนน
          </button>
        </div>
      </div>

      <div class="bg-white rounded mb-4 p-4 shadow-lg">
        <select
          name=""
          id=""
          class="border border-2 border-blue-600 p-2 rounded-lg px-2 shadow-md"
        >
          <option selected disabled>เลือกทุนการศึกษา</option>
          <option
            v-for="(scholar, index) in scholarship"
            :key="index"
            :value="scholar.id"
          >
            {{ scholar.name }}
          </option>
        </select>
      </div>
    </main>
  </div>
</template>

<script setup>
/* eslint-disable */
import SidebarComponent from "./Menu/SidebarComponent.vue";

const scholarship = [
  {
    id: "SL01",
    name: "โครงการกำลังใจสร้างครูของชาติ",
  },
  {
    id: "SL02",
    name: "โครงการทุนคุณหมอของกำลังใจ",
  },
  {
    id: "SL03",
    name: "โครงการทุน Gumlungjai Scholarship",
  },
  {
    id: "SL04",
    name: "โครงการทุนกำลังใจให้พยาบาล",
  },
  {
    id: "SL05",
    name: "โครงการทุนนักจิตวิทยาสร้างกำลังใจ",
  },
];
</script>
