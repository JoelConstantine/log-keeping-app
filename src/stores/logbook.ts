import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TableItem, TableHeader } from '@/components/DataTable.vue'

export interface Logbook {
  title: string
  headers: Array<TableHeader>
  items: Array<TableItem>
}

export interface LogbookEntry extends TableItem {
  date: Date
  activity: string
  notes: string
}

export const useLogbookStore = defineStore('logbook', () => {
  const logbooks = ref([] as Array<Logbook>)

  const addLogbook = (logbook: Logbook) => {
    if (logbooks.value.find((lg) => lg.title === logbook.title)) return
    logbooks.value.push(logbook)
  }

  const addEntry = (logbookName: string, entry: LogbookEntry) => {
    const logbook = logbooks.value.find((lb) => lb.title === logbookName)
    if (!logbook) return
    logbook.items.push({ ...entry })
    logbooks.value = logbooks.value.map((lg) => {
      if (lg.title === logbookName) return logbook
      return lg
    })
  }

  return { logbooks, addLogbook, addEntry }
})
