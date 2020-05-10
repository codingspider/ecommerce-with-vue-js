<template>
  <div>
      <p>This is Home Page </p>
      <p> {{ welcome }} </p>
  </div>
</template>

<script>
export default {
   name: 'home',
   computed: {
     welcome(){
       return this.$store.getters.welcome
     }
   }
}
</script>

