<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <button :class="type"> {{ title }} </button>
  </template>
  
  <script>
  export default{
    props: {
        title: String,
        type: String
    }
  }
  </script>
  
  <style scoped>


  button {
    font-family: 'Quicksand', sans-serif;
    padding: 10px 20px;
    width: 140px;
    margin: 10px;
    cursor: pointer;
    border: 0;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .regular{
    color: white;
    background-color: #0274BD;
  }
  .regular:hover {
    background-color: #0d83cc81;
  }
  
  .happy{
    color: white;
    background-color: rgb(106, 216, 73);
    border-color: rgb(3, 104, 0);
  }
  .happy:hover {
    background-color: rgba(106, 246, 63, 0.562);
  }

  .sad{
    color: white;
    background-color: #e7cd39;
  }
  .sad:hover {
    background-color: #ffe5519b;
  }

  .angry{
    color: white;
    background-color: #f14418;
  }
  .angry:hover {
    background-color:#eb6464c3 ;
  }
  
  
  </style>