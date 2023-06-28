<script setup lang="ts">
const welcome_message = "Hello World"
import LogBookView from './LogBookView.vue'
</script>

<template>
    <v-row>
        <v-col cols="4">
            <LogBookView title="Garden"></LogBookView>
        </v-col>
    </v-row>
</template>