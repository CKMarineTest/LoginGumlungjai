<template>
  <div class="flex h-screen bg-gray-50">
    <aside class="w-20 fixed left-0 top-0 bottom-0 bg-gray-900 shadow-lg z-10">
      <SidebarComponent />
    </aside>
  </div>


  <main class="flex-1 ml-20 w-12/12 p-4 md:p-6 lg:p-8 min-w-max bg-blue-100">
    <br>
    <br>
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-800">การตั้งค่า</h2>
      <p class="text-gray-500 mt-1">จัดการบัญชีและการตั้งค่าความปลอดภัยของคุณ</p>
    </div>

    <nav class="flex min-w-max border-b border-gray-200 mb-6">
      <button v-for="item in settingsMenu" :key="item.id" @click="activeSection = item.id" :class="[
        'flex items-center px-6 py-4 transition-all duration-200 border-b-2 text-sm md:text-base whitespace-nowrap font-medium',
        activeSection === item.id
          ? 'border-indigo-600 text-indigo-700'
          : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300',
      ]">
        <span class="mr-2" v-html="item.icon"></span>
        <span>{{ item.name }}</span>
      </button>
    </nav>

    <div class="flex-1">
      <div v-for="section in filteredSections" :key="section.id"
        class="bg-white shadow-sm rounded-xl p-6 w-full border border-gray-100">
        <h3 class="text-lg font-medium text-gray-800 mb-2">
          {{ section.title }}
        </h3>
        <p class="text-gray-500 text-sm mb-6">{{ section.description }}</p>

        <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="space-y-5" v-for="(field, index) in section.fields" :key="index">
            <div v-for="(label, key) in field" :key="key" class="relative">
              <label class="block text-sm font-medium text-gray-700 mb-1">
                {{ label }}
              </label>
              <input :type="getInputType(key)" v-model="formData[key]" :placeholder="getPlaceholder(key)"
                class="input" />
              <div v-if="key.includes('Password')" class="text-xs text-gray-400 mt-1">
                {{ key === 'newPassword' ? 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร' : '' }}
              </div>
            </div>
          </div>
        </div>

        <div v-if="section.id === 'notifications'" class="mt-6">
          <div class="space-y-4">
            <div v-for="(notification, index) in notificationSettings" :key="index"
              class="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <div>
                <h4 class="font-medium text-gray-800">{{ notification.title }}</h4>
                <p class="text-sm text-gray-500">{{ notification.description }}</p>
              </div>
              <div class="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
                <input type="checkbox" :id="`toggle-${index}`" v-model="notification.enabled"
                  class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer top-0.5 left-0.5 transition-all duration-200" />
                <label :for="`toggle-${index}`"
                  class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            </div>
          </div>
        </div>

        <div v-if="section.id === 'ipblocking'" class="mt-6">
          <div class="flex items-center mb-6">
            <input type="text" v-model="newIpAddress" placeholder="192.168.1.1" class="input" />
            <button @click="addIpToBlocklist"
              class="bg-indigo-600 text-white px-4 rounded-lg ml-2 hover:bg-indigo-700 transition-colors">
              เพิ่ม IP
            </button>
          </div>

          <div class="border rounded-lg overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP
                    Address</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    วันที่เพิ่ม</th>
                  <th class="px-6 py-3 text-right text-xs font-medium text-gray5-00 uppercase tracking-wider">
                    การจัดการ</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(ip, index) in blockedIps" :key="index" class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ ip.address }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ ip.dateAdded }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button @click="removeIp(index)" class="text-red-600 hover:text-red-800">
                      ลบ
                    </button>
                  </td>
                </tr>
                <tr v-if="blockedIps.length === 0">
                  <td colspan="3" class="px-6 py-4 text-center text-sm text-gray-500">ไม่มี IP ที่ถูกบล็อก</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-if="section.id === 'getscore'">
          <div class=" mx-auto">
            <div class="grid grid-cols-2 gap-6 px-4 my-4">
              <div v-for="scholarship in scholarship" :key="scholarship.id" class="w-full">
                <button
                  class="w-full bg-blue-600 text-white px-6 py-5 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center justify-center text-center font-medium focus:ring-4 focus:ring-blue-300 focus:outline-none transform hover:-translate-y-1 hover:shadow-xl border-b-4 border-blue-800"
                  @click="selectedScholarship = scholarship; openModal = true;">
                  <div class="flex flex-col items-center">
                    <component :is="scholarship.icon" class="w-6 h-6 mb-2 text-white" />
                    <span class="truncate font-semibold">{{ scholarship.scholarship }}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <CommittedModal :show="openCommittedModal" @close="openCommittedModal = false">
          <div class="p-6">
            <h1 class="text-2xl font-bold text-center mb-4 text-gray-800">กรรมการทั้งหมด</h1>

            <div class="overflow-x-auto shadow-md rounded-lg">
              <table class="min-w-full table-auto border-collapse bg-white">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">#
                    </th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">ชื่อ
                    </th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      นามสกุล</th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      จัดการ</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr v-for="(commit, index) in adminArray" :key="index" class="hover:bg-gray-50 transition-colors">
                    <td class="px-6 py-4 text-sm text-center text-gray-700">{{ index + 1 }}</td>
                    <td class="px-6 py-4 text-sm text-center text-gray-700">{{ commit.su_firstname }}</td>
                    <td class="px-6 py-4 text-sm text-center text-gray-700">{{ commit.su_lastname }}</td>
                    <td class="px-6 py-4 text-center">
                      <button
                        class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors focus:ring-2 focus:ring-green-300 focus:outline-none"
                        @click="addCommitted(commit.su_firstname, commit.su_lastname).then(() => {
                          openCommittedModal = false; openModal = true;
                        })">
                        เพิ่ม
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CommittedModal>

        <GetScoreModal :show="openModal" @close="openModal = false">
          <div class="p-6" v-if="selectedScholarship">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-bold text-gray-800">จัดการกรรมการ <strong>{{ selectedScholarship.scholarship
              }}</strong></h2>
              <Button
                class="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors focus:ring-2 focus:ring-green-300 focus:outline-none"
                @click="openCommittedModal = true; openModal = false;">
                <PlusIcon class="w-5 h-5" />
                <span>เพิ่มกรรมการ</span>
              </Button>
            </div>

            <div class="mt-6" v-if="committedList.length > 0">
              <h3 class="text-lg font-semibold mb-3 text-gray-700">กรรมการที่ให้คะแนนทุน {{
                selectedScholarship.scholarship }}</h3>

              <div class="overflow-x-auto shadow-md rounded-lg">
                <table class="min-w-full table-auto border-collapse bg-white">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">#
                      </th>
                      <th class="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">
                        ชื่อ</th>
                      <th class="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">
                        นามสกุล</th>
                      <th class="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">
                        จัดการ</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr v-for="(committed, index) in committedList" :key="index"
                      class="hover:bg-gray-50 transition-colors">
                      <td class="px-6 py-4 text-sm text-gray-700 text-center">{{ index + 1 }}</td>
                      <td class="px-6 py-4 text-sm text-gray-700 text-center">{{ committed.firstName }}</td>
                      <td class="px-6 py-4 text-sm text-gray-700 text-center">{{ committed.lastName }}</td>
                      <td class="px-6 py-4 text-center">
                        <button
                          class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors focus:ring-2 focus:ring-red-300 focus:outline-none"
                          @click="deleteCommitted(index)">
                          ลบ
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="mt-8 text-center" v-else>
              <p class="text-gray-500">ยังไม่มีกรรมการที่ถูกเพิ่มสำหรับทุนนี้</p>
            </div>
          </div>

          <div class="p-6 text-center" v-else>
            <p class="text-gray-500">กรุณาเลือกทุนการศึกษา</p>
          </div>
        </GetScoreModal>
      </div>
    </div>
  </main>
