<template>
  <div class="two" v-show="index == swiperIndex">
    <div class="two_title" data-title="一些项目与作品" data-text="想起那年的996，我胖了10KG"></div>
    <div class="two_project">
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="openWin(item.url)" :style="{'animation-delay': (index * 2) + '00ms'}">
          <div class="item" :style="{'background-image':'url('+item.img+')'}">
            <div class="item_box">
              <div class="item_box_title" v-text="item.name"></div>
              <div class="item_box_text" v-text="item.text"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "two",
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
  data() {
    return {
      list: [
        {
          name: "嘟嘟特运",
          url: "https://sj.qq.com/myapp/detail.htm?apkName=com.m329616.rgf",
          img:"https://lidexun.gitee.io/phone/assets/project/0.png",
          text:'项目：混合APP'
        },
        {
          name: "爱情人交友",
          url: "https://app.iqingren.com/",
          img:"https://lidexun.gitee.io/phone/assets/project/1.png",
          text:'项目：混合APP'
        },
        {
          name: "享物吧",
          url: "",
          img: "https://lidexun.gitee.io/phone/assets/project/2.jpg",
          text:'项目：小程序'
        },
        {
          name: "保修中心",
          url: "https://lidexun.gitee.io/project/hongyu/index.html",
          img: "https://lidexun.gitee.io/project/hongyu/img/logo_2.png",
          text:'项目：响应式'
        },
        {
          name: "麦可设计官网",
          url: "http://www.mccll.com/",
          img: "https://lidexun.gitee.io/phone/assets/project/3.jpg",
          text:'项目：PC端'
        },
        {
          name: "原生支付键盘",
          url: "http://www.jq22.com/demo/pwdInput201909082327/",
          img: "https://lidexun.gitee.io/phone/assets/project/4.png",
          text:'作品：移动端'
        },
        {
          name: "双向联动列表",
          url: "http://www.jq22.com/demo/isCategory202004092153/",
          img: "https://lidexun.gitee.io/phone/assets/project/5.png",
          text:'作品：移动端'
        },
        {
          name: "滚动动画",
          url: "http://www.jq22.com/demo/isScroll201804200828/",
          img: "https://lidexun.gitee.io/phone/assets/project/6.png",
          text:'作品：移动端'
        }
      ]
    };
  },
  methods:{
     openWin(url){
         if(!url) return;
         window.open(url)
     }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';

.two {
  height: 100vh;
  position: relative;
  flex();
  align_items();
  justify_content();

  .two_title {
    swipe_title();
    fade_up_10(300,0)
  }
  .two_project {
    flex();
    ul {
      flex();
      flex-direction: row;
      flex-wrap: wrap;
      padding: 0 0.1rem;
    }
    li {
      flex-basis: 33.333333%;
      margin: 0.1rem 0;
      height 2.2rem
      fade_up_10()
      .item {
        margin: 0 0.1rem;
        height: 100%;
        position: relative;
        box-shadow: 0 0.05rem 0.05rem rgba(0,0,0,0.1);
        overflow: hidden;
         bg_init()
         background-size contain
        .item_box{
           width 100%
           height 100%
           color #fff
           background-color: rgba(0, 0, 0, 0.5);
           flex()
           flex_center()
           .item_box_title{
             font-size: 0.28rem;
            }
            .item_box_text{
             font-size: 0.2rem;
            }
        }
      }
    }
  }
}
@media (min-width 750px) {
   .two{
     .two_project{
       li{
          flex-basis 25%
          cursor: pointer;
          .item{
            .item_box{
              opacity 0
              transform translateY(100%)
              transition 0.3s
            }
          }
          &:hover{
            .item_box{
              opacity 1
              transform translateY(0)
            }
          }
       }
     }
   }
}
</style>