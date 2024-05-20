<template>
  <div class="contact-form">
    <h2>Contacteer ons</h2>
    <form @submit.prevent="verzendBericht">
      <label for="naam">Naam</label>
      <input id="naam" v-model="naam" type="text" required />

      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" required />

      <label for="bericht">Bericht</label>
      <textarea id="bericht" v-model="bericht" required></textarea>

      <button type="submit">Verzend</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      naam: '',
      email: '',
      bericht: ''
    }
  },
  methods: {
    verzendBericht() {
      // Berichtverzending logica hier
      alert('Bericht succesvol verzonden!')
    }
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 400px;
  margin: auto;
  padding: 16px;
  border: 1px solid #ccc;
}
</style>
