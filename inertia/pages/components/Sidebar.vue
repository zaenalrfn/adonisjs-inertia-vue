<script setup lang="ts">
import { router } from '@inertiajs/vue3'

const logout = () => {
  router.post('/logout')
}
</script>

<template>
  <aside class="h-full bg-white border-r shadow-sm p-4 space-y-4">
    <h2 class="text-xl font-bold text-gray-800">User Panel</h2>

    <nav class="space-y-2">
      <a href="/dashboard" class="block px-4 py-2 rounded hover:bg-gray-100 text-gray-700"
        >Dashboard</a
      >
      <a href="/profile" class="block px-4 py-2 rounded hover:bg-gray-100 text-gray-700">Profile</a>
    </nav>

    <div class="border-t pt-4">
      <button
        @click="logout"
        class="w-full text-left px-4 py-2 rounded hover:bg-red-100 text-red-600"
      >
        Logout
      </button>
    </div>
  </aside>
</template>
