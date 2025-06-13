<script setup lang="ts">
import { usePage, router } from '@inertiajs/vue3'

// Ambil user dari props inertia
const page = usePage()
const user = page.props.auth?.user

const logout = () => {
  router.post('/logout')
}
</script>

<template>
  <header class="bg-white border-b shadow-sm px-6 py-4 flex items-center justify-between">
    <!-- Logo / Judul -->
    <h1 class="text-xl font-bold text-gray-800">Dashboard</h1>

    <!-- Info User -->
    <div class="flex items-center gap-4">
      <span class="text-gray-700">👋 {{ user?.name }}</span>
      <button
        @click="logout"
        class="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm"
      >
        Logout
      </button>
    </div>
  </header>
</template>
