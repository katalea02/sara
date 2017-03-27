<template>
  <div class="hello">
  <div class="koha">
    {{timerCurrentTime}}
  </div>
  <div class="permbajtje">
    <h1> Stopwatch {{ stopwatch }}</h1>
    <ul>
      <li>
        <button @click="start">Start</button>
        <button @click="stop">Stop</button>
        <button @click="pause">Pause</button>
        <button @click="unpause">Unpause</button>
      </li>
    </ul>
    <nav-menu></nav-menu>
    <footertag> </footertag>
    <test-tag></test-tag>
    </div>
    </div>
</template>
<script>
import Moment from 'moment'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vue first project',
      timerCurrentTime: Moment().format('MMMM Do YYYY, h:mm:ss a'),
      timeInterval: '',
      stopwatch: '00:00:00',
      seconds: 0
    }
  },
  methods: {
    start () {
      if (this.seconds === 0) {
        this.timer = setInterval(() => {
          this.seconds += 1
          this.stopwatch = Moment().startOf('day').seconds(this.seconds).format('HH:mm:ss')
        }, 1000)
        console.log(this.timer)
      }
    },
    stop () {
      this.stopwatch = '00:00:00'
      this.seconds = 0
      clearInterval(this.timer)
    },
    pause () {
      const clearTimer = clearInterval(this.timer)
      console.log(clearTimer)
    },
    unpause () {
      this.timer = setInterval(() => {
        this.seconds += 1
        this.stopwatch = Moment().startOf('day').seconds(this.seconds).format('HH:mm:ss')
      }, 1000)
      console.log(this.timer)
    }
  },
  created () {
    Moment.locale('sq')
    this.time()
  },
  computed: {
    time () {
      this.timeInterval = setInterval(() => {
        this.timerCurrentTime = Moment().format('MMMM Do YYYY, h:mm:ss a')
      }, 1000)
      console.log(this.timeIntervals)
    }
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
  width: 150px;
  height: 35px;
  background-color: #45B39D;
  color: #efefef;
  border-radius: 5px;
}
.koha {
  text-align: right;
  margin-top: -250px;
  padding-right: 10px;
}
.permbajtje {
  padding-top: 250px;
}
</style>
