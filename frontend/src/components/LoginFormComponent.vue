<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-lg">
      <div class="text-center animate-fadeIn">
        <h1 class="text-4xl font-bold text-gray-900 tracking-tight mb-2">
          The <span class="text-blue-600 font-extrabold bg-blue-50 px-2 py-1 rounded-lg">Gift</span> by
          <span class="text-blue-600">GUMLUNGJAI</span>
        </h1>
      </div>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md animate-slideUp">
      <div
        class="bg-white py-8 px-6 shadow-2xl sm:rounded-2xl sm:px-10 border border-gray-100 relative overflow-hidden">
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full opacity-30"></div>
        <div class="absolute -left-20 -bottom-20 w-56 h-56 bg-indigo-50 rounded-full opacity-30"></div>

        <div class="relative">
          <div class="mb-8 text-center">
            <div class="flex justify-center mb-6 transform hover:scale-105 transition duration-300">
              <img :src="GLJ_LOGO" class="h-auto w-64 drop-shadow-md" alt="GUMLUNGJAI Logo" />
            </div>
            <h2 class="text-2xl font-semibold text-gray-900 relative">
              <span class="relative inline-block">
                เข้าสู่ระบบ
                <span
                  class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </h2>
          </div>

          <form class="space-y-6" @submit.prevent="handleLogin">
            <div class="space-y-1">
              <label for="username" class="block text-sm font-medium text-gray-700">
                ชื่อผู้ใช้
              </label>
              <div class="mt-1 relative group">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <input id="username" v-model="username" type="text"
                  class="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="กรอกชื่อผู้ใช้"
                  :class="{ 'border-red-300 focus:ring-red-500 focus:border-red-500': formError }" />
              </div>
            </div>

            <div class="space-y-1">
              <label for="password" class="block text-sm font-medium text-gray-700">
                รหัสผ่าน
              </label>
              <div class="mt-1 relative group">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'"
                  class="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="กรุณากรอกรหัสผ่าน"
                  :class="{ 'border-red-300 focus:ring-red-500 focus:border-red-500': formError }" />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  @click="showPassword = !showPassword">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path v-if="showPassword" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path v-if="!showPassword" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <button type="submit"
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 transform hover:scale-[1.02]"
                :class="{ 'opacity-75 cursor-not-allowed': isLoading }" :disabled="isLoading">
                <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                <span>{{ isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ' }}</span>
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
import { useToastService } from "@/lib/toastService";

import GLJ_LOGO from "@/assets/picture/GLJ_H.png";
import Swal from "sweetalert2";

const { showSuccess, showError, showInfo } = useToastService();

const router = useRouter();
const isLoading = ref(false);
const username = ref("");
const password = ref("");
const errorMessage = ref("");
const showPassword = ref(false);
const rememberMe = ref(false);
const formError = ref(false);

const formStore = useFormStore();

const showSuccessToast = (message) => {
  showSuccess(message);
};

const showErrorToast = (message) => {
  showError(message);
};

const showInfoToast = (message) => {
  showInfo(message);
};

const handleLogin = async () => {
  errorMessage.value = "";
  formError.value = false;
  isLoading.value = true;

  if (!username.value || !password.value) {
    showInfoToast("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
    isLoading.value = false;
    return
  }


  const authStore = useAuthStore();

  try {

    // เรียกใช้ login ฟังก์ชันจาก authStore
    const loginSuccess = await authStore.login(
      username.value,
      password.value
    );

    if (loginSuccess) {
      showSuccessToast("เข้าสู่ระบบสำเร็จ");
      router.push('/Dashboard')
    }
  } catch (error) {
    formError.value = true;
    showErrorToast(error.message || "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  } finally {
    isLoading.value = false;
  }
};


onMounted(() => {
  document.getElementById('username').focus();
});
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

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}

.animate-slideUp {
  animation: slideUp 0.7s ease-out;
}

img {
  transition: all 0.3s ease;
}

img:hover {
  filter: drop-shadow(0 4px 6px rgba(59, 130, 246, 0.3));
}

/* Custom SweetAlert animations */
.animated {
  animation-duration: 0.5s;
}

.faster {
  animation-duration: 0.3s;
}

.fadeInUp {
  animation-name: fadeInUp;
}

.shake {
  animation-name: shake;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes shake {

  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-5px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(5px, 0, 0);
  }
}
</style>