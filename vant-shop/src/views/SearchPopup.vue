<template>
    <div class="search-popup">
    <van-search
    v-model="searchval"
    show-action 
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
    </div>
</template>

<script>
    export default {
        data() {
            return {
               searchval:"" 
            }
        },
        methods: {
    onSearch(val) {
      console.log(val)
    },
    onCancel() {
      console.log(11);
      this.$router.go(-1)
    },
  },
     
    }
</script>

<style lang="less" scoped>
   .search-popup{
       width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        
        background-color:rgba(0, 0, 0, .5);
   }

</style>