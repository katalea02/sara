<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <button @click="stop">Pause</button>
        <button @click="start">Unpause</button>
        <button @click="start">Start</button>
        <button @click="stop">Stop</button>
      </li>
    </ul>
   <h2> {{timerCurrentTime}}</h2>
    <nav-menu></nav-menu>
   <h3> Stopwatcher </h3>
   <h3> {{ stopwatch }}</h3>
   <ul>
      <li>
        <button @click="starts">StartStopwatcher</button>
        <button @click="stops">StopStopwatcher</button>
      </li>
    </ul>
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
      timerCurrentTime: Moment().format('MMMM Do YYYY, h:mm:ss a'),
      timeInterval: '',
      stopwatch: '00:00:00',
      seconds: 0
    }
  },
  methods: {
    stop () {
      const clearTimeInterval = clearInterval(this.timeInterval)
      console.log(clearTimeInterval)
    },
    start () {
      this.timeInterval = setInterval(() => {
        this.timerCurrentTime = Moment().format('MMMM Do YYYY, h:mm:ss a')
      }, 1000)
      console.log(this.timeIntervals)
    },
    starts () {
      this.timer = setInterval(() => {
        this.seconds += 1
        this.stopwatch = Moment().startOf('day').seconds(this.seconds).format('HH:mm:ss')
      }, 1000)
      console.log(this.timer)
    },
    stops () {
      const clearTimer = clearInterval(this.timer)
      console.log(clearTimer)
    }
  },
  created () {
    Moment.locale('sq')
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
</style>
