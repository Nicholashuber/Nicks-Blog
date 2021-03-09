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
"> <div data-v-28f55286="" class="card-content"><div data-v-28f55286="" class="media"><div data-v-28f55286="" class="media-content"><a data-v-28f55286="" href="/hello-world" class=""><h3 style="color: black !important;" data-v-28f55286="" class="title
              is-home
              has-text-weight-light
              ">
            Dev Talk ☕
          </h3> <h4 style="color: black !important;" data-v-28f55286="" class="subtitle is-6"><span class="author-wrapper"><strong style="color: black !important;">Monthly Dev Discussion!</strong></span> <br>
<br><span class="date-wrapper"><a class="button is-outlined is-small" style="color: #fff;background-color: #007bff;border-color: #007bff;">
    Load Comments
  </a>
  </span></h4></a></div></div></div></div></div><div data-v-3d9d9137="" class="column items" style="width: 33.3333%;"><div data-v-28f55286="" class="card" data-v-3d9d9137="" style="
    border-color: #ffc107 !important;
    border: 2px solid rgba(0,0,0,.125);
    border-radius: .25rem;
"> <div data-v-28f55286="" class="card-content"><div data-v-28f55286="" class="media"><div data-v-28f55286="" class="media-content"><a data-v-28f55286="" href="/getting-started-with-awake" class=""><h3 style="color: black !important;" data-v-28f55286="" class="title
              is-home
              has-text-weight-light
              ">
            What im Working on
          </h3> <h4 style="color: black !important;" data-v-28f55286="" class="subtitle is-6"><span class="author-wrapper"><strong style="color: black !important;">Monthly Dev Discussion!</strong></span> <br>
<br><span class="date-wrapper"><a class="button is-outlined is-small" style="color: #fff;background-color: #007bff;border-color: #007bff;">
    Load Comments
  </a>
  </span></h4></a></div></div></div></div></div><div data-v-3d9d9137="" class="column items" style="width: 33.3333%;"><div data-v-28f55286="" class="card" data-v-3d9d9137="" style="
    border-color: #dc3545 !important;
    border: 2px solid rgba(0,0,0,.125);
    border-radius: .25rem;
"> <div data-v-28f55286="" class="card-content"><div data-v-28f55286="" class="media"><div data-v-28f55286="" class="media-content"><a data-v-28f55286="" href="/built-for-speed" class=""><h3 style="color: black !important;" data-v-28f55286="" class="title
              is-home
              has-text-weight-light
              ">
            Built For Speed
          </h3> <h4 style="color: black !important;" data-v-28f55286="" class="subtitle is-6"><span class="author-wrapper"><strong style="color: black !important;">Monthly Dev Discussion!</strong></span> <br>
<br><span class="date-wrapper"><a class="button is-outlined is-small" style="color: #fff;background-color: #007bff;border-color: #007bff;">
    Load Comments
  </a>
  </span></h4></a></div></div></div></div></div></div> <!----> <div data-v-3d9d9137="" class="intersection-observer"></div></div></div></div>















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
.subtitle {
  font-size: 1rem;
  margin-bottom: 0 !important;
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
</style>
