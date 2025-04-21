<template>
  <div class="flex min-h-screen">
    <aside class="w-16 z-100 bg-gray-900">
      <SidebarComponent />
    </aside>
    <div class="flex-1 bg-blue-100 p-4 md:p-6 lg:p-8">
      <br />
      <br />
      <div>
        <div class="flex justify-end">
          <button class="bg-blue-500 shadow-lg w-20 rounded-xl p-2 text-white hover:bg-blue-600" @click="print(idcard)">
            <center>
              <PrinterIcon class="w-10 h-10" />
              <p class="mt-1">Print</p>
            </center>
          </button>
        </div>
      </div>
      <div class="w-full max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white relative overflow-hidden">
          <div class="flex flex-wrap justify-between items-start gap-4 relative">
            <div class="flex items-center gap-6 w-full sm:w-auto">
              <div
                class="bg-white backdrop-blur p-3 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
                <img :src="logoUrl" alt="Logo" class="w-14 h-14 rounded-xl sm:w-32 sm:h-32 lg:w-48 lg:h-48"
                  style="object-fit: cover; height: 200px; width: auto" />
              </div>
              <div>
                <h1 class="text-2xl sm:text-4xl font-bold tracking-tight">
                  ใบสมัครขอรับทุนการศึกษา
                </h1>
                <p class="text-lg sm:text-xl mt-2 opacity-90">
                  ทุนมูลนิธิกำลังใจ ประจำปีการศึกษา 2568
                </p>
              </div>
            </div>

            <div @click="triggerPhotoUpload"
              class="group bg-white/10 backdrop-blur-sm p-4 rounded-2xl cursor-pointer hover:bg-white/20 transition-all w-full sm:w-auto">
              <!-- <div
                v-if="!photoPreview"
                class="border-2 border-dashed border-white/60 w-36 h-44 sm:w-44 sm:h-52 rounded-xl flex flex-col items-center justify-center group-hover:border-white"
              >
                <Camera class="w-8 h-8 text-white/80 mb-2" />
                <span class="text-sm text-white/80">รูปถ่าย 1 นิ้ว</span>
              </div>
              <img
                v-else
                :src="pic"
                class="w-36 h-44 sm:w-44 sm:h-52 object-cover rounded-xl"
                alt="Preview"
              />
               -->
              <div v-for="pic in dataArray" :key="pic.idcard">
                <img :src="`https://web.mrgshrimp.com/thegiftapi/${pic.photo}`"
                  class="w-36 h-44 sm:w-44 sm:h-52 object-cover rounded-xl" alt="Preview" />
              </div>
            </div>
          </div>
        </div>
        <div class="p-8 bg-gray-50/50" v-for="item in dataArray" :key="item.idcard">
          <h3 class="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
            ประเภททุนการศึกษา
          </h3>
          <div class="relative my-6">
            <h4
              class="inline-block text-xl font-semibold bg-blue-100 px-6 py-4 rounded-lg shadow-lg border-l-4 border-blue-600 text-blue-900">
              <span class="flex items-center">
                {{ item.Project_Name }}
              </span>
            </h4>
            <div class="absolute h-1.5 bg-gradient-to-r from-blue-600 to-transparent w-full bottom-0 left-0"></div>
          </div>
          <br />

          <h3 class="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
            ส่วนที่ 1 ข้อมูลส่วนตัวของผู้สมัครรับทุนการศึกษา
          </h3>

          <div class="flex flex-wrap gap-4">
            <div class="w-full sm:w-1/2 lg:w-1/3">
              <label class="text-lg font-semibold text-blue-700 mb-2 block" for="name">
                ชื่อ <span class="text-red-500 text-sm"></span>
              </label>
              <input type="text" placeholder="ชื่อ" id="name" v-model="item.FirstName" name="name" readonly
                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/3">
              <label class="text-lg font-semibold text-blue-700 mb-2 block" for="lastname">
                นามสกุล <span class="text-red-500 text-sm"></span>
              </label>
              <input type="text" placeholder="นามสกุล" id="lastname" name="lastname" v-model="item.LastName" readonly
                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/4">
              <label class="text-lg font-semibold text-blue-700 mb-2 block" for="nickname">
                ชื่อเล่น <span class="text-red-500 text-sm"></span>
              </label>
              <input type="text" placeholder="ชื่อเล่น" id="nickname" name="nickname" v-model="item.NickName" readonly
                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
            </div>
          </div>

          <div class="flex flex-wrap gap-4 mt-2">
            <div class="w-full sm:w-1/2 lg:w-1/4">
              <label for="dob" class="text-lg font-semibold text-blue-700 mb-2 block">
                วัน/เดือน/ปีเกิด <span class="text-red-500 text-sm"></span>
              </label>
              <input type="text" placeholder="วันเดือนปีเกิด" id="dob" name="dob" :value="formatDate(item.BirthDate)"
                readonly
                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/3">
              <label class="text-lg font-semibold text-blue-700 mb-2 block" for="age">
                อายุ <span class="text-red-500 text-sm"></span>
              </label>
              <input type="number" placeholder="อายุ" id="age" name="age" v-model="item.Age" readonly
                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/3">
              <label class="text-lg font-semibold text-blue-700 mb-2 block" for="phone">
                เบอร์โทรศัพท์ติดต่อ <span class="text-red-500 text-sm"></span>
              </label>
              <input type="tel" placeholder="เบอร์โทรศัพท์" id="phone" maxlength="10" name="phone" v-model="item.Mobile"
                readonly
                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
            </div>
            <div class="w-full sm:w-1/3 lg:w-1/3">
              <label class="text-lg font-semibold text-blue-700 mb-2 block" for="idcard">
                เลขบัตรประจำตัวประชาชน
                <span class="text-red-500 text-sm"></span>
              </label>
              <input type="text" placeholder="เลขบัตรประชาชน" id="idcard" name="idcard" v-model="idcard" readonly
                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
            </div>

            <div class="flex flex-wrap gap-4">
              <div class="w-full sm:w-1/2 lg:w-1/3">
                <label class="text-lg font-semibold text-blue-700 mb-2 block" for="phone2">
                  เบอร์โทรศัพท์ติดต่อ (สำรอง)
                  <span class="text-red-500 text-sm"></span>
                </label>
                <input type="tel" :placeholder="item.Mobile2 ? 'เบอร์โทรศัพท์ติดต่อ (สำรอง)' : 'ไม่ได้ระบุ'
                  " maxlength="10" name="phone2" readonly v-model="item.Mobile2" id="phone2"
                  class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
              </div>
              <div class="w-full sm:w-1/3 lg:w-1/3">
                <label class="text-lg font-semibold text-blue-700 mb-2 block" for="email">
                  อีเมล <span class="text-red-500 text-sm"></span>
                </label>
                <input type="email" placeholder="อีเมล" id="email" @blur="validateEmail" name="email"
                  v-model="item.email" readonly
                  class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
              </div>
              <div class="w-full sm:w-1/2 lg:w-1/4">
                <label class="text-lg font-semibold text-blue-700 mb-2 block" for="lineId">
                  ID LINE <span class="text-red-500 text-sm"></span>
                </label>
                <input type="text" placeholder="ไอดีไลน์" id="lineId" name="lineId" v-model="item.lineId" readonly
                  class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
              </div>
              <div class="w-full sm:w-1/2 lg:w-1/2">
                <label class="text-lg font-semibold text-blue-700 mb-2 block" for="facebook">
                  Facebook <span class="text-red-500 text-sm"></span>
                </label>
                <input type="text" placeholder="Facebook" id="facebook" v-model="item.facebook" name="facebook" readonly
                  class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
              </div>
              <div class="w-full sm:w-1/1 lg:w-1/1">
                <label class="text-lg font-semibold text-blue-700 mb-2 block" for="special">
                  ความสามารถพิเศษ <span class="text-red-500 text-sm"></span>
                </label>
                <textarea id="special" name="special" rows="4" v-model="item.special" readonly
                  class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200"
                  placeholder="ความสามารถพิเศษ"></textarea>
              </div>
              <div class="w-full sm:w-1/1 lg:w-1/1">

                <label class="text-lg font-semibold text-blue-700 mb-2 block" for="specialWork">
                  งานพิเศษที่เคยทำหรือกำลังทำอยู่ (นอกเวลาการศึกษา)
                  <span class="text-red-500 text-sm"></span>
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <input type="text" placeholder="งานพิเศษ" id="specialWork" name="specialWork"
                    v-model="item.specialWork" readonly
                    class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
                </div>
                <br />
                <div v-if="item.specialWork === 'มีการทำงานพิเศษ'">
                  <div class="overflow-x-auto shadow-md rounded-xl">
                    <table class="w-full border-collapse bg-white">
                      <thead>
                        <tr class="bg-blue-500 text-white">
                          <th class="px-4 py-3 text-left">ลำดับ</th>
                          <th class="px-4 py-3 text-left">สถานที่ทำงาน</th>
                          <th class="px-4 py-3 text-left">รายได้</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(work, index) in Workhistory" :key="work.work_id"
                          class="border-b hover:bg-blue-50 transition-colors">
                          <td class="px-4 py-3">
                            <div
                              class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                              {{ index + 1 }}
                            </div>
                          </td>
                          <td class="px-4 py-3">
                            <input type="text" v-model="work.location" readonly
                              class="w-full px-3 py-2 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500"
                              placeholder="สถานที่ทำงาน" />
                          </td>
                          <td class="px-4 py-3">
                            <input type="text" v-model="work.salaryWork" readonly
                              class="w-full px-3 py-2 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500"
                              placeholder="รายได้" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <br />
                <div class="w-full sm:w-1/1 lg:w-1/1 mt-2">
                  <label class="text-lg font-semibold text-blue-700 mb-2 block" for="scholarship">
                    เคยได้รับทุนการศึกษาหรือขอรับทุนที่อื่นหรือไม่
                    <span class="text-red-500 text-sm"></span>
                  </label>
                  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input type="text" placeholder="การรับทุน" id="scholarship" v-model="item.scholarshipStatus"
                      name="scholarship" readonly
                      class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
                  </div>

                  <br />

                  <div class="overflow-x-auto shadow-md rounded-xl"
                    v-if="item.scholarshipStatus === 'เคยได้รับทุนการศึกษา'">
                    <table class="w-full border-collapse bg-white">
                      <thead>
                        <tr class="bg-blue-500 text-white">
                          <th class="px-4 py-3 text-left">ลำดับ</th>
                          <th class="px-4 py-3 text-left">
                            ปีที่ได้รับทุนการศึกษา
                          </th>
                          <th class="px-4 py-3 text-left">ชื่อทุนที่ได้รับ</th>
                          <th class="px-4 py-3 text-left">
                            จำนวนเงินที่ได้รับ
                          </th>
                          <th class="px-4 py-3 text-left">ตั้งแต่ปี</th>
                          <th class="px-4 py-3 text-left">ถึงปี</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(Scholar, index) in scholarship" :key="Scholar.s_id"
                          class="border-b hover:bg-blue-50 transition-colors">
                          <td class="px-4 py-3">
                            <div
                              class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                              {{ index + 1 }}
                            </div>
                          </td>
                          <td class="px-4 py-3">
                            <input type="text" v-model="Scholar.academicYear" readonly
                              class="w-full px-3 py-2 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500"
                              placeholder="ปีที่ได้รับทุนการศึกษา" />
                          </td>
                          <td class="px-4 py-3">
                            <input type="text" v-model="Scholar.scholarshipName" readonly
                              class="w-full px-3 py-2 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500"
                              placeholder="ชื่อทุนที่ได้รับ" />
                          </td>
                          <td class="px-4 py-3">
                            <input type="text" v-model="Scholar.amount" readonly
                              class="w-full px-3 py-2 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500"
                              placeholder="" />
                          </td>
                          <td class="px-4 py-3">
                            <input type="text" v-model="Scholar.startYear" readonly
                              class="w-full px-3 py-2 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500"
                              placeholder="" />
                          </td>
                          <td class="px-4 py-3">
                            <input type="text" v-model="Scholar.endYear" readonly
                              class="w-full px-3 py-2 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500"
                              placeholder="" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <br />

                  <div class="w-full sm:w-1/1 lg:w-1/1 mt-2">
                    <label class="text-lg font-semibold text-blue-700 mb-2 block" for="">
                      เป็นผู้กู้ กยศ. หรือไม่
                      <span class="text-red-500 text-sm"></span>
                    </label>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4" v-if="item.loaning !== 'no'">
                      <input type="text" placeholder="การกู้กยศ." id="" value="เป็นผู้กู้กยศ" name="" readonly
                        class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
                    </div>

                    <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div
                        class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl text-gray-500 bg-gray-100 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>ไม่เป็นผู้กู้กยศ.</span>
                      </div>
                    </div>
                    <div v-if="item.loaning === 'yes'">
                      <label class="text-lg font-semibold text-blue-700 mb-2 block" for="">
                        เป็นกู้กยศ.สำหรับเป็นค่าใช้จ่าย
                        <span class="text-red-500 text-sm"></span>
                      </label>
                      <div class="grid grid-cols-3 md:grid-cols-4 gap-4" v-if="item.expenseBoth !== null">
                        <input type="text" placeholder="กู้กยศ. เป็นค่าใช้จ่าย" id=""
                          value="เป็นผู้กู้กยศทั้งค่าใช้จ่ายและค่าธรรมเนียม" readonly
                          class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-4 gap-4" v-if="item.expenseFee !== null">
                        <input type="text" placeholder="เป็นกู้กยศ. เป็นค่าใช้จ่าย" id="" value="ค่าธรรมเนียม" readonly
                          class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-4 gap-4" v-if="item.expenseLiving !== null">
                        <input type="text" placeholder="กู้กยศ. เป็นค่าใช้จ่าย" id="" value="ค่าครองชีพ" readonly
                          class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
                      </div>
                    </div>

                    <div class="w-full mt-2">
                      <label for="university" class="text-lg font-semibold text-blue-700 mb-2 block">
                        สถานศึกษาที่สอบติด
                        <span class="text-red-500 text-sm"></span>
                      </label>
                      <div class="grid grid-cols-1 md:grid-cols-full gap-4">
                        <input type="text" placeholder="สถานศึกษาที่สอบติด" id="" name="" v-model="item.universityName"
                          readonly
                          class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
                      </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label class="text-lg font-semibold text-blue-700 mb-2 block" for="faculty">
                          คณะ <span class="text-red-500"></span>
                        </label>
                        <input type="text" id="faculty" name="faculty" readonly v-model="item.faculty"
                          class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                          placeholder="คณะ" />
                      </div>

                      <div>
                        <label class="text-lg font-semibold text-blue-700 mb-2 block" for="major">
                          สาขา <span class="text-red-500"></span>
                        </label>
                        <input type="text" id="major" name="major" readonly v-model="item.major"
                          class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                          placeholder="สาขา" />
                      </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                      <div class="relative">
                        <label class="text-lg font-semibold text-blue-700 mb-2 block" for="floor">
                          ชั้นปี <span class="text-red-500"></span>
                        </label>
                        <input type="text" id="floor" name="floor" v-model="item.floor" readonly
                          class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                          placeholder="ชั้นปี" />
                      </div>
                      <div>
                        <label class="text-lg font-semibold text-blue-700 mb-2 block" for="year">
                          ปีการศึกษา <span class="text-red-500"></span>
                        </label>
                        <input type="text" id="floor" name="floor" v-model="item.year" readonly
                          class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                          placeholder="ปีการศึกษา" />
                      </div>
                      <div>
                        <label class="text-lg font-semibold text-blue-700 mb-2 block" for="gpa">
                          คะแนนเฉลี่ย (จบ ม.6 ใส่เกรดจากใบปพ.1/รบ.1)
                          <span class="text-red-500"></span>
                        </label>
                        <div class="relative">
                          <input type="number" id="gpa" name="gpa" v-model="item.GPA" v-model.number="item.GPA" max="4"
                            @input="validateGPA"
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                            placeholder="กรอกเกรดเฉลี่ย" readonly />

                          <div class="absolute right-2 top-1/2 -translate-y-1/2">
                            <button @click="handleDownLoad(item.transcriptFilePath)"
                              class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 4v16m0-16l-4 4m4-4l4 4" />
                              </svg>
                              <span class="text-sm font-medium">
                                ไฟล์เกรด
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label class="text-lg font-semibold text-blue-700 mb-2 block" for="tcas">
                          ค่าเล่าเรียน (บาท/ปี)<span class="text-red-500"></span>
                        </label>
                        <div class="relative">
                          <input type="number" id="tcas" name="tcas" readonly v-model="item.tcas"
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                            placeholder="ค่าเล่าเรียน (บาท/ปี)" />

                          <Transition enter-active-class="transition duration-300 ease-out"
                            enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                            leave-active-class="transition duration-200 ease-in"
                            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                            <div class="absolute right-2 top-1/2 -translate-y-1/2">
                              <button @click="handleDownLoad(item.tcasFilePath)"
                                class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m0-16l-4 4m4-4l4 4" />
                                </svg>
                                <span class="text-sm font-medium">
                                  ไฟล์ TCAS
                                </span>
                              </button>
                              &nbsp;
                              <button @click="handleDownLoad(item.tcasFile2Path)"
                                class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m0-16l-4 4m4-4l4 4" />
                                </svg>
                                <span class="text-sm font-medium">
                                  ไฟล์ค่าเทอม
                                </span>
                              </button>
                            </div>
                          </Transition>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="container mx-auto">
                      <h4 class="text-base md:text-lg font-semibold text-blue-700 mb-4">
                        ข้อมูลเกียรติบัตร
                      </h4>

                      <div class="overflow-x-auto shadow-md rounded-xl">
                        <table class="w-full border-collapse bg-white">
                          <thead>
                            <tr class="bg-blue-500 text-white">
                              <th class="px-4 py-3 text-left">ลำดับ</th>
                              <th class="px-4 py-3 text-left">ระดับ</th>
                              <th class="px-4 py-3 text-left">
                                รายการเกียรติบัตร
                              </th>
                              <th class="px-4 py-3 text-center">ไฟล์</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(cer, index) in cerArray" :key="cer.cr_id"
                              class="border-b hover:bg-blue-50 transition-colors">
                              <td class="px-4 py-3">
                                <div
                                  class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                                  {{ index + 1 }}
                                </div>
                              </td>
                              <td class="px-4 py-3">
                                <input type="text" v-model="cer.c_level" placeholder="ระดับ" readonly
                                  class="w-full px-3 py-2 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500" />
                              </td>
                              <td class="px-4 py-3">
                                <input type="text" v-model="cer.cername" readonly
                                  class="w-full px-3 py-2 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500"
                                  placeholder="ระบุชื่อรายการเกียรติบัตร" />
                              </td>
                              <td class="px-4 py-3 text-center">
                                <!--                                 <button
                                  @click="openCertificateModal(index)"
                                  class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                  <span>ไฟล์เกียรติบัตร</span>
                                </button> -->

                                <button @click="handleDownLoad(cer.filepath)" :disabled="isDownloading"
                                  class="group flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                                  <span>ไฟล์เกียรติบัตร</span>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <transition enter-active-class="transition duration-300 ease-out"
                        enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                        leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100 scale-100"
                        leave-to-class="opacity-0 scale-95">
                        <div v-if="isCertificateModalOpen"
                          class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                          <div
                            class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[26rem] max-w-[90vw] p-6 relative transform transition-all duration-300 ease-in-out">
                            <button @click="closeCertificateModal"
                              class="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors group">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-7 w-7 group-hover:rotate-90 transition-transform" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>

                            <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center tracking-wide">
                              เกียรติบัตร
                            </h1>

                            <div class="flex justify-center">
                              <button @click="handleDownLoad(cer.filePath)" :disabled="isDownloading"
                                class="group flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                  class="w-6 h-6 transition-transform group-hover:rotate-12" fill="none"
                                  viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span class="text-base font-semibold">
                                  {{
                                    isDownloading
                                      ? "กำลังดาวน์โหลด..."
                                      : "ดาวน์โหลด"
                                  }}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </transition>
                    </div>
                    <br />
                    <div class="flex flex-wrap w-full gap-4 mt-2">
                      <div class="w-full sm:w-full lg:w-full">
                        <h3 class="text-xl font-semibold text-blue-900 mb-2 flex items-center" for="">
                          ที่อยู่ตามภูมิลำเนาเดิม
                          <span class="text-red-500 text-sm"></span>
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              บ้านเลขที่
                              <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="บ้านเลขที่" id="homeid" v-model="item.permanentHomeid"
                              readonly
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              หมู่ที่ <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="หมู่ที่" id="grouphomeid"
                              v-model="item.permanentGroupHomeid" readonly
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              ตรอก/ซอย
                              <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="ตรอก/ซอย" id="soi" v-model="item.permanentsoi" name="soi"
                              readonly
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              ถนน <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="ถนน" id="road" v-model="item.permanentroad" name="road"
                              readonly
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              จังหวัด <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="จังหวัด" id="province" v-model="item.Province2" readonly
                              name="province"
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              เขต/อำเภอ
                              <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="อำเภอ" id="district" name="district"
                              v-model="item.District2" readonly
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              แขวง/ตำบล
                              <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="ตำบล" id="subdistrict" readonly v-model="item.SubDistrict2"
                              name="subdistrict"
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              รหัสไปรษณีย์
                              <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="รหัสไปรษณีย์" id="zip_code" v-model="item.zipcode2" readonly
                              name="zip_code"
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>
                        </div>
                        <br />
                        <h3 class="text-xl font-semibold text-blue-900 mb-2 flex items-center mt-2"
                          for="currentAddress">
                          ที่อยู่ปัจจุบันของผู้ขอรับทุน
                          <span class="text-red-500 text-sm"></span>
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              บ้านเลขที่
                              <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="บ้านเลขที่" id="homeid" readonly
                              v-model="item.currentHomeid"
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              หมู่ที่ <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="หมู่ที่" id="grouphomeid" v-model="item.currentGroupHomeid"
                              readonly
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              ตรอก/ซอย
                              <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="ตรอก/ซอย" id="soi" name="soi" v-model="item.currentsoi"
                              readonly
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              ถนน <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="ถนน" id="road" name="road" v-model="item.currentroad"
                              readonly
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              จังหวัด <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="จังหวัด" id="province" readonly v-model="item.Province"
                              name="province"
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              เขต/อำเภอ
                              <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="อำเภอ" id="district" name="district"
                              v-model="item.Districts" readonly
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              แขวง/ตำบล
                              <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="ตำบล" id="subdistrict" readonly name="subdistrict"
                              v-model="item.SubDistricts"
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div class="relative group">
                            <label
                              class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                              รหัสไปรษณีย์
                              <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="รหัสไปรษณีย์" id="zip_code" readonly v-model="item.zipcode1"
                              name="zip_code"
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>
                        </div>
                        <div class="mt-4">
                          <h3 v-if="item.isRenthouse === 'yes'"
                            class="text-lg font-semibold gap-2 text-blue-700 mb-2 flex items-center">
                            ค่าเช่าบ้านต่อเดือน
                          </h3>

                          <input v-if="item.isRenthouse === 'yes'" type="number"
                            class="w-full sm:w-6/12 px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500"
                            placeholder="ค่าเช่าบ้านต่อเดือน" readonly v-model="item.homeRentCost" />

                          <div class="flex flex-col sm:flex-row gap-4 mt-4">
                            <button @click="
                              handleDownLoad(item.currentFileHomePicPath)
                              "
                              class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              <span>รูปภาพที่อยู่บ้าน</span>
                            </button>

                            <button v-if="item.isRenthouse === 'yes'" @click="handleDownLoad(item.homeRentPath)"
                              class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              <span>ตัวอย่างหลักฐานค่าใช้จ่ายค่าเช่าออกโดยสถานที่ให้เช่า</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mx-auto px-1 mt-3">
                      <h3 class="text-xl font-semibold text-blue-900 mb-6 flex items-center">
                        ข้อมูลบิดา
                      </h3>
                      <div class="p-3 rounded-lg shadow-lg bg-green-400 w-2/12 text-dark-900 items-center"
                        v-if="item.fatherStatus === 'alive'">บิดามีชีวิต</div>
                      <div class="p-3 rounded-lg shadow-lg bg-gray-400 w-2/12 text-white items-center"
                        v-if="item.fatherStatus === 'deceased'">บิดาเสียชีวิต</div>
                      <br>
                      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                          <label for="fatherName" class="block text-lg font-semibold text-blue-700 mb-2">
                            บิดาชื่อ
                            <span class="text-red-500 text-sm align-top"></span>
                          </label>
                          <input type="text" id="fatherName" placeholder="ชื่อบิดา นาย" v-model="item.fatherName"
                            readonly
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                        </div>

                        <div>
                          <label for="fatherLastName" class="block text-lg font-semibold text-blue-700 mb-2">
                            นามสกุล
                            <span class="text-red-500 text-sm align-top"></span>
                          </label>
                          <input type="text" id="fatherLastName" placeholder="นามสกุล" v-model="item.fatherLastName"
                            readonly
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                        </div>

                        <div>
                          <label for="fatherAge" class="block text-lg font-semibold text-blue-700 mb-2">
                            อายุ
                            <span class="text-red-500 text-sm align-top"></span>
                          </label>
                          <input type="number" id="fatherAge" v-model="item.fatherAge" placeholder="อายุ" readonly
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                        </div>
                      </div>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label for="faterJob" class="block text-lg font-semibold text-blue-700 mb-2">
                            อาชีพ
                            <span class="text-red-500 text-sm align-top"></span>
                          </label>
                          <input type="text" id="faterJob" v-model="item.fatherJob" placeholder="อาชีพ" readonly
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                        </div>

                        <div>
                          <label for="fatherWorkPlace" class="block text-lg font-semibold text-blue-700 mb-2">
                            สถานที่ทำงาน
                            <span class="text-red-500 text-sm align-top"></span>
                          </label>
                          <input type="text" id="fatherWorkPlace" v-model="item.fatherWorkPlace"
                            placeholder="สถานที่ทำงาน" readonly
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                        </div>
                      </div>

                      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                        <div>
                          <label for="fatherSalary" class="block text-lg font-semibold text-blue-700 mb-2">
                            รายได้ต่อเดือน
                            <span class="text-red-500 text-sm align-top"></span>
                          </label>
                          <input type="number" readonly v-model="item.fatherSalary"
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                            placeholder="รายได้ต่อเดือนบิดา" />
                        </div>
                      </div>
                      <br />
                      <button @click="handleDownLoad(item.fatherSlipFilePath)"
                        class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>เอกสารเงินเดือนบิดา</span>
                      </button>

                      <h3 class="text-xl font-semibold text-blue-900 mt-8 mb-6 flex items-center gap-2">
                        ข้อมูลมารดา
                      </h3>
                      <div class="p-3 rounded-lg shadow-lg bg-green-400 w-2/12 text-dark-900 items-center"
                        v-if="item.motherStatus === 'alive'">มารดามีชีวิต</div>
                      <div class="p-3 rounded-lg shadow-lg bg-gray-400 w-2/12 text-white items-center"
                        v-if="item.motherStatus === 'deceased'">มารดาเสียชีวิต</div>
                      <br>
                      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                          <label for="motherName" class="block text-lg font-semibold text-blue-700 mb-2">
                            มารดาชื่อ นาง / นางสาว
                            <span class="text-red-500 text-sm align-top"></span>
                          </label>
                          <input type="text" id="motherName" v-model="item.motherName" placeholder="ชื่อมารดา" readonly
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                        </div>

                        <div>
                          <label for="motherLastname" class="block text-lg font-semibold text-blue-700 mb-2">
                            นามสกุล
                            <span class="text-red-500 text-sm align-top"></span>
                          </label>
                          <input type="text" id="motherLastname" v-model="item.motherLastName" placeholder="นามสกุล"
                            readonly
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                        </div>

                        <div>
                          <label for="motherAge" class="block text-lg font-semibold text-blue-700 mb-2">
                            อายุ
                            <span class="text-red-500 text-sm align-top"></span>
                          </label>
                          <input type="number" v-model="item.motherAge" id="motherAge" placeholder="อายุ" readonly
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                        </div>
                      </div>

                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label for="motherJob" class="block text-lg font-semibold text-blue-700 mb-2">
                            อาชีพ
                            <span class="text-red-500 text-sm align-top"></span>
                          </label>
                          <input type="text" id="motherJob" v-model="item.motherJob" placeholder="อาชีพ" readonly
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                        </div>

                        <div>
                          <label for="motherWorkPlace" class="block text-lg font-semibold text-blue-700 mb-2">
                            สถานที่ทำงาน
                            <span class="text-red-500 text-sm align-top"></span>
                          </label>
                          <input type="text" id="motherWorkPlace" v-model="item.motherWorkPlace"
                            placeholder="สถานที่ทำงาน" readonly
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                        </div>
                      </div>

                      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                        <div>
                          <label for="motherSalary" class="block text-lg font-semibold text-blue-700 mb-2">
                            รายได้ต่อเดือน
                            <span class="text-red-500 text-sm align-top"></span>
                          </label>

                          <input type="number" id="motherSalary" v-model="item.motherSalary" name="motherSalary"
                            readonly
                            class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                            placeholder="รายได้ต่อเดือนมารดา" />
                        </div>
                      </div>
                      <br />
                      <button @click="handleDownLoad(item.motherSlipFilePath)"
                        class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>เอกสารเงินเดือนมารดา</span>
                      </button>

                      <div v-if="item.isSupport">
                        <h3 class="text-xl font-semibold text-blue-900 mt-8 mb-6 flex items-center gap-2">
                          ผู้ขอรับทุนได้รับความอุปการะเลี้ยงดูจาก
                        </h3>
                        <div v-if="item.isSupport === 'other'">
                          <div
                            class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl text-gray-500 bg-gray-100 flex items-center">
                            <span v-if="item.isSupport === 'other'">ญาติหรือผู้อื่น</span>
                          </div>
                          <br />
                          <div class="grid grid-cols-1 sm:grid-cols-2 mb-2 lg:grid-cols-3 gap-4">
                            <div>
                              <label for="parentName" class="block text-lg font-semibold text-blue-700 mb-2">
                                ผู้ปกครองชื่อ นาย / นาง / นางสาว
                                <span class="text-red-500 text-sm align-top"></span>
                              </label>
                              <input type="text" id="parentName" v-model="item.parentName" placeholder="ชื่อผู้ปกครอง"
                                readonly
                                class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                            </div>

                            <div>
                              <label for="parentLastname" class="block text-lg font-semibold text-blue-700 mb-2">
                                นามสกุล
                                <span class="text-red-500 text-sm align-top"></span>
                              </label>
                              <input type="text" id="parentLastname" v-model="item.parentLastName" placeholder="นามสกุล"
                                readonly
                                class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                            </div>

                            <div>
                              <label for="parentAge" class="block text-lg font-semibold text-blue-700 mb-2">
                                อายุ
                                <span class="text-red-500 text-sm align-top"></span>
                              </label>
                              <input type="number" id="parentAge" v-model="item.parentAge" placeholder="อายุ" readonly
                                class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                            </div>
                          </div>

                          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div>
                              <label for="parentJob" class="block text-lg font-semibold text-blue-700 mb-2">
                                อาชีพ
                                <span class="text-red-500 text-sm align-top"></span>
                              </label>
                              <input type="text" id="parentJob" v-model="item.parentJob" placeholder="อาชีพ" readonly
                                class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                            </div>

                            <div>
                              <label for="parentWorkPlace" class="block text-lg font-semibold text-blue-700 mb-2">
                                สถานที่ทำงาน
                                <span class="text-red-500 text-sm align-top"></span>
                              </label>
                              <input type="text" id="parentWorkPlace" v-model="item.parentWorkPlace"
                                placeholder="สถานที่ทำงาน" readonly
                                class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                            </div>
                          </div>

                          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                            <div>
                              <label for="parentSalary" class="block text-lg font-semibold text-blue-700 mb-2">
                                รายได้ต่อเดือน
                                <span class="text-red-500 text-sm align-top"></span>
                              </label>
                              <input type="number" id="parentSalary" v-model="item.parentSalary" name="parentSalary"
                                readonly
                                class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                                placeholder="รายได้ต่อเดือนผู้ปกครอง" />
                            </div>
                          </div>
                        </div>
                        <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div
                            class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl text-gray-500 bg-gray-100 flex items-center">
                            <span v-if="item.isSupport === 'parent'">บิดา/มารดา</span>
                            <span v-if="item.isSupport === 'me'">เลี้ยงดูตนเอง</span>
                          </div>
                        </div>
                      </div>

                      <h3 class="text-xl font-semibold text-blue-900 mt-8 mb-6 flex items-center gap-2">
                        ข้อมูลพี่น้อง
                      </h3>
                      <div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div>
                            <label for="siblingCount" class="block text-lg font-semibold text-blue-700 mb-2">
                              ผู้สมัครมีพี่น้อง (รวมตัวเอง)
                              <span class="text-red-500 text-sm align-top"></span>
                            </label>
                            <input type="text" id="siblingCount" v-model="item.siblingCount" placeholder="จำนวนพี่น้อง"
                              readonly
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div>
                            <label for="siblingMan" class="block text-lg font-semibold text-blue-700 mb-2">
                              ชาย (คน)
                              <span class="text-red-500 text-sm align-top"></span>
                            </label>
                            <input type="text" id="siblingMan" v-model="item.siblingMan" placeholder="ชาย (คน)" readonly
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div>
                            <label for="siblingWomen" class="block text-lg font-semibold text-blue-700 mb-2">
                              หญิง (คน)
                              <span class="text-red-500 text-sm align-top"></span>
                            </label>
                            <input type="text" id="siblingWomen" v-model="item.siblingWomen" placeholder="หญิง (คน)"
                              readonly
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                          <div>
                            <label for="siblingCountRegister" class="block text-lg font-semibold text-blue-700 mb-2">
                              ผู้สมัครเป็นบุตรคนที่
                              <span class="text-red-500 text-sm align-top"></span>
                            </label>
                            <input type="text" id="siblingCountRegister" v-model="item.siblingCountRegister" readonly
                              placeholder="ผู้สมัครเป็นบุตรคนที่"
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>

                          <div>
                            <label for="siblingStudying" class="block text-lg font-semibold text-blue-700 mb-2">
                              จำนวนพี่น้องที่กำลังศึกษาอยู่ (รวมตัวเอง)<span
                                class="text-red-500 text-sm align-top"></span>
                            </label>
                            <input type="text" id="siblingStudying" v-model="item.siblingStudying" readonly
                              placeholder="จำนวนพี่น้องที่กำลังศึกษาอยู่"
                              class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500" />
                          </div>
                        </div>
                        <div class="p-4 sm:p-6">
                          <div class="overflow-hidden border border-gray-200 rounded-lg shadow mb-6">
                            <table class="min-w-full divide-y divide-gray-200">
                              <thead class="bg-blue-50">
                                <tr>
                                  <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                                    #
                                  </th>
                                  <th
                                    class="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                                    ชื่อ - นามสกุล
                                  </th>
                                  <th
                                    class="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                                    อายุ
                                  </th>
                                  <th
                                    class="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                                    การศึกษา
                                  </th>
                                  <th
                                    class="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                                    สถานภาพ
                                  </th>
                                  <th
                                    class="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                                    รายได้ต่อเดือน
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="(sibling, index) in siblingArray" :key="index.sb_id"
                                  class="hover:bg-blue-50 transition-colors duration-150">
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <div
                                      class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium">
                                      {{ index + 1 }}
                                    </div>
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <input v-model="sibling.sb_name"
                                      class="w-full px-4 py-2 text-gray-900 border-2 border-blue-200 rounded-lg placeholder:text-gray-400 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 ease-in-out"
                                      readonly />
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <input v-model="sibling.sb_age"
                                      class="w-full px-4 py-2 text-gray-900 border-2 border-blue-200 rounded-lg placeholder:text-gray-400 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 ease-in-out"
                                      readonly />
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <input v-model="sibling.education"
                                      class="w-full px-4 py-2 text-gray-900 border-2 border-blue-200 rounded-lg placeholder:text-gray-400 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 ease-in-out"
                                      readonly />
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <input v-model="sibling.occupation"
                                      class="w-full px-4 py-2 text-gray-900 border-2 border-blue-200 rounded-lg placeholder:text-gray-400 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 ease-in-out"
                                      readonly />
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <input v-model="sibling.income"
                                      class="w-full px-4 py-2 text-gray-900 border-2 border-blue-200 rounded-lg placeholder:text-gray-400 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 ease-in-out"
                                      readonly />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div
                          class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl text-gray-500 bg-gray-100 flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          <span>ไม่มีพี่น้อง</span>
                        </div>
                      </div> -->

                      <div class="container mx-auto p-4">
                        <h2 class="text-2xl font-bold text-blue-600 mb-6">
                          ข้อมูลประวัติผู้ป่วยภายในครอบครัว
                        </h2>

                        <div class="overflow-x-auto bg-white rounded-lg shadow" v-if="item.isSick === 'someonesick'">
                          <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-blue-500">
                              <tr>
                                <th scope="col"
                                  class="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider w-20">
                                  ผู้ป่วย
                                </th>
                                <th scope="col"
                                  class="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider">
                                  อาการ
                                </th>
                                <th scope="col"
                                  class="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider">
                                  เอกสาร
                                </th>
                                <th scope="col"
                                  class="px-6 py-4 text-center text-sm font-medium text-white uppercase tracking-wider w-48">
                                  ไฟล์
                                </th>
                              </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                              <tr v-for="(med, index) in medArray" :key="med.Sick_ID" class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap">
                                  <div
                                    class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                    {{ index + 1 }}
                                  </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  <div class="text-sm font-medium text-gray-900">
                                    {{ med.Sick_Type }}
                                  </div>
                                </td>
                                <td class="px-6 py-4">
                                  <div class="text-sm text-gray-900">
                                    {{ med.Sick_Detail }}
                                  </div>
                                </td>
                                <td class="px-6 py-4 text-center">
                                  <button @click="handleDownLoad(med.Sick_Path)"
                                    class="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    ไฟล์เกียรติบัตร
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <transition enter-active-class="transition duration-500 ease-out"
                          enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                          leave-active-class="transition duration-300 ease-in" leave-from-class="opacity-100 scale-100"
                          leave-to-class="opacity-0 scale-95">
                          <div v-if="isMedicalModalOpen"
                            class="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="closeMedicalModal"></div>

                            <div
                              class="relative w-[48rem] max-w-[95vw] max-h-[90vh] bg-white rounded-3xl shadow-xl transform transition-all duration-300 ease-in-out overflow-hidden">
                              <button @click="closeMedicalModal"
                                class="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 hover:bg-red-400 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                  class="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>

                              <div class="bg-white p-8 border-b border-gray-100">
                                <h1 class="text-3xl font-bold tracking-wide text-center text-gray-900">
                                  เอกสารเกียรติบัตร
                                </h1>
                              </div>

                              <div class="p-8 bg-gray-50">
                                <div class="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100">
                                  <div class="flex items-center justify-between mb-4">
                                    <h2 class="text-lg font-semibold text-gray-800">
                                      เอกสาร
                                    </h2>
                                    <div class="flex gap-2">
                                      <button class="p-2 rounded-xl hover:bg-gray-100 transition-colors">
                                        <svg class="w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round">
                                          <circle cx="11" cy="11" r="8"></circle>
                                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                          <line x1="11" y1="8" x2="11" y2="14"></line>
                                          <line x1="8" y1="11" x2="14" y2="11"></line>
                                        </svg>
                                      </button>
                                      <button class="p-2 rounded-xl hover:bg-gray-100 transition-colors">
                                        <svg class="w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round">
                                          <circle cx="11" cy="11" r="8"></circle>
                                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                          <line x1="8" y1="11" x2="14" y2="11"></line>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div class="space-y-4">
                                  <button @click="handleDownLoad(med.Sick_Path)" :disabled="isDownloading"
                                    class="group flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 w-full rounded-xl transform transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600 shadow-sm hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    <svg
                                      class="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                      stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round">
                                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                      <polyline points="7 10 12 15 17 10"></polyline>
                                      <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    <span class="text-lg font-semibold text-white">
                                      {{
                                        isDownloading
                                          ? "กำลังดาวน์โหลด..."
                                          : "ดาวน์โหลดเอกสาร"
                                      }}
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </transition>
                      </div>

                      <br />

                      <hr />

                      <div class="p-2 sm:p-4 md:p-8">
                        <div class="w-full max-w-7xl mx-auto">
                          <div class="overflow-hidden">
                            <div class="p-4 sm:p-6 md:p-8 relative">
                              <div class="absolute inset-0 opacity-20"></div>
                              <h1
                                class="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-center mb-2 sm:mb-4 text-shadow relative">
                                การเข้าร่วมกิจกรรมจิตอาสาต่างๆ
                              </h1>
                            </div>

                            <div class="p-4 sm:p-6 md:p-8">
                              <div class="overflow-x-auto shadow-md rounded-lg">
                                <table class="w-full border-collapse bg-white">
                                  <thead>
                                    <tr class="bg-blue-500 text-white">
                                      <th class="px-4 py-3 text-left">ลำดับ</th>
                                      <th class="px-4 py-3 text-left">
                                        ชื่อกิจกรรมอาสา
                                      </th>
                                      <th class="px-4 py-3 text-center">
                                        รูปภาพกิจกรรม
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="(item, index) in activeArray" :key="item.A_ID"
                                      class="border-b hover:bg-blue-50 transition-colors">
                                      <td class="px-4 py-3">
                                        <div
                                          class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                                          {{ index + 1 }}
                                        </div>
                                      </td>
                                      <td class="px-4 py-3 w-1/2">
                                        <input type="text"
                                          class="w-full px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
                                          placeholder="ชื่อกิจกรรมอาสา" v-model="item.Activity_Name" readonly />
                                      </td>
                                      <td class="px-4 py-3 text-center">
                                        <button @click="
                                          handleDownLoad(item.A_ImgPath1)
                                          "
                                          class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                                          <span class="text-sm font-medium">รูปภาพกิจกรรม</span>
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="p-2 sm:p-4 md:p-6 lg:p-8">
                        <div class="w-full max-w-6xl mx-auto relative">
                          <div class="absolute -top-6 right-8 transform rotate-6 hidden md:block">
                            <div
                              class="w-20 h-24 bg-blue-100 rounded shadow-md flex items-center justify-center border-2 border-blue-200 relative">
                              <div class="absolute inset-2 bg-white rounded"></div>
                              <div class="absolute inset-4 flex flex-col space-y-2">
                                <div class="h-0.5 bg-blue-200 w-full"></div>
                                <div class="h-0.5 bg-blue-200 w-full"></div>
                                <div class="h-0.5 bg-blue-200 w-full"></div>
                              </div>
                            </div>
                          </div>

                          <div class="overflow-hidden">
                            <div class="p-4 sm:p-6 md:p-8 relative">
                              <div class=""></div>

                              <h1
                                class="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-center mb-2 sm:mb-4 text-shadow relative">
                                ให้ผู้ขอรับทุนแสดงความคิดเห็น "
                                ทำไมข้าพเจ้าควรได้รับทุนการศึกษาโครงการนี้ "
                              </h1>
                              <br />
                              <div
                                class="space-y-2 bg-blue-800/30 p-4 rounded-xl text-sm sm:text-base border border-white/20"
                                v-for="scholarship in dataArray" :key="scholarship.idcard">
                                <p class="flex items-center space-x-2">
                                  <span>{{ scholarship.Project_Name }}</span>
                                </p>
                              </div>
                            </div>

                            <div class="p-4 sm:p-6 md:p-8 relative">
                              <div class="group">
                                <div class="flex flex-col items-center justify-center space-y-4 sm:space-y-6 h-full">
                                  <div class="w-full max-w-full mx-auto">
                                    <div class="relative rounded-2xl p-[3px] transition-all duration-500" :class="{
                                      'shadow-lg ring-2 ring-blue-100':
                                        isFocused,
                                      'shadow-md': !isFocused,
                                    }">
                                      <div class="relative rounded-2xl bg-white backdrop-blur-sm p-8">
                                        <div
                                          class="absolute inset-0 flex flex-col space-y-8 pointer-events-none opacity-10">
                                          <div v-for="i in 8" :key="i" class="w-full h-px bg-blue-400"></div>
                                        </div>

                                        <div class="absolute top-2 right-2 text-blue-200">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M12 3C3 3 3 12 3 12H12V3Z" />
                                            <path d="M12 12H21C21 12 21 3 12 3V12Z" />
                                            <path d="M12 21C21 21 21 12 21 12H12V21Z" />
                                            <path d="M12 12H3C3 12 3 21 12 21V12Z" />
                                          </svg>
                                        </div>

                                        <div v-for="item in dataArray" :key="item.idcard">
                                          <textarea v-if="dataArray.length" v-model="item.reasoncomment"
                                            ref="autoResizeTextarea"
                                            class="w-full min-h-auto border-none outline-none resize-none text-lg bg-transparent relative z-10"
                                            placeholder="..." @focus="isFocused = true" @blur="isFocused = false"
                                            readonly></textarea>
                                          <div v-else>
                                            <p>กำลังดึงข้อมูล...</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <EssayScoreComponent />

                        </div>
                      </div>

                      <div class="p-2 sm:p-4 md:p-6 lg:p-8 overflow-hidden relative">
                        <div class="absolute inset-0 overflow-hidden pointer-events-none">
                          <div
                            class="absolute top-[30%] right-[8%] w-20 h-20 opacity-10 transform rotate-12 animate-float">
                            <svg viewBox="0 0 100 100" class="w-full h-full text-blue-700">
                              <rect x="10" y="20" width="80" height="60" rx="4" fill="currentColor" />
                              <rect x="15" y="25" width="70" height="50" fill="white" />
                              <path d="M20 35 H70 M20 45 H70 M20 55 H50" stroke="currentColor" stroke-width="2" />
                            </svg>
                          </div>

                          <div
                            class="absolute top-[60%] right-[20%] opacity-10 text-4xl text-blue-600 animate-float-slow">
                            ∑ π ∞
                          </div>
                        </div>

                        <div class="overflow-hidden">
                          <div class="">
                            <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                              เรียงความที่ผู้สมัครเลือก
                            </h1>
                          </div>

                          <div class="relative my-6" v-for="item in dataArray" :key="item.idcard">
                            <h4
                              class="inline-block text-xl font-semibold bg-blue-100 px-6 py-4 rounded-lg shadow-lg border-l-4 border-blue-600 text-blue-900">
                              <span class="flex items-center">
                                <p class="text-md">หัวข้อเรียงความ</p>
                                &nbsp; <b>{{ item.topic }}</b>
                              </span>
                            </h4>
                            <div
                              class="absolute h-1.5 bg-gradient-to-r from-blue-600 to-transparent w-full bottom-0 left-0">
                            </div>
                          </div>

                          <div class="p-4 sm:p-6 md:p-8">
                            <button @click="
                              () => handleDownLoad(item?.essayPath || '')
                            "
                              class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                              <svg v-if="!selectedFile" class="w-4 h-4" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 4v16m0-16l-4 4m4-4l4 4" />
                              </svg>
                              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span class="text-sm font-medium">
                                ไฟล์เรียงความ
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="">
                        <div class="absolute top-0 left-0 w-32 h-32 opacity-10">
                          <svg viewBox="0 0 100 100" class="w-full h-full text-blue-600">
                            <path d="M20,20 L80,20 L80,70 Q50,90 20,70 Z" fill="currentColor" />
                            <rect x="25" y="5" width="50" height="15" fill="currentColor" />
                          </svg>
                        </div>

                        <div class="w-full max-w-6xl mx-auto relative">
                          <div class="overflow-hidden">
                            <div class="">
                              <div class="absolute left-4 top-1/2 -translate-y-1/2">
                                <svg viewBox="0 0 100 100" class="w-12 h-12 text-white opacity-80">
                                  <rect x="20" y="20" width="60" height="70" rx="4" fill="currentColor" />
                                  <rect x="25" y="25" width="50" height="60" rx="2" fill="white" opacity="0.9" />
                                  <path d="M30 35 H70" stroke="currentColor" stroke-width="2" />
                                  <path d="M30 45 H70" stroke="currentColor" stroke-width="2" />
                                  <path d="M30 55 H60" stroke="currentColor" stroke-width="2" />
                                </svg>
                              </div>
                              <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                                เอกสารราชการ
                              </h1>
                            </div>
                          </div>

                          <div class="mt-6 space-y-6">
                            <div class="group relative overflow-hidden">
                              <div class="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
                                <button @click="handleDownLoad(item.DocFile1Path)"
                                  class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                  <svg v-if="!selectedFile" class="w-4 h-4" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 4v16m0-16l-4 4m4-4l4 4" />
                                  </svg>
                                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span class="text-sm font-medium">
                                    ไฟล์สำเนาบัตรประชาชน
                                  </span>
                                </button>

                                <button @click="handleDownLoad(item.DocFile2Path)"
                                  class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                  <svg v-if="!selectedFile" class="w-4 h-4" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 4v16m0-16l-4 4m4-4l4 4" />
                                  </svg>
                                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span class="text-sm font-medium">
                                    ไฟล์สำเนาทะเบียนบ้าน
                                  </span>
                                </button>
                              </div>

                              <transition enter-active-class="transition duration-500 ease-out"
                                enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                                leave-active-class="transition duration-300 ease-in"
                                leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                                <div v-if="isCardIdModalOpen"
                                  class="fixed inset-0 z-50 flex items-center justify-center p-4">
                                  <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                                  <div
                                    class="relative w-[48rem] max-w-[95vw] max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] transform transition-all duration-300 ease-in-out overflow-hidden">
                                    <button @click="closeCardIdModal"
                                      class="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-red-400 dark:hover:bg-gray-700/50 rounded-xl transition-all group">
                                      <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 group-hover:rotate-90 transition-transform duration-300"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                          d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                    </button>

                                    <div
                                      class="bg-white dark:bg-gray-900 p-8 border-b border-gray-100 dark:border-gray-800">
                                      <h1
                                        class="text-3xl font-bold tracking-wide text-center text-gray-900 dark:text-white">
                                        เอกสารสำเนาบัตรประชาชน
                                      </h1>
                                    </div>

                                    <div class="p-8 bg-gray-50 dark:bg-gray-900/50">
                                      <div
                                        class="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center justify-between mb-4">
                                          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                            เอกสาร
                                          </h2>
                                          <div class="flex gap-2">
                                            <button
                                              class="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                              <ZoomIn class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                            </button>
                                            <button
                                              class="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                              <ZoomOut class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                            </button>
                                          </div>
                                        </div>

                                        <div
                                          class="relative bg-gray-50 dark:bg-gray-700/30 rounded-xl h-[300px] overflow-hidden border border-blue-100 dark:border-gray-700">
                                          <div v-if="documentPreviewUrl" class="w-full h-full">
                                            <img :src="documentPreviewUrl" alt="Document Preview"
                                              class="w-full h-full object-contain" />
                                          </div>
                                          <div v-else class="w-full h-full flex items-center justify-center">
                                            <div class="text-center">
                                              <CreditCard
                                                class="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                                              <p class="text-gray-400 dark:text-gray-500">
                                                ไม่พบเอกสาร
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="space-y-4">
                                        <!-- <div class="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-between
                                    border border-blue-100 dark:border-gray-700 shadow-sm">
                                </div> -->

                                        <button @click="handleCertificateDownload" :disabled="isDownloading"
                                          class="group flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 dark:bg-white hover:bg-blue-600 dark:hover:bg-gray-100 w-full rounded-xl transform transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                                          <Download
                                            class="w-6 h-6 text-white dark:text-gray-900 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                          <span class="text-lg font-semibold text-white dark:text-gray-900">
                                            {{
                                              isDownloading
                                                ? "กำลังดาวน์โหลด..."
                                                : "ดาวน์โหลดเอกสาร"
                                            }}
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </transition>

                              <transition enter-active-class="transition duration-500 ease-out"
                                enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                                leave-active-class="transition duration-300 ease-in"
                                leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                                <div v-if="isHouseIdModalOpen"
                                  class="fixed inset-0 z-50 flex items-center justify-center p-4">
                                  <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                                  <div
                                    class="relative w-[48rem] max-w-[95vw] max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] transform transition-all duration-300 ease-in-out overflow-hidden">
                                    <button @click="closeHouseIdModal"
                                      class="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-red-400 dark:hover:bg-gray-700/50 rounded-xl transition-all group">
                                      <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 group-hover:rotate-90 transition-transform duration-300"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                          d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                    </button>

                                    <div
                                      class="bg-white dark:bg-gray-900 p-8 border-b border-gray-100 dark:border-gray-800">
                                      <h1
                                        class="text-3xl font-bold tracking-wide text-center text-gray-900 dark:text-white">
                                        เอกสารสำเนาทะเบียนบ้าน
                                      </h1>
                                    </div>

                                    <div class="p-8 bg-gray-50 dark:bg-gray-900/50">
                                      <div
                                        class="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center justify-between mb-4">
                                          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                            เอกสาร
                                          </h2>
                                          <div class="flex gap-2">
                                            <button
                                              class="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                              <ZoomIn class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                            </button>
                                            <button
                                              class="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                              <ZoomOut class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                            </button>
                                          </div>
                                        </div>

                                        <div
                                          class="relative bg-gray-50 dark:bg-gray-700/30 rounded-xl h-[300px] overflow-hidden border border-blue-100 dark:border-gray-700">
                                          <div v-if="documentPreviewUrl" class="w-full h-full">
                                            <img :src="documentPreviewUrl" alt="Document Preview"
                                              class="w-full h-full object-contain" />
                                          </div>
                                          <div v-else class="w-full h-full flex items-center justify-center">
                                            <div class="text-center">
                                              <Home class="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                                              <p class="text-gray-400 dark:text-gray-500">
                                                ไม่พบเอกสาร
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="space-y-4">
                                        <!-- <div class="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-between
                                    border border-blue-100 dark:border-gray-700 shadow-sm">
                                </div> -->

                                        <button @click="handleCertificateDownload" :disabled="isDownloading"
                                          class="group flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 dark:bg-white hover:bg-blue-600 dark:hover:bg-gray-100 w-full rounded-xl transform transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                                          <Download
                                            class="w-6 h-6 text-white dark:text-gray-900 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                          <span class="text-lg font-semibold text-white dark:text-gray-900">
                                            {{
                                              isDownloading
                                                ? "กำลังดาวน์โหลด..."
                                                : "ดาวน์โหลดเอกสาร"
                                            }}
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </transition>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
                  <div class="relative group">
                    <div
                      class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl transform -rotate-1 opacity-70 group-hover:rotate-0 transition-all duration-300">
                    </div>

                    <div class="relative">
                      <div class="absolute top-2 left-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </div>

                      <textarea rows="3" :value="getNote(item.idcard)"
                        @input="(e) => saveNote(item.idcard, e.target.value)"
                        class="block w-full px-5 py-4 pl-10 text-gray-700 bg-white rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-200 shadow-sm"
                        placeholder="เพิ่ม Note | เอกสารที่ขาดหรือต้องแก้ไข">
                        </textarea>
                    </div>

                    <div class="absolute -bottom-2 -left-2">
                      <div class="w-6 h-6 bg-sky-200 rounded-full shadow-sm"></div>
                    </div>

                    <div class="absolute -top-2 -right-2">
                      <div class="w-4 h-4 bg-indigo-200 rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="flex justify-center space-x-4">
                  <button @click="editDocument"
                    class="bg-yellow-500 flex items-center gap-2 p-4 px-4 rounded-xl text-white hover:bg-yellow-600 transition ease">
                    <Edit /> แก้ไขเอกสาร
                  </button>
                  <button @click="submitCheck"
                    class="bg-green-600 flex items-center gap-2 p-4 px-4 rounded-xl text-white hover:bg-green-700 transition ease">
                    <Check /> ยืนยันการตรวจสอบ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="w-full max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">

        <BasicScoreTableComponent class="mt-5 mb-5" />
      </div>
      <br>
      <div class="w-full max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">

        <ScoreTableComponent class="mt-5 mb-5" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import axios from "axios";

