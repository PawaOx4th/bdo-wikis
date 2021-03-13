<template>
  <div class="main--page">
    <NavbarComponent />
    <b-container fuild>
      <b-row>
        <b-col cols="12" class="section--search">
          <InputSearch />
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="(i, index) in 12"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          class="mb-4"
        >
          <CardContent />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavbarComponent from '@/components/Navbar/index.vue'
import InputSearch from '@/components/Input/InputSearch/index.vue'
import CardContent from '@/components/Cards/CardContent/index.vue'

export default Vue.extend({
  components: {
    NavbarComponent,
    InputSearch,
    CardContent,
  },
})
</script>

<style lang="scss" scope>
@import './style.scss';
</style>
