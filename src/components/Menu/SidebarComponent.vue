<template>
  <div class="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <aside
      class="fixed left-0 h-screen transition-all duration-300 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white z-20 shadow-2xl"
      :class="[isExpanded ? 'w-64' : 'w-20']" @mouseenter="expandSidebar" @mouseleave="collapseSidebar">
      <div
        class="h-20 flex items-center justify-center bg-white/10 backdrop-blur-md border-b border-white/10 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-75"></div>
        <transition name="fade" mode="out-in">
          <span v-if="isExpanded" class="text-2xl font-bold text-white tracking-wider relative">
            <span class="relative z-10">GumLungjai</span>
            <div
              class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-white/70 via-white/50 to-transparent">
            </div>
            <div class="absolute -inset-1 bg-white/20 blur-xl -z-10"></div>
          </span>
          <span v-else class="text-2xl font-bold text-white">G</span>
        </transition>
      </div>

      <nav class="mt-8">
        <ul class="space-y-3 px-4">
          <li v-for="item in menuItems" :key="item.label">
            <router-link :to="item.path"
              class="flex items-center py-3.5 rounded-xl hover:bg-white/20 backdrop-blur transition-all duration-300 group relative overflow-hidden"
              :class="[
                isExpanded ? 'px-4' : 'px-0 justify-center',
                $route.path === item.path ? 'bg-white/25 shadow-lg' : ''
              ]">
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700">
              </div>

              <component :is="item.icon" class="w-6 h-6 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                :class="$route.path === item.path ? 'text-white' : 'text-blue-100'" />

              <transition name="fade">
                <span v-if="isExpanded"
                  class="ml-4 text-sm font-medium whitespace-nowrap tracking-wide transition-all duration-300"
                  :class="$route.path === item.path ? 'text-white' : 'text-blue-100'">
                  {{ item.label }}
                </span>
              </transition>

              <div v-if="!isExpanded"
                class="absolute left-full ml-3 px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl transform -translate-x-2 group-hover:translate-x-0">
                {{ item.label }}
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="flex-1 min-w-0">
      <div class="transition-all duration-300" :class="[isExpanded ? 'ml-64' : 'ml-20']">
        <header
          class="h-16 bg-white/80 border-b flex items-center justify-between px-8 shadow-sm fixed top-0 right-0 transition-all duration-300 backdrop-blur-md z-10"
          :class="[isExpanded ? 'left-64' : 'left-20']">
          <div class="flex-1 max-w-lg">
            <div class="relative group">
              <magnifying-glass-icon
                class="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
              <input type="text" v-model="searchQuery" placeholder="ค้นหา..."
                class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-white/90">
              <div
                class="absolute inset-0 border border-transparent group-hover:border-blue-100 rounded-xl pointer-events-none transition-colors duration-300">
              </div>
            </div>
          </div>

          <div class="flex items-center space-x-8">
            <div class="relative notifications-container">
              <button @click="toggleNotifications"
                class="p-3 hover:bg-gray-100 rounded-xl relative transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group">
                <bell-icon class="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
              </button>

              <transition enter-active-class="transition duration-300 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-200 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <div v-if="showNotifications"
                  class="absolute right-0 mt-4 w-80 bg-white rounded-xl shadow-xl border py-2 z-30">
                  <div class="px-4 py-3 border-b flex justify-between items-center">
                    <h3 class="font-medium text-gray-900">การแจ้งเตือน</h3>
                  </div>
                  <div class="max-h-64 overflow-y-auto">
                    <div class="px-4 py-3 hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
                      <p class="text-sm text-gray-600">ไม่มีการแจ้งเตือนใหม่</p>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <div class="relative profile-container">
              <button @click="toggleProfileMenu"
                class="flex items-center space-x-3 hover:bg-gray-100 rounded-xl px-4 py-2.5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <div
                  class="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-sm font-medium shadow-lg transition-transform duration-300 group-hover:scale-105 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform rotate-45"></div>
                  {{ userName[0] }}
                </div>
                <div class="flex items-center">
                  <span class="text-sm font-medium text-gray-700">{{ userName }}</span>
                  <chevron-down-icon class="w-4 h-4 ml-2 text-gray-500 transition-transform duration-300"
                    :class="{ 'rotate-180': showProfileMenu }" />
                </div>
              </button>

              <transition enter-active-class="transition duration-300 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-200 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <div v-if="showProfileMenu"
                  class="absolute right-0 mt-4 w-60 bg-white rounded-xl shadow-xl border py-2 z-30">
                  <div class="px-4 py-3 border-b">
                    <p class="text-sm font-medium text-gray-900">{{ userName }}</p>
                    <p class="text-xs text-gray-500 mt-1">ผู้ใช้งานระบบ</p>
                  </div>
                  <div class="py-2">
                    <a href="#"
                      class="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-300 group">
                      <user-icon class="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-500" />
                      โปรไฟล์
                    </a>
                    <a @click="handleRouteSetting" href="#"
                      class="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-300 group">
                      <cog-6-tooth-icon class="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-500" />
                      ตั้งค่า
                    </a>
                  </div>
                  <hr class="my-1 border-gray-200">
                  <a href="#"
                    class="flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors duration-300 group"
                    @click.prevent="handleLogout">
                    <arrow-right-on-rectangle-icon class="w-4 h-4 mr-3 text-red-400 group-hover:text-red-500" />
                    ออกจากระบบ
                  </a>
                </div>
              </transition>
            </div>
          </div>
        </header>

        <main class="transition-all duration-300 pt-16 p-6">
          <div class="max-w-7xl mx-auto">
            <router-view v-slot="{ Component }">
              <transition name="page" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import {
  ChartBarIcon,
  Cog6ToothIcon,
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  DocumentIcon,
  UserIcon,
  IdentificationIcon
} from '@heroicons/vue/24/outline';

const router = useRouter();
const isExpanded = ref(false);
const showNotifications = ref(false);
const showProfileMenu = ref(false);
const searchQuery = ref('');
const userName = ref('พงศกร ทองรักษ์');

const menuItems = ref([
  { icon: ChartBarIcon, label: 'Dashboard', path: '/dashboard' },
  { icon: DocumentIcon, label: 'ใบสมัคร', path: '/registerform' },
  { icon: IdentificationIcon, label: 'ข้อมูลผู้ที่ได้รับทุน', path: '/infoscholarship' },
  { icon: Cog6ToothIcon, label: 'ตั้งค่า', path: '/setting' },
]);

const expandSidebar = () => {
  isExpanded.value = true;
};

const collapseSidebar = () => {
  isExpanded.value = false;
};

const toggleNotifications = (event) => {
  event.stopPropagation();
  showNotifications.value = !showNotifications.value;
  if (showNotifications.value) {
    showProfileMenu.value = false;
  }
};

const toggleProfileMenu = (event) => {
  event.stopPropagation();
  showProfileMenu.value = !showProfileMenu.value;
  if (showProfileMenu.value) {
    showNotifications.value = false;
  }
};

const handleRouteSetting = () => {
  router.push('/settinguser');
}

const handleLogout = () => {
  router.push('/login');
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.notifications-container') && !event.target.closest('.profile-container')) {
    showNotifications.value = false;
    showProfileMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>