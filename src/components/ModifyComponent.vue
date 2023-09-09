<template>
  <div>
    <!-- Button Submit -->

    <button class="btn-submit">
      <slot name="btn-submit"></slot>
    </button>

    <!-- Button Submit -->
    <button>
      <slot name="btn-create"></slot>
    </button>

  </div>
</template>
<script setup>
</script>
<style scoped>
.btn-submit {
  @apply text-red-500
}
</style>
