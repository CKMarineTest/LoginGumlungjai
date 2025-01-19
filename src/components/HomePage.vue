<template>
    <div class="flex">
      <aside class="w-16 h-screen fixed left-0 bg-gray-900">
        <SidebarComponent />
      </aside>
  
      <main class="flex-1 ml-16 p-6 bg-gray-50">
        <div class="flex items-center justify-between mb-6">
          <h1 class="text-xl font-medium">Overall dashboard : วัคซีนโควิด</h1>
          <div class="flex items-center gap-4">
            <select class="px-4 py-2 border rounded-lg">
              <option>All Categories</option>
            </select>
            <div class="flex items-center border rounded-lg p-2">
              <span>1 May 2021 - 31 May 2021</span>
            </div>
          </div>
        </div>
  
        <div class="mb-6">
          <h2 class="text-gray-500 mb-2">Filter</h2>
          <div class="flex gap-2">
            <span class="px-3 py-1 bg-green-500 text-white rounded-full text-sm">Pfizer</span>
            <span class="px-3 py-1 bg-orange-500 text-white rounded-full text-sm">AstraZeneca</span>
            <span class="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">Sinovac</span>
            <span class="px-3 py-1 bg-red-500 text-white rounded-full text-sm">Sinopharm</span>
            <span class="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Moderna</span>
            <span class="px-3 py-1 bg-gray-300 text-gray-700 rounded-full text-sm">All</span>
          </div>
        </div>
  
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-8 bg-white p-4 rounded-lg shadow">
            <h3 class="text-gray-500 mb-4">Daily messages</h3>
            <div class="h-64 w-full">
              <div class="w-full h-full bg-gray-50 rounded flex items-center justify-center">
                Bar Chart Area
              </div>
            </div>
          </div>
  
          <div class="col-span-4 bg-white p-4 rounded-lg shadow">
            <h3 class="text-gray-500 mb-4">Period-over-Period comparison</h3>
            <div class="h-64 w-full">
              <div class="w-full h-full bg-gray-50 rounded flex items-center justify-center">
                Donut Chart Area
              </div>
            </div>
          </div>
  
          <div class="col-span-4 bg-white p-4 rounded-lg shadow">
            <h3 class="text-gray-500 mb-4">Period-over-Period channel comparison</h3>
            <div class="h-64">
              <div class="w-full h-full bg-gray-50 rounded flex items-center justify-center">
                Pie Chart Area
              </div>
            </div>
          </div>
  
          <div class="col-span-4 bg-white p-4 rounded-lg shadow">
            <h3 class="text-gray-500 mb-4">Share of voice (SOV)</h3>
            <div class="space-y-4">
              <div v-for="platform in ['Sinovac', 'Pfizer', 'AstraZeneca']" :key="platform" 
                   class="grid grid-cols-7 gap-2 items-center text-sm">
                <span class="col-span-2">{{ platform }}</span>
                <div v-for="i in 5" :key="i" 
                     class="bg-gray-100 p-2 rounded flex items-center justify-center">
                  0
                </div>
              </div>
            </div>
          </div>
  
          <div class="col-span-4 bg-white p-4 rounded-lg shadow">
            <h3 class="text-gray-500 mb-4">Sentiments</h3>
            <div class="space-y-4">
              <div v-for="brand in ['Overall', 'Sinovac', 'Pfizer']" :key="brand" 
                   class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span>{{ brand }}</span>
                  <span>100%</span>
                </div>
                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" 
                       style="width: 100%">
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="col-span-12 bg-white p-4 rounded-lg shadow">
            <h3 class="text-gray-500 mb-4">Daily engagements</h3>
            <div class="h-64">
              <div class="w-full h-full bg-gray-50 rounded flex items-center justify-center">
                Line Chart Area
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
import SidebarComponent from './Menu/SidebarComponent.vue';

  // Component imports would go here
  </script>