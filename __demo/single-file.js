import { createApp } from 'vue'

// import "@picocss/pico/css/pico.fluid.classless.min.css"

const App = {
  template: `
<div>
      <span>count is {{ count }}</span>
      <span>plusOne is {{ plusOne }}</span>
      <button type="primary" @click="increment">count++</button>
</div>
  `,
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    plusOne: function () {
      return this.count + 1
    },
  },
  methods: {
    increment() {
      this.count++
    },
  },
}



createApp(App).mount('#app')