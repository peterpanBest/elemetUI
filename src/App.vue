<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate(){
    this.$router.push({name: 'login',params: {"token":"success"}});
  },
  created(){
     this.$router.push({name: 'login',params: {"token":"success"}});
  }
}
</script>

<style>

</style>
