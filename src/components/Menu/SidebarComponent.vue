<template>
  <div class="flex min-h-screen bg-gray-50">
    <aside 
      class="fixed left-0 h-screen transition-all duration-300 bg-gradient-to-b from-blue-600 to-blue-800 text-white z-20"
      :class="[isExpanded ? 'w-64' : 'w-20']"
      @mouseenter="isExpanded = true"
      @mouseleave="isExpanded = false"
    >
      <div class="h-16 flex items-center justify-center bg-white/10 backdrop-blur">
        <span v-if="isExpanded" class="text-xl font-bold text-white">GumLungjai</span>
        <span v-else class="text-xl font-bold text-white">G</span>
      </div>

      <nav class="mt-6">
        <ul class="space-y-2 px-3">
          <li v-for="item in menuItems" :key="item.label">
            <router-link
              :to="item.path"
              class="flex items-center py-3 rounded-xl hover:bg-white/10 backdrop-blur transition-all duration-200"
              :class="[
                isExpanded ? 'px-4' : 'px-0 justify-center',
                $route.path === item.path ? 'bg-white/20 shadow-lg' : ''
              ]"
            >
              <component
                :is="item.icon"
                class="w-5 h-5 flex-shrink-0"
                :class="$route.path === item.path ? 'text-white' : 'text-blue-100'"
              />
              <transition name="fade">
                <span
                  v-if="isExpanded"
                  class="ml-3 text-sm font-medium whitespace-nowrap"
                  :class="$route.path === item.path ? 'text-white' : 'text-blue-100'"
                >
                  {{ item.label }}
                </span>
              </transition>
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="flex-1 min-w-0"> 
      <div 
        class="transition-all duration-300 ml-20"
        :class="[isExpanded ? 'ml-64' : 'ml-20']"
      >
        <header
          class="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm fixed top-0 right-0 transition-all duration-300"
          :class="[isExpanded ? 'left-64' : 'left-20']"
        >
          <div class="flex-1 max-w-lg">
            <div class="relative">
              <magnifying-glass-icon class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                v-model="searchQuery" 
                placeholder="ค้นหา..."
                class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="relative">
              <button 
                @click="showNotifications = !showNotifications"
                class="p-2 hover:bg-gray-100 rounded-full relative transition-colors"
              >
                <bell-icon class="w-5 h-5 text-gray-600" />
                <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              <div 
                v-if="showNotifications"
                class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border py-2 z-30"
                @click="showNotifications = false"
              >
              </div>
            </div>

            <div class="relative">
              <button 
                @click="showProfileMenu = !showProfileMenu"
                class="flex items-center space-x-3 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors"
              >
                <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {{ userName[0] }}
                </div>
                <div class="flex items-center">
                  <span class="text-sm font-medium">{{ userName }}</span>
                  <chevron-down-icon class="w-4 h-4 ml-1 text-gray-500" />
                </div>
              </button>

              <div 
                v-if="showProfileMenu"
                class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border py-2 z-30"
                @click="showProfileMenu = false"
              >
                <a 
                  href="#" 
                  class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  @click.prevent="handleLogout"
                >
                  ออกจากระบบ
                </a>
              </div>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { 
  ChartBarIcon, 
  Cog6ToothIcon,
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  DocumentIcon
  
} from '@heroicons/vue/24/outline';

const router = useRouter();
// const route = useRoute();

const isExpanded = ref(false);
const showNotifications = ref(false);
const showProfileMenu = ref(false);
const searchQuery = ref('');
const userName = ref('พงศกร ทองรักษ์');

const menuItems = ref([
  { icon: ChartBarIcon, label: 'แดชบอร์ด', path: '/dashboard' },
  { icon: DocumentIcon, label: 'ใบสมัคร', path: '/registerform' },
  { icon: Cog6ToothIcon, label: 'ตั้งค่า', path: '/setting' }
]);

const handleLogout = () => {
  router.push('/login');
};
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
  transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
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