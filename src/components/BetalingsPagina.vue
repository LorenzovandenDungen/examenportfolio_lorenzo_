<template>
  <div class="betalingspagina">
    <h2>Betaling</h2>
    <form @submit.prevent="verwerkBetaling">
      <label for="kaartnummer">Kaartnummer</label>
      <input id="kaartnummer" v-model="kaartnummer" type="text" required />

      <label for="vervaldatum">Vervaldatum</label>
      <input id="vervaldatum" v-model="vervaldatum" type="text" required />

      <label for="cvv">CVV</label>
      <input id="cvv" v-model="cvv" type="text" required />

      <button type="submit">Betaal nu</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kaartnummer: '',
      vervaldatum: '',
      cvv: ''
    }
  },
  methods: {
    verwerkBetaling() {
      // Betalingsverwerking logica hier
      alert('Betaling succesvol verwerkt!')
    }
  }
}
</script>

<style scoped>
.betalingspagina {
  max-width: 400px;
  margin: auto;
  padding: 16px;
  border: 1px solid #ccc;
}
</style>
