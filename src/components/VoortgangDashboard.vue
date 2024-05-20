<template>
  <div class="dashboard">
    <h2>Project Voortgang</h2>
    <ul>
      <li v-for="taak in taken" :key="taak.id">{{ taak.naam }} - {{ taak.status }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taken: [
        { id: 1, naam: 'UI Ontwerp', status: 'Voltooid' },
        { id: 2, naam: 'Componenten Ontwikkelen', status: 'Bezig' },
        { id: 3, naam: 'Betalingen Integreren', status: 'In afwachting' }
      ]
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 16px;
  border: 1px solid #ccc;
}
</style>