import { formatDate, PrintData } from "@/utils";

import SidebarComponent from "./Menu/SidebarComponent.vue";
import ScoreTableComponent from "./ScoreTableComponent.vue";
import BasicScoreTableComponent from './BasicScoreTableComponent.vue';
import EssayScoreComponent from './EssayScoreComponent.vue';
// import SiblingInfoFormConponent from "./SiblingInfoFormConponent.vue";
/* import VolunteerComponent from "./VolunteerComponent.vue";
import EssaySubmissionComponent from "./EssaySubmissionComponent.vue";
import ReasonCommentComponent from "./ReasonCommentComponent.vue";
import DocumentFormComponent from "./DocumentFormComponent.vue"; */

import logoUrl from "@/assets/picture/GLJ_Logo.png";

import { Download, Edit, Check } from "lucide-vue-next";
import { PrinterIcon } from "@heroicons/vue/24/outline";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

//import { useFormStore } from "@/stores/formStore";
import { useRoute } from "vue-router";

const route = useRoute();

const idcard = route.params.idcard;

const router = useRouter();

const imageUrl = "https://web.mrgshrimp.com/thegiftapi/";
//const imageUrl = "http://localhost:8096/";

//const formStore = useFormStore();

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const print = (idCard) => {
  PrintData(router, idCard);
}

