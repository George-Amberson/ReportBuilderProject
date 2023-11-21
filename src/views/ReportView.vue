<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue';

</script>

<template>
 <v-app>
  <v-navigation-drawer style="padding-left:1em">
    <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Reports" value="myfiles" @click="$router.push({ path:'/reports' })"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Team Reports" value="shared" @click="$router.push({ path:'/comingsoon' })"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"  @click="$router.push({ path:'/comingsoon' })"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <PageHeader/>
      <v-main :scrollable="true" class="mt-2">
        <RouterView />
      </v-main>
  </v-app>
</template>
