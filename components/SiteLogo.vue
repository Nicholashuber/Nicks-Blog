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
<img src="https://huber.codes/huberlogo.png" style="" alt="profile-pic">
    </div>
    <div class="calendly-badge-widget" style="margin-left: 54px;">
    <div class="calendly-badge-content calendly-white" style="background: rgb(255, 255, 255);color: rgb(4, 4, 4) !important;display: table-cell;/* float: left; */width: auto;height: 45px;padding: 0px 24px;border-radius: 25px;box-shadow: rgb(0 0 0 / 25%) 0 2px 5px;font-family: sans-serif;text-align: center;vertical-align: middle;font-weight: bold;font-size: 14px;color: #fff;cursor: pointer;">Schedule time with me</div></div>
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
<!-- Calendly badge widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
<script type="text/javascript">Calendly.initBadgeWidget({ url: 'https://calendly.com/nhuber?hide_landing_page_details=1', text: 'Schedule time with me', color: '#ffffff', textColor: '#040404', branding: false });</script>
<!-- Calendly badge widget end -->
<style lang="scss">
.logo-wrapper .logo-inner {
    position: absolute;
    height: 500px;
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
