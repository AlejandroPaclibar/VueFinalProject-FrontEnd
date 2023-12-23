<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <header>
   

    <div class="wrapper">

      <div class="name">

        <h1>Alejandro A. Paclibar, BSIT 3 <span>Senior Inspector Agela</span></h1>


      </div>
      
      <div class="clickable">

        <nav>

          <li>
              <h1>     <RouterLink to="/">Personal information</RouterLink></h1>
          

          </li>

          <br>
        
          <br>

          <li>
            <h1> <RouterLink to="/educational_background">Educational Background</RouterLink></h1>
            

          </li>

          <br>

          <br>

          <li>
            <h1><RouterLink to="/work_exp">Work Experience</RouterLink></h1>
             

          </li>

          <br>

          <br>

          <li>
            <h1><RouterLink to="/portfolio">Portfolio</RouterLink>
</h1>
            
          </li>

      </nav>

      </div>

    </div>

    <img src="../src/components/icons/image1.jpg" alt="">

  </header>

  <RouterView />

</template>

<style scoped>

span {
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: 300;
}

h1 {
  color: white;
  margin: 20px;
  padding: 10px;
  text-align: right;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;


}

header {
  background-color: rgb(17, 21, 61);
  width: 35%;
  height: 94vh;
  text-align: right;
  
}

a {
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
  font-size: 28px;
  font-weight: 500;
  color: white;

}

li {
  list-style-type: none;
  width: 530px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: end;
}

li:hover{
  background-color: rgba(0, 0, 255, 0.477);
}

.wrapper {
  /* background-color: rgb(31, 30, 41); */
}

.clickable{
  margin-top: 100px;
}
.clickable li{

 
    /* background-color: brown; */
  line-height: 0px;
  text-align: right;

  
}
nav {
  line-height: 2px;

}


img {
  width: 40%;
  height: 30%;
  margin-right: 17rem;
  border-radius: 50%;
}









































/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
