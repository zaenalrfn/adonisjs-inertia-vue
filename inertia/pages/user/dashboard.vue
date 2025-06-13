<script setup lang="ts">
import layout_dashboard from '../layouts/layout_dashboard.vue'
import { Head, usePage } from '@inertiajs/vue3'
defineOptions({ layout: layout_dashboard })

const page = usePage()
</script>

<template>
  <Head title="Dashboard" />
  <div>
    <h1 class="text-2xl font-bold mb-4">Selamat datang! {{ page.props?.user?.fullName }}</h1>
    <p>Here's your dashboard overview.</p>
  </div>
</template>
