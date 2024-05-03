<template>
    <div class="popular-queries">
      <p class="popular-queries__title">Popular queries</p>
      <button class="button-prev" @click="prevSlide">
          <svg width="40px" height="40px" viewBox="0 0 24 24">
          <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"/>
          </svg>
      </button>
      <div class="slider">
        <div class="slider__items" :style="style">
          <div class="location-image" v-for="(slide, index) of slides" :key="index" @click="selectedCity(slide.title)">
            <img class="image" :src="slide.image" :alt="`slide ${index + 1}`">
            <p>{{ slide.title }}</p>
          </div>
        </div>
      </div>
      <button class="button-next" @click="nextSlide">
          <svg width="40px" height="40px" viewBox="0 0 24 24">
          <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"/>
          </svg>
      </button>
  </div>
</template>

<script>
import axios from 'axios';
import importedImages from './importedImages.js'

export default {
    data() {
      return {
        currentSlide: 0,
        style: null,
        count: 0
      }
    },
    methods: {
      nextSlide() {
        if (this.count < -235) {
          this.style = `left: ${this.count = 235}px`
        }

        this.style = `left: ${this.count -= 235}px`
      },
      prevSlide() {
        if (this.count > -235) {
          this.style = `left: ${this.count = -705}px`
        }

        this.style = `left: ${this.count += 235}px`
      },
      selectedCity(value) {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
          .then(
            res => {
              const result = res.data
              this.$emit('result', result);
            }
        )
      },
    },
    mixins: [importedImages],
    props: {
      App: {
        type: Object,
        required: true
      }
    }
}
</script>