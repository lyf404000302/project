<template>
  <transition name="slide" >
        <rank-list :title="title" :bgUrl="bgUrl" :songList="songList"></rank-list>
    </transition>
</template>

<script>
import RankList from '@/components/rankList'
import {getRankInfo} from '@/api'
export default {
    data(){
        return{
            list:[],
            title:"",
            bgUrl:"",
            songList:[],
        }
    },
    created(){
        this.getRankInfoList()
    },
    methods:{
        getRankInfoList(){
            let id = this.$route.params.id
            getRankInfo(id).then(res => {
               // console.log(res)
                this.title = res.topinfo.ListName
                this.bgUrl = res.topinfo.pic_album
                this.songList = res.songlist
            })
        }
    },
    components:{
        RankList
    }
}
</script>

<style lang="less" scoped>
.slide-enter-active,.slide-leave-active{
    transition:all 0.3s;
}
.slide-enter,.slide-leave-to{
    transform: translate3d(100%,0,0);
}
.slide{
    position: fixed;
    bottom:0;
    top:88px;
    width:100%;
}
</style>


