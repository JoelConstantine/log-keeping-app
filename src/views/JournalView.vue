<script setup lang="ts">
import { storeToRefs } from 'pinia';
import LogBookView from './LogBookView.vue'
import { useLogbookStore } from "@/stores/logbook"

const logbookStore = useLogbookStore()
const { logbooks } = storeToRefs(logbookStore)
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
                    :items="logbook.items" />
            </v-col>
        </v-row>
    </v-container>
</template>