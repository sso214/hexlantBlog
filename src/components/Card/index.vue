<template>
  <router-link :to="{ name: link, params: { idx: item.idx } }">
    <li class="item">
      <img src="https://hexlant.com/static/common/img/main-business01.png" alt=""/>
      <p class="category">{{item.category}}</p>
      <h4>{{item.title}}</h4>
      <h5>{{item.subTitle}}</h5>
      <p class="date">{{item.date}}</p>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'card',
  props: {
    item: {
      type: Object,
      default: undefined,
    },
    link: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss">
.item {margin-bottom:80px;}
.item img {width:100%;margin-bottom:20px;border-radius:20px;transition:all .2s}
.item .category {color:#8b95a1;font-size:15px;font-weight:400;line-height:1.4;margin-bottom:5px}
.item h4 {font-size:32px;font-weight:600;color:#333d4b;margin-bottom:5px;transition:all .2s;line-height:1.5}
.item h5 {color:#4e5968;font-size:16px;font-weight:300;margin-bottom:5px;line-height:1.5}
.item .date {color:#8b95a1;font-size:15px;font-weight:400;line-height:1.4}
.item:hover h4 {color:$mainColor}
.item:hover img {box-shadow: rgb(0 0 33 / 7%) 0 16px 22.4px 4.8px, rgb(0 0 33 / 5%) 0 3.2px 16px 0, rgb(0 0 33 / 7%) 0 0 1px 0;transform:translateY(-20px)}
</style>
