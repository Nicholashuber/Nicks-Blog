<template>
  <div class="logo-wrapper">
    <div
      :class="{
        'logo-inner': true
      }"
    >
     <!-- <img
        v-for="x in frames"
        :key="x"
        :src="`/logo-frames/logo-f${x - 1}.svg`"
      />
      <img
        v-for="x in frames"
        :key="`${x}-r`"
        :src="`/logo-frames/logo-f${frames - x}.svg`"
      />-->
<img src="~/assets/uploads/huberlogo.png" style="" alt="profile-pic">
    </div>
    <a href="https://calendly.com/nhuber?hide_landing_page_details=1" target="_blank">
    <div id="nickscalendly" class="calendly-badge-widget" style="margin-left: 54px;margin-top: 10px;">
    <div class="calendly-badge-content calendly-white" style="background: rgb(255, 255, 255);color: rgb(4, 4, 4) !important;display: table-cell;/* float: left; */width: auto;height: 33px;padding: 0px 24px;border-radius: 25px;box-shadow: rgb(0 0 0 / 25%) 0 2px 5px;font-family: sans-serif;text-align: center;vertical-align: middle;font-weight: bold;font-size: 14px;color: #fff;cursor: pointer;">Schedule time with me</div>
    </div></a>
  </div>
</template>
<script>
export default {
  name: 'SiteLogo',
  data() {
    return {
      frames: 5,
      currentFrame: 1,
      blinking: true
    }
  },
  mounted() {
    setInterval(() => {
      const rand = Math.ceil(Math.random() * 10)
      this.blinking = rand % 2
    }, 1000)
  }
}
</script>

<style lang="scss">
.logo-wrapper .logo-inner {
    position: absolute;
    height: 500px;
}
.logo-wrapper .logo-inner img {
    margin-left: 0px !important;
}
@keyframes logoBlink {
  100% {
    transform: translateY(-360px);
  }
}
.logo-wrapper {
  position: relative;
  height: 50px;
  overflow: hidden;
  width: 284px;
  .logo-inner {
    position: absolute;
    height: 500px;
    img {
      display: block;
      height: 40px;
      margin: 5px;
      max-height: initial;
    }
    &.blink {
      animation: logoBlink 0.2s steps(8, end) alternate;
    }
  }
}
</style>
