<script setup lang="ts">

export interface TableItem {
    [key: string]: any
}

export interface TableHeader {
    key: string, // key value on object to find the 
    label: string, // label to show in the column header,
    format?: Function, 
}

defineProps({
    items: {
        type: Array<TableItem>,
        default: () => []
    },
    headers: {
        type: Array<TableHeader>,
        default: () => []
    }
})
</script>

<template>
    <v-table>
        <thead>
            <th v-for="header in headers" :key="header.key" class="text-left">{{  header.label }}</th>
        </thead>
        <tbody>
            <tr v-for="(item, idx) in items" :key="idx">
                <td v-for="header in headers" :key="header.key">{{ item[header.key] }}</td>
            </tr>
        </tbody>
    </v-table>    
</template>

<style scoped lang="scss">
th {
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-weight: 500;
    font-size: 16px;
    border-bottom: thin solid #b8c6d8
}

td {
    border-bottom: thin solid #b8c6d8;
}

tr:last-child {
    td {
        border-bottom: none
    }
}
</style>