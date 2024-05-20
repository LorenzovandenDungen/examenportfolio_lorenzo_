<template>
  <div class="dashboard">
    <h1>Project Voortgang</h1>
    <voortgang-dashboard></voortgang-dashboard>
  </div>
</template>

<script>
import VoortgangDashboard from '../components/VoortgangDashboard.vue'

export default {
  name: 'Dashboard',
  components: { VoortgangDashboard }
}
</script>

<style scoped>
.dashboard {
  padding: 16px;
}
</style>
