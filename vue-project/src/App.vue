<template>
  <div class="main-container">
    <div class="main-nav">
        <Nav />
    </div>

    <div class="container">
      <div class="side">
          <Side />
      </div>

      <div class="con">
          <Sulod />
      </div>

    </div>
   
  </div>

</template>

<script>
import Nav from './components/nav.vue';
import Side from './components/Side.vue';
import Sulod from './components/sulod.vue'


export default{
  components: {
    Nav,
    Side,
    Sulod
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.main-container{
  background-color: white;
  width: 100%;
  height: 100vh;
  
}

.side{
  background: rgba(27, 25, 25, 0.914);
  width: 14%;
  height: 100vh;
}

.container{
  display: flex;
}

.con{
  background-color: rgb(32, 32, 40);
  /* padding: 10px; */
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}


</style>