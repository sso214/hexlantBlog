<template>
  <div class="wrap">
    <Header />
    <section class="app-wrap">
      <router-view :key="key"></router-view>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'index',
  components: {
    Header,
    Footer
  },
  computed: {
    key() {
      return this.$route.path;
    }
  }
}
</script>

<style lang="scss">
.wrap section {padding-top:$headerHeight;min-height:calc(100vh - 400px)}
</style>
