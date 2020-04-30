<template>
  <div id="app" :data-text="Uptext">
    <swiper class="my_swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <one v-bind:swiperIndex="swiperIndex" v-bind:index="0"></one>
      </swiper-slide>
      <swiper-slide>
        <two v-bind:swiperIndex="swiperIndex" v-bind:index="1"></two>
      </swiper-slide>
      <swiper-slide>
        <three v-bind:swiperIndex="swiperIndex" v-bind:index="2"></three>
      </swiper-slide>
      <swiper-slide>
        <four v-bind:swiperIndex="swiperIndex" v-bind:index="3" ref="swiperIndex3"></four>
      </swiper-slide>
      <swiper-slide>
        <five v-bind:swiperIndex="swiperIndex" v-bind:index="4"></five>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import one from "@/components/swiper/one";
import two from "@/components/swiper/two";
import three from "@/components/swiper/three";
import four from "@/components/swiper/four";
import five from "@/components/swiper/five";

import "swiper/css/swiper.css";

export default {
  name: "App",
  components: {
    Swiper,
    SwiperSlide,
    one,
    two,
    three,
    four,
    five
  },
  data() {
    const self = this;
    return {
      describe: [
        {
          title: "三年工作经验",
          text: "web/混合APP/小程序/Vue"
        }
      ],
      swiperIndex: 0,
      swiperOptions: {
        direction: "direction",
        mousewheel: true,
        // Some Swiper option/callback...
        on: {
          slideChangeTransitionEnd() {
            self.swiperIndex = this.activeIndex;
            if (self.swiperIndex == 3) {
              self.$refs.swiperIndex3.init(true);
            } else {
              self.$refs.swiperIndex3.init(false);
            }
            if(self.swiperIndex == 4){
                self.Uptext = '已经到底啦'
            } else{
               self.Uptext = '向上滑动'
            }
          }
        }
      },
      Uptext:'向上滑动'
    };
  },
  directives: {
    swiper: directive
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
};
</script>

<style lang="stylus">
@import 'stylus/init.styl';
@import 'stylus/common.styl';

html{
  html();
}
html, #app {
  height: 100%;
}

body::before, body::after {
  content: '';
  width: 1.8rem;
  height: 1.8rem;
  position: fixed;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
  border-radius: 50%;
}

body::before {
  top: -0.5rem;
  left: -0.85rem;
  background: linear-gradient(-30deg, #2196f3 1%, #9c27b0 100%);
  animation: fa_up_10 30s ease-in 0s infinite;
}

body::after {
  right: 0;
  bottom: -0.5rem;
  background: linear-gradient(-30deg, #2196f3 1%, #00bcd4 100%);
  animation: fa_left_10 60s ease-in 0s infinite;
}

.swiper-wrapper {
  display: -webkit-flex;
  flex-direction: column;
}

.my_swiper {
  height: 100vh;
  // max-width: 9.7rem;
  .swiper-slide{
     max-width 10rem;
     margin 0 auto
  }
}

#app::after {
  content: attr(data-text);
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0.15rem;
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.5);
  font-size 0.14rem
  transform: translateY(constant(safe-area-inset-bottom));
  transform: translateY(safe-area-inset-bottom);
  fade_up_10(1000,1300);
  // -webkit-animation: top 1s 1s linear both infinite;
}
</style>
