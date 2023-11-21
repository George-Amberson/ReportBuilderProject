<template>
 <v-dialog
      v-model="dialog"
      width="500"
      persistent>
    <v-container>
        <v-row align="center" justify="center" dense>
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <v-text-field
                            label="Enter your email"
                            name="email"
                            prepend-inner-icon="mdi-email"
                            type="email"
                            class="rounded-0"
                            outlined
                        ></v-text-field>
                        <v-text-field
                            label="Enter your password"
                            name="password"
                            prepend-inner-icon="mdi-lock"
                            type="password"
                            suffix="| Forgot?"
                            class="rounded-0"
                            outlined
                        ></v-text-field>
                        <v-btn class="rounded-0" x-large block dark>Login</v-btn>
                        <v-card-actions class="text--secondary">
                            <v-checkbox color="#000000" label="Remember me"></v-checkbox>
                            <v-spacer></v-spacer>
                            <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                            No account?
                            <a href="#" class="pl-2" style="color: #000000">Sign Up</a>
                </v-card-actions>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const dialog = ref(true);
</script>

<style scoped>

</style>