<template>
  <div class="p-2 sm:p-4 md:p-6 lg:p-8">
    <div class="w-full max-w-6xl mx-auto relative">
      <div class="absolute -top-6 right-8 transform rotate-6 hidden md:block">
        <div
          class="w-20 h-24 bg-blue-100 rounded shadow-md flex items-center justify-center border-2 border-blue-200 relative"
        >
          <div class="absolute inset-2 bg-white rounded"></div>
          <div class="absolute inset-4 flex flex-col space-y-2">
            <div class="h-0.5 bg-blue-200 w-full"></div>
            <div class="h-0.5 bg-blue-200 w-full"></div>
            <div class="h-0.5 bg-blue-200 w-full"></div>
          </div>
        </div>
      </div>

      <div class="overflow-hidden">
        <div class="p-4 sm:p-6 md:p-8 relative">
          <div class=""></div>

          <h1
            class="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-center mb-2 sm:mb-4 text-shadow relative"
          >
            ให้ผู้ขอรับทุนแสดงความคิดเห็น "
            ทำไมข้าพเจ้าควรได้รับทุนการศึกษาโครงการนี้ "
          </h1>
          <br />
          <div
            class="space-y-2 bg-blue-800/30 p-4 rounded-xl text-sm sm:text-base border border-white/20"
            v-for="(scholarship) in dataArray" :key="scholarship.idcard"
          >
            <p class="flex items-center space-x-2">
              <span
                >{{ scholarship.Project_Name }}</span
              >
            </p>
          </div>
        </div>

        <div class="p-4 sm:p-6 md:p-8 relative">
          <div class="group">
            <div
              class="flex flex-col items-center justify-center space-y-4 sm:space-y-6 h-full"
            >
              <div class="w-full max-w-full mx-auto">
                <div
                  class="relative rounded-2xl p-[3px] transition-all duration-500"
                  :class="{
                    'shadow-lg ring-2 ring-blue-100': isFocused,
                    'shadow-md': !isFocused,
                  }"
                >
                  <div
                    class="relative rounded-2xl bg-white backdrop-blur-sm p-8"
                  >
                    <div
                      class="absolute inset-0 flex flex-col space-y-8 pointer-events-none opacity-10"
                    >
                      <div
                        v-for="i in 8"
                        :key="i"
                        class="w-full h-px bg-blue-400"
                      ></div>
                    </div>

                    <div class="absolute top-2 right-2 text-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M12 3C3 3 3 12 3 12H12V3Z" />
                        <path d="M12 12H21C21 12 21 3 12 3V12Z" />
                        <path d="M12 21C21 21 21 12 21 12H12V21Z" />
                        <path d="M12 12H3C3 12 3 21 12 21V12Z" />
                      </svg>
                    </div>

                    <div v-for="(item) in dataArray" :key="item.idcard">
                      <textarea
                        v-if="dataArray.length"
                        v-model="item.reasoncomment"
                        class="w-full min-h-[150px] border-none outline-none resize-none text-lg bg-transparent relative z-10"
                        placeholder="..."
                        @focus="isFocused = true"
                        @blur="isFocused = false"
                        readonly
                      ></textarea>
                      <div v-else>
                        <p>กำลังดึงข้อมูล...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import axios from "axios";
import Swal from 'sweetalert2';

const props = defineProps({
  idcard: String,
});

// const data = ref([]);
const dataArray = ref([]);
const isFocused = ref(false);

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
      if (response.data && Array.isArray(response.data.data)) {
        dataArray.value = response.data.data; // Set the data to the reactive variable
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

onMounted(() => {
  if (props.idcard) {
    fetchData();
  } else {
    console.error("No idcard provided");
  }
});
</script>
