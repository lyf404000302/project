<template>
  <div class="tabs">
    <a><router-link to="/recommend">推荐</router-link></a>
    <a><router-link to="/singer">歌手</router-link></a>
    <a><router-link to="/rankings">排行</router-link></a>
    <a><router-link to="/search">搜索</router-link></a>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
@import url('~@/assets/less/variable.less');
.tabs{
  margin-top:20px;
  display:flex;
  font-size:16px;
  list-style:none;
  justify-content:space-around;
}
.tabs a{
  color:@color-text-l;
  text-decoration:none;
  padding-bottom: 5px;
  &.router-link-active{
    color:@color-theme;
  border-bottom:1px solid @color-theme;
  }
}
</style>
