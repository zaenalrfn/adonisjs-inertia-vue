<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Navbar -->
    <Navbar />

    <div class="flex flex-1 h-full">
      <!-- Sidebar -->
      <Sidebar class="w-64 bg-white shadow-md w-1/4 h-full" />

      <!-- Main content -->
      <main class="flex-1 p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* optional custom style */
</style>
