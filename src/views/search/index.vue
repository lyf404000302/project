<template>
  <div class="search">
    <scroll class="search-content">
      <div>
        <div class="input"><input type="text" class="inp" placeholder="搜索歌曲、歌手" ></div>
        <div class="re-search">
          <h5>热门搜索</h5>
          <ul class="name" >
            <li  v-for="(item,index) in top" :key="item.key" v-if="index<13">{{item.k}}</li>
          </ul>
        </div>
        <ul class="rank-search">
          <li class="rank-song" v-for="item1 in list"  :key="item1.key">{{item1.name}}</li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import {getHotKey} from '@/api'
import {search} from '@/api'
import Bscroll from 'better-scroll'
import Scroll from '@/components/scroll'
export default {
    // data:{
    //     isShow:true,
    //     isShow1:false
    // },
    data:function(){        
	    return{
            top:[],
            list:[],
            isLoading:true
        }
    },
		created(){
            this.getTop(),
            this.getList()
		},
		methods:{
		    getTop:function(){
                getHotKey().then((res) => {
                    //console.log(res)
                    this.top = res.data.hotkey
                })
           },
           getList:function(){
                search().then((aaa) => {
                    //console.log(aaa)
                    this.list = aaa.data.song.list
                })
           },
            // search(id){
            //     this.$router.push({path:`/search/${id}`})
            // }
            // aaa:function(){
            //     this.isShow = !this.isShow
            //     this.isShow1 = !this.isShow1
            //     if(isShow){
            //         this.isShow="",
            //         this.isShow1
            //     }else{
            //         this.isShow="",
            //         this.isShow1
            //     }
            // }
       },
        components:{
            Scroll
        }
}
</script>

<style lang="less" scoped>
@import url('~@/assets/less/variable.less');
.search{
  position:fixed;
  width:100%;
  top:88px;
  bottom:0;
}
.search-content{
  position: relative;
  overflow: hidden;
  height:100%;
}
  .input{
    margin: 30px auto;
    width:90%;
    height:40px;
    input{
      width:100%;
      height:40px;
      border-radius:8px;
      background:@color-highlight-background;
      color:@color-text-d;
      border: 1px solid @color-background;
      font-size:15px;
      
    }
    input::-webkit-input-placeholder{
      padding-left:10px;
      color:@color-text-d;
    }
  }
  .inp:focus{
    outline:none; 
  }
  .re-search{
    width:90%;
    margin:0 auto;
    h5{
      color:@color-text-l;
      padding-bottom:10px;     
    }
    .name{
      display:flex;
      flex-wrap:wrap;
      li{
        margin-bottom:15px;
        padding:1px 10px 1px 10px;
        margin-right:20px;
        height:20px;
        font-size:13px;
        border-radius:5px;
        text-align: center;
        line-height:22px;
        background:@color-highlight-background;
        color:@color-text-d;
      }
    }
  }
  .rank-search{
    display: none;
    position: relative;
    width:80%;
    margin:0 auto;
    .rank-song{
      margin-bottom:15px;
      padding:1px 10px 1px 10px;
      margin-right:20px;
      height:20px;
      font-size:13px;
      border-radius:5px;
      line-height:22px;
      background:@color-highlight-background;
      color:@color-text-d;
    }
  }
</style>                  