<template>
  <div class="music-header">
    <span class="logo"></span>
    <h2 class="text">网易云音乐</h2>
  </div>
</template>

<script>
export default{

}
</script>

<style lang="less" scoped>
  @import url('~@/assets/less/variable.less');
  .music-header{
    height:44px;
    text-align:center;
    position:relative;
    .logo{
      width:32px;
      height:32px;
      display:inline-block;
      background:url('logo.png');
      background-size:100% 100%;
      margin-right:10px;
      margin-top:10px;
    }
    .text{
      display:inline-block;
      line-height:44px;
      color:@color-theme;
      position:relative;
      top:-6px;
    }
  }
</style>