const dataArray = ref([]);
const cerArray = ref([]);
const medArray = ref([]);
const Workhistory = ref([]);
const scholarship = ref([]);
const activeArray = ref([]);
const siblingArray = ref([]);

const fetchData = async () => {
  const data = new URLSearchParams();
  data.append("card_id", idcard);

  const url = process.env.VUE_APP_API_URL + "/efilling/GetEfilling";

  axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      dataArray.value = response.data.data.main; // Set the data to the reactive variable
      cerArray.value = response.data.data.certificate;
      medArray.value = response.data.data.familyMedicalHistory;
      Workhistory.value = response.data.data.work;
      scholarship.value = response.data.data.scholarship;
      activeArray.value = response.data.data.active;
      siblingArray.value = response.data.data.siblings; 0
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: error,
      });
      return false;
    });
};

onMounted(() => {
  fetchData();
});


const getNote = (id) => localStorage.getItem(`missing_note_${id}`) || '';
const saveNote = (id, note) => localStorage.setItem(`missing_note_${id}`, note);

// const handlePrintData = (idCard) => {
//   if (idCard) {
//     router.push({ name: "pdfbyid", params: { idcard: idCard } });
//   } else {
//     console.error("ID Card is missing!");
//   }
// };

// modal
const isCertificateModalOpen = ref(false);
const isMedicalModalOpen = ref(false);

