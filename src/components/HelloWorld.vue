<template>
  <div class="hello">
    <router-link to="/add/payment/Food?value=200">
      Добавь 200 в Food</router-link
    >
    <br />
    <router-link to="/add/payment/Transport?value=50">
      Добавь 50 в Transport</router-link
    >
    <br />
    <router-link to="/add/payment/Entertainment?value=2000">
      Добавь 2000 в Entertaiment</router-link
    >
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
