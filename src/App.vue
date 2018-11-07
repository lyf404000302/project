<template>
  <div id="app">
    <!--头部主键-->
    <music-header></music-header>
    <!--选项卡的公共组件-->
    <tabs></tabs>
    <!--路由页面-->
    <router-view></router-view>
    <!-- 播放器组件 -->
    <player></player>
  </div>
</template>

<script>
import MusicHeader from "@/components/musicheader"
import tabs from "@/components/tabs"
import Player from "@/components/player"
export default {
  components:{
    MusicHeader,
    tabs,
    Player
  }
}
</script>

<style lang="less">
  @import '~@/assets/less/reset.less';
  @import '~@/assets/less/base.less';
  @import '~@/assets/less/icon.less';
</style>
