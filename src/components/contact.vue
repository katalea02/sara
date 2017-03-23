<template>
 <div class="classname">
 <nav-menu></nav-menu>
 <h1> {{name}} {{email}} </h1>
 <div class="conn">
  Name: <input type="text" v-model="name" placeholder="Put your name here "> </br> </br>
  Email: <input type="text" v-model="email" placeholder="Put your email here" > </br> </br>
  <button @click="say()" >Click</button>
  </div>
 </div>
</template>	
<script>
export default {
  name: 'classname',
  data () {
    return {
      contactmsg: 'This is the second page of our project',
      name: '',
      email: ''
    }
  },

  methods: {
    say () {
      this.contactmsg = `${this.name} ${this.email}`
    }
  }
}

</script>
