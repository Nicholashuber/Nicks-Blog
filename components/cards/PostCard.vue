<template>
  <generic-card
    :title="title"
    :image="image"
    :link="link"
    :image-dimensions="
      $siteConfig.posts.imageDimensions ||
        $siteConfig.cards.imageDimensions ||
        null
    "
  >
    <span
      v-if="author && $siteConfig.posts.displayAuthor"
      class="author-wrapper" style="color: white;"
    >
    <div v-if="author.indexOf('Portfolio') !== -1">{{ subtitle }}</div>
      <strong style="color: white;">Author:</strong> {{ author }} |
    </span>
    <div v-if="author.indexOf('Portfolio') === -1">
    <span v-if="date" class="date-wrapper" style="color: white;">
      <strong style="color: white;">Published on:</strong> {{ datePretty }}
    </span>
    </div>
  </generic-card>
</template>

<script>
import GenericCard from './GenericCard'
import { getFormattedDate } from '~/helper'
export default {
  components: { GenericCard },
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  computed: {
    datePretty() {
      return getFormattedDate(this.date)
    }
  }
}
</script>