</template>

<script setup>
/* eslint-disable */
import { ref, computed, onMounted } from "vue";
import SidebarComponent from "./Menu/SidebarComponent.vue";
import { useToastService } from "@/lib/toastService";

import axios from "axios";

import { PlusIcon, GraduationCap, Stethoscope, Microscope, ScanHeart, Activity } from "lucide-vue-next";

import GetScoreModal from "./Modal/GetScoreModal.vue";
import CommittedModal from "./Modal/CommittedModal.vue";

const { showSuccess } = useToastService();

const showSuccessAlert = (message) => {
  showSuccess(message);
}

const openModal = ref(false);
const selectedScholarship = ref(null);
const selectedCommitted = ref(null);

const openCommittedModal = ref(false);
const committedList = ref([]);

const adminArray = ref([]);

const getAdmin = async () => {
  const baseUrl = process.env.VUE_APP_API_URL + '/user/getadmin';

  try {
    const response = await axios.post(baseUrl);

    adminArray.value = response.data.data;
  } catch (error) {
    console.error('Failed to fetching admin response data:', error)
  }
}

const activeSection = ref("getscore");

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
    description: "จัดการรายการบล็อก IP ที่ไม่ต้องการให้เข้าถึงระบบ",
    fields: [],
  },
  {
    id: "getscore",
    title: "กรรมการให้คะแนน",
    description: "เลือกกรรมการให้คะแนนแต่ละทุน"
  }
];

