<template>
  <main>
    <aside></aside>
    <div class="cont">
      <ul class="board">
        <slot>
          <Card v-for="item in boardList" :key="item.idx" :item="item" :link="'hi'"></Card>
        </slot>
      </ul>
    </div>
    <aside></aside>
  </main>
</template>

<script>
import Card from '../components/Card'
import {mapGetters} from "vuex";

export default {
  name: 'index',
  components: {
    Card,
  },
  computed: {
    ...mapGetters(["boardList"]),
  },
}
</script>

<style lang="scss">
main {display:flex;max-width:$mainContWidth;margin:0 auto;padding-top:100px;position:relative}
main aside {width:285px;flex:none;border:1px solid red;position:sticky;overflow-y:auto;height:calc(100vh - 60px);top:60px}
main .cont {flex:1;margin:0 50px}
main .board {max-width:670px;margin:0 auto}
</style>
