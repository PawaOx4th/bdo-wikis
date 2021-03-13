<template>
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      style="max-height: 350px; overflow: hidden"
      tag="article"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content. Some quick example text to build on the card
        title and make up the bulk of the card's content. Some quick example
        text to build on the card title and make up the bulk of the card's
        content.
      </b-card-text>

      <b-button href="#" variant="primary">Go Detail</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardContentComponent',
})
</script>

<style scoped></style>
