<template>
  <div class="header">
    <div class="header-cont">
      <img class="logo" src="" alt="logo"/>
      <div class="right">
        <ul class="menu">
          <li>둘러보기</li>
          <li>헥슬란트의 모든 것</li>
        </ul>
        <img class="search" src="" alt="search"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:60px;
  background:#fff;
  z-index:999;
  transition: all .2s;
  border-bottom:1px solid rgba(0,27,55,0.1);
}
.header-cont {
  height:100%;
  max-width:1140px;
  margin:0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
}
.logo {
  height:100%;
}
.right {
  height:100%;
  margin-left:auto;
  display: flex;
  align-items: center;
}
.menu {
  display: flex;
  align-items: center;
}
.menu li {
  margin-right:30px;
}
</style>
