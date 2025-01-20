<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
    <div class="hidden sm:block absolute top-10 left-[5%] transform -rotate-12 opacity-20">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="w-24 h-24 lg:w-32 lg:h-32">
        <rect x="20" y="80" width="80" height="20" fill="#3B82F6" rx="2" />
        <rect x="25" y="60" width="70" height="20" fill="#60A5FA" rx="2" />
        <rect x="30" y="40" width="60" height="20" fill="#93C5FD" rx="2" />
      </svg>
    </div>

    <div class="hidden sm:block absolute bottom-10 right-[5%] transform rotate-12 opacity-20">
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="w-20 h-20 lg:w-28 lg:h-28">
        <rect x="20" y="10" width="60" height="10" fill="#60A5FA" transform="rotate(45 50 50)" />
        <path d="M75 25 L85 35 L80 40 L70 30 Z" fill="#3B82F6" />
        <path d="M25 75 L20 80 L15 65 L30 70 Z" fill="#93C5FD" />
      </svg>
    </div>

    <div class="hidden md:block absolute top-1/4 right-1/4 transform rotate-45 opacity-20">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="w-16 h-16 lg:w-24 lg:h-24">
        <path d="M40 10 L70 25 L40 40 L10 25 Z" fill="#3B82F6" />
        <rect x="38" y="40" width="4" height="30" fill="#60A5FA" />
        <path d="M30 65 L50 65 L40 75 Z" fill="#93C5FD" />
      </svg>
    </div>

    <div class="relative w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform 
                    -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>

      <div class="relative bg-white shadow-lg rounded-3xl">
        <div class="px-6 py-8 sm:px-10 md:px-12 lg:px-16">
          <div class="max-w-md mx-auto">
            <h1 class="text-2xl sm:text-3xl font-extrabold text-blue-600 mb-8 text-center">
              เข้าสู่ระบบ
            </h1>

            <div class="space-y-6">
              <div class="relative">
                <input v-model="username" type="text" autocomplete="off" class="peer w-full h-10 text-base sm:text-lg border-b-2 border-gray-300 text-gray-900 
                           placeholder-transparent focus:outline-none focus:border-blue-600
                           bg-transparent transition-colors duration-300" placeholder="ชื่อผู้ใช้" />
                <label class="absolute left-0 -top-3.5 text-gray-600 text-sm sm:text-base
                           peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 
                           peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 
                           peer-focus:text-gray-600 peer-focus:text-sm">
                  ชื่อผู้ใช้
                </label>
              </div>

              <div class="relative">
                <input v-model="password" type="password" autocomplete="off" class="peer w-full h-10 text-base sm:text-lg border-b-2 border-gray-300 text-gray-900 
                           placeholder-transparent focus:outline-none focus:border-blue-600
                           bg-transparent transition-colors duration-300" placeholder="รหัสผ่าน" />
                <label class="absolute left-0 -top-3.5 text-gray-600 text-sm sm:text-base
                           peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 
                           peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 
                           peer-focus:text-gray-600 peer-focus:text-sm">
                  รหัสผ่าน
                </label>
              </div>

              <button @click="handleLogin" class="w-full bg-blue-600 text-white text-base sm:text-lg rounded-lg 
                         px-4 py-2.5 sm:px-6 sm:py-3 hover:bg-blue-700 
                         transition-all duration-300 transform hover:scale-[1.02]
                         active:scale-[0.98] focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:ring-offset-2">
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const username = ref('');
const password = ref('');
const validCredentails = {
  username: 'admin',
  password: 'admin'
}

const LoginFailed = () => {
  toast("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง", {
    "theme": "light",
    "type": "error",
    "dangerouslyHTMLString": true,
    "position": "top-right",
    "closeButton": false
  });
};

const validDateLoginNullValue = () => {
  toast("กรอกชื่อผู้ใช้หรือรหัสผ่าน", {
    "theme": "light",
    "type": "info",
    "dangerouslyHTMLString": true,
    "position": "top-right",
    "closeButton": false
  });
};

const handleLogin = () => {
  if (username.value === validCredentails.username && password.value === validCredentails.password) {
    router.push('/dashboard');
  } else if (username.value === '' && password.value === '') {
    validDateLoginNullValue();
  } else {
    LoginFailed();
  }
};

</script>