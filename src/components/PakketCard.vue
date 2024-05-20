<template>
  <div class="pakket-card">
    <h2>{{ pakket.naam }}</h2>
    <p>{{ pakket.beschrijving }}</p>
    <p>Prijs: €{{ pakket.prijs }}</p>
    <button @click="vergelijk">Vergelijk</button>
  </div>
</template>

<script>
export default {
  props: ['pakket'],
  methods: {
    vergelijk() {
      this.$emit('vergelijk', this.pakket)
    }
  }
}
</script>

<style scoped>
.pakket-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
}
</style>
