<script setup lang="ts">
import { reactive, ref } from 'vue';
import { type LogbookEntry, type Logbook } from '@/stores/logbook';

const emits = defineEmits(['event-add'])
const journal = ref()


defineProps({
    logbooks: {
        type: Array<Logbook>
    }
})

const getNewEntry = () : LogbookEntry => {
    return {
        date: new Date(),
        activity: "",
        notes: ""
    }
}

let entry = reactive(getNewEntry())

const addNewEvent = () => {
    console.log(journal.value)
    if (!journal.value) return
    emits('event-add', { 
        journal: journal.value,
        entry
    })
    entry.activity = ""
    entry.notes = ""
}
</script>
<template>
 <v-row>
    <v-col cols="2">
        <v-select label="Journal" :items="logbooks" v-model="journal"></v-select>
    </v-col>
    <v-col cols="3">
        <v-text-field v-model="entry.activity" label="Activity"></v-text-field>
    </v-col>
    <v-col>
        <v-text-field v-model="entry.notes" label="Notes"></v-text-field>
    </v-col>
    <v-col cols="1">
        <v-btn class="mt-1" variant="outlined" label="Save" @click="addNewEvent">Add</v-btn>
    </v-col>
</v-row>
</template>