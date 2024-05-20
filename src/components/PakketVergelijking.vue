<template>
  <div class="vergelijkingstabel">
    <div v-for="pakket in pakketten" :key="pakket.id" class="pakket-kolom">
      <h2>{{ pakket.naam }}</h2>
      <p>{{ pakket.beschrijving }}</p>
      <p>Prijs: €{{ pakket.prijs }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pakketten']
}
</script>

<style scoped>
.vergelijkingstabel {
  display: flex;
  justify-content: space-around;
}
.pakket-kolom {
  border: 1px solid #ccc;
  padding: 16px;
}
</style>
