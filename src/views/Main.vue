<template>
  <div class="main">
    <Aside />
    <div></div>
    <Aside />
  </div>
</template>

<script>
import Aside from '@/components/main/Aside.vue';

export default {
  name: 'Main',
  components: {
    Aside
  }
}
</script>

<style lang="scss">
.main {display:flex;align-items:center}
</style>
