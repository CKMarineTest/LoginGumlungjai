<template>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th
            class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
          >
            องค์ประกอบ
          </th>
          <th
            class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
          >
            ตัวชี้วัด
          </th>
          <th
            class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
            colspan="2"
          >
            ผู้สมัครกรอกข้อมูล
          </th>
          <th
            class="border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
          >
            หลักฐานที่ต้องแนบมา
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td class="border border-gray-300 px-4 py-3">{{ row.component }}</td>
          <td class="border border-gray-300 px-4 py-3">{{ row.indicator }}</td>
          <td class="border border-gray-300 px-4 py-3" colspan="2">
            <template v-if="Array.isArray(row.applicantData)">
              <div
                v-for="(item, idx) in row.applicantData"
                :key="idx"
                class="mb-2"
              >
                {{ item }}
                <hr class="border border-gray-300" />
              </div>
            </template>
            <template v-else>
              {{ row.applicantData }}
            </template>
          </td>
          <td class="border border-gray-300 px-4 py-3">
            <template v-if="Array.isArray(row.requiredDocs)">
              <div
                v-for="(doc, idx) in row.requiredDocs"
                :key="idx"
                class="mb-2"
              >
                - {{ doc }}
              </div>
            </template>
            <template v-else>
              {{ row.requiredDocs }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tableData = ref([
  {
    component: "1.1 ผลสัมฤทธิ์ทางการเรียน (5 คะแนน)",
    indicator: "ผลการเรียนเฉลี่ย",
    applicantData: ["3.51 - 4.00", "3.01-3.50", "2.50 - 3.00"],
    requiredDocs: "ใบแสดงผลการเรียน",
  },
  {
    component: "1.2 รางวัลหรือเกียรติบัตรที่ได้รับ (5 คะแนน)",
    indicator: "รางวัลเกียรติบัตร",
    applicantData: ["ระดับจังหวัด", "ระดับภูมิภาค", "ระดับประเทศหรือสูงกว่า"],
    requiredDocs: "เกียรติบัตรที่ได้รับ",
  },
  {
    component: "1.3 ฐานะทางเศรษฐกิจ ของบิดา มารดา ผู้ปกครอง",
    indicator: "รายได้ต่อเดือน ของบิดา มารดา และ ผู้ปกครอง",
    applicantData: "xxxxx บาท/เดือน",
    requiredDocs: [
      "สำเนาใบเสียภาษีปีล่าสุด",
      "แบบฟอร์มแสดงรายได้ที่รับรองโดย เจ้าหน้าที่ราชการระดับ 5 เซ็นรับรอง",
    ],
  },
  {
    component: "1.4 สถานที่อยู่อาศัย",
    indicator: "ค่าเช่าที่อยู่อาศัย ต่อเดือน",
    applicantData: [
      "1)อยู่กับครอบครัว หรือ ผู้ปกครอง โดยไม่เสียค่าใช้จ่าย",
      "2)เช่าอยู่ และมีค่าใช้จ่ายระบุค่าเช่าต่อเดือน",
    ],
    requiredDocs: [
      "รูปภาพที่อยู่อาศัยบ้าน",
      "หลักฐานค่าใช้จ่ายค่าเช่าออกโดยสถานที่ให้เช่า",
    ],
  },
  {
    component: "1.5 สุขภาพร่างกายของสมาชิกในครอบครัวที่เจ็บป่ายหรือทุพพลภาพ",
    indicator:
      "สุขภาพของบิดา/มารดา/ผู้ปกครอง/พี่น้อง/ตนเอง เมื่อเจ็บป่วยมีค่าใช้จ่ายเป็นอุปสรรคต่อการศึกษา",
    applicantData: [
      "ตนเองป่วย/ทุพพลภาพ",
      "บิดามารดาหรือผู้ปกครองป่วย/ทุพพลภาพ",
      "พี่น้องป่วย/ทุพพลภาพ",
      "ทุกคนสุขภาพใช้ได้",
    ],
    requiredDocs: [
        "รูปภาพผู้ป่วย",
        "ใบรับรองแพทย์"
    ],
  },
  {
    component: "1.6 ค่าเล่าเรียน",
    indicator: "ค่าใช้จ่ายในการเล่าเรียนต่อปีของตนเอง",
    applicantData: "ค่าใช้จ่ายในการเล่าเรี่ยนต่อปีของตนเอง",
    requiredDocs: [
        "หน้า TCAS ของการสมัครในคณะที่เลือกแล้วพร้อมแนบเอกสารค่าเล่าเรียน"
    ]
  }
]);
</script>
