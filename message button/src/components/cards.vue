<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <text :class="type"> {{ title }} </text>

<!-- 

    <div class="avatar" data-tooltip="GRRRRRR"></div> -->
 
       
  </template>
  
  <script>
  export default{
    props: {
        title: String,
        type: String,
  
    }
  }
  </script>





<!-- <style scoped>



text {
  font-family: 'Quicksand', sans-serif;
  height: 4600px;
  cursor: pointer;
  border: 0;
  font-weight: 500;
  font-size: 22px;
  display: flex;
  justify-content: center;
  padding: 20px;
  transform: translateY(-79%);
  transition: width 0.3s, height 0.3s;
  opacity: 0.6;
  overflow: hidden;
  
}
 




  .regular{
    color: white;
    background-color: #0274BD;
  } 
  .regular:hover {
    background-color: #0d83cced;
    width: 310px;
    height: 510px;
  }
  
  .happy{
    color: white;
    background-color: rgb(106, 216, 73);
  }
  .happy:hover {
    background-color: rgba(115, 223, 83, 0.811);
    width: 310px;
    height: 510px;
  
  }

  .sad{
    color: white;
    background-color: #e4c71d;
  }
  .sad:hover {
    background-color: #e8d56ad5;
    width: 310px;
    height: 510px;
  }

  .angry{
    color: white;
    background-color: #df502d;
  }
  .angry:hover {
    background-color:#fc4e4ee1 ;
    width: 310px;
    height: 510px;
  }
   
  
  </style> 


   -->