<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <button>Pause</button>
        <button>Unpause</button>
        <button @click="start">Start</button>
        <button @click="stop">Stop</button>
      </li>
    </ul>
   <h2> {{timerCurrentTime}}</h2>
    <nav-menu></nav-menu>
    <footertag> </footertag>
    <test-tag></test-tag>
    </div>
</template>
<script>
import Moment from 'moment'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vue first project',
      timerCurrentTime: Date.now().toLocaleString()
    }
  },
  methods: {
    theTime () {
      const timeInterval = setInterval(() => {
        this.timerCurrentTime = Moment().format('MMMM Do YYYY, h:mm:ss a')
      }, 1000)

      console.log(timeInterval)
    },
    stop () {
      const timeInterval = clearInterval(timeInterval)
      console.log(timeInterval)
    },
    start () {
      const timeInterval = setInterval(() => {
        this.timerCurrentTime = Date.now()
      }, 1000)

      console.log(timeInterval)
    }
  },

  created () {
    this.theTime()
    this.stop()
    this.start()
    Moment.lokale('sq')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
router-link {
  text-decoration:none;
}
button {
  width: 100px;
  height: 35px;
  background-color: #45B39D;
  color: #efefef;
  border-radius: 5px;
}
</style>
