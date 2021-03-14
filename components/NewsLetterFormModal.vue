<template>
  <modal-overlay
    id="newsletter-modal"
    :title="title"
    trigger-text="Subscribe To Newsletter"
    class="newsletter-modal"
  >
    <news-letter-form />
  </modal-overlay>
</template>
<script>
import ModalOverlay from '~/components/ModalOverlay'
import NewsLetterForm from '~/components/NewsLetterForm'
export default {
  components: { ModalOverlay, NewsLetterForm },
  computed: {
    title() {
      return (
        this.$siteConfig.newsletter.heading || 'Subscribe to my Newsletter'
      )
    }
  }
}
</script>

<style lang="scss">
.newsletter-modal {
  .field.has-addons {
    justify-content: center;
  }
  .button.is-primary {
    background-color: #3395FF;
}
  .button.is-primary:hover {
    background-color: #3395FF;
}
  
}
</style>
