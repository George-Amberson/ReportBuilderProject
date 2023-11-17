<template>
    <v-app-bar :elevation="2" rounded>
    
        <template v-slot:prepend v-if="mobile">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
      <v-app-bar-title class="d-none d-lg-block">
        <h3 class="header_title">ReportsBuilder</h3>
      </v-app-bar-title>
      <v-spacer></v-spacer>
            <v-text-field
            v-model="store.search"
            density="compact" 
            class="d-none d-sm-block"
            variant="solo" 
            label="Search reports" 
            append-inner-icon="mdi-magnify" 
            single-line 
            hide-details 
            flat/>
        <v-btn icon @click="toggleTheme">
          <v-icon>mdi-contrast</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme, useDisplay } from 'vuetify'
import { useReports } from '@/stores/counter'
const { mobile } = useDisplay()
const theme = useTheme()
const store = useReports()
function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'myCustomDarkTheme'
}
</script>

<style lang="scss" scoped>

</style>