<template>
  <div class="one" v-show="index == swiperIndex">
      <div class="one_phone"></div>
      <div class="one_title">Hi 我是一名WEB前端开发(当然啦还有很多称呼!)</div>
      <div class="one_text">
        WEB/H5/混合/小程序/工程师，切图仔，就一个写页面的
      </div>
      <div class="one_tips">
        说明：为了更加直观的提现个人技术，写了个在线简历
        <br />
        虽然俩年前有写过，不过现在想用webpack方式重新写
        <br />
         vue+swipe+stylus+fortawesome+rem(移动端适配))
      </div>
      <div class="one_btn">
        <span v-for="item in btn" :key="item.text" @click.stop.prevent="openWin(item.url)" v-text="item.text">
        </span>
      </div>
  </div>
</template>

<script>
export default {
   name: 'one',
   props:{
     index:{
       type: Number,
       required: true
     },
     swiperIndex:{
       type: Number,
       required: true
     }
   },
   data(){
     return{
        list:[
          {'title':'PC'},
          {'title':'H5'},
          {'title':'hybrid'},
          {'title':'小程序'}
        ],
        btn:[
          {'text':'GitHub','url':'https://github.com/lidexun'},
          {'text':'Gitee','url':'https://gitee.com/lidexun'},
          {'text':'插件库','url':'http://www.jq22.com/mem260259'},
          {'text':'个人博客','url':'https://lidexun.gitee.io/blog/'},
        ]
     }
   },
   methods:{
     openWin(url){
         if(!url) return;
         window.open(url)
     }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';

.one{
  display flex
  align-items center
  justify-content center
  flex-direction: column;
  height 100%
  padding 0 0.1rem
  .one_phone{
    background-image: url('https://lidexun.gitee.io/blog/hero.png');
    width 1.8rem;
    height 1.8rem;
    border: 0.05rem solid white;
    box-shadow: 0 0.05rem 0.05rem rgba(0, 0, 0, 0.1);
    border-radius 100%;
    background-size cover
    fade_up_10(500,500)
  }
  .one_title{
    font-size 0.32rem;
    margin-top 0.15rem
    font-weight bold
    fade_up_10(600,600)
  }
  .one_text{
    font-size 0.22rem
    margin-top 0rem
    fade_up_10(700,700)
  }
  .one_tips{
    margin-top 0.15rem
    fade_up_10(800,800)
  }
  .one_btn{
    flex()
    max-width 8rem
    margin-top 0.15rem
    flex-direction: row;
    cursor: pointer;
    fade_up_10(1000,900)
    span{
      width 50%
      background #333
      border-radius 0.1rem;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
      color #fff;
      margin 0 0.1rem;
      font-size 0.28rem;
      min-height 0.6rem;
      display inline-block
      display flex
      align-items center
      justify-content center
      transition transform 0.2s
      &:hover{
        transform translateY(-5px)
      }
    }
  }
}
</style>