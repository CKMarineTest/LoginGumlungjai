<template>
  <div class="bg-blue-100" v-for="(data) in dataArray" :key="data.idcard">
    <div class="flex justify-center items-center py-10">
      <div ref="contentRef" class="pdf-content w-[210mm] bg-white p-6 shadow-md rounded-xl">
        <img src="../assets/picture/GLJ_H.png" style="width: auto; height: 80px" />
        <header class="text-center mb-6">
          <strong>เลขที่ใบสมัคร</strong>
          <span class="bg-yellow-200 px-2 rounded-md">0001/{{ currentAcademicYear }}</span>
          <h4 class="text-md font-semibold">ใบสมัครขอรับทุนการศึกษา</h4>
          <p class="text-sm">
            ทุนมูลนิธิกำลังใจระดับปริญญาตรี ประจำปีการศึกษา {{ currentAcademicYear }}
          </p>
        </header>

        <section class="text-left text-sm leading-6">
          <p>
            <b class="underline">คำชี้แจง</b>&nbsp;กรอกข้อความลงในช่องว่าง
            และ/หรือ ใส่เครื่องหมาย ✓ ลงใน []
            ที่อยู่ข้างหน้าข้อความตามความเป็นจริงครบทุกข้อหากพบว่าข้อมูลดังกล่าวไม่เป็นความจริง
            มูลนิธิกำลังใจมีสิทธิ์ระงับทุนนั้นๆ ทันที <br />
            (ผู้สมัครขอรับทุนจะต้องกรอกข้อมูล<b class="underline">ด้วยตัวเอง</b>อย่างละเอียดทั้งหมดเท่าที่กรอกได้)
          </p>
          <hr class="border-gray-300 mb-4 mt-2" />
          <p><b>โครงการ</b>&nbsp;คุณหมอของกำลังใจ</p>
          <p>
            <b class="underline">ส่วนที่ 1</b>&nbsp;ข้อมูลส่วนตัวของผู้สมัครรับทุนการศึกษา
          </p>
          <div>
            <div class="flex items-center gap-2 mb-3">
              <span class="font-bold">1.</span>
              <div class="absolute ml-4">
                <span class="w-20 text-right">ชื่อ:</span>
                <span class="w-40 inline-block ml-2">{{ data.FirstName }}</span>
              </div>
              <div class="absolute ml-80">
                <span class="w-20 text-right">นามสกุล:</span>
                <span class="w-40 inline-block ml-2">{{ data.LastName }}</span>
              </div>
              <div class="absolute ml-144">
                <span class="w-20 text-right">ชื่อเล่น:</span>
                <span class="w-40 inline-block ml-2">{{ data.NickName }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-6">
              <div class="absolute ml-4">
                <span class="w-20 text-right">วัน/เดือน/ปีเกิด:</span>
                <span class="w-40 inline-block ml-2">15 มกราคม 2545</span>
              </div>
              <div class="absolute ml-80">
                <span class="w-20 text-right">อายุ:</span>
                <span class="w-40 inline-block ml-2">{{ data.Age }} ปี</span>
              </div>
              <div class="absolute ml-128">
                <span class="w-20 text-right">เบอร์โทรศัพท์ติดต่อ:</span>
                <span class="w-40 inline-block ml-2">{{ data.Mobile }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-6">
              <div class="absolute ml-4">
                <span class="w-20 text-right">เบอร์โทรศัพท์ติดต่อ(สำรอง):</span>
                <span class="w-40 inline-block ml-2">{{ data.Mobile2 }}</span>
              </div>
              <div class="absolute ml-80">
                <span class="w-20 text-right">Email:</span>
                <span class="w-40 inline-block ml-2">{{ data.email }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-6">
              <div class="absolute ml-4">
                <span class="w-20 text-right">ID LINE:</span>
                <span class="w-40 inline-block ml-2">{{ data.lineId }}</span>
              </div>
              <div class="absolute ml-80">
                <span class="w-20 text-right">Facebook:</span>
                <span class="w-40 inline-block ml-2">{{ data.facebook }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-1">
              <span class="font-bold">2.</span>
              <div class="absolute ml-4">
                <span class="w-20 text-right">ความสามารถพิเศษ:</span>
                <span class="w-40 inline-block ml-2">{{ data.special }}</span>
              </div>
            </div>
            <!-- <div class="flex items-center gap-2 mt-2 mb-">
          <span class="font-bold">3.</span>
          <div class="absolute ml-4">
            <span class="w-20 text-right">สุขภาพของผู้รับทุน:</span>
            <span class="w-40 inline-block ml-2">สุขภาพสมบูรณ์แข็งแรง</span>
          </div>
        </div> -->

            <div class="flex items-center gap-2 mt-2 mb-">
              <span class="font-bold">4.</span>
              <div class="absolute ml-4">
                <span class="w-40 text-right">งานพิเศษที่เคยทำหรือกำลังทำอยู่ (นอกเวลาการศึกษา):</span>
                <span class="w-80 inline-block ml-2">{{ data.special }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-">
              <span class="font-bold">5.</span>
              <div class="absolute ml-4">
                <span class="w-20 text-right">เคยได้รับทุนการศึกษา<b>หรือ</b>ขอรับทุนที่อื่นหรือไม่:</span>
                <span class="w-80 inline-block ml-2">{{ data.scholarshipStatus }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-">
              <span class="font-bold">6.</span>
              <div class="absolute ml-4">
                <span class="w-20 text-right">เป็นผู้กู้ กยศ. หรือไม่:</span>
                <span class="w-40 inline-block ml-2">{{ data.loaning }}</span>
              </div>
            </div>
            <p class="mb-1 ml-2">กู้ กยศ. เป็นค่าใช้จ่าย</p>

            <div class="flex items-center gap-2 mt-2 mb-4">
              <span class="font-bold">7.</span>
              <div class="absolute ml-4">
                <span class="w-20 text-right">สถานศึกษา(ใส่มหาวิทยาลัยที่สอบติด):</span>
                <span class="w-80 inline-block ml-2">{{ data.universityName }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-6">
              <div class="absolute ml-4">
                <span class="w-20 text-right">ชั้น:</span>
                <span class="w-80 inline-block ml-2">ปี {{ data.floor }}</span>
              </div>
              <div class="absolute ml-96">
                <span class="w-20 text-right">ปีการศึกษา:</span>
                <span class="w-40 inline-block ml-2">{{ currentAcademicYear }}</span>
              </div>
              <div class="absolute ml-144">
                <span class="w-20 text-right">คะแนนเฉลี่ย:</span>
                <span class="w-40 inline-block ml-2">{{ data.GPA }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-6">
              <div class="absolute ml-4">
                <span class="w-20 text-right">คณะ:</span>
                <span class="w-80 inline-block ml-2">{{ data.faculty }}</span>
              </div>
              <div class="absolute ml-96">
                <span class="w-20 text-right">สาขา:</span>
                <span class="w-80 inline-block ml-2">{{ data.major }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-2">
              <div class="absolute ml-4">
                <span class="w-20 text-right">เบอร์โทรศัพท์:</span>
                <span class="w-20 inline-block ml-2">{{ data.Mobile }}</span>
              </div>
              <div class="absolute ml-96">
                <span class="w-20 text-right">Email:</span>
                <span class="w-20 inline-block ml-2">{{ data.email }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4">
              <span class="font-bold">8.</span>
              <div class="absolute ml-4">
                <span class="w-20 text-right">ที่อยู่อาศัยตามภูมิลำเนาเดิม</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4 mb-5">
              <div class="absolute ml-4 mb-2">
                <span class="w-20 text-right">บ้านเลขที่:</span>
                <span class="w-20 inline-block ml-2">{{ data.permanentHomeid }}</span>
              </div>
              <div class="absolute ml-32 mb-2">
                <span class="w-20 text-right">หมู่ที่:</span>
                <span class="w-20 inline-block ml-2">{{ data.permanentGroupHomeid }}</span>
              </div>
              <div class="absolute ml-64 mb-2">
                <span class="w-20 text-right">ตรอก/ซอย:</span>
                <span class="w-20 inline-block ml-2">{{ data.permanentsoi }}</span>
              </div>
              <div class="absolute ml-128 mb-2">
                <span class="w-20 text-right">ถนน:</span>
                <span class="w-20 inline-block ml-2">{{ data.permanentroad }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2">
              <div class="absolute ml-4">
                <span class="w-20 text-right">แขวง/ตำบล:</span>
                <span class="w-40 inline-block ml-2">{{ data.SubDistrict2 }}</span>
              </div>
              <div class="absolute ml-64">
                <span class="w-20 text-right">เขต/อำเภอ:</span>
                <span class="w-40 inline-block ml-2">{{ data.District2 }}</span>
              </div>
              <div class="absolute ml-128">
                <span class="w-20 text-right">จังหวัด:</span>
                <span class="w-20 inline-block ml-2">{{ data.Province2 }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4">
              <div class="absolute ml-4 mt-4">
                <span class="w-20 text-right">รหัสไปรษณีย์:</span>
                <span class="w-10 inline-block ml-2">{{ data.zipcode2 }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4">
              <span class="font-bold">9.</span>
              <div class="absolute ml-4">
                <span class="w-20 text-right">ที่อยู่อาศัยปัจจุบัน</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-5">
              <div class="absolute ml-4">
                <span class="w-20 text-right">บ้านเลขที่:</span>
                <span class="w-10 inline-block ml-2">{{ data.currentHomeid }}</span>
              </div>
              <div class="absolute ml-32">
                <span class="w-20 text-right">หมู่ที่:</span>
                <span class="w-10 inline-block ml-2">{{ data.currentGroupHomeid }}</span>
              </div>
              <div class="absolute ml-64">
                <span class="w-20 text-right">ตรอก/ซอย:</span>
                <span class="w-10 inline-block ml-2">{{ data.currentsoi }}</span>
              </div>
              <div class="absolute ml-128">
                <span class="w-20 text-right">ถนน:</span>
                <span class="w-10 inline-block ml-2">{{ data.currentroad }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2">
              <div class="absolute ml-4">
                <span class="w-20 text-right">แขวง/ตำบล:</span>
                <span class="w-20 inline-block ml-2">{{ data.SubDistricts }}</span>
              </div>
              <div class="absolute ml-64">
                <span class="w-20 text-right">เขต/อำเภอ:</span>
                <span class="w-40 inline-block ml-2">{{ data.Districts }}</span>
              </div>
              <div class="absolute ml-128">
                <span class="w-20 text-right">จังหวัด:</span>
                <span class="w-10 inline-block ml-2">{{ data.Province }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4 mb-3">
              <div class="absolute ml-4">
                <span class="w-20 text-right mt-4">รหัสไปรษณีย์:</span>
                <span class="w-10 inline-block ml-2">{{ data.zipcode1 }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4 mb-3">
              <span class="font-bold">10.</span>
              <div class="absolute ml-6">
                <span class="w-20 text-right">บิดาของผู้รับทุน</span>
                <span class="w-30 inline-block ml-2"></span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-5">
              <div class="absolute ml-6">
                <span class="w-20 text-right">บิดาชื่อนาย:</span>
                <span class="w-40 inline-block ml-2">{{ data.fatherName }}</span>
              </div>
              <div class="absolute ml-96">
                <span class="w-20 text-right">นามสกุล:</span>
                <span class="w-40 inline-block ml-2">{{ data.fatherLastName }}</span>
              </div>
              <div class="absolute ml-144">
                <span class="w-20 text-right">อายุ:</span>
                <span class="w-10 inline-block ml-2">{{ data.fatherAge }} ปี</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-5">
              <div class="absolute ml-6">
                <span class="w-20 text-right">อาชีพ:</span>
                <span class="w-40 inline-block ml-2">{{ data.fatherJob }}</span>
              </div>
              <div class="absolute ml-64">
                <span class="w-20 text-right">สถานที่ทำงาน:</span>
                <span class="w-40 inline-block ml-2">{{ data.fatherWorkPlace }}</span>
              </div>
              <div class="absolute ml-144">
                <span class="w-20 text-right">รายได้ต่อเดือน:</span>
                <span class="w-20 inline-block ml-2">{{ data.fatherSalary }} บาท</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4 mb-3">
              <span class="font-bold">11.</span>
              <div class="absolute ml-6">
                <span class="w-20 text-right">มารดาของผู้รับทุน</span>
                <span class="w-30 inline-block ml-2"></span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-5">
              <div class="absolute ml-6">
                <span class="w-20 text-right">มารดาชื่อ นาง/นางสาว:</span>
                <span class="w-40 inline-block ml-2">{{ data.motherName }}</span>
              </div>
              <div class="absolute ml-96">
                <span class="w-20 text-right">นามสกุล:</span>
                <span class="w-40 inline-block ml-2">{{ data.motherLastName }}</span>
              </div>
              <div class="absolute ml-144">
                <span class="w-20 text-right">อายุ:</span>
                <span class="w-10 inline-block ml-2">{{ data.motherAge }} ปี</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-5">
              <div class="absolute ml-6">
                <span class="w-20 text-right">อาชีพ:</span>
                <span class="w-40 inline-block ml-2">{{ data.motherJob }}</span>
              </div>
              <div class="absolute ml-64">
                <span class="w-20 text-right">สถานที่ทำงาน:</span>
                <span class="w-40 inline-block ml-2">{{ data.motherWorkPlace }}</span>
              </div>
              <div class="absolute ml-144">
                <span class="w-20 text-right">รายได้ต่อเดือน:</span>
                <span class="w-20 inline-block ml-2">{{ data.motherSalary }} บาท</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4 mb-3">
              <span class="font-bold">12.</span>
              <div class="absolute ml-6">
                <span class="w-20 text-right">ผู้ขอรับทุนอยู่ในการดูและของผู้ปกครอง
                  (บุคคลอื่นกรณีไม่ใช่บิดา-มารดา)</span>
                <span class="w-30 inline-block ml-2"></span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-5">
              <div class="absolute ml-6">
                <span class="w-20 text-right">ผู้ปกครองชื่อ นาย/นาง/นางสาว:</span>
                <span class="w-40 inline-block ml-2">{{ data.parentName }}</span>
              </div>
              <div class="absolute ml-96">
                <span class="w-20 text-right">นามสกุล:</span>
                <span class="w-40 inline-block ml-2">{{ data.parentLastName }}</span>
              </div>
              <div class="absolute ml-144">
                <span class="w-20 text-right">อายุ:</span>
                <span class="w-10 inline-block ml-2">{{ data.parentAge }} ปี</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-2 mb-5">
              <div class="absolute ml-6">
                <span class="w-20 text-right">อาชีพ:</span>
                <span class="w-40 inline-block ml-2">{{ data.parentJob }}</span>
              </div>
              <div class="absolute ml-64">
                <span class="w-20 text-right">สถานที่ทำงาน:</span>
                <span class="w-40 inline-block ml-2">{{ data.parentWorkPlace }}</span>
              </div>
              <div class="absolute ml-144">
                <span class="w-20 text-right">รายได้ต่อเดือน:</span>
                <span class="w-20 inline-block ml-2">{{ data.parentSalary }} บาท</span>
              </div>
            </div>
            <br><br>
            <div class="flex items-center gap-2 mt-4 mb-3">
              <span class="font-bold">13.</span>
              <div class="absolute ml-6">
                <span class="w-20 text-right">ผู้สมัครมีพี่น้อง (รวมตัวเอง):</span>
                <span class="w-20 inline-block ml-2">{{ data.siblingCount }} คน</span>
              </div>

              <div class="absolute ml-64">
                <span class="w-20 text-right">เป็นชาย:</span>
                <span class="w-20 inline-block ml-2">{{ data.siblingMan }} คน</span>
              </div>

              <div class="absolute ml-96">
                <span class="w-20 text-right">เป็นหญิง:</span>
                <span class="w-20 inline-block ml-2">{{ data.siblingWomen }} คน</span>
              </div>

              <div class="absolute ml-128">
                <span class="w-20 text-right">ผู้สมัครเป็นบุตรคนที่:</span>
                <span class="w-20 inline-block ml-2">{{ data.siblingCountRegister }} คน</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4 mb-3">
              <div class="absolute ml-6">
                <span class="w-20 text-right">จำนวนพี่น้องที่กำลังศึกษาอยู่(รวมตัวเอง):</span>
                <span class="w-20 inline-block ml-2">{{ data.siblingStudying }} คน</span>
              </div>
            </div>
            <br>
            <div class="mb-4 mt-4">
              <p class="font-bold text-gray-800">
                โปรดระบุเกี่ยวกับพี่น้องของผู้ขอรับทุนรวมตัวเองตามลำดับในตารางดังนี้
              </p>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr>
                    <th
                      class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 text-center w-16">
                      ลำดับ
                    </th>
                    <th class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                      ชื่อ-สกุล
                    </th>
                    <th class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                      ระดับการศึกษา
                    </th>
                    <th class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                      อาชีพ/รายได้ต่อเดือน
                    </th>
                    <th class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                      สถานะภาพสมรส/โสด
                    </th>
                  </tr>
                </thead>
                <tbody>

                  <tr v-for="(item, index) in siblingArray" :key="index">
                    <td class="border border-gray-300 px-4 py-3 text-center">
                      {{ index + 1 }}
                    </td>
                    <td class="border border-gray-300 px-4 py-3">{{ item.sb_name }}</td>
                    <td class="border border-gray-300 px-4 py-3">{{ item.education }}</td>
                    <td class="border border-gray-300 px-4 py-3">{{ item.occupation }} / {{ item.income }} บาท</td>
                    <td class="border border-gray-300 px-4 py-3">{{ item.sb_status_text }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="flex items-center gap-2 mt-4 mb-3">
              <span class="font-bold">14.</span>
              <div class="absolute ml-6">
                <span class="w-20 text-right">ผู้ข้อรับทุนได้รับความอุปการะเลี้ยงดูจาก</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4 mb-3">
              <div class="absolute ml-6">
                <span class="w-20 text-right">-</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4 mb-3">
              <span class="font-bold">15.</span>
              <div class="absolute ml-6">
                <span class="w-20 text-right">การเข้าร่วมกิจกรรมจิตอาสาต่างๆ
                  ของสถานศึกษาหรือบำเพ็ญประโยชน์เพื่อสังคม โปรดระบุโดยย่อ</span>
              </div>
            </div>
            <div class="flex items-center gap-2 mt-4 mb-3">
              <div class="absolute ml-6">
                <span class="w-100 text-right">-</span>
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4 mb-3">
              <span class="font-bold">16.</span>
              <div class="absolute ml-6">
                <span class="w-20 text-right">กรอกข้อมูลในตารางแบบประเมินข้อมูลพื้นฐาน
                  พร้อมแนบเอกสารตามรายละเอียดแต่ละข้อ</span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 mt-4 mb-2">
            <span class="font-bold">17.</span>
            <div class="absolute ml-6">
              <span class="w-50 text-right">ให้ผู้ขอรับทุนแสดงความคิดเห็น
                "ทำไมข้าพเจ้าควรได้รับทุนการศึกษาโครงการนี้"</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="absolute ml-6">
              <span
                class="w-50 text-right">(บรรยายรายละเอียดชัดเจนตามความเป็นจริงเพื่อประกอบการพิจารณาทุนการศึกษา)</span>
            </div>
          </div>

          <div class="flex items-center gap-2 mt-4 mb-3">
            <div class="absolute ml-24">
              <span class="w-50 text-right">-ทุนกำลังใจสร้างครูของชาติ :
                เขียนเรียงความด้วยลายมือและสแกนเอกสารแนบไฟล์</span>
            </div>
          </div>

          <div class="flex items-center gap-2 mt-4 mb-3">
            <div class="absolute ml-24">
              <span class="w-50 text-right">-ทุน Scholars,คุณหมอของกำลังใจ,กำลังใจให้พยาบาล :
                พิมพ์เรียงความ</span>
            </div>
          </div>

          <div class="flex items-center gap-2 mt-4 mb-3">
            <span class="font-bold">ส่วนที่ 2 การเขียนเรียงความ</span>
          </div>
          <div class="flex items-center gap-2 mt-4">
            <span class="font-bold">คำชี้แจง</span>
            <div class="absolute ml-14">
              <span class="w-50 text-right">1.ทุนกำลังใจสร้างครูของชาติ
                (เขียนด้วยลายทือของตนเองเท่านั้นและสแกนแนบไฟล์)</span>
            </div>
          </div>

          <div class="flex items-center gap-2 mt-2 mb-3">
            <div class="absolute ml-14">
              <span class="w-50 text-right">2.ทุน Scholars,คุณหมอของกำลังใจ,กำลังใจให้พยาบาล :
                พิมพ์เรียงความและสแกนแนบไฟล์</span>
            </div>
          </div>
          <div class="flex items-center gap-2 mt-5 mb-3">
            <div class="absolute ml-14">
              <span class="w-50 text-right">3.เรียงความจำนวน 1 เรื่องตามหัวข้อที่กำหนด</span>
            </div>
          </div>
          <div class="flex items-center gap-2 mt-4">
            <div class="absolute">
              <span class="w-50 text-right">1)เรียงความเรื่อง</span>
            </div>
          </div>
          <br />
          <div class="flex items-center gap-2 mt-4">
            <div class="absolute">
              <span class="w-50 text-right">3)แนบเอกสารสำคัญอ่านๆ ดังต่อไปนี้</span>
            </div>
          </div>

          <div class="flex items-center gap-2 mt-6">
            <div class="absolute ml-6">
              <span class="w-50 text-right">4.1 รูปถ่ายของผู้ขอรับทุน ขนาด 1 นิ้วจำนวน 1 รูป</span>
            </div>
          </div>

          <div class="flex items-center gap-2 mt-6">
            <div class="absolute ml-6">
              <span class="w-50 text-right">4.1 สำเนาบัตรประชาชน จำนวน 1 ฉบับ พร้อมรับรองสำเนาถูกต้อง</span>
            </div>
          </div>

          <div class="flex items-center gap-2 mt-6">
            <div class="absolute ml-6">
              <span class="w-50 text-right">4.3 สำเนาทะเบียนบ้าน จำนวน 1 ฉบับ พร้อมรับรองสำเนาถูกต้อง</span>
            </div>
          </div>
          <br />
          <div class="card shadow-md border border-gray-200 rounded-lg p-5 m-5 h-[700px] flex flex-col">
            <div class="flex-1 flex items-center justify-center">
              <button
                @click="handleDownLoad(data.DocFile1Path)"
                class="w-full h-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium rounded-lg transition duration-300 flex flex-col items-center justify-center">
                <svg class="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4">
                  </path>
                </svg>
                <span class="text-lg">เอกสารสำเนาบัตรประชาชน</span>
              </button>
            </div>
            <div class="border-t border-gray-200 my-3 w-full"></div>

            <div class="flex-1 flex items-center justify-center">
              <button
                @click="handleDownLoad(data.DocFile2Path)"
                class="w-full h-full bg-green-50 hover:bg-green-100 text-green-700 font-medium rounded-lg transition duration-300 flex flex-col items-center justify-center">
                <svg class="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4">
                  </path>
                </svg>
                <span class="text-lg">เอกสารสำเนาทะเบียนบ้าน</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
    <center>
      <button @click="generatePDF" class="ml-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
        ดาวน์โหลด PDF
      </button>
    </center>
    <br />
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted, computed } from "vue";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from 'axios';

import TableDataComponent from "./TableDataComponent.vue";

import { useRoute } from 'vue-router';

const route = useRoute();

// import { Square } from 'lucide-vue-next';

const idcard = route.params.idcard;

const contentRef = ref(null);

const generatePDF = async () => {
  if (!contentRef.value) return;

  try {
    const pdf = new jsPDF("p", "mm", "a4");
    const canvas = await html2canvas(contentRef.value, { scale: 2 });

    const imgWidth = 190;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let yPosition = 0;
    let heightLeft = imgHeight;

    while (heightLeft > 0) {
      const sectionHeight = Math.min(heightLeft, pageHeight - 20);
      const canvasSection = document.createElement("canvas");
      const ctx = canvasSection.getContext("2d");

      canvasSection.width = canvas.width;
      canvasSection.height = (sectionHeight * canvas.width) / imgWidth;

      ctx.drawImage(
        canvas,
        0,
        yPosition * (canvas.height / imgHeight),
        canvas.width,
        canvasSection.height,
        0,
        0,
        canvas.width,
        canvasSection.height
      );

      const sectionImgData = canvasSection.toDataURL("image/png");

      pdf.addImage(sectionImgData, "PNG", 10, 10, imgWidth, sectionHeight);

      heightLeft -= sectionHeight;
      yPosition += sectionHeight;

      if (heightLeft > 0) {
        pdf.addPage();
      }
    }

    pdf.save("scholarshipform.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};

const dataArray = ref([]);
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
      dataArray.value = response.data.data.main;
      siblingArray.value = response.data.data.siblings;
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

const currentAcademicYear = computed(() => {
  const now = new Date();
  const currentYear = now.getFullYear() + 543;
  return now.getMonth() >= 7 ? currentYear + 1 : currentYear;
});

const imageUrl = "https://web.mrgshrimp.com/thegiftapi/";

const handleDownLoad = (filePath) => {
  try {
    console.log(filePath);

    if (!filePath) {
      throw new Error("File path is required");
    }

    const downloadUrl = imageUrl ? imageUrl + filePath : filePath;

    if (!downloadUrl) {
      throw new Error("invalid file URL");
    }

    window.open(downloadUrl, "_blank");
  } catch (error) {
    console.log("Error opening file in new tab:", error.message);
    alert(`Failed to open file: ${error.message}`)
  }
}

onMounted(() => {
  fetchData();
});
</script>

<style>
.field {
  display: inline-block;
  width: 80px;
}

.dot {
  display: inline-block;
  width: 150px;
}
</style>