const closeCertificateModal = () => {
  isCertificateModalOpen.value = false;
};

const closeMedicalModal = () => {
  isMedicalModalOpen.value = false;
};

const editDocument = () => {
  router.push("/registerform").then(() => {
    Toast.fire({
      icon: "success",
      title: "ปรับสถานะแก้ไขเอกสาร",
    });
  });
};

/* const handleDownLoad = (filePath) => {
  try {
    const link = document.createElement("a");
    link.href = imageUrl + filePath;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
}; */

const handleDownLoad = (filePath) => {
  try {
    console.log(filePath);
    // Check if filePath is valid
    if (!filePath) {
      throw new Error("File path is required");
    }

    // Make sure the imageUrl is defined and construct a valid URL
    const downloadUrl = imageUrl ? imageUrl + filePath : filePath;

    // Check if the URL is valid
    if (!downloadUrl) {
      throw new Error("Invalid file URL");
    }

    // Open the URL in a new tab
    window.open(downloadUrl, "_blank");
  } catch (error) {
    console.error("Error opening file in new tab:", error.message);
    // Optionally alert the user or show a message in the UI
    alert(`Failed to open file: ${error.message}`);
  }
};

const autoResizeTextarea = ref([])

// ฟังก์ชันปรับขนาด
const resizeTextarea = async () => {
  // 2. รอ DOM update
  await nextTick()
  const arr = autoResizeTextarea.value
  if (Array.isArray(arr) && arr.length) {
    arr.forEach(el => {
      if (el) {
        el.style.height = 'auto'
        el.style.height = el.scrollHeight + 'px'
      }
    })
  }
}

// 3. รันครั้งแรกตอน mounted
onMounted(() => {
  resizeTextarea()
})

// 4. รันทุกครั้งที่ dataArray หรือ comment เปลี่ยน (deep watch)
watch(dataArray, () => {
  resizeTextarea()
}, { deep: true })

const submitCheck = () => {
  router.push("/registerform").then(() => {
    Toast.fire({
      icon: "success",
      title: "ยืนยันการตรวสอบเอกสารสำเร็จ",
    });
  });
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  appearance: textfield;
  -moz-appearance: textfield;
}
</style>
