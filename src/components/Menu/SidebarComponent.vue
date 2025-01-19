<template>
  <div class="flex h-screen bg-gray-50" :class="mainClass">
    <aside class="bg-gradient-to-b from-blue-600 to-blue-800 text-white transition-all duration-300 relative z-10"
      :class="[isExpanded ? 'w-64' : 'w-20']" @mouseenter="isExpanded = true" @mouseleave="isExpanded = false">
      <div class="h-16 flex items-center justify-center bg-white/10 backdrop-blur">
        <span v-if="isExpanded" class="text-xl font-bold text-white">LOGO</span>
        <span v-else class="text-xl font-bold text-white">L</span>
      </div>

      <nav class="mt-6">
        <ul class="space-y-2 px-3">
          <li v-for="item in menuItems" :key="item.label">
            <a href="#" @click="setActive(item)" :class="[
              'flex items-center py-3 px-4 rounded-xl hover:bg-white/10 backdrop-blur transition-all duration-200',
              isExpanded ? 'px-4' : 'px-0 justify-center',
              isActive === item.label ? 'bg-white/20 shadow-lg' : ''
            ]" :title="!isExpanded ? item.label : ''">
              <component :is="item.icon" class="w-5 h-5 flex-shrink-0"
                :class="isActive === item.label ? 'text-white' : 'text-blue-100'" />
              <span v-if="isExpanded"
                class="ml-3 text-sm font-medium whitespace-nowrap overflow-hidden transition-opacity"
                :class="isActive === item.label ? 'text-white' : 'text-blue-100'">
                {{ item.label }}
              </span>
              <span v-if="item.badge && isExpanded"
                class="ml-auto bg-white/20 backdrop-blur text-white text-xs px-2 py-1 rounded-full font-medium">
                {{ item.badge }}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="flex-1 flex flex-col">
      <header class="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
        <div class="flex-1 max-w-lg">
          <div class="relative">
            <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" v-model="searchQuery" placeholder="ค้นหา..."
              class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="relative">
            <button @click="showNotifications = !showNotifications"
              class="p-2 hover:bg-gray-100 rounded-full relative transition-colors">
              <BellIcon class="w-5 h-5 text-gray-600" />
              <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            <div v-if="showNotifications"
              class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border py-2 animate-slideIn">
              <div class="px-4 py-2 border-b">
                <h3 class="font-semibold text-gray-900">การแจ้งเตือน</h3>
              </div>
              <div class="max-h-96 overflow-y-auto">
                <div v-for="notification in notifications" :key="notification.id"
                  class="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div class="flex justify-between items-start">
                    <h4 class="font-medium text-sm text-gray-900">{{ notification.title }}</h4>
                    <span class="text-xs text-gray-500">{{ notification.time }}</span>
                  </div>
                  <p class="text-sm text-gray-600 mt-1">{{ notification.message }}</p>
                </div>
              </div>
            </div>
          </div>

          <button class="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChatBubbleLeftIcon class="w-5 h-5 text-gray-600" />
          </button>

          <div class="relative">
            <button @click="showProfileMenu = !showProfileMenu"
              class="flex items-center space-x-3 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors">
              <div
                class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                {{ userName[0] }}
              </div>
              <div class="flex items-center">
                <span class="text-sm font-medium">{{ userName }}</span>
                <ChevronDownIcon class="w-4 h-4 ml-1 text-gray-500" />
              </div>
            </button>

            <div v-if="showProfileMenu"
              class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border py-2 animate-slideIn">
              <!-- <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">โปรไฟล์</a> -->
              <!-- <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ตั้งค่า</a> -->
              <a href="" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100" @click="handleLogout">ออกจากระบบ</a>
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 p-6 bg-gray-50 overflow-auto">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-2xl font-semibold text-gray-900 mb-6">{{ isActive }}</h1>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import router from '@/router';
import {
  ChartBarIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ClipboardDocumentIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  BellIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline';

const userName = ref('พงศกร ทองรักษ์');
const isExpanded = ref(false);
const isDarkMode = ref(false);
const showProfileMenu = ref(false);
const showNotifications = ref(false);
const searchQuery = ref('');

const menuItems = ref([
  { icon: ChartBarIcon, label: 'แดชบอร์ด', path: '/Home', badge: null },
  { icon: UserGroupIcon, label: 'ลูกค้าเป้าหมาย', path: '/prospect', badge: null },
  { icon: BuildingOfficeIcon, label: 'โครงการ', path: '/project', badge: null },
  { icon: ChartPieIcon, label: 'ลูกค้าที่สนใจ', path: '/lead', badge: null },
  { icon: DocumentTextIcon, label: 'ใบเสนอราคา', path: '/quotation', badge: null },
  { icon: ClipboardDocumentIcon, label: 'ใบสั่งขาย', path: '/sales-order', badge: null },
  { icon: ChartBarIcon, label: 'พยากรณ์ยอดขาย', path: '/forecast', badge: null },
  { icon: DocumentTextIcon, label: 'รายงาน', path: '/reports', badge: null },
  { icon: Cog6ToothIcon, label: 'ตั้งค่า', path: '/settings', badge: null },
]);

const notifications = ref([
  { id: 1, title: 'ลูกค้าสนใจใหม่', message: 'คุณมีลูกค้าที่สนใจใหม่จากบริษัท XYZ', time: '5 นาทีที่แล้ว' },
  { id: 2, title: 'แจ้งเตือนการประชุม', message: 'การประชุมทีมจะเริ่มใน 30 นาที', time: '10 นาทีที่แล้ว' },
  { id: 3, title: 'งานเสร็จสมบูรณ์', message: 'ข้อเสนอโครงการได้รับการอนุมัติแล้ว', time: '1 ชั่วโมงที่แล้ว' }
]);

const isActive = ref('แดชบอร์ด');
const setActive = (label) => {
  isActive.value = label;
}

const mainClass = computed(() => ({
  'dark:bg-gray-900 dark:text-white': isDarkMode.value
}));

const handleLogout = (event) => {
  event.preventDefault();

  router.push('/Login');
}


</script>


<style>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideIn {
  animation: slideIn 0.2s ease-out;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>