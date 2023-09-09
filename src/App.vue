<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <!-- class="px-6 lg:px-32" -->
  <div>
    <Navbar />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>
<style scoped></style>
