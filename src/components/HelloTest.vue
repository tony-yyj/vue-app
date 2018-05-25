<template>
  <div class="hello">
    {{msg}}
  </div>
</template>
<script>
export default {
  name: 'HelloTest',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App, test'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    line-height: 2em;
    width: 300px;
    border: 0;
  }
  .hello:hover{
    border-bottom: 1px solid #ddd;
    transition: all .5s linear;
  }
</style>
