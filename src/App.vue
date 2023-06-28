<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <v-app>
  <v-app-bar flat height="48" title="Logbook"></v-app-bar>

  <RouterView style="{ margin-top: 48px }"/>
  </v-app>
</template>

<style scoped>

</style>
