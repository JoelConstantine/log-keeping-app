<script setup lang="ts">
import DataTable from "@/components/DataTable.vue"
import type { TableItem, TableHeader } from "@/components/DataTable.vue"

defineProps({
    title: {
        type: String,
        default: ""
    },
    items: {
        type: Array<TableItem>
    },
    headers: {
        type: Array<TableHeader>
    }
})
</script>

<template>
    <v-card>
        <v-card-title class="bg-yellow">{{ title }}</v-card-title>
        <v-card-text>
            <data-table :headers="headers" :items="items">
            </data-table>
        </v-card-text>
    </v-card>
</template>
