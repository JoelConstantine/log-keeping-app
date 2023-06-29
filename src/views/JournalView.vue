<script setup lang="ts">
import { storeToRefs } from 'pinia'
import LogBookView from './LogBookView.vue'
import AddNewEntry from '@/components/AddNewEntry.vue'
import { useLogbookStore } from '@/stores/logbook'

const logbookStore = useLogbookStore()
const { logbooks } = storeToRefs(logbookStore)

const handleAdd = (new_entry: any) => {
  console.log(new_entry)
  logbookStore.addEntry(new_entry.journal, new_entry.entry)
}
</script>

<template>
  <v-container fluid>
    <v-row justify="start">
      <v-col cols="4">
        <log-book-view
          v-for="logbook in logbooks"
          :key="logbook.title"
          :title="logbook.title"
          :headers="logbook.headers"
          :items="logbook.items"
        />
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <add-new-entry :logbooks="logbooks" @event-add="handleAdd"></add-new-entry>
  </v-container>
</template>
