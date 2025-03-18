<template>
  <div class="education-bg">
    <!-- <div class="floating-item pencil"></div>
    <div class="floating-item book"></div>
    <div class="floating-item globe"></div>
    <div class="floating-item ruler"></div>
    <div class="floating-item graduation-cap"></div> -->

    <div
      class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-lg">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight mb-2">
            The <b class="text-blue-600">Gift</b> by
            <b class="text-blue-600">GUMLUNGJAI BACKOFFICE</b>
          </h1>
        </div>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div
          class="bg-white py-8 px-4 shadow-2xl sm:rounded-xl sm:px-10 border border-gray-100"
        >
          <div class="mb-8 text-center">
            <center>
              <img :src="GLJ_LOGO" class="h-auto mb-2" />
            </center>
            <h2 class="text-2xl font-semibold text-gray-900">เข้าสู่ระบบ</h2>
          </div>

          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label
                for="username"
                class="block text-sm font-medium text-gray-700"
              >
                ชื่อผู้ใช้
              </label>
              <div class="mt-1 relative">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                  </svg>
                </div>
                <input
                  id="username"
                  v-model="username"
                  type="text"
                  required
                  class="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="กรอกชื่อผู้ใช้"
                />
              </div>
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                รหัสผ่าน
              </label>
              <div class="mt-1 relative">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
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
                  v-model="password"
                  type="password"
                  required
                  class="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="กรุณากรอกรหัสผ่าน"
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <label
                  for="remember-me"
                  class="ml-3 cursor-pointer select-none text-sm font-medium text-gray-700 transition-colors duration-300 ease-in-out hover:text-blue-600"
                >
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                @click="handleLogin"
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted } from "vue";
import { useAuthStore } from "./../stores/authStore";
import { useFormStore } from "@/stores/formStore";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

import GLJ_LOGO from "@/assets/picture/GLJ_H.png";

const router = useRouter();
const isLoading = ref(false);
const username = ref("");
const password = ref("");
const errorMessage = ref("");
const showPassword = ref(false);

const formStore = useFormStore();

const handleLogin = async () => {
  errorMessage.value = "";
  isLoading.value = true;

  const authStore = useAuthStore();

  try {
    // Check data before sending
    console.log("Login Data:", {
      username: username.value,
      Password: password.value
    });

    const loginSuccess = await authStore.login(
      username.value,
      password.value,
      router
    );

    if (loginSuccess) {
      Swal.fire({
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ",
        text: "ยินดีต้อนรับ!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        formStore.setName(username.value);
        router.push('/Dashboard')
      })
    }
  } catch (error) {
    // console.error("Login failed:", error.response?.data || error.message);
    // errorMessage.value = "เกิดข้อผิดพลาด กรุณาลองใหม่";
    Swal.fire({
      icon: "error",
      title: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
      // text: "ไม่สามารถเข้าสู่ระบบได้ กรุณาลองใหม่ในภายหลัง",
    });
  } finally {
    isLoading.value = false;
  }
};

</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

img {
  width: 250px;
}
</style>
