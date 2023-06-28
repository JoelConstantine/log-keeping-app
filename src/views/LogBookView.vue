<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <v-card>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>
        </v-card-text>
    </v-card>
</template>