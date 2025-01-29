<template>

    <div class="flex">
        <!-- <aside class="w-16 h-screen fixed left-0 bg-gray-900"> -->
        <!-- <SidebarComponent /> -->
        <!-- </aside> -->
    </div>
    <div class="min-h-screen bg-blue-100 p-4 md:p-6 lg:p-8">
        <div class="w-full max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white relative overflow-hidden">
                <div class="flex flex-wrap justify-between items-start gap-4 relative z-10">
                    <div class="flex items-center gap-6 w-full sm:w-auto">
                        <div
                            class="bg-white backdrop-blur p-3 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
                            <img :src="logoUrl" alt="Logo" class="w-14 h-14 rounded-xl sm:w-32 sm:h-32 lg:w-48 lg:h-48"
                                style="object-fit: cover; height: 200px; width: auto;" />
                        </div>
                        <div>
                            <h1 class="text-2xl sm:text-4xl font-bold tracking-tight">ใบสมัครขอรับทุนการศึกษา</h1>
                            <p class="text-lg sm:text-xl mt-2 opacity-90">ทุนมูลนิธิกำลังใจ ประจำปีการศึกษา 2568</p>
                        </div>
                    </div>

                    <div @click="triggerPhotoUpload"
                        class="group bg-white/10 backdrop-blur-sm p-4 rounded-2xl cursor-pointer hover:bg-white/20 transition-all w-full sm:w-auto">
                        <div v-if="!photoPreview"
                            class="border-2 border-dashed border-white/60 w-36 h-44 sm:w-44 sm:h-52 rounded-xl flex flex-col items-center justify-center group-hover:border-white">
                            <Camera class="w-8 h-8 text-white/80 mb-2" />
                            <span class="text-sm text-white/80">รูปถ่าย 1 นิ้ว</span>
                        </div>
                        <img v-else :src="photoPreview" class="w-36 h-44 sm:w-44 sm:h-52 object-cover rounded-xl"
                            alt="Preview" />
                        <input type="file" ref="photoInput" class="hidden" @change="handlePhotoUpload"
                            accept="image/*" />
                    </div>
                </div>
            </div>
            <div class="p-8 bg-gray-50/50 border">
                <br>
                <h3 class="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
                    ประเภททุนการศึกษา
                </h3>
                <div class="relative text-red-500 text-xl">
                    {{ refexample }}
                </div>
            </div>
            <div class="divide-y divide-gray-100 p-8 bg-gray-50/50 border-b">
                <h3 class="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
                    ส่วนที่ 1 ข้อมูลส่วนตัวของผู้สมัครรับทุนการศึกษา
                </h3>

                <div class="flex flex-wrap gap-4">
                    <div class="w-full sm:w-1/2 lg:w-1/3">
                        <label class="text-lg font-semibold text-blue-700 mb-2 block" for="name">
                            ชื่อ <span class="text-red-500 text-sm"></span>
                        </label>
                        <input type="text" placeholder="ชื่อ" id="name" name="name" readonly
                            class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">

                    </div>
                    <div class="w-full sm:w-1/2 lg:w-1/3">
                        <label class="text-lg font-semibold text-blue-700 mb-2 block" for="lastname">
                            นามสกุล <span class="text-red-500 text-sm"></span>
                        </label>
                        <input type="text" placeholder="นามสกุล" id="lastname" name="lastname" readonly 
                            class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                    </div>
                    <div class="w-full sm:w-1/2 lg:w-1/4">
                        <label class="text-lg font-semibold text-blue-700 mb-2 block" for="nickname">
                            ชื่อเล่น <span class="text-red-500 text-sm"></span>
                        </label>
                        <input type="text" placeholder="ชื่อเล่น" id="nickname" name="nickname" readonly
                            class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                    </div>
                </div>

                <div class="flex flex-wrap gap-4 mt-2">
                    <div class="w-full sm:w-1/2 lg:w-1/4">
                        <label for="dob" class="text-lg font-semibold text-blue-700 mb-2 block">
                            วัน/เดือน/ปีเกิด <span class="text-red-500 text-sm"></span>
                        </label>
                        <input type="date" placeholder="วันเดือนปีเกิด" id="dob" name="dob" readonly
                            class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                    </div>
                    <div class="w-full sm:w-1/2 lg:w-1/3">
                        <label class="text-lg font-semibold text-blue-700 mb-2 block" for="age">
                            อายุ <span class="text-red-500 text-sm"></span>
                        </label>
                        <input type="number" placeholder="อายุ" id="age" name="age" readonly
                            class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                    </div>
                    <div class="w-full sm:w-1/2 lg:w-1/3">
                        <label class="text-lg font-semibold text-blue-700 mb-2 block" for="phone">
                            เบอร์โทรศัพท์ติดต่อ <span class="text-red-500 text-sm"></span>
                        </label>
                        <input type="tel" placeholder="เบอร์โทรศัพท์" id="phone" maxlength="10" name="phone" readonly
                            class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                    </div>
                    <div class="w-full sm:w-1/3 lg:w-1/3">
                        <label class="text-lg font-semibold text-blue-700 mb-2 block" for="idcard">
                            เลขบัตรประจำตัวประชาชน <span class="text-red-500 text-sm"></span>
                        </label>
                        <input type="text" placeholder="เลขบัตรประชาชน" id="idcard" name="idcard" readonly
                            class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
                    </div>

                    <div class="flex flex-wrap gap-4">
                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <label class="text-lg font-semibold text-blue-700 mb-2 block" for="phone2">
                                เบอร์โทรศัพท์ติดต่อ (สำรอง) <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="tel" placeholder="เบอร์โทรศัพท์ติดต่อ (สำรอง)" maxlength="10" name="phone2"
                                readonly id="phone2"
                                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                        </div>
                        <div class="w-full sm:w-1/3 lg:w-1/3">
                            <label class="text-lg font-semibold text-blue-700 mb-2 block" for="email">
                                อีเมล <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="email" placeholder="อีเมล" id="email" @blur="validateEmail" name="email"
                                readonly
                                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200" />
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-1/4">
                            <label class="text-lg font-semibold text-blue-700 mb-2 block" for="lineId">
                                ID LINE <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="ไอดีไลน์" id="lineId" name="lineId" readonly
                                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-1/2">
                            <label class="text-lg font-semibold text-blue-700 mb-2 block" for="facebook">
                                Facebook <span class="text-red-500 text-sm"></span>
                            </label>
                            <input type="text" placeholder="Facebook" id="facebook" name="facebook" readonly
                                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                        </div>
                        <div class="w-full sm:w-1/1 lg:w-1/1">
                            <label class="text-lg font-semibold text-blue-700 mb-2 block" for="special">
                                ความสามารถพิเศษ <span class="text-red-500 text-sm"></span>
                            </label>
                            <textarea id="special" name="special" rows="4" readonly
                                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200"
                                placeholder="ความสามารถพิเศษ"></textarea>
                        </div>
                        <div class="w-full sm:w-1/1 lg:w-1/1">
                            <label class="text-lg font-semibold text-blue-700 mb-2 block" for="specialWork">
                                งานพิเศษที่เคยทำหรือกำลังทำอยู่ (นอกเวลาการศึกษา) <span
                                    class="text-red-500 text-sm"></span>
                            </label>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <input type="text" placeholder="งานพิเศษ" id="specialWork" name="specialWork" readonly
                                    class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                            </div>
                            <div class="w-full sm:w-1/1 lg:w-1/1 mt-2">
                                <label class="text-lg font-semibold text-blue-700 mb-2 block" for="scholarship">
                                    เคยได้รับทุนการศึกษาหรือขอรับทุนที่อื่นหรือไม่ <span
                                        class="text-red-500 text-sm"></span>
                                </label>
                                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <input type="text" placeholder="การรับทุน" id="scholarship" name="scholarship"
                                        readonly
                                        class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                                </div>

                                <div class="w-full sm:w-1/1 lg:w-1/1 mt-2">
                                    <label class="text-lg font-semibold text-blue-700 mb-2 block" for="">
                                        เป็นผู้กู้ กยศ. หรือไม่ <span class="text-red-500 text-sm"></span>
                                    </label>

                                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <input type="text" placeholder="การกู้กยศ." id="" name="" readonly
                                            class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                                    </div>

                                    <label class="text-lg font-semibold text-blue-700 mb-2 block" for="">
                                        กู้กยศ.เป็นค่าใช้จ่าย <span class="text-red-500 text-sm"></span>
                                    </label>
                                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <input type="text" placeholder="กู้กยศ. เป็นค่าใช้จ่าย" id="" name="" readonly
                                            class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                                    </div>

                                    <div class="w-full mt-2">
                                        <label for="university" class="text-lg font-semibold text-blue-700 mb-2 block">
                                            สถานศึกษาที่สอบติด <span class="text-red-500 text-sm"></span>
                                        </label>
                                        <div class="grid grid-cols-1 md:grid-cols-full gap-4">
                                            <input type="text" placeholder="สถานศึกษาที่สอบติด" id="" name="" readonly
                                                class="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition duration-200">
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                                        <div>
                                            <label class="text-lg font-semibold text-blue-700 mb-2 block" for="faculty">
                                                คณะ <span class="text-red-500"></span>
                                            </label>
                                            <input type="text" id="faculty" name="faculty" readonly
                                                class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                                                placeholder="คณะ">
                                        </div>

                                        <div>
                                            <label class="text-lg font-semibold text-blue-700 mb-2 block" for="major">
                                                สาขา <span class="text-red-500"></span>
                                            </label>
                                            <input type="text" id="major" name="major" readonly
                                                class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                                                placeholder="สาขา">
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                        <div class="relative">
                                            <label class="text-lg font-semibold text-blue-700 mb-2 block" for="floor">
                                                ชั้นปี <span class="text-red-500"></span>
                                            </label>
                                            <input type="text" id="floor" name="floor" readonly
                                                class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                                                placeholder="ชั้นปี">
                                        </div>
                                        <div>
                                            <label class="text-lg font-semibold text-blue-700 mb-2 block" for="year">
                                                ปีการศึกษา <span class="text-red-500"></span>
                                            </label>
                                            <input type="text" id="floor" name="floor" readonly
                                                class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                                                placeholder="ปีการศึกษา">
                                        </div>
                                        <div>
                                            <label class="text-lg font-semibold text-blue-700 mb-2 block" for="gpa">
                                                คะแนนเฉลี่ย (จบ ม.6 ใส่เกรดจากใบปพ.1/รบ.1) <span
                                                    class="text-red-500"></span>
                                            </label>
                                            <div class="relative">
                                                <input type="number" id="gpa" name="gpa" v-model.number="gpa" max="4"
                                                    @input="validateGPA"
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                                                    placeholder="กรอกเกรดเฉลี่ย" readonly />

                                                <div class="absolute right-2 top-1/2 -translate-y-1/2">
                                                    <button
                                                        class="inline-flex  items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                        <svg v-if="!selectedFile" class="w-4 h-4" fill="none"
                                                            stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2" d="M12 4v16m0-16l-4 4m4-4l4 4" />
                                                        </svg>
                                                        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                                                ค่าเล่าเรียน <span class="text-red-500"></span>
                                            </label>
                                            <div class="relative">
                                                <input type="number" id="tcas" name="tcas" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                                                    placeholder="ค่าเล่าเรียน (บาท/เทอม)">

                                                <div class="absolute right-2 top-1/2 -translate-y-1/2">
                                                    <button
                                                        class="inline-flex  items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                        <svg v-if="!selectedFile" class="w-4 h-4" fill="none"
                                                            stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2" d="M12 4v16m0-16l-4 4m4-4l4 4" />
                                                        </svg>
                                                        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span class="text-sm font-medium">
                                                            ไฟล์ค่าเทอม
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    <br>
                                    <div
                                        class="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md">
                                        <h4 class="text-base md:text-lg font-semibold text-blue-700 mb-4">
                                            ข้อมูลเกียรติบัตร</h4>
                                        <div class="space-y-4">
                                            <div
                                                class="bg-white rounded-xl p-3 md:p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                                                <div
                                                    class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
                                                    <div
                                                        class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm md:text-base">
                                                        1
                                                    </div>

                                                    <input type="text" placeholder="ระดับ" readonly
                                                        class="w-full md:w-4/12 px-3 md:px-4 h-10 md:h-12 text-base md:text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500">

                                                    <input type="text" readonly
                                                        class="w-full md:w-4/12 px-3 md:px-4 h-10 md:h-12 text-base md:text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500"
                                                        placeholder="ระบุชื่อรายการเกียรติบัตร" />

                                                    <div class="w-full md:w-auto flex items-center">
                                                        <button @click="handleDownload"
                                                            class="inline-flex  items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 "
                                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                            </svg>
                                                            <span>ไฟล์เกียรติบัตร</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap w-full gap-4 mt-2">
                                        <div class="w-full sm:w-full lg:w-full">
                                            <h3 class="text-xl font-semibold text-blue-900 mb-2 flex items-center"
                                                for="">
                                                ที่อยู่ตามภูมิลำเนาเดิม <span class="text-red-500 text-sm"></span>
                                            </h3>
                                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        บ้านเลขที่ <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="บ้านเลขที่" id="homeid" readonly
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>

                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        หมู่ที่ <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="หมู่ที่" id="grouphomeid" readonly
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>

                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        ตรอก/ซอย <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="ตรอก/ซอย" id="soi" name="soi"
                                                        readonly
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>

                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        ถนน <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="ถนน" id="road" name="road" readonly
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>
                                            </div>

                                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        จังหวัด <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="จังหวัด" id="province" readonly
                                                        name="province"
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>

                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        เขต/อำเภอ <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="อำเภอ" id="district" name="district"
                                                        readonly
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>

                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        แขวง/ตำบล <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="ตำบล" id="subdistrict" readonly
                                                        name="subdistrict"
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>

                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        รหัสไปรษณีย์ <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="รหัสไปรษณีย์" id="zip_code" readonly
                                                        name="zip_code"
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>
                                            </div>
                                            <h3 class="text-xl font-semibold text-blue-900 mb-2 flex items-center mt-2"
                                                for="currentAddress">
                                                ที่อยู่ปัจจุบันของผู้ขอรับทุน <span class="text-red-500 text-sm"></span>
                                            </h3>
                                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        บ้านเลขที่ <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="บ้านเลขที่" id="homeid" readonly
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>

                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        หมู่ที่ <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="หมู่ที่" id="grouphomeid" readonly
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>

                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        ตรอก/ซอย <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="ตรอก/ซอย" id="soi" name="soi"
                                                        readonly
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>

                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        ถนน <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="ถนน" id="road" name="road" readonly
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>
                                            </div>

                                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        จังหวัด <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="จังหวัด" id="province" readonly
                                                        name="province"
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>

                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        เขต/อำเภอ <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="อำเภอ" id="district" name="district"
                                                        readonly
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>

                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        แขวง/ตำบล <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="ตำบล" id="subdistrict" readonly
                                                        name="subdistrict"
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>

                                                <div class="relative group">
                                                    <label
                                                        class="block text-lg font-semibold text-blue-700 mb-2.5 transition-colors group-hover:text-blue-600">
                                                        รหัสไปรษณีย์ <span class="text-red-500 text-sm"></span>
                                                    </label>
                                                    <input type="text" placeholder="รหัสไปรษณีย์" id="zip_code" readonly
                                                        name="zip_code"
                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                                </div>
                                            </div>
                                            <div class="mt-4">
                                                <h3
                                                    class="text-lg font-semibold gap-2 text-blue-700 mb-2 flex items-center">
                                                    ค่าเช่าบ้านต่อเดือน
                                                </h3>

                                                <input type="number"
                                                    class="w-full sm:w-6/12 px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500"
                                                    placeholder="ค่าเช่าบ้านต่อเดือน" readonly />

                                                <div class="flex flex-col sm:flex-row gap-4 mt-4">
                                                    <button @click="handleDownload"
                                                        class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 "
                                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                        </svg>
                                                        <span>รูปภาพที่อยู่บ้าน</span>
                                                    </button>
                                                </div>

                                                <div class="flex flex-col sm:flex-row gap-4 mt-4">
                                                    <button @click="handleDownload"
                                                        class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 "
                                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
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
                                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <div>
                                                <label for="fatherName"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    บิดาชื่อ <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="fatherName" placeholder="ชื่อบิดา นาย" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                            <div>
                                                <label for="fatherLastName"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    นามสกุล <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="fatherLastName" placeholder="นามสกุล" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                            <div>
                                                <label for="fatherAge"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    อายุ <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="number" id="fatherAge" placeholder="อายุ" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <label for="faterJob"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    อาชีพ <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="faterJob" placeholder="อาชีพ" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                            <div>
                                                <label for="fatherWorkPlace"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    สถานที่ทำงาน <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="fatherWorkPlace" placeholder="สถานที่ทำงาน"
                                                    readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                                            <div>
                                                <label for="fatherSalary"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    รายได้ต่อเดือน <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="number" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                                                    placeholder="รายได้ต่อเดือนบิดา">
                                            </div>
                                        </div>

                                        <h3
                                            class="text-xl font-semibold text-blue-900 mt-8 mb-6 flex items-center gap-2">
                                            ข้อมูลมารดา
                                        </h3>

                                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <div>
                                                <label for="motherName"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    มารดาชื่อ นาง / นางสาว <span
                                                        class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="motherName" placeholder="ชื่อมารดา" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                            <div>
                                                <label for="motherLastname"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    นามสกุล <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="motherLastname" placeholder="นามสกุล" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                            <div>
                                                <label for="motherAge"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    อายุ <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="number" id="motherAge" placeholder="อายุ" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <label for="motherJob"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    อาชีพ <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="motherJob" placeholder="อาชีพ" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                            <div>
                                                <label for="motherWorkPlace"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    สถานที่ทำงาน <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="motherWorkPlace" placeholder="สถานที่ทำงาน"
                                                    readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                                            <div>
                                                <label for="motherSalary"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    รายได้ต่อเดือน <span class="text-red-500 text-sm align-top"></span>
                                                </label>

                                                <input type="number" id="motherSalary" name="motherSalary" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                                                    placeholder="รายได้ต่อเดือนมารดา">

                                            </div>
                                        </div>
                                        <h3
                                            class="text-xl font-semibold text-blue-900 mt-8 mb-6 flex items-center gap-2">
                                            ผู้ขอรับทุนได้รับความอุปการะเลี้ยงดูจาก
                                        </h3>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 mb-2 lg:grid-cols-3 gap-4">

                                            <div>
                                                <label for="parentName"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    ผู้ปกครองชิ่อ นาย / นาง / นางสาว <span
                                                        class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="parentName" placeholder="ชื่อผู้ปกครอง" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                            <div>
                                                <label for="parentLastname"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    นามสกุล <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="parentLastname" placeholder="นามสกุล" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                            <div>
                                                <label for="parentAge"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    อายุ <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="number" id="parentAge" placeholder="อายุ" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <label for="parentJob"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    อาชีพ <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="parentJob" placeholder="อาชีพ" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                            <div>
                                                <label for="parentWorkPlace"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    สถานที่ทำงาน <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="parentWorkPlace" placeholder="สถานที่ทำงาน"
                                                    readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                                            <div>
                                                <label for="parentSalary"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    รายได้ต่อเดือน <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="number" id="parentSalary" name="parentSalary" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500"
                                                    placeholder="รายได้ต่อเดือนผู้ปกครอง">
                                            </div>
                                        </div>

                                        <h3
                                            class="text-xl font-semibold text-blue-900 mt-8 mb-6 flex items-center gap-2">
                                            ข้อมูลพี่น้อง
                                        </h3>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <div>
                                                <label for="siblingCount"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    ผู้สมัครมีพี่น้อง (รวมตัวเอง) <span
                                                        class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="siblingCount" placeholder="จำนวนพี่น้อง" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                            <div>
                                                <label for="siblingMan"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    ชาย (คน) <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="siblingMan" placeholder="ชาย (คน)" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                            <div>
                                                <label for="siblingWomen"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    หญิง (คน) <span class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="siblingWomen" placeholder="หญิง (คน)" readonly
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <label for="siblingCountRegister"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    ผู้สมัครเป็นบุตรคนที่ <span
                                                        class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="siblingCountRegister" readonly
                                                    placeholder="ผู้สมัครเป็นบุตรคนที่"
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                            <div>
                                                <label for="siblingStudying"
                                                    class="block text-lg font-semibold text-blue-700 mb-2">
                                                    จำนวนพี่น้องที่กำลังศึกษาอยู่ (รวมตัวเอง)<span
                                                        class="text-red-500 text-sm align-top"></span>
                                                </label>
                                                <input type="text" id="siblingStudying" readonly
                                                    placeholder="จำนวนพี่น้องที่กำลังศึกษาอยู่"
                                                    class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">
                                            </div>

                                        </div>
                                        <SiblingInfoFormConponent />

                                        <div class="mt-6">
                                            <h4
                                                class="text-xl font-semibold text-blue-900 mt-8 mb-6 flex items-center gap-2">
                                                ข้อมูลสุขภาพร่างกายของสมาชิกในครอบครัว
                                            </h4>

                                            <h4 class="text-sm font text-red-700 mb-3">
                                                สุขภาพของบิดา/มารดา/ผู้ปกครอง/พี่น้อง/ตนเอง เมื่อเจ็บป่วยมีค่าใช้จ่าย
                                                เป็นอุปสรรคต่อการศึกษา
                                            </h4>

                                            <div
                                                class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 shadow-md">
                                                <div class="space-y-6">
                                                    <div class="relative">
                                                        <div
                                                            class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                                            <div class="flex items-center mb-4">
                                                                <div
                                                                    class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-4 text-lg">
                                                                    1
                                                                </div>
                                                                <h3 class="text-lg font-semibold text-gray-800">
                                                                    รายละเอียด
                                                                </h3>
                                                            </div>

                                                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div>
                                                                    <label
                                                                        class="block text-sm font-medium text-gray-600 mb-2">
                                                                        ผู้ป่วย
                                                                    </label>
                                                                    <input type="text" readonly
                                                                        class="w-full px-4 h-12 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none pr-[120px] transition-all duration-200 hover:border-blue-500">

                                                                    <label
                                                                        class="block text-sm font-medium text-gray-600 mb-2">
                                                                        อาการ
                                                                    </label>

                                                                    <textarea readonly
                                                                        class="w-full md:w-12/12 px-3 md:px-4 h-40 text-base md:text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 hover:border-blue-500"
                                                                        rows="5" cols="50" placeholder=""
                                                                        maxlength="250"></textarea>
                                                                </div>

                                                                <div class="flex flex-row gap-4">
                                                                    <div class="flex-1 relative">
                                                                        <label
                                                                            class="block text-sm font-medium text-gray-600 mb-2">
                                                                            รูปผู้ป่วย
                                                                        </label>
                                                                        <button @click="handleDownload"
                                                                            class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                class="h-5 w-5 " fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor">
                                                                                <path stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                                            </svg>
                                                                            <span>รูปผู้ป่วย</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="flex-1 relative">
                                                                        <label
                                                                            class="block text-sm font-medium text-gray-600 mb-2">
                                                                            ใบรับรองแพทย์
                                                                        </label>
                                                                        <button @click="handleDownload"
                                                                            class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                class="h-5 w-5 " fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor">
                                                                                <path stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                                            </svg>
                                                                            <span>ใบรับรองแพทย์</span>
                                                                        </button>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <!-- <h3 class="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
                                            สุขภาพร่างกายของสมาชิกในครอบครัวที่เจ็บป่วยหรือทุพพลภาพ
                                        </h3>

                                        <h4 class="text-lg font-semibold text-blue-700 mb-3">
                                            ข้อมูลสุขภาพร่างกายของสมาชิกในครอบครัว
                                        </h4> -->

                                        <!-- <div
                                            class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 shadow-md">
                                            <div class="space-y-6">

                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import SiblingInfoFormConponent from './SiblingInfoFormConponent.vue';

// import { DownloadIcon } from 'lucide-vue-next';

import logoUrl from '@/assets/picture/GLJ_Logo.png';

const refexample = ref('ตัวอย่าง');

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