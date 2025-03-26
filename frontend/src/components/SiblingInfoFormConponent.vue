<template>
  <div class="p-4 sm:p-6">
    <div class="overflow-hidden border border-gray-200 rounded-lg shadow mb-6">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-blue-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
            >
              #
            </th>
            <th
              v-for="field in rowOneFields"
              :key="field.name"
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
            >
              {{ field.label }}
            </th>
            <th
              v-for="field in rowTwoFields"
              :key="field.name"
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
            >
              {{ field.label }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="(sibling, index) in siblings"
            :key="index"
            class="hover:bg-blue-50 transition-colors duration-150"
          >
            <td class="px-6 py-4 whitespace-nowrap">
              <div
                class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium"
              >
                {{ index + 1 }}
              </div>
            </td>
            <td
              v-for="field in rowOneFields"
              :key="field.name"
              class="px-6 py-4 whitespace-nowrap"
            >
              <input
                v-model="sibling[field.name]"
                :type="field.type"
                :placeholder="field.placeholder"
                class="w-full px-4 py-2 text-gray-900 border-2 border-blue-200 rounded-lg placeholder:text-gray-400 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 ease-in-out"
                readonly
              />
            </td>
            <td
              v-for="field in rowTwoFields"
              :key="field.name"
              class="px-6 py-4 whitespace-nowrap"
            >
              <input
                v-model="sibling[field.name]"
                :type="field.type"
                :placeholder="field.placeholder"
                class="w-full px-4 py-2 text-gray-900 border-2 border-blue-200 rounded-lg placeholder:text-gray-400 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 ease-in-out"
                readonly
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, defineProps, onMounted } from "vue";
import axios from 'axios';
import Swal from 'sweetalert2';

const siblings = ref([
  {
    name: "",
    age: "",
    education: "",
    occupation: "",
    income: "",
  },
]);

const rowOneFields = [
  { name: "name", label: "ชื่อ", type: "text", placeholder: "ชื่อ" },
  {
    name: "age",
    label: "อายุ",
    type: "number",
    maxLength: 2,
    placeholder: "อายุ",
  },
  { name: "occupation", label: "อาชีพ", type: "text", placeholder: "อาชีพ" },
];

const rowTwoFields = [
  {
    name: "education",
    label: "การศึกษา",
    type: "text",
    placeholder: "การศึกษา",
  },
  { name: "income", label: "รายได้", type: "number", placeholder: "รายได้" },
  { name: "status", label: "สถานภาพ", type: "text", placeholder: "สถานภาพ" },
];

const props = defineProps({
  idcard: String,
});

const siblingArray = ref([]);

const fetchData = async () => {
  const data = new URLSearchParams();
  data.append("card_id", idcard);

  const url = process.env.VUE_APP_API_URL + "/efilling/GetEfilling";

  axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      siblingArray.value = response.data.data.siblings;
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
  fetchData();
})
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  appearance: textfield;
  -moz-appearance: textfield;
}
</style>
