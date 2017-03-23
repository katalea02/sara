<template>
	<div class="test">
	{{fullname}}
	</div>
</template>
<script>
 export default {
   name: 'test',
   data () {
     return {
       firstname: 'Kristina',
       lastname: 'Dinellari',
       fullname: ''
     }
   },
   computed: {
     function () {
       this.fullname = ` ${this.firstname} + ' ' + ${this.lastname}`
     }
   }
 }
</script>
