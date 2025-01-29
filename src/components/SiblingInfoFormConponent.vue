<template>
    <div class="p-4 sm:p-6">
        <div v-for="(sibling, index) in siblings" :key="index"
            class="bg-blue-50 rounded-lg p-3 sm:p-4 mb-4 border-2 border-blue-100">
            <div class="flex justify-between items-center mb-3">
                <div
                    class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium">
                    {{ index + 1 }}
                </div>
            </div>

            <div class="space-y-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div v-for="field in rowOneFields" :key="field.name">
                        <label :for="field.name" class="text-sm text-blue-600 mb-1 block">{{ field.label
                            }} <span class="text-red-500 text-sm align-top">*</span></label>
                        <input v-model="sibling[field.name]" :type="field.type" :placeholder="field.placeholder" class="w-full px-4 h-12 text-lg border-2 border-blue-200 rounded-lg
                                               placeholder:text-gray-400 hover:border-blue-400
                                               focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none
                                               transition-all duration-200 ease-in-out" readonly />
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div v-for="field in rowTwoFields" :key="field.name">
                        <label :for="field.name" class="text-sm text-blue-600 mb-1 block">{{ field.label
                            }} <span class="text-red-500 text-sm align-top">*</span> </label>
                        <input v-model="sibling[field.name]" :type="field.type" :placeholder="field.placeholder" class="w-full px-4 h-12 text-lg border-2 border-blue-200 rounded-lg
                                               placeholder:text-gray-400 hover:border-blue-400
                                               focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none
                                               transition-all duration-200 ease-in-out" readonly />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const siblings = ref([
    {
        name: '',
        age: '',
        education: '',
        occupation: '',
        income: '',
    },
]);

const rowOneFields = [
    { name: 'name', label: 'ชื่อ', type: 'text', placeholder: 'ชื่อ' },
    { name: 'age', label: 'อายุ', type: 'number', maxLength: 2, placeholder: 'อายุ' },
    { name: 'occupation', label: 'อาชีพ', type: 'text', placeholder: 'อาชีพ' }
];


const rowTwoFields = [
    { name: 'education', label: 'การศึกษา', type: 'text', placeholder: 'การศึกษา' },
    { name: 'income', label: 'รายได้', type: 'number', placeholder: 'รายได้' },
    { name: 'status', label: 'สถานภาพ', type: 'text', placeholder: 'สถานภาพ' }
];

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