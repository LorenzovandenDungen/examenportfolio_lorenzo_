<template>
  <div class="packages">
    <h1>Onze Website Pakketten</h1>
    <pakket-card
      v-for="pakket in pakketten"
      :key="pakket.id"
      :pakket="pakket"
      @vergelijk="vergelijkPakket"
    ></pakket-card>
    <pakket-vergelijking :pakketten="geselecteerdePakketten"></pakket-vergelijking>
  </div>
</template>

<script>
import PakketCard from '../components/PakketCard.vue'
import PakketVergelijking from '../components/PakketVergelijking.vue'

export default {
  name: 'Packages',
  components: { PakketCard, PakketVergelijking },
  data() {
    return {
      pakketten: [
        { id: 1, naam: 'Basis Pakket', beschrijving: 'Basis beschrijving', prijs: 100 },
        { id: 2, naam: 'Standaard Pakket', beschrijving: 'Standaard beschrijving', prijs: 200 },
        { id: 3, naam: 'Premium Pakket', beschrijving: 'Premium beschrijving', prijs: 300 }
      ],
      geselecteerdePakketten: []
    }
  },
  methods: {
    vergelijkPakket(pakket) {
      if (!this.geselecteerdePakketten.includes(pakket)) {
        this.geselecteerdePakketten.push(pakket)
      }
    }
  }
}
</script>

<style scoped>
.packages {
  padding: 16px;
}
</style>
