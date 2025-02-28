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
        <p class="text-gray-600">จัดการข้อมูลส่วนตัวและการตั้งค่าบัญชีของคุณ</p>

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
        <p class="text-gray-600">จัดการรหัสผ่านและตัวเลือกความปลอดภัยของคุณ</p>

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

      <div class="" v-if="activeSection === 'ipblocking'">IP Blocking Page</div>
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
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  },
  {
    id: "security",
    name: "ความปลอดภัย",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  },
  {
    id: "ipblocking",
    name: "IP Blocking",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-ellipsis"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>',
  },
];
</script>

<style scoped>
.toggle-checkbox:checked {
  right: 0;
  border-color: #4f46e5;
}
.toggle-checkbox:checked + .toggle-label {
  background-color: #4f46e5;
}
</style>
