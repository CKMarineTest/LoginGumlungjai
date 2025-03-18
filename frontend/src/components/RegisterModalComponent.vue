<template>
  <div
    class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white flex flex-col items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all cursor-pointer"
    @click="isModalOpen = true"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-16 w-16 mb-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
    <h3 class="text-xl font-bold mb-2">เพิ่มบัญชีผู้ใช้</h3>
    <p class="text-base text-blue-100 text-center">
      ดูรายงานสรุปข้อมูลทุนทั้งหมด
    </p>
  </div>

  <!-- Modal -->
  <Teleport to="body">
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center z-50 p-4"
    >
      <!-- Backdrop with blur -->
      <div
        class="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity"
        @click="isModalOpen = false"
      ></div>

      <!-- Modal Content -->
      <div
        class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl z-10 transform transition-all duration-300"
        :class="{
          'opacity-100 scale-100': isModalOpen,
          'opacity-0 scale-95': !isModalOpen,
        }"
      >
        <!-- Header with gradient background -->
        <div
          class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl px-8 py-6 flex items-center justify-between text-white"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            <h3 class="text-2xl font-bold">เพิ่มบัญชีผู้ใช้</h3>
          </div>
          <button
            @click="isModalOpen = false"
            class="text-white hover:text-gray-200 focus:outline-none transition-colors duration-200"
          >
            <svg
              class="h-8 w-8"
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
        </div>

        <!-- Body with larger inputs -->
        <div class="px-8 py-6">
          <form @submit.prevent="submitForm">
            <div class="space-y-6">
              <!-- Username Input -->
              <div>
                <label
                  for="username"
                  class="block text-lg font-medium text-gray-700 mb-2"
                >
                  ชื่อผู้ใช้
                </label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-gray-400"
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
                  <input
                    id="username"
                    v-model="formData.username"
                    type="text"
                    required
                    class="pl-12 pr-4 py-4 w-full text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200"
                    placeholder="กรุณากรอกชื่อผู้ใช้"
                  />
                </div>
              </div>

              <!-- Password Input -->
              <div>
                <label
                  for="password"
                  class="block text-lg font-medium text-gray-700 mb-2"
                >
                  รหัสผ่าน
                </label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    v-model="formData.password"
                    :type="showPassword ? 'text' : 'password'"
                    required
                    class="pl-12 pr-4 py-4 w-full text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200"
                    placeholder="กรุณากรอกรหัสผ่าน"
                  />
                  <div
                    class="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <button
                      type="button"
                      @click="showPassword = !showPassword"
                      class="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      <svg
                        v-if="showPassword"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                      <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- <div>
                <label
                  for="role"
                  class="block text-lg font-medium text-gray-700 mb-2"
                >
                  สิทธิ์การใช้งาน
                </label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <select
                    id="role"
                    v-model="formData.role"
                    class="pl-12 pr-4 py-4 w-full appearance-none text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200"
                  >
                    <option value="admin">ผู้ดูแลระบบ</option>
                    <option value="staff">เจ้าหน้าที่</option>
                    appearance-none
                    <option value="user">ผู้ใช้ทั่วไป</option>
                  </select>
                  <div
                    class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div> -->
            </div>
          </form>
        </div>

        <div class="border-t px-8 py-6 flex justify-end space-x-4">
          <button
            @click="isModalOpen = false"
            class="px-6 py-3 text-lg bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
          >
            ยกเลิก
          </button>
          <button
            @click="submitForm"
            class="px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            บันทึก
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import Swal from "sweetalert2";

const isModalOpen = ref(false);

const showPassword = ref(false);

const formData = ref({
  username: "",
  password: "",
  role: 1,
});

const submitForm = async () => {
  if (!formData.value.username) {
    alert("Enter Username");
    return;
  }

  if (!formData.value.password) {
    alert("Enter Password");
    return;
  }

  try {
    const url = process.env.VUE_APP_API_URL + "/api/createUser";

    const response = await axios.post(
      url,
      {
        username: formData.value.username,
        Password: formData.value.password,
        Sr_id: formData.value.role,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "เพิ่มสมาชิกสำเร็จ",
        showCloseButton: false,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        isModalOpen.value = false;
      })
    }
  } catch (error) {
    // Handle errors if the API request fails
    if (error.response && error.response.data) {
      console.log(error.response);
      console.log(error.response.data);
      alert(error.response.data.message || "เกิดข้อผิดพลาด"); // Show error message
    } else {
      alert("เกิดข้อผิดพลาดขณะเชื่อมต่อ"); // Connection error message
    }
  }
};
</script>
