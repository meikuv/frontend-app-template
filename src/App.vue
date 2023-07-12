<template>
  <div class="app-layout">
    <dynamic-dialog />
    <toast />
    <main class="app-layout__content">
      <header-template />
    </main>
  </div>
</template>

<script setup lang="ts">
import DynamicDialog from 'primevue/dynamicdialog'
import Toast from 'primevue/toast'
import HeaderTemplate from './components/HeaderTemplate.vue'
import '@/styles/App.scss'
</script>
