<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useLogbookStore } from "@/stores/logbook"

const logbookStore = useLogbookStore()

const headers = [
    {
        key: "date",
        label: "Date",
        format: (value: Date) => {
            return value.toDateString()
        }
    },
    {
        key: "activity",
        label: "Activity",
    },
    {
        key: "notes",
        label: "Notes"
    }
]

logbookStore.addLogbook({
    title: "Garden",
    headers,
    items: []
})

logbookStore.addEntry("Garden", {
  date: new Date(),
  activity: "Watered",
  notes: ""
})
</script>

<template>
  <v-layout>
  <v-app-bar flat height="48" title="Logbook"></v-app-bar>

  <v-main>
    <RouterView style="{ margin-top: 48px }"/>
  </v-main>
 
  </v-layout>
</template>

<style scoped>

</style>
