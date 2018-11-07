<template>
  <div class="rankings">
    <scroll class="rankings-content">
      <div>
        <div class="box" v-for="item in top" :key="item.key" @click="rank(item.id)">
          <div class="img">
            <img :src="item.picUrl" >
          </div>
          <div class="text">
            <p v-for="(item1,index) in item.songList" :key="item1.key">{{index+1}}、{{item1.songname}}--{{item1.singername}}</p>
          </div>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>
<script>
import {getRankList} from '@/api'
import Bscroll from 'better-scroll'
import Scroll from '@/components/scroll'
import Loading from '@/components/loading'
	export default {
		data:function(){
		  return{
        top:{},
        list:[],
        isLoading:true
      }
		},
		created(){
      this.getTop()
		},
		methods:{
		  getTop:function(){
        getRankList().then((res) => {
          //console.log(res)
          this.top = res.data.topList
          this.list = res.data.songList
        })
      },
      rank(id){
        this.$router.push({path:`/rankings/${id}`})
      }
    },
    components:{
      Scroll,
      Loading
    }
	}
</script>

<style lang="less" scoped>
@import url('~@/assets/less/variable.less');
  .rankings{
    color:@color-text-d;
    position:fixed;
    width:100%;
    top:88px;
    bottom:0;
    .box{
      position: relative;
      margin-top:30px;
      margin-bottom:20px;
      background:#333;
      display:flex;
      height: 102px;
      overflow: hidden;
      .img{
        img{
          width:120px;  
          height: 102px;
        }
      }
      .text{
        line-height: 34px;
        flex:1;
        text-align:left;
        margin-left:20px;
        font-size:15px;
      }
    }
  }
  .rankings-content{
    height:100%;
    overflow: hidden;
  }
  
  
</style>