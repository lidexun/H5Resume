<template>
  <div class="five" v-show="index == swiperIndex">
    <div class="five_title" data-title="关于我" data-text="简单介绍下"></div>
    <div class="five_box">
      <ul class="five_box_list">
        <li>
          <span class="phone"></span>
        </li>
        <li v-for="(item,index) in list" :key="index" v-text="item.text" :style="{'animation-delay': ((1+ index) * 3) + '00ms'}"></li>
      </ul>
      <div class="five_box_btn">
        <span v-for="(item,index) in github" :key="index" v-text="item.text" @click="open(item.url)"  :style="{'animation-delay': ((1+ index) * 3) + '00ms'}"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "five",
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
          text:
            "HI 我叫李德勋/96年，一名简简单单WEB前端开发者，已经从事WEB前端有三年之余，有空写写插件写写项目分享出来，当然也要跟着时代前进，多看文档多实际，学历不够能力来凑"
        },
        { text: "目前情况：找工作中~如有合作意向可通过下方QQ在线联系(坐标：广州天河)" },
        { text: "最后的最后的~~如果觉得这份H5简历还不错，麻烦给个star~" }
      ],
      github: [
        { 
          text: "H5在线简历", 
          url: "https://github.com/lidexun/H5Resume" 
        },
        { 
          text: "apicloud-and-vant商城项目", 
          url: "https://github.com/lidexun/apicloud-and-vant" 
        },
        {
          text: "QQ：910547462",
          url:
            "https://shang.qq.com/open_webaio.html?sigt=3b3397c4a3e3d3b59869b09d811bab5bcdea93bd69be308d9825e4094b8e30be17750273fb4f0761ef91b87c4083cb9d&sigu=a7d3ec84efeabe32c64ddf66c0183d5284fd890797d66de520489186620082e5de097adb91f04164&tuin=910547462"
        }
      ]
    };
  },
  methods: {
    open(url) {
      if(!url) return;
      window.open(url);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';

.five {
  height: 100vh;
  position: relative;
  flex();
  align_items();
  justify_content();

  .five_title {
    swipe_title();
    fade_up_10();
  }

  .five_box {
    padding: 0 0.2rem;
    max-width: 12rem;
    font-size: 0.32rem;

    li {
      text-indent: 2em;
      margin: 0.1rem 0;
      fade_up_10();

      .phone {
        background-image: url('https://lidexun.gitee.io/blog/hero.png');
        width: 1.8rem;
        height: 1.8rem;
        border: 0.05rem solid white;
        box-shadow: 0 0.05rem 0.05rem rgba(0, 0, 0, 0.1);
        border-radius: 100%;
        background-size: cover;
        display: block;
        margin: 0 auto;
      }
    }
    .five_box_btn{
        span {
          width: 100%;
          background: #333;
          border-radius: 0.1rem;
          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
          color: #fff;
          margin: 0.2rem 0;
          font-size: 0.28rem;
          min-height: 0.8rem;
          display: inline-block;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
          fade_left_10();
        }
      }
  }

}
</style>