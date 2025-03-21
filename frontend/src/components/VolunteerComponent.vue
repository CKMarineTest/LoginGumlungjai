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
                  <th class="px-4 py-3 text-left">จำนวนชั่วโมง</th>
                  <th class="px-4 py-3 text-center">รูปภาพกิจกรรม</th>
                </tr>
              </thead>
              <tbody>
                <TransitionGroup name="list" tag="tbody">
                  <tr
                    v-for="(activity, index) in activities"
                    :key="activity.E_ID"
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
                        v-model="activity.Activity_Name"
                        class="w-full px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
                        placeholder="ชื่อกิจกรรมอาสา"
                        readonly
                      />
                    </td>
                    <td class="px-4 py-3">
                      <input
                        type="text"
                        v-model="activity.hours"
                        class="w-full px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
                        placeholder="จำนวนชั่วโมง"
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
                </TransitionGroup>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const activities = ref([]);

const fetchData = async () => {
  const url = process.env.VUE_APP_API_URL + '/efilling/GetActivity';

  try {
    const { data } = await axios.post(url, { E_ID: 9 });
    activities.value = data;
  }catch (error) {
    console.error(error);
  }
}

const isVolunteerModalOpen = ref(false);
const selectedActivity = ref(null);

function openVolunteerModal(index) {
  selectedActivity.value = activities.value[index];
  isVolunteerModalOpen.value = true;
}

// function closeVolunteerModal() {
//   isVolunteerModalOpen.value = false;
// }

onMounted(() => {
  fetchData();
})
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}
</style>
