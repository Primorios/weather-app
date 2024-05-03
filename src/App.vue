<template>
  <div class="info-block" :class="day ? 'info-block bg-day' : 'info-block bg-night'">
    <div class="info-block__search">
      <p class="error">{{error}}</p>
      <input class="input" type="text" placeholder="Enter city name" v-model="inputValue" @keyup.enter="makeSearch(inputValue)">
      <button :disabled="inputValue === '' || inputValue.length < 3" class="button" @click="makeSearch(inputValue)">{{buttonText}}</button>
    </div>
    <div class="info-block__weather" v-if="result">
      <div class="info-block__temp">
        <svg v-if="day" width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3986 7.64605C13.495 7.37724 13.88 7.37724 13.9764 7.64605L14.2401 8.38111C14.271 8.46715 14.3395 8.53484 14.4266 8.56533L15.1709 8.82579C15.443 8.92103 15.443 9.30119 15.1709 9.39644L14.4266 9.65689C14.3395 9.68738 14.271 9.75507 14.2401 9.84112L13.9764 10.5762C13.88 10.845 13.495 10.845 13.3986 10.5762L13.1349 9.84112C13.104 9.75507 13.0355 9.68738 12.9484 9.65689L12.2041 9.39644C11.932 9.30119 11.932 8.92103 12.2041 8.82579L12.9484 8.56533C13.0355 8.53484 13.104 8.46715 13.1349 8.38111L13.3986 7.64605Z" fill="#ffffff"/>
        <path d="M16.3074 10.9122C16.3717 10.733 16.6283 10.733 16.6926 10.9122L16.8684 11.4022C16.889 11.4596 16.9347 11.5047 16.9928 11.525L17.4889 11.6987C17.6704 11.7622 17.6704 12.0156 17.4889 12.0791L16.9928 12.2527C16.9347 12.2731 16.889 12.3182 16.8684 12.3756L16.6926 12.8656C16.6283 13.0448 16.3717 13.0448 16.3074 12.8656L16.1316 12.3756C16.111 12.3182 16.0653 12.2731 16.0072 12.2527L15.5111 12.0791C15.3296 12.0156 15.3296 11.7622 15.5111 11.6987L16.0072 11.525C16.0653 11.5047 16.111 11.4596 16.1316 11.4022L16.3074 10.9122Z" fill="#ffffff"/>
        <path d="M17.7693 3.29184C17.9089 2.90272 18.4661 2.90272 18.6057 3.29184L19.0842 4.62551C19.1288 4.75006 19.2281 4.84805 19.3542 4.89219L20.7045 5.36475C21.0985 5.50263 21.0985 6.05293 20.7045 6.19081L19.3542 6.66337C19.2281 6.7075 19.1288 6.80549 19.0842 6.93005L18.6057 8.26372C18.4661 8.65284 17.9089 8.65284 17.7693 8.26372L17.2908 6.93005C17.2462 6.80549 17.1469 6.7075 17.0208 6.66337L15.6705 6.19081C15.2765 6.05293 15.2765 5.50263 15.6705 5.36475L17.0208 4.89219C17.1469 4.84805 17.2462 4.75006 17.2908 4.62551L17.7693 3.29184Z" fill="#ffffff"/>
        <path d="M3 13.4597C3 17.6241 6.4742 21 10.7598 21C14.0591 21 16.8774 18.9993 18 16.1783C17.1109 16.5841 16.1181 16.8109 15.0709 16.8109C11.2614 16.8109 8.17323 13.8101 8.17323 10.1084C8.17323 8.56025 8.71338 7.13471 9.62054 6C5.87502 6.5355 3 9.67132 3 13.4597Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p class="temperature">{{temp}}</p>
      </div>
      <div class="info">
        <div class="info__place">
          <svg class="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.6211 8.45C19.5711 3.83 15.5411 1.75 12.0011 1.75C12.0011 1.75 12.0011 1.75 11.9911 1.75C8.46107 1.75 4.42107 3.82 3.37107 8.44C2.20107 13.6 5.36107 17.97 8.22107 20.72C9.28107 21.74 10.6411 22.25 12.0011 22.25C13.3611 22.25 14.7211 21.74 15.7711 20.72C18.6311 17.97 21.7911 13.61 20.6211 8.45ZM12.0011 13.46C10.2611 13.46 8.85107 12.05 8.85107 10.31C8.85107 8.57 10.2611 7.16 12.0011 7.16C13.7411 7.16 15.1511 8.57 15.1511 10.31C15.1511 12.05 13.7411 13.46 12.0011 13.46Z" fill="#ffffff"/>
          </svg>
          <p class="main-text">{{city}}, {{country}}</p>
        </div>
        <div class="info__weather">
          <p class="main-text">{{weather}}</p>
          <p class="weather-text">weather</p>
        </div>
      </div>
    </div>
    <div v-else-if="!result" style="color:white; font-size: 24px;">
      Start the search
    </div>
        <!-- <div class="slider__items">
          <div class="location-image">
            <img class="image" src="../assets/images/pic.png" alt="pic">
            <p>London</p>
          </div>
          <div class="location-image">
            <img class="image" src="../assets/images/pic.png" alt="pic">
            <p class="image-text">London</p>
          </div>
          <div class="location-image">
            <img class="image" src="../assets/images/pic.png" alt="pic">
            <p class="image-text">London</p>
          </div>
          <div class="location-image">
            <img class="image" src="../assets/images/pic.png" alt="pic">
            <p class="image-text">London</p>
          </div>
          <div class="location-image">
            <img class="image" src="../assets/images/pic.png" alt="pic">
            <p class="image-text">London</p>
          </div>
          </div> -->
  </div>
  <Popular @result="receivedData" />
</template>

<script>
import axios from 'axios';
import Popular from './components/popularQueries.vue'

export default {
  data() {
    return {
      inputValue: '',
      city: '',
      country: '',
      temp: '',
      weather: '',
      day: false,
      result: null,
      error: ''
    }
  },
  methods: {
    receivedData(result) {
      this.result = result
      
      if (this.result !== null) {
        this.city = this.result.name
        this.temp = Math.round(this.result.main.temp) + '°'
        this.country = this.result.sys.country
        this.weather =  this.result.weather[0].description

        const currTime = this.result.dt + this.result.timezone
        const sunriseTime = this.result.sys.sunrise
        const sunsetTime = this.result.sys.sunset
        this.day = sunriseTime < currTime && currTime < sunsetTime
      }     
    },
    showInputValue() {
      this.inputValue
    },
    makeSearch(value) {
      this.error = ''

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
        .then(
          res => {
            this.result = res.data
          
            if (this.result !== null) {
            this.city = this.result.name
            this.temp = Math.round(this.result.main.temp) + '°'
            this.country = this.result.sys.country
            this.weather =  this.result.weather[0].description

            const currTime = this.result.dt + this.result.timezone
            const sunriseTime = this.result.sys.sunrise
            const sunsetTime = this.result.sys.sunset
            this.day = sunriseTime < currTime && currTime < sunsetTime
          }
        }
      )
        .catch(error => {
          if (error.response.status === 404) {
              return this.error = 'City not found'
          }
        });
    },
  },
  computed: {
    buttonText() {
      if (this.inputValue.length > 2) {
        return 'Get weather'
      } else {
        return 'Choose city'
      }
    },
  },
  components: {
    Popular
  }
}
</script>

<style scoped>
.bg-day {
  background: linear-gradient(93.69deg, #00D1FF 0%, #1A67DC 100%);
}
.bg-night {
  background: linear-gradient(90deg, #536976 0%, #292E49 100%);
}
</style>
