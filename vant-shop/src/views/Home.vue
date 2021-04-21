<template>
  <div class="home">
  <van-search v-model="Searchvalue" disabled placeholder="请输入搜索关键词"
  @click="$router.push('/home/searchpopup').catch(err=>{})"
   /> 
  <van-swipe class="my-swipe" :autoplay="2000" indicator-color="black">
  <van-swipe-item v-for="item in banner" :key="item.id">
    <img v-lazy="item.image_url" width="100%" alt="">
  </van-swipe-item>
</van-swipe>

<transition name="van-slide-right">
<router-view></router-view>
</transition>

  </div>
</template>

<script>


import {GetHomeList} from "../request/api"
export default {
  name: 'Home',
  data() {
    return {
      Searchvalue:"",
      banner:[]
    }
  },
  created() {
    GetHomeList()
    .then((res)=>{
      console.log(6666,res.data.banner);
      this.banner=res.data.banner
    })
    .catch((err)=>{
console.log(err);
    })
  },
}
</script>
<style lang="less" scoped>
// .silde-enter,.silde-leave-to{
// right: -100%;
// }

// .silde-enter-active,.silde-leave-active{
//   transition: all .3s;
// }

// .silde-enter-to,.silde-leave{
//   right: 0;
// }

</style>
