<template>
  <div class="my">
    <div class="my_info">
      <div class="my_img"></div>
      <div class="welcome">welcome</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my",
  mounted() {

  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';

.my {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100vh;
  z-index: 1;
  -webkit-animation: fade-up 1.5s cubic_bezier 3s forwards;
  animation: fade-up 1.5s cubic_bezier 3s forwards;

  .my_info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .my_img {
      width: 2rem;
      height: 2rem;
      background-image: url('https://lidexun.gitee.io/blog/hero.png');
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0;
      transform: translateY(100%);
      border-radius: 0.1rem;
      -webkit-animation: fade-up-100 1s cubic_bezier 0s forwards;
      animation: fade-up-100 1s cubic_bezier 0s forwards;
    }

    .welcome {
      font-size: 0;
      -webkit-animation: fontsize 1s cubic_bezier 1s forwards;
      animation: fontsize 1s cubic_bezier 1s forwards;
    }
  }
}

@keyframes fade-up-100 {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fontsize {
  0% {
    opacity: 0;
    font-size: 0;
  }

  100% {
    opacity: 1;
    font-size: 0.64rem;
  }
}

@keyframes fade-up {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>