<template>
    <aside class="w-20 fixed left-0 top-0 bottom-0 bg-gray-900 shadow-lg z-10">
      <SidebarComponent />
    </aside>

    <main class="flex-1 ml-20 p-4 md:p-6 lg:p-8 mt-8">
      <div class="w-full max-w-full mx-auto">
        <div class="w-full overflow-x-auto">
          <nav class="flex min-w-max">
            <button
              v-for="(item, index) in settingsMenu"
              :key="index"
              @click="activeSection = item.id"
              :class="[
                'flex items-center px-6 py-5 transition-colors border-b-2 text-sm md:text-base whitespace-nowrap',
                activeSection === item.id
                  ? 'border-indigo-600 text-indigo-700 font-medium'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300',
              ]"
            >
              <span class="mr-2" v-html="item.icon"></span>
              <span>{{ item.name }}</span>
            </button>
          </nav>
        </div>
      </div>

      <div class="flex-1 p-6 md:p-8">
        <div
          v-if="activeSection === 'profile'"
          class="bg-white shadow rounded-lg p-6 w-full"
        >
          <h3 class="text-lg font-medium text-gray-800 mb-4">โปรไฟล์ของฉัน</h3>
          <p class="text-gray-600">
            จัดการข้อมูลส่วนตัวและการตั้งค่าบัญชีของคุณ
          </p>

          <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700"
                  >ชื่อผู้ใช้</label
                >
                <input
                  type="text"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value="admin_user"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700"
                  >อีเมล</label
                >
                <input
                  type="email"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value="admin@example.com"
                />
              </div>
            </div>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700"
                  >ชื่อ-นามสกุล</label
                >
                <input
                  type="text"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value="ผู้ดูแลระบบ"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700"
                  >เบอร์โทรศัพท์</label
                >
                <input
                  type="tel"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value="081-234-5678"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="activeSection === 'security'"
          class="bg-white shadow rounded-lg p-6 w-full"
        >
          <h3 class="text-lg font-medium text-gray-800 mb-4">ความปลอดภัย</h3>
          <p class="text-gray-600">
            จัดการรหัสผ่านและตัวเลือกความปลอดภัยของคุณ
          </p>

          <div class="mt-6 space-y-6">
            <div>
              <h4 class="text-md font-medium text-gray-700">เปลี่ยนรหัสผ่าน</h4>
              <div class="mt-4 space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >รหัสผ่านปัจจุบัน</label
                  >
                  <input
                    type="password"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >รหัสผ่านใหม่</label
                  >
                  <input
                    type="password"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >ยืนยันรหัสผ่านใหม่</label
                  >
                  <input
                    type="password"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="activeSection === 'notifications'"
          class="bg-white shadow rounded-lg p-6 w-full"
        >
          <h3 class="text-lg font-medium text-gray-800 mb-4">การแจ้งเตือน</h3>
          <p class="text-gray-600">
            กำหนดวิธีการรับแจ้งเตือนและประเภทการแจ้งเตือน
          </p>

          <div class="mt-6 space-y-4">
            <div
              class="flex items-center justify-between py-4 border-b border-gray-200"
            >
              <div>
                <h4 class="font-medium text-gray-800">อีเมลแจ้งเตือน</h4>
                <p class="text-sm text-gray-500">รับการแจ้งเตือนผ่านทางอีเมล</p>
              </div>
              <div
                class="relative inline-block w-10 mr-2 align-middle select-none"
              >
                <input
                  type="checkbox"
                  checked
                  class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </div>
            <div
              class="flex items-center justify-between py-4 border-b border-gray-200"
            >
              <div>
                <h4 class="font-medium text-gray-800">แจ้งเตือนบนเว็บ</h4>
                <p class="text-sm text-gray-500">แสดงการแจ้งเตือนบนเว็บไซต์</p>
              </div>
              <div
                class="relative inline-block w-10 mr-2 align-middle select-none"
              >
                <input
                  type="checkbox"
                  checked
                  class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="activeSection === 'appearance'"
          class="bg-white shadow rounded-lg p-6 w-full"
        >
          <h3 class="text-lg font-medium text-gray-800 mb-4">รูปลักษณ์</h3>
          <p class="text-gray-600">ปรับแต่งธีมและการแสดงผลของแอปพลิเคชัน</p>

          <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              class="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-indigo-500 transition-all flex flex-col items-center"
            >
              <div
                class="h-24 w-full bg-white mb-2 rounded border border-gray-200"
              ></div>
              <span class="text-sm font-medium">โหมดสว่าง</span>
            </div>
            <div
              class="bg-gray-800 border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-indigo-500 transition-all flex flex-col items-center"
            >
              <div
                class="h-24 w-full bg-gray-900 mb-2 rounded border border-gray-700"
              ></div>
              <span class="text-sm font-medium text-white">โหมดมืด</span>
            </div>
            <div
              class="bg-blue-50 border border-blue-200 rounded-lg p-4 cursor-pointer hover:border-indigo-500 transition-all flex flex-col items-center"
            >
              <div
                class="h-24 w-full bg-gradient-to-r from-blue-400 to-indigo-500 mb-2 rounded"
              ></div>
              <span class="text-sm font-medium">ธีมฟ้า</span>
            </div>
          </div>
        </div>

        <div
          v-if="activeSection === 'language'"
          class="bg-white shadow rounded-lg p-6 w-full"
        >
          <h3 class="text-lg font-medium text-gray-800 mb-4">ภาษา</h3>
          <p class="text-gray-600">เปลี่ยนภาษาที่ใช้ในแอปพลิเคชัน</p>

          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-indigo-500 cursor-pointer"
            >
              <div class="flex-shrink-0 mr-4">
                <div
                  class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold"
                >
                  TH
                </div>
              </div>
              <div>
                <h4 class="font-medium">ภาษาไทย</h4>
                <p class="text-sm text-gray-500">Thai</p>
              </div>
            </div>
            <div
              class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-indigo-500 cursor-pointer"
            >
              <div class="flex-shrink-0 mr-4">
                <div
                  class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
                >
                  EN
                </div>
              </div>
              <div>
                <h4 class="font-medium">ภาษาอังกฤษ</h4>
                <p class="text-sm text-gray-500">English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script setup>
import { ref } from "vue";
import SidebarComponent from "./Menu/SidebarComponent.vue";

const activeSection = ref("profile");

const settingsMenu = [
  {
    id: "profile",
    name: "โปรไฟล์",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>',
  },
  {
    id: "security",
    name: "ความปลอดภัย",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>',
  },
  {
    id: "notifications",
    name: "การแจ้งเตือน",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>',
  },
  {
    id: "appearance",
    name: "รูปลักษณ์",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>',
  },
  {
    id: "language",
    name: "ภาษา",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>',
  },
];
</script>

<style scoped>
/* Toggle styling */
.toggle-checkbox:checked {
  right: 0;
  border-color: #4f46e5;
}
.toggle-checkbox:checked + .toggle-label {
  background-color: #4f46e5;
}
</style>
