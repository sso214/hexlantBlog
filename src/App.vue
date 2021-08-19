<template>
  <div>
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '/src/components/layout/Header.vue';
import Footer from '/src/components/layout/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>
