<template>
  <div class="three" v-show="index == swiperIndex">
    <div class="two_title" data-title="那年我踏上了开发这条不归之路" data-text="一切的开端从那天开始"></div>
    <div class="three_timeline">
      <ul class="three_list">
        <li v-for="(item,index) in list" :key="index" :style="{'animation-delay': ((1+ index) * 3) + '00ms'}">
          <div class="logo" :style="{'background-image':'url('+item.logo+')'}"></div>
          <div class="info">
            <div class="name" v-text="item.name"></div>
            <div v-text="item.time"></div>
            <div v-text="item.text"></div>
            <div v-text="item.content"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "three",
  props: {
    index: {
      type: Number,
      required: true
    },
    swiperIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      list: [
        {
          name: "广州千合商务信息咨询有限公司",
          time: "2017年10月-2020年01月",
          text: "技术部：混合开发工程师",
          logo: 'https://lidexun.gitee.io/phone/assets/logo/logo_2.jpg',
          content: '内容：负责公司爱情人APP项目'
        },
        {
          name: "麦可视觉设计",
          time: "2016年10月 - 2017年05月",
          text: "技术部：H5/移动端前端",
          logo: 'https://lidexun.gitee.io/phone/assets/logo/logo_1.jpg',
          content: '内容：负责PC/响应式/移动/后端管理系统'
        },
        {
          name: "广州腾骥网络科技有限公司",
          time: "2016年05月-2016年09月",
          text: "技术部：WEB前端",
          logo: "https://lidexun.gitee.io/phone/assets/logo/logo_0.jpg",
          content: '内容：负责PC端'
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';

.three {
  flex();
  justify_content();
  padding: 0 0.2rem;
  height: 100vh;

  .two_title {
    swipe_title();
    fade_up_10();
  }

  .three_list {
    flex();
    align_items();
    li {
      margin: 0.2rem 0;
      fade_left_10();
      flex();
      align_items();
      flex-direction: row;
      width 80%
      .logo{
         width 1.2rem;
         height 1.2rem;
         margin-right 0.2rem;
         bg_init()
      }
      .info{
         .name{
            font-weight bold
          }
      }
    }
  }
}
</style>