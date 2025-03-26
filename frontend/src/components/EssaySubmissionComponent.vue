<template>
  <div class="p-2 sm:p-4 md:p-6 lg:p-8 overflow-hidden relative">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-[30%] right-[8%] w-20 h-20 opacity-10 transform rotate-12 animate-float"
      >
        <svg viewBox="0 0 100 100" class="w-full h-full text-blue-700">
          <rect
            x="10"
            y="20"
            width="80"
            height="60"
            rx="4"
            fill="currentColor"
          />
          <rect x="15" y="25" width="70" height="50" fill="white" />
          <path
            d="M20 35 H70 M20 45 H70 M20 55 H50"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      </div>

      <div
        class="absolute top-[60%] right-[20%] opacity-10 text-4xl text-blue-600 animate-float-slow"
      >
        ∑ π ∞
      </div>
    </div>

    <div class="overflow-hidden">
      <div class="">
        <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
          เอกสารเรียงความ
        </h1>
      </div>

      <div class="relative my-6" v-for="item in dataArray" :key="item.idcard">
        <h4
          class="inline-block text-xl font-semibold bg-blue-100 px-6 py-4 rounded-lg shadow-lg border-l-4 border-blue-600 text-blue-900"
        >
          <span class="flex items-center">
            <p class="text-md">หัวข้อเรียงความ</p>
            &nbsp; <b>{{ item.topic }}</b>
          </span>
        </h4>
        <div
          class="absolute h-1.5 bg-gradient-to-r from-blue-600 to-transparent w-full bottom-0 left-0"
        ></div>
      </div>

      <div class="p-4 sm:p-6 md:p-8">
        <button
          @click="handleDownLoad(essayPath)"
          class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg
            v-if="!selectedFile"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m0-16l-4 4m4-4l4 4"
            />
          </svg>
          <svg
            v-else
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="text-sm font-medium"> ไฟล์เรียงความ </span>
        </button>
      </div>

    </div>
  </div>




  
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted, defineProps } from "vue";
import axios from "axios";
import { Download, FileText, ZoomIn, ZoomOut } from "lucide-vue-next";

const essayPath = ref();

const props = defineProps({
  idcard: String,
});

const imageUrl = "https://web.mrgshrimp.com/thegiftapi/"

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
      if (response.data && Array.isArray(response.data.data.main)) {
        response.data.data.main[0].EssayPath = response.data.data.main[0].EssayPath.replace(/\\/g, '/');
        essayPath.value = imageUrl + response.data.data.main[0].EssayPath;
      } else {
        console.error(
          "API response is not an array or is missing the data array"
        );
      }
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
    // Check if filePath is valid
    if (!filePath) {
      throw new Error("File path is required");
    }
    
    // Make sure the imageUrl is defined and construct a valid URL
    const downloadUrl = filePath;

    // Check if the URL is valid
    if (!downloadUrl) {
      throw new Error("Invalid file URL");
    }

    // Open the URL in a new tab
    window.open(downloadUrl, '_blank');
  } catch (error) {
    console.error("Error opening file in new tab:", error.message);
    // Optionally alert the user or show a message in the UI
    alert(`Failed to open file: ${error.message}`);
  }
};


onMounted(() => {
  fetchData();
});

const isEssaySubmissionModalOpen = ref(false);
const openEssaySubmissionModal = () => {
  isEssaySubmissionModalOpen.value = true;
};
const closeEssaySubmissionModal = () => {
  isEssaySubmissionModalOpen.value = false;
};
</script>
