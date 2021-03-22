<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <button
        v-if="$siteConfig.newsletter.on"
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Subscribe To Newsletter
      </button>
    </site-hero>

      <main-section theme="one-column">
      <template v-slot:default>
      <p class="title" style="color: white;">
                Projects
                <component
            :is="nuxt-link"
            :to="/categories/portfolio"
            :href="/categories/portfolio"
          >
          <component
            :is="$route.startsWith('http') ? 'a' : 'nuxt-link'"
            :href="/categories/portfolio"
            :to="/categories/portfolio"
            :target="/categories/portfolio ? /categories/portfolio : '_self'"
          >
<button class="button is-primary" style="
    border: 1px solid transparent;
    border-radius: 4px;
    border-color: white;
    border-width: 1px;
    background-color: transparent;
    margin-left: 15px;
">Show More</button>
</component>
              </p>
        <!-- All Posts -->
        <posts-grid :category="['Portfolio']"/>
       <!-- <a href="/categories/portfolio" style="background-color: transparent !important;color: white !important;" class="button is-fullwidth is-outlined is-large">
    Show More
  </a>-->
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>

    <main-section theme="one-column" style="    margin-top: 0px !important;    padding-top: 0px;">
    
      <template v-slot:default>
            <p class="title" style="color: white;">
                Blog
              </p>
        <!-- All Posts -->
        <posts-grid :category="['Blog']"/>
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import NewsLetterFormModal from '~/components/NewsLetterFormModal'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    NewsLetterFormModal
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
strong{
  color: white;
}
</style>
