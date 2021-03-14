<template>
  <section :class="`hero is-medium hero-theme-${computedTheme}`">
    <img
      class="hero-bg-img"
      :src="responsiveImage.src"
      :lazy="false"
      :srcset="responsiveImage.srcSet"
    />
    <div class="hero-body">
      <div class="container">
        <h1 class="title animated fadeInUp">
          {{ title }}
        </h1>
        <h2 class="subtitle animated fadeInUp slower">
          {{ subtitle }} 
        </h2>
        <br />
        <div
          v-if="$slots.default"
          class="under-subtitle animated fadeInDown slower"
        >
         <!--<slot />-->




<!--<div>{{ $route.name }}</div>-->
 
<div v-if="$route.name === 'index'" data-v-2f15ddaa="" class="under-subtitle animated fadeInDown slower"><div data-v-64d22838=""><div data-v-3d9d9137="" class="grid grid-theme-boxes"><!----> <div data-v-3d9d9137="" class="columns items is-multiline" style="
    margin-left2: 16.66667%;
    width2: 66.66667%;
"><div data-v-3d9d9137="" class="column items" style="width: 33.3333%;"><div data-v-28f55286="" class="card" data-v-3d9d9137="" style="
    border-color: #007bff !important;
    border: 2px solid rgba(0,0,0,.125);
    border-radius: .25rem;
"> <div data-v-28f55286="" class="card-content">
<div data-v-28f55286="" class="media">
<div data-v-28f55286="" class="media-content">

<h3 style="color: black !important;" data-v-28f55286="" class="title
              is-home
              has-text-weight-light
              ">
            Dev Talk ☕
          </h3>
          <h4 style="color: black !important;" data-v-28f55286="" class="subtitle is-6">
          <span class="author-wrapper"><strong style="color: black !important;">Monthly Dev Discussion!<br> Join our zoom call.</strong></span> <br>
<br><span class="date-wrapper"><a class="button is-outlined is-small" style="color: #fff;background-color: #007bff;border-color: #007bff;">
    Join one
  </a>
  </span>
  </h4>
  
  </div></div></div></div></div><div data-v-3d9d9137="" class="column items" style="width: 33.3333%;"><div data-v-28f55286="" class="card" data-v-3d9d9137="" style="
    border-color: #ffc107 !important;
    border: 2px solid rgba(0,0,0,.125);
    border-radius: .25rem;
"> <div data-v-28f55286="" class="card-content"><div data-v-28f55286="" class="media"><div data-v-28f55286="" class="media-content"><h3 style="color: black !important;" data-v-28f55286="" class="title
              is-home
              has-text-weight-light
              ">
            Current Projects
          </h3> <h4 style="color: black !important;" data-v-28f55286="" class="subtitle is-6"><span class="author-wrapper"><strong style="color: black !important;">Check out some projects of mine!</strong></span> <br>
<br><span class="date-wrapper"><a class="button is-outlined is-small" style="color: #fff;background-color: #007bff;border-color: #007bff;">
    View
  </a>
  </span></h4></div></div></div></div></div><div data-v-3d9d9137="" class="column items" style="width: 33.3333%;"><div data-v-28f55286="" class="card" data-v-3d9d9137="" style="
    border-color: #dc3545 !important;
    border: 2px solid rgba(0,0,0,.125);
    border-radius: .25rem;
"> <div data-v-28f55286="" class="card-content"><div data-v-28f55286="" class="media"><div data-v-28f55286="" class="media-content"><h3 style="color: black !important;" data-v-28f55286="" class="title
              is-home
              has-text-weight-light
              ">
            Got Work?
          </h3> <h4 style="color: black !important;" data-v-28f55286="" class="subtitle is-6"><span class="author-wrapper"><strong style="color: black !important;">I'm a Fullstack Developer<br> who specializes in Salesforce!</strong></span> <br>
<br><span class="date-wrapper"><a class="button is-outlined is-small" style="color: #fff;background-color: #007bff;border-color: #007bff;">
    Hire me
  </a>
  </span></h4></div></div></div></div></div></div> <!----> <div data-v-3d9d9137="" class="intersection-observer"></div></div></div></div>















        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SiteHero',
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    image: { type: String, default: '' },
    color: { type: String, default: '#469af0' },
    theme: { type: String, default: '' }
  },
  computed: {
    responsiveImage() {
      if (this.image.indexOf('/uploads') === 0) {
        return require(`~/assets${this.image}`)
      }
      return { src: this.image, srcSet: '' }
    },
    computedTheme() {
      if (this.theme === '' && this.$siteConfig.hero.theme) {
        return this.$siteConfig.hero.theme
      }
      return this.theme || 'mist'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin-top: 52px;
  background-size: cover !important;
  background-position: center;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.title.is-home {
    font-size: 1.25rem !important;
}

.title {
  font-weight: 300;
  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
}
.subtitle,
.under-subtitle {
  padding: 0;
  margin: 0;
}
.card-content {
    background-color: rgba(0,0,0,0);
    padding: 1rem !important;
}
.subtitle {
  font-size: 1rem;
  margin-bottom: 0 !important;
}
.subtitle {
    opacity: 0.8 !important;
}
.under-subtitle {
  display: inline-block;
  font-size: 0.8rem;
  border-top: 2px solid $primary;
  padding-top: 5px;
}
.opti-image {
  opacity: 0;
}
.opti-image-loaded {
  opacity: 0.12;
  animation: blurIn 4.5s ease;
}
</style>
<style lang="scss">
.hero {
  .hero-bg-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .opti-image {
    opacity: 0;
  }
  .opti-image-loaded {
    opacity: 1;
  }
}
.hero-theme-mist {
  .hero-bg-img {
    filter: grayscale(1);
  }
  .opti-image-loaded {
    opacity: 0.12;
    animation: blurInGrayscale 4.5s ease;
  }
}
.hero-theme-dark,
.hero-theme-light {
  &.hero:after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    position: absolute;
  }
  .hero-body {
    position: relative;
    z-index: 2;
  }
}
.hero-theme-dark {
  .title,
  .subtitle,
  .under-subtitle,
  .under-subtitle strong {
    color: white;
  }
}
.hero-theme-light.hero {
  &:after {
    background: rgba(255, 255, 255, 0.6);
  }
  .title,
  .subtitle,
  .under-subtitle,
  .under-subtitle strong {
    text-shadow: 1px 1px 2px white;
  }
}
  .button.is-primary {
    background-color: #3395FF;
}
  .button.is-primary:hover {
    background-color: #3395FF;
}
.hero+.page-main-section {
background-color: #2C2D2F;
}
.card-content {
    background-color: #17181B;
    color: white;
    padding: 1rem;
}
.page-main-section {
    background-color: #2c2d2f;
}
.media .title {
    color: white !important;
}
</style>