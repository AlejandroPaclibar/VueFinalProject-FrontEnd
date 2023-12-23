<template>
    <a class="grow" :href="link">
      {{ linkText }}
    </a>
  </template>
  
  <script>
  
  export default {
    props: {
        type: String,
        link: String
    }
  }
  
  </script>
  
  <style scoped>
  
    .grow{
        background: rgba(113, 152, 140, 0.914);
      padding: 20px ;
      width: 20vw;
      margin: 10px;
      font-size: 20px;
      color: rgb(242, 242, 242);
      text-align: center;
      justify-content: space-between;
      font-family: 'Quicksand', sans-serif;
      text-decoration: none;
      transition: .5s ease;
      letter-spacing: 7px;
    
    }
  
    .grow:hover{
      transform: scale(1.2);
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
    }
  
  </style>