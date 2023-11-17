<template>
 <v-container fluid>
    <template v-for="(item, i) in store.getReports" :key="i">
        <v-row
        class="fill-height"
        @click="$router.push({ path:'/comingsoon' })"
        >
            <v-col
            cols="12"
            >
            <v-hover v-slot="{ isHovering, props }">
                <v-card
                :elevation="isHovering ? 12 : 2"
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
                >
                    <OneReport :report="item"/>
                </v-card>
            </v-hover>
            </v-col>
        </v-row>
    </template>
  </v-container>
</template>

<script setup lang="ts">
import OneReport from './OneReport.vue';
import { useReports } from '@/stores/counter'
const store = useReports()

</script>

<style scoped>

.scrollable{
    height: 90%;
}
</style>