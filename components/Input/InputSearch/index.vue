<template>
  <div class="group--input">
    <b-input-group>
      <b-form-input></b-form-input>
      <b-input-group-append>
        <b-button variant="primary">
          <strong>SEARCH</strong>
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InputSearchComponent',
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
