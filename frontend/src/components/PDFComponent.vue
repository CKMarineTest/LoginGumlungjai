<template>
  <div class="flex justify-center items-center py-10">
    <div ref="contentRef" class="pdf-content w-[210mm] bg-white p-6 shadow-md">
      <img src="../assets/picture/GLJ_H.png" style="width: auto; height: 80px" />
      <header class="text-center mb-6">
        <strong>เลขที่ใบสมัคร</strong>
        <span class="bg-yellow-200 px-2 rounded-md">0001/2568</span>
        <h4 class="text-md font-semibold">ใบสมัครขอรับทุนการศึกษา</h4>
        <p class="text-sm">
          ทุนมูลนิธิกำลังใจระดับปริญญาตรี ประจำปีการศึกษา 2568
        </p>
      </header>

      <section class="text-left text-sm leading-6">
        <p>
          <b class="underline">คำชี้แจง</b>&nbsp;กรอกข้อความลงในช่องว่าง
          และ/หรือ ใส่เครื่องหมาย ✓ ลงใน []
          ที่อยู่ข้างหน้าข้อความตามความเป็นจริงครบทุกข้อหากพบว่าข้อมูลดังกล่าวไม่เป็นความจริง
          มูลนิธิกำลังใจมีสิทธิ์ระงับทุนนั้นๆ ทันที <br />
          (ผู้สมัครขอรับทุนจะต้องกรอกข้อมูล<b class="underline">ด้วยตัวเอง</b
          >อย่างละเอียดทั้งหมดเท่าที่กรอกได้)
        </p>
        <hr class="border-gray-300 mb-4 mt-2" />
        <p><b>โครงการ</b>&nbsp;คุณหมอของกำลังใจ</p>
        <p>
          <b class="underline">ส่วนที่ 1</b
          >&nbsp;ข้อมูลส่วนตัวของผู้สมัครรับทุนการศึกษา
        </p>
        <div v-for="(data) in dataArray" :key="data.idcard">
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
            <span class="w-40 text-right"
              >งานพิเศษที่เคยทำหรือกำลังทำอยู่ (นอกเวลาการศึกษา):</span
            >
            <span class="w-80 inline-block ml-2"
              >ทำงานพาร์ทไทม์ที่ร้านกาแฟ</span
            >
          </div>
        </div>

        <div class="flex items-center gap-2 mt-2 mb-">
          <span class="font-bold">5.</span>
          <div class="absolute ml-4">
            <span class="w-20 text-right"
              >เคยได้รับทุนการศึกษา<b>หรือ</b>ขอรับทุนที่อื่นหรือไม่:</span
            >
            <span class="w-80 inline-block ml-2"
              >เคยได้รับทุนจากมหาวิทยาลัย</span
            >
          </div>
        </div>

        <div class="flex items-center gap-2 mt-2 mb-">
          <span class="font-bold">6.</span>
          <div class="absolute ml-4">
            <span class="w-20 text-right">เป็นผู้กู้ กยศ. หรือไม่:</span>
            <span class="w-40 inline-block ml-2">ใช่</span>
          </div>
        </div>
        <p class="mb-1">&nbsp;&nbsp;&nbsp;&nbsp; กู้ กยศ. เป็นค่าใช้จ่าย</p>

        <div class="flex items-center gap-2 mt-2 mb-4">
          <span class="font-bold">7.</span>
          <div class="absolute ml-4">
            <span class="w-20 text-right"
              >สถานศึกษา(ใส่มหาวิทยาลัยที่สอบติด):</span
            >
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
            <span class="w-40 inline-block ml-2">{{ data.year }}</span>
          </div>
          <div class="absolute ml-144">
            <span class="w-20 text-right">คะแนนเฉลี่ย:</span>
            <span class="w-40 inline-block ml-2">{{ data.gpa }}</span>
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

        <div class="flex items-center gap-2 mt-2 mb-5">
          <div class="absolute ml-4">
            <span class="w-20 text-right">บ้านเลขที่:</span>
            <span class="w-10 inline-block ml-2">{{ data.permanentHomeid}}</span>
          </div>
          <div class="absolute ml-32">
            <span class="w-20 text-right">หมู่ที่:</span>
            <span class="w-10 inline-block ml-2">{{ data.permanentGroupHomeid}}</span>
          </div>
          <div class="absolute ml-64">
            <span class="w-20 text-right">ตรอก/ซอย:</span>
            <span class="w-10 inline-block ml-2">{{ data.permanentsoi }}</span>
          </div>
          <div class="absolute ml-128">
            <span class="w-20 text-right">ถนน:</span>
            <span class="w-10 inline-block ml-2">{{ data.permanentroad }}</span>
          </div>
        </div>

        <div class="flex items-center gap-2 mt-2">
          <div class="absolute ml-4">
            <span class="w-20 text-right">แขวง/ตำบล:</span>
            <span class="w-40 inline-block ml-2">{{ data.SubDistrict2 }}</span>
          </div>
          <div class="absolute ml-64">
            <span class="w-20 text-right">เขต/อำเภอ:</span>
            <span class="w-20 inline-block ml-2">{{ data.District2 }}</span>
          </div>
          <div class="absolute ml-96">
            <span class="w-20 text-right">จังหวัด:</span>
            <span class="w-20 inline-block ml-2">{{ data.Province2 }}</span>
          </div>
          <div class="absolute ml-144">
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
            <span class="w-20 inline-block ml-2">{{ data.currentSubDistrict }}</span>
          </div>
          <div class="absolute ml-64">
            <span class="w-20 text-right">เขต/อำเภอ:</span>
            <span class="w-10 inline-block ml-2"></span>
          </div>
          <div class="absolute ml-96">
            <span class="w-20 text-right">จังหวัด:</span>
            <span class="w-10 inline-block ml-2"></span>
          </div>
          <div class="absolute ml-144">
            <span class="w-20 text-right">รหัสไปรษณีย์:</span>
            <span class="w-10 inline-block ml-2"></span>
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
            <span class="w-20 text-right"
              >ผู้ขอรับทุนอยู่ในการดูและของผู้ปกครอง
              (บุคคลอื่นกรณีไม่ใช่บิดา-มารดา)</span
            >
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
            <span class="w-20 text-right"
              >จำนวนพี่น้องที่กำลังศึกษาอยู่(รวมตัวเอง):</span
            >
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
                  class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 text-center w-16"
                >
                  ลำดับ
                </th>
                <th
                  class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  ชื่อ-สกุล
                </th>
                <th
                  class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  ระดับการศึกษา
                </th>
                <th
                  class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  อาชีพ/รายได้/เดือน
                </th>
                <th
                  class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  สถานะภาพสมรส/โสด
                </th>
                <th
                  class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 w-24"
                >
                  จำนวนบุตร(คน)
                </th>
                <th
                  class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  หมายเหตุ
                </th>
              </tr>
            </thead>
            <tbody>

              <tr v-for="i in 5" :key="i">
                <td class="border border-gray-300 px-4 py-3 text-center">
                  {{ i }}
                </td>
                <td class="border border-gray-300 px-4 py-3"></td>
                <td class="border border-gray-300 px-4 py-3"></td>
                <td class="border border-gray-300 px-4 py-3"></td>
                <td class="border border-gray-300 px-4 py-3"></td>
                <td class="border border-gray-300 px-4 py-3"></td>
                <td class="border border-gray-300 px-4 py-3"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex items-center gap-2 mt-4 mb-3">
          <span class="font-bold">14.</span>
          <div class="absolute ml-6">
            <span class="w-20 text-right"
              >ผู้ข้อรับทุนได้รับความอุปการะเลี้ยงดูจาก</span
            >
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
            <span class="w-20 text-right"
              >การเข้าร่วมกิจกรรมจิตอาสาต่างๆ
              ของสถานศึกษาหรือบำเพ็ญประโยชน์เพื่อสังคม โปรดระบุโดยย่อ</span
            >
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
            <span class="w-20 text-right"
              >กรอกข้อมูลในตารางแบบประเมินข้อมูลพื้นฐาน
              พร้อมแนบเอกสารตามรายละเอียดแต่ละข้อ</span
            >
          </div>
        </div>
      </div>

        <table-data-component />

        <div class="flex items-center gap-2 mt-4 mb-2">
          <span class="font-bold">17.</span>
          <div class="absolute ml-6">
            <span class="w-50 text-right"
              >ให้ผู้ขอรับทุนแสดงความคิดเห็น
              "ทำไมข้าพเจ้าควรได้รับทุนการศึกษาโครงการนี้"</span
            >
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="absolute ml-6">
            <span class="w-50 text-right"
              >(บรรยายรายละเอียดชัดเจนตามความเป็นจริงเพื่อประกอบการพิจารณาทุนการศึกษา)</span
            >
          </div>
        </div>

        <div class="flex items-center gap-2 mt-4 mb-3">
          <div class="absolute ml-24">
            <span class="w-50 text-right"
              >-ทุนกำลังใจสร้างครูของชาติ :
              เขียนเรียงความด้วยลายมือและสแกนเอกสารแนบไฟล์</span
            >
          </div>
        </div>

        <div class="flex items-center gap-2 mt-4 mb-3">
          <div class="absolute ml-24">
            <span class="w-50 text-right"
              >-ทุน Scholars,คุณหมอของกำลังใจ,กำลังใจให้พยาบาล :
              พิมพ์เรียงความ</span
            >
          </div>
        </div>

        <div class="flex items-center gap-2 mt-4 mb-3">
          <span class="font-bold">ส่วนที่ 2 การเขียนเรียงความ</span>
        </div>
        <div class="flex items-center gap-2 mt-4">
          <span class="font-bold">คำชี้แจง</span>
          <div class="absolute ml-14">
            <span class="w-50 text-right"
              >1.ทุนกำลังใจสร้างครูของชาติ
              (เขียนด้วยลายทือของตนเองเท่านั้นและสแกนแนบไฟล์)</span
            >
          </div>
        </div>

        <div class="flex items-center gap-2 mt-2 mb-3">
          <div class="absolute ml-14">
            <span class="w-50 text-right"
              >2.ทุน Scholars,คุณหมอของกำลังใจ,กำลังใจให้พยาบาล :
              พิมพ์เรียงความและสแกนแนบไฟล์</span
            >
          </div>
        </div>
        <div class="flex items-center gap-2 mt-5 mb-3">
          <div class="absolute ml-14">
            <span class="w-50 text-right"
              >3.เรียงความจำนวน 1 เรื่องตามหัวข้อที่กำหนด</span
            >
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
            <span class="w-50 text-right"
              >3)แนบเอกสารสำคัญอ่านๆ ดังต่อไปนี้</span
            >
          </div>
        </div>

        <div class="flex items-center gap-2 mt-6">
          <div class="absolute ml-6">
            <span class="w-50 text-right"
              >4.1 รูปถ่ายของผู้ขอรับทุน ขนาด 1 นิ้วจำนวน 1 รูป</span
            >
          </div>
        </div>

        <div class="flex items-center gap-2 mt-6">
          <div class="absolute ml-6">
            <span class="w-50 text-right"
              >4.1 สำเนาบัตรประชาชน จำนวน 1 ฉบับ พร้อมรับรองสำเนาถูกต้อง</span
            >
          </div>
        </div>

        <div class="flex items-center gap-2 mt-6">
          <div class="absolute ml-6">
            <span class="w-50 text-right"
              >4.3 สำเนาทะเบียนบ้าน จำนวน 1 ฉบับ พร้อมรับรองสำเนาถูกต้อง</span
            >
          </div>
        </div>
        <br />
        <div
          class="card shadow-xl border border-gray-500 rounded-md p-5 m-5 h-[700px]"
        ></div>
      </section>
    </div>
  </div>
  <center>
    <button
      @click="generatePDF"
      class="ml-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
    >
      ดาวน์โหลด PDF
    </button>
  </center>
  <br />
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted } from "vue";
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

const fetchData = async () => {
  const data = new URLSearchParams();
  data.append('card_id', idcard);


  const url =
      process.env.VUE_APP_API_URL + "/efilling/GetEfilling";

    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
            if (response.data && Array.isArray(response.data.data)) {
              dataArray.value = response.data.data; // Set the data to the reactive variable
            } else {
              console.error(
                "API response is not an array or is missing the data array"
              );
            }

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
