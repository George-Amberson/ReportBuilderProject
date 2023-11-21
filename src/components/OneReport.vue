<template>
        <v-container class="h-auto" fluid>
            <v-row dense >
                <v-col cols="1">
                    <img :src="`https://randomuser.me/api/portraits/women/${report.id}.jpg`"
                    width="70"
                    height="70"
                    style="border-radius: 50%;"/>

                </v-col>
                <v-col cols="2">
                    <h2> {{ report.title }}</h2>
                    <h4>made by: {{report.author}}</h4>
                    <h5> at: {{ getDate }}</h5>
                </v-col>
                <v-spacer/>
            </v-row>
        </v-container>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
const props = defineProps({
  report: {
    type: Object,
    required: true,
  }
})
const getDate = computed(() => {
    return props.report.date.getFullYear() + "/" + (props.report.date.getMonth() + 1) + "/" + props.report.date.getDate();
})
</script>

<style scoped>

</style>