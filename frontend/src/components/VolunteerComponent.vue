<template>
  <div class="p-2 sm:p-4 md:p-8">
    <div class="w-full max-w-7xl mx-auto">
      <div class="overflow-hidden">
        <div class="p-4 sm:p-6 md:p-8 relative">
          <div class="absolute inset-0 opacity-20"></div>
          <h1
            class="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-center mb-2 sm:mb-4 text-shadow relative"
          >
            การเข้าร่วมกิจกรรมจิตอาสาต่างๆ
          </h1>
        </div>

        <div class="p-4 sm:p-6 md:p-8">
          <div class="overflow-x-auto shadow-md rounded-lg">
            <table class="w-full border-collapse bg-white">
              <thead>
                <tr class="bg-blue-500 text-white">
                  <th class="px-4 py-3 text-left">ลำดับ</th>
                  <th class="px-4 py-3 text-left">ชื่อกิจกรรมอาสา</th>
                  <th class="px-4 py-3 text-center">รูปภาพกิจกรรม</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in activeArray"
                  :key="item.A_ID"
                  class="border-b hover:bg-blue-50 transition-colors"
                >
                  <td class="px-4 py-3">
                    <div
                      class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm"
                    >
                      {{ index + 1 }}
                    </div>
                  </td>
                  <td class="px-4 py-3 w-1/2">
                    <input
                      type="text"
                      class="w-full px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
                      placeholder="ชื่อกิจกรรมอาสา"
                      v-model="item.Activity_Name"
                      readonly
                    />
                  </td>
                  <td class="px-4 py-3 text-center">
                    <button
                      @click="openVolunteerModal(index)"
                      class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <span class="text-sm font-medium">รูปภาพกิจกรรม</span>
                    </button>
                  </td>
                </tr>

                <transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
                >
                  <div
                    v-if="isVolunteerModalOpen"
                    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                  >
                    <div
                      class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[26rem] max-w-[90vw] p-6 relative transform transition-all duration-300 ease-in-out"
                    >
                      <button
                        @click="closeVolunteerModal"
                        class="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-7 w-7 group-hover:rotate-90 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>

                      <h1
                        class="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center tracking-wide"
                      >
                        TCAS
                      </h1>

                      <div class="flex justify-center" v-for="(item) in activeArray"
                      :key="item.A_ID">
                        <button
                          @click="handleDownLoad(item.A_ImgPath1)"
                          :disabled="isDownloading"
                          class="group flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                        >
                          <Download
                            class="w-6 h-6 transition-transform group-hover:rotate-12"
                          />
                          <span class="text-base font-semibold">
                            {{
                              isDownloading ? "กำลังดาวน์โหลด..." : "ดาวน์โหลด"
                            }}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </transition>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from "vue";
import { Download } from "lucide-vue-next";
import axios from "axios";
import Swal from "sweetalert2";

const isVolunteerModalOpen = ref(false);

function openVolunteerModal() {
  isVolunteerModalOpen.value = true;
}

function closeVolunteerModal() {
  isVolunteerModalOpen.value = false;
}

const props = defineProps({
  idcard: String,
});

const activeArray = ref([]);

const fetchData = async () => {
  const data = new URLSearchParams();
  data.append("card_id", props.idcard);

  const url = process.env.VUE_APP_API_URL + "/efilling/GetEfilling";

  axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      activeArray.value = response.data.data.active;
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: error,
      });
      return false;
    });
};

const handleDownLoad = (filePath) => {
  try {
    const link = document.createElement("a");
    link.href = "https://web.mrgshrimp.com/thegiftapi/" + filePath;
    link.setAttribute("download", "transcript.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}
</style>
