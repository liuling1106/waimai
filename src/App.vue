<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <v-header/>
    <div class="tab">
        <div class="tab-item">
           <router-link to="/goods">goods</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/articals">articals</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/shopper">shopper</router-link>
        </div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import header from "./components/header.vue";

export default {
  name: "app",
  components: {
   'v-header': header,
   HelloWorld
  }
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app .tab {
display:flex;
width:100%;
height:40px;
line-heigth:40px;
}
#app .tab .tab-item{
flex:1;
text-align:center;
}
</style>
