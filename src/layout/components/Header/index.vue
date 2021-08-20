<template>
  <header>
    <div class="cont">
      <router-link to="/">
        <img class="logo" src="@/assets/logo_b.png" alt="logo"/>
      </router-link>
      <div class="right">
        <ol class="nav">
          <router-link to="/">전체보기</router-link>
          <router-link to="/category">헥슬란트의 모든 것</router-link>
        </ol>
        <i class="material-icons">search</i>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
header {position:fixed;top:0;left:0;width:100%;height:$headerHeight;border-bottom:1px solid rgba(0,27,55,0.1);background: #ffffff;z-index:9999}
header .cont {max-width:$contWidth;margin:0 auto;display:flex;align-items:center;height:100%}
header .right {margin-left:auto;display:flex;align-items:center;height:100%}
header .logo {height:25px}
header .nav {display:flex;align-items:center;height:100%}
header .nav a {margin-right:40px;height:100%;display:flex;align-items:center;justify-content:center;transition:all .2s}
header i {transition:all .2s;cursor:pointer}
header .nav a:hover,
header i:hover {color:$mainColor}
</style>
