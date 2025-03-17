<template>
  <aside class="w-20 fixed left-0 top-0 bottom-0 bg-gray-900 shadow-lg z-10">
    <SidebarComponent />
  </aside>

  <main class="flex-1 ml-20 p-4 md:p-6 lg:p-8 mt-8">
    <nav class="flex min-w-max">
      <button
        v-for="item in settingsMenu"
        :key="item.id"
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

    <div class="flex-1 p-6 md:p-8">
      <div
        v-for="section in filteredSections"
        :key="section.id"
        class="bg-white shadow rounded-lg p-6 w-full"
      >
        <h3 class="text-lg font-medium text-gray-800 mb-4">
          {{ section.title }}
        </h3>
        <p class="text-gray-600">{{ section.description }}</p>

        <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            class="space-y-4"
            v-for="(field, index) in section.fields"
            :key="index"
          >
            <div v-for="(label, key) in field" :key="key">
              <label class="block text-sm font-medium text-gray-700">{{
                label
              }}</label>
              <input
                :type="
                  key === 'email' ? 'email' : (key = 'tel' ? 'tel' : 'text')
                "
                v-model="formData[key]"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <button v-if="section.id === 'security'" @click="submit">Change</button>
      </div>
    </div>
  </main>
</template>

<script setup>
/* eslint-disable */
import { ref, computed } from "vue";
import SidebarComponent from "./Menu/SidebarComponent.vue";

const activeSection = ref("security");

const formData = ref({
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
  username: "admin_user",
  email: "admin@example.com",
  fullName: "ผู้ดูแลระบบ",
  phone: "081-234-5678",
});

const sections = [
  {
    id: "profile",
    title: "โปรไฟล์ของฉัน",
    description: "จัดการข้อมูลส่วนตัวและการตั้งค่าบัญชีของคุณ",
    fields: [
      { username: "ชื่อผู้ใช้" },
      { email: "อีเมล" },
      { fullName: "ชื่อ-นามสกุล" },
      { phone: "เบอร์โทรศัพท์" },
    ],
  },
  {
    id: "security",
    title: "ความปลอดภัย",
    description: "จัดการรหัสผ่านและตัวเลือกความปลอดภัยของคุณ",
    fields: [
      { currentPassword: "รหัสผ่านปัจจุบัน" },
      { newPassword: "รหัสผ่านใหม่" },
      { confirmNewPassword: "ยืนยันรหัสผ่านใหม่" },
    ],
  },
  {
    id: "notifications",
    title: "การแจ้งเตือน",
    description: "กำหนดวิธีการรับแจ้งเตือนและประเภทการแจ้งเตือน",
    fields: [],
  },
  {
    id: "ipblocking",
    title: "IP Blocking",
    description: "IP Blocking Page",
    fields: [],
  },
];

const filteredSections = computed(() => {
  return sections.filter((section) => section.id === activeSection.value);
});

const submit = () => {
  if (
    !formData.value.currentPassword ||
    !formData.value.newPassword ||
    !formData.value.confirmNewPassword
  ) {
    alert("Enter Password");
    return;
  }

  if (formData.value.newPassword !== formData.value.confirmNewPassword) {
    alert("Password don't match");
    return;
  }

  console.log("Current Password", formData.value.currentPassword);
  console.log("New Password", formData.value.newPassword);
  console.log("Confirm Password", formData.value.confirmNewPassword);
};

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