const notificationSettings = ref([
  {
    title: "การแจ้งเตือนอีเมล",
    description: "รับอีเมลเมื่อมีการเข้าสู่ระบบใหม่",
    enabled: true
  },
  {
    title: "การแจ้งเตือน SMS",
    description: "รับข้อความเตือนเมื่อมีการเปลี่ยนแปลงรหัสผ่าน",
    enabled: false
  },
  {
    title: "การแจ้งเตือนในระบบ",
    description: "แสดงการแจ้งเตือนในแดชบอร์ด",
    enabled: true
  },
  {
    title: "รายงานความปลอดภัยรายเดือน",
    description: "รับรายงานสรุปกิจกรรมบัญชีประจำเดือน",
    enabled: false
  }
]);

const newIpAddress = ref("");
const blockedIps = ref([
  { address: "192.168.1.10", dateAdded: "17/04/2025" },
  { address: "10.0.0.5", dateAdded: "15/04/2025" }
]);

const addIpToBlocklist = () => {
  if (newIpAddress.value.trim() === "") return;

  const today = new Date();
  const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;

  // blockedIps.value.push({
  //   address: newIpAddress.value,
  //   dateAdded: formattedDate,
  // });

  blockedIps.value.push({
    address: newIpAddress.value,
    dateAdded: formattedDate
  })

  newIpAddress.value = "";
}

const removeIp = (index) => {
  blockedIps.value.splice(index, 1)
}

const filteredSections = computed(() => {
  return sections.filter((section) => section.id === activeSection.value);
});

const getInputType = (key) => {
  if (key.includes("Password")) return "password";
  if (key === "email") return "email";
  if (key === "phone") return "tel";
  return "text";
};

const getPlaceholder = (key) => {
  const placeholders = {
    currentPassword: "กรอกรหัสผ่านปัจจุบัน",
    newPassword: "กรอกรหัสผ่านใหม่",
    confirmNewPassword: "ยืนยันรหัสผ่านใหม่",
    username: "กรอกชื่อผู้ใช้",
    email: "กรอกอีเมล",
    fullName: "กรอกชื่อ-นามสกุล",
    phone: "กรอกเบอร์โทรศัพท์"
  };
  return placeholders[key] || "";
};

const submit = () => {
  if (
    !formData.value.currentPassword ||
    !formData.value.newPassword ||
    !formData.value.confirmNewPassword
  ) {
    alert("กรุณากรอกข้อมูลรหัสผ่านให้ครบถ้วน");
    return;
  }

  if (formData.value.newPassword !== formData.value.confirmNewPassword) {
    alert("รหัสผ่านใหม่และรหัสผ่านยืนยันไม่ตรงกัน");
    return;
  }
  
  showSuccessAlert("เปลี่ยนรหัสผ่านเสร็จสิ้น")

  formData.value.currentPassword = "";
  formData.value.newPassword = "";
  formData.value.confirmNewPassword = "";
};

const settingsMenu = [
  {
    id: "profile",
    name: "โปรไฟล์",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  },
  {
    id: "security",
    name: "ความปลอดภัย",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  },
  {
    id: "notifications",
    name: "การแจ้งเตือน",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  },
  {
    id: "ipblocking",
    name: "IP Blocking",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-ban"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m14.5 9-5 5"/><path d="m9.5 9 5 5"/></svg>',
  },
  {
    id: "getscore",
    name: "กรรมการให้คะแนน",

  }
];

const scholarship = [
  {
    id: "PJ1",
    scholarship: "โครงการกำลังใจสร้างครูของชาติ",
    amount: "30,000",
    icon: GraduationCap
  },
  {
    id: "PJ2",
    scholarship: "โครงการทุนคุณหมอของกำลังใจ",
    amount: "50,000",
    icon: Stethoscope
  },
  {
    id: "PJ3",
    scholarship: "โครงการทุน Gumlungjai Scholarship",
    amount: "40,000",
    icon: Microscope
  },
  {
    id: "PJ4",
    scholarship: "โครงการทุนกำลังใจให้พยาบาล",
    amount: "40,000",
    icon: ScanHeart
  },
  {
    id: "PJ5",
    scholarship: "โครงการทุนนักจิตวิทยาสร้างกำลังใจ",
    amount: "40,000",
    icon: Activity
  },
];

const addCommitted = async (FirstName, LastName) => {
  return new Promise((resolve, reject) => {
    committedList.value.push({
      firstName: FirstName,
      lastName: LastName,
    });

    setTimeout(() => {
      resolve();
    }, 100)
  })
}

const deleteCommitted = (index) => {
  committedList.value.splice(index, 1);
}

onMounted(async () => {
  await getAdmin();
})

</script>

<style scoped>
.input {
  @apply w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500;
}

.toggle-checkbox:checked {
  right: 0;
  transform: translateX(100%);
  border-color: #ffffff;
}

.toggle-checkbox:checked+.toggle-label {
  background-color: #4f46e5;
}
</style>