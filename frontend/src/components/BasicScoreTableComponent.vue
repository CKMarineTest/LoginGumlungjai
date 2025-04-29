<template>
    <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white text-center">
            <h2 class="text-xl font-bold">ลงคะแนนด้านข้อมูลพื้นฐาน (30 คะแนน)</h2>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="w-1/2 py-3 px-4 bg-gray-100 font-semibold text-left border">ประเด็นการประเมิน</th>
                        <th v-for="rating in ratings" :key="rating"
                            class="p-3 bg-gray-100 text-center font-semibold border"
                            :class="rating === 'N/A' ? 'bg-gray-200' : ''">

                            {{ rating.description }} {{ rating.score }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(question, index) in questions" :key="index" class="hover:bg-blue-50">
                        <td class="py-3 px-4 border-b"><i>{{ index + 1 }})</i> {{ question }} </td>
                        <td v-for="rating in ratings" :key="rating" class="py-3 px-2 text-center border">
                            <div class="flex justify-center">
                                <label class="cursor-pointer w-6 h-6 flex items-center justify-center">
                                    <input type="radio" :name="`question-${index}`" :value="rating"
                                        v-model="scores[index]" class="w-4 h-4 text-blue-600 cursor-pointer" />
                                </label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-end items-center px-6 py-4 bg-white border-t">
                <div class="text-right">
                    <p class="text-sm text-gray-500">คะแนนรวม</p>
                    <p class="text-2xl font-bold text-blue-700">
                        {{ animatedScore.toFixed(0) }} <span class="text-base font-medium text-gray-500">/ 30</span>
                    </p>

                    <div class="w-64 h-3 mt-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                        <div class="h-full bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-500"
                            :style="{ width: `${(totalScore / 30) * 100}%` }">
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="p-4 bg-gray-50 flex justify-end gap-4">
            <button class="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition" @click="clearScore">
                ล้างค่า
            </button>
            <!-- <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                ส่งคะแนน
            </button> -->
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

import Swal from 'sweetalert2';

// const ratings = [3, 5, 7, 10,];

const ratings = [
    {
        score: 0,
    },
    {
        description: 'ควรปรับปรุง',
        score: 1,
    },
    {
        description: 'ต้องปรับปรุง',
        score: 2,
    },
    {
        description: 'พอใช้',
        score: 3,
    },
    {
        description: 'ดี',
        score: 4,
    },
    {
        description: 'ดีมาก',
        score: 5,
    }
];

const questions = [
    'ผลสัมฤทธิ์ทางการเรียน (5 คะแนน)',
    'วิสัยทัศน์ในวิชาชีพ (3 คะแนน)',
    'ฐานะทางเศรษฐกิจของบิดา/มารดา/ผู้ปกครอง (5 คะแนน)',
    'สถานที่อยู่อาศัย (5 คะแนน)',
    'สุขภาพร่างกายของสมาชิกในครอบครัวที่เจ็บป่วยหรือทุพพลภาพ (5 คะแนน)',
    'ค่าเล่าเรียน (5 คะแนน)',
    'กิจกรรมจิตอาสา (2 คะแนน)',
];

const scores = ref(Array(questions.length).fill(null));

const totalScore = computed(() => {
    return scores.value.reduce((sum, selectedRating) => {
        return sum + (selectedRating?.score || 0);
    }, 0)
})

const animatedScore = ref(0);

watch(totalScore, (newScore) => {
    // const duration = 300;
    const frames = 30;
    const increment = (newScore - animatedScore.value) / frames;
    let currentFrame = 0;

    const animate = () => {
        if (currentFrame < frames) {
            animatedScore.value += increment;
            currentFrame++;
            requestAnimationFrame(animate);
        } else {
            animatedScore.value = newScore;
        }
    };

    animate();
});

const clearScore = async () => {
    const result = await Swal.fire({
        title: '<span class="text-xl font-medium">ยืนยันที่จะล้างค่าหรือไม่</span>',
        icon: 'question',
        iconColor: '#3b82f6', // Blue icon color
        cancelButtonText: 'ยกเลิก',
        confirmButtonText: 'ล้างค่า',
        showCancelButton: true,
        background: '#f0f4ff',
        backdrop: `rgba(38, 56, 89, 0.4)`,
        allowOutsideClick: false,
        width: '32rem',
        padding: '2rem',
        customClass: {
            popup: 'rounded-2xl shadow-xl border border-blue-100',
            title: 'text-gray-700 mb-4',
            htmlContainer: 'font-light',
            actions: 'mt-6 space-x-3',
            confirmButton: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 shadow-md',
            cancelButton: 'bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 shadow-sm',
        }
    });

    if (result.isConfirmed) {
        scores.value = Array(questions.length).fill(null);

        await Swal.fire({
            title: '<span class="text-xl font-medium">ล้างค่าเสร็จสิ้น</span>',
            icon: 'success',
            iconColor: '#10b981',
            confirmButtonText: 'ตกลง',
            showConfirmButton: false,
            showCancelButton: false,
            background: '#f0f4ff',
            backdrop: `rgba(38, 56, 89, 0.4)`,
            width: '32rem',
            padding: '2rem',
            timer: 2000,
            timerProgressBar: true,
            customClass: {
                popup: 'rounded-2xl shadow-xl border border-blue-100',
                title: 'text-gray-700 mb-4',
                htmlContainer: 'font-light',
                confirmButton: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 shadow-md',
            }
        })
    }
}
</script>