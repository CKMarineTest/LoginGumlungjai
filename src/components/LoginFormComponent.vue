<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
    <div ref="decorLeft" class="hidden sm:block absolute top-10 left-[5%] transform -rotate-12 opacity-0">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="w-24 h-24 lg:w-32 lg:h-32">
        <rect x="20" y="80" width="80" height="20" fill="#3B82F6" rx="2" />
        <rect x="25" y="60" width="70" height="20" fill="#60A5FA" rx="2" />
        <rect x="30" y="40" width="60" height="20" fill="#93C5FD" rx="2" />
      </svg>
    </div>

    <div ref="loginCard" class="relative w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto opacity-0">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform 
                    -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>

      <div class="relative bg-white shadow-lg rounded-3xl">
        <div class="px-6 py-8 sm:px-10 md:px-12 lg:px-16">
          <div class="max-w-md mx-auto">
            <h1 ref="title" class="text-2xl sm:text-3xl font-extrabold text-blue-600 mb-8 text-center opacity-0">
              เข้าสู่ระบบ
            </h1>

            <div class="space-y-6">
              <div ref="usernameField" class="relative opacity-0">
                <input v-model="username" type="text" autocomplete="off" class="peer w-full h-10 text-base sm:text-lg border-b-2 border-gray-300 text-gray-900 
                           placeholder-transparent focus:outline-none focus:border-blue-600
                           bg-transparent transition-colors duration-300" placeholder="ชื่อผู้ใช้" @keydown.enter="handleLogin" />
                <label class="absolute left-0 -top-3.5 text-gray-600 text-sm sm:text-base
                           peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 
                           peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 
                           peer-focus:text-gray-600 peer-focus:text-sm">
                  ชื่อผู้ใช้
                </label>
              </div>

              <div ref="passwordField" class="relative opacity-0">
                <input v-model="password" type="password" autocomplete="off" class="peer w-full h-10 text-base sm:text-lg border-b-2 border-gray-300 text-gray-900 
                           placeholder-transparent focus:outline-none focus:border-blue-600
                           bg-transparent transition-colors duration-300" placeholder="รหัสผ่าน" @keydown.enter="handleLogin" />
                <label class="absolute left-0 -top-3.5 text-gray-600 text-sm sm:text-base
                           peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 
                           peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 
                           peer-focus:text-gray-600 peer-focus:text-sm">
                  รหัสผ่าน
                </label>
              </div>

              <button ref="loginButton" @click="handleLogin" class="w-full bg-blue-600 text-white text-base sm:text-lg rounded-lg 
                         px-4 py-2.5 sm:px-6 sm:py-3 hover:bg-blue-700 opacity-0
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
import { ref, onMounted } from 'vue';
import router from '@/router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import gsap from 'gsap';

const loginCard = ref(null);
const title = ref(null);
const usernameField = ref(null);
const passwordField = ref(null);
const loginButton = ref(null);
const decorLeft = ref(null);
const decorRight = ref(null);
const decorCenter = ref(null);

const username = ref('');
const password = ref('');

const validCredentails = {
  username: 'admin',
  password: 'admin'
}

onMounted(() => {
  gsap.set(loginCard.value, { opacity: 1 });
  gsap.set([decorLeft.value, decorRight.value, decorCenter.value], { opacity: 0 });
  gsap.set([title.value, usernameField.value, passwordField.value, loginButton.value], { opacity: 1 });

  gsap.timeline()
    .from(decorLeft.value, {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power3.out"
    })
    .from(decorRight.value, {
      duration: 1,
      x: 100,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.8")
    .from(decorCenter.value, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.8");

  gsap.timeline()
    .from(loginCard.value, {
      duration: 1.2,
      y: 100,
      opacity: 0,
      ease: "power4.out"
    })
    .from(title.value, {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: "back.out(1.7)"
    }, "-=0.5")
    .from(usernameField.value, {
      duration: 0.8,
      x: -30,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.4")
    .from(passwordField.value, {
      duration: 0.8,
      x: 30,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.6")
    .from(loginButton.value, {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: "back.out(1.7)"
    }, "-=0.4");
});

const animateLoginButton = () => {
  gsap.to(loginButton.value, {
    scale: 0.95,
    duration: 0.1,
    ease: "power2.out",
    yoyo: true,
    repeat: 1
  });
};

const LoginFailed = () => {
  gsap.to(loginCard.value, {
    x: [-10, 10, -10, 10, 0],
    duration: 0.4,
    ease: "power1.inOut"
  });

  toast("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง", {
    "theme": "light",
    "type": "error",
    "dangerouslyHTMLString": true,
    "position": "top-right",
    "closeButton": false
  });
};

const validDateLoginNullValue = () => {
  gsap.to([usernameField.value, passwordField.value], {
    borderColor: "#EF4444",
    duration: 0.3,
    yoyo: true,
    repeat: 1
  });

  toast("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน", {
    "theme": "light",
    "type": "info",
    "dangerouslyHTMLString": true,
    "position": "top-right",
    "closeButton": false
  });
};

const handleLogin = () => {
  animateLoginButton();

  if (username.value === validCredentails.username && password.value === validCredentails.password) {
    gsap.to(loginCard.value, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => router.push('/dashboard')
    });
  } else if (username.value === '' || password.value === '') {
    validDateLoginNullValue();
  } else {
    LoginFailed();
  }
};
</script>