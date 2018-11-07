<template>
    <transition name="slide">
        <music-list :title="title" :bgUrl="bgUrl" :songList="songList"></music-list>
    </transition>
</template>

<script>
import MusicList from '@/components/musicList'
import {getSingerInfo} from '@/api'
export default {
    data(){
        return{
            list:[],
            title:"",
            bgUrl:"",
            songList:[]
        }
    },
    created(){
        this.getSingerInfoList()
    },
    methods:{
        getSingerInfoList(){
            let singerId = this.$route.params.id
                getSingerInfo(singerId).then(res => {
                //console.log(res)
                this.title=res.data.singer_name;
                this.bgUrl=`http://y.gtimg.cn/music/photo_new/T001R300x300M000${res.data.singer_mid}.jpg?max_age=2592000`;
                this.songList=this.editSongs(res.data.list)
            })
        },
        //对歌曲列表进行处理， 获取歌曲列表相关的东西
        editSongs(list){
            let nSongList=[]
            for(var i=0;i<list.length;i++){
                let item={
                    //歌曲id
                    id:list[i].musicData.songid,
                    //mid
                    mid:list[i].musicData.songmid,
                    //歌曲名
                    name:list[i].musicData.songname,
                    //专辑名
                    album:list[i].musicData.albumname,
                    //歌曲时长
                    interval:list[i].musicData.interval,
                    //专辑封面
                    img:`https://y.gtimg.cn/music/photo_new/T002R300x300M000${list[i].musicData.albummid}.jpg?max_age=2592000`,
                    //歌曲链接
                    url:`http://dl.stream.qqmusic.qq.com/C400${list[i].musicData.songmid}/${list[i].musicData.songid}.m4a?guid=983915916&fromtag=66`,
                    //歌手
                    singer:list[i].musicData.singer
                }
                nSongList.push(item)
            }
             return nSongList
        }
    },
    components:{
        MusicList
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
</style>

