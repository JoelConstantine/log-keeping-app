<script setup lang="ts">
import { reactive } from 'vue';
import { type LogbookEntry } from '@/stores/logbook';

const emits = defineEmits(['event-add'])

defineProps({
    logbooks: {
        type: Array<LogbookEntry>
    }
})

const getNewEntry = () : LogbookEntry => {
    return {
        date: new Date(),
        activity: "",
        notes: ""
    }
}

const entry = reactive(getNewEntry())

const addNewEvent = () => {
    emits('event-add', entry)
}
</script>
<template>
 <v-row>
            <v-col>
                <v-select density="compact" label="Journal" :items="logbooks"></v-select>
            </v-col>
            <v-col>
                <v-text-field density="compact" v-model="entry.activity" label="Activity"></v-text-field>
            </v-col>
            <v-col>
                <v-text-field density="compact" v-model="entry.notes" label="Activity"></v-text-field>
            </v-col>
            <v-col>
                <v-btn variant="outlined" label="Save" @click="addNewEvent">Save</v-btn>
            </v-col>
        </v-row>
</template>