<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <text :class="type">
      
      <div class="box">
        {{ title }} 
        <div v-if="type === 'regular'">
          <p>"Hello, I hope you're having a wonderful day. I just wanted to check in and see how you're doing. If there's anything on your mind or any updates you'd like to share, feel free to let me know. Remember, I'm here for you, and we can chat anytime. Wishing you a fantastic day ahead!"</p>      
        </div>

        <div v-if="type === 'happy'">
          <p>"Hey there! 🌞 Just wanted to remind you that every day is a new opportunity to embrace joy and positivity. You've got the power to make today amazing, so go out there, smile, and spread happiness to everyone you meet! 🌈✨ Keep shining brightly, and remember that you're awesome just the way you are. Have a fantastic day!" 😄💕</p>      
        </div>

        <div v-if="type === 'sad'">
          <p> "I'm going through a really difficult time at the moment, and it's been quite a rough day. Everything seems to be piling up, and I can't help but feel overwhelmed. It's one of those days where it's hard to find a glimmer of positivity. If you have some time, I could really use a friendly ear to listen, or even just a few words of encouragement."</p>      
        </div>
        
        <div v-if="type === 'angry'">
          <p>"I can't believe this! I'm so frustrated right now. Everything just seems to be falling apart, and I can't take it anymore. It's one thing after another, and I'm fed up with this situation. I need things to change, and I need it to happen now. Ugh!"</p>      
        </div>
  
  
      </div>
   
    </text>





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

  .box{
    display: flex;
    flex-direction: column  ;
  }  

  .box p{
    font-size: 15px;
  }

  text {
    font-family: 'Quicksand', sans-serif;
    padding: 10px 20px;
    width: 400px ;
    height: 200px;
    margin: 10px;
    cursor: pointer;
    border: 0;
    font-weight: 500;
    display: flex;
    justify-content: center;
    font-size: 18px
  }
  
  .regular{
    color: white;
    background-color: #91d0f7;
    border: 4px solid #1802bd ;
  }
  .regular:hover {
    background-color: #0d83cccf;

  }
  
  .happy{
    color: white;
    background-color: rgb(165, 227, 146);
    border: 4px solid #308506 ;
  }
  .happy:hover {
    background-color: rgba(106, 246, 63, 0.7);
  }

  .sad{
    color: white;
    background-color: #d7d594;
    border: 4px solid #837b0a ;
  }
  .sad:hover {
    background-color: #f3d113e4;
  }

  .angry{
    color: white;
    background-color: #f143189c;
    border: 4px solid #870c0c ;
  }
  .angry:hover {
    background-color:#f41d1dac ;
  }
  
  
  </style>