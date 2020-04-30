<template>
  <div class="four" v-show="index == swiperIndex">
    <div class="four_title" data-title="精通了那些技术" data-text="掌握了一些吃饭的技能"></div>
    <div class="four_box">
      <ul class="four_box_list" :class="{'on':!initon}">
        <li v-for="(item,index) in list" :key="index" :style="{'animation-delay': ((1+ index) * 3) + '00ms'}">
          <div class="four_box_item">
            <font-awesome-icon
              class="iconfont"
              v-if="item.icon"
              :style="{'color':item.color}"
              :icon="['fab', item.icon]"
            />
            <img class="iconimg" v-else :src="item.logo" />
            <span v-text="item.name"></span>
          </div>
          <div class="four_box_outer">
            <div class="four_box_line" :style="{'background-color':item.color,'width':item.percentage}"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "four",
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
  watch:{
    swiperIndex(){
    }
  },
  data() {
    return {
      initon: false,
      list: [
        {
          name: "H5",
          icon: "html5",
          color: "#e24910",
          logo: "",
          percentage: "99%"
        },
        {
          name: "JavaScript/ES6",
          icon: "js",
          color: "#f9d020",
          logo: "",
          percentage: "80%"
        },
        {
          name: "Vue",
          icon: "vuejs",
          color: "#41b883",
          logo: "",
          percentage: "80%"
        },
        {
          name: "bootstrap",
          icon: "bootstrap",
          color: "#7952b3",
          logo: "",
          percentage: "80%"
        },
        {
          name: "APIcloud",
          icon: "",
          color: "#89ae00",
          logo: "https://lidexun.gitee.io/phone/assets/code/apicloud.jpg",
          percentage: "99%"
        },
        {
          name: "微信小程序",
          icon: "",
          color: "#15d327",
          logo: "https://lidexun.gitee.io/phone/assets/code/mini.jpg",
          percentage: "70%"
        },
        {
          name: "Vant",
          icon: "",
          color: "#19b5ff",
          logo: "https://lidexun.gitee.io/phone/assets/code/logo.jpg",
          percentage: "80%"
        }
      ],
      timeOut:null
    };
  },
  mounted(){

  },
  methods:{
    init (flag){
      var self = this;
      if(flag){
         this.timeOut = setTimeout(() => {
          self.initon = flag;
        }, self.list.length *  350);
      } else {
         clearTimeout(this.timeOut);
         this.timeOut = null;
         this.initon = flag;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';

.four {
  height: 100%;
  position: relative;
  flex();
  align_items();
  justify_content();

  .four_title {
    swipe_title();
    fade_up_10();
  }

  .four_box {
    width: 100%;
  }

  .four_box_list {
    width: 80%;
    margin: 0 auto;

    li {
      flex();
      fade_up_10();

        margin: 0.15rem 0;
      .four_box_item {
        flex();
        flex-direction: row;
        align-items: center;
        font-size: 0.32rem;
        margin-bottom 0.05rem;
        span{
          margin-left 0.1rem;
        }
      }

      .iconfont, .iconimg {
        font-size: 0.5rem;
        width: 0.5rem;
      }

      .four_box_outer {
        width: 100%;
        height: 0.1rem;
        background-color: #ebeef5;
        overflow: hidden;
        position: relative;
        border-radius 3rem;
        margin: 0.1rem 0;
        .four_box_line{
          position absolute
          left 0;
          bottom 0;
          height 100%;
          transition width 1s cubic_bezier;
        }
      }
    }
      &.on{
        .four_box_line{
          width 0% !important;
        }
      }
  }
}
</style>