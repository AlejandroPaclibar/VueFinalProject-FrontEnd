<template>

  <div class="main">

    <div class="nameDiv">

    <fullname />

    </div>
   


    <div class="h">

    <h1>Buttons</h1>

    </div>

    <div class="container">

    <div class="btnDiv">

          <buttons type="regular"  style="flex: 1" title="Regular"/>

          <buttons type="happy" style="flex: 1" title="Happy" />

          <buttons type="sad" style="flex: 1" title="Sad" />
          
          <buttons type="angry" style="flex: 1" title="Angry" />
    </div>    

    </div>

  </div>


  <div class="m">

    <p>Messages</p>

  </div>

  <div class="messDiv">

    <div class="mess">

          <message type="regular"  style="flex: 1" title="This is for Regular message" />

          <message type="happy" style="flex: 1" title="This is for Happy message" />

    </div>

  </div>

  <div class="messDiv2">

      <div class="mess2">

          <message type="sad" style="flex: 1" title="This is for Sad message" />

          <message type="angry" style="flex: 1" title="This is for Angry message" />

    </div>

  </div>



  <div class="c">

    <h1>Cards</h1>

    </div>

  

    <div class="cardDiv">

      <div class="cards1">

          <div class="c1"> 

          <cards type="regular"  style="flex: 1" title="Regular"/>      

         </div>

          <div class="image1">

            <img src="../images/regular.png" alt="">

          </div> 

     </div>      



      <div class="cards2">

          <div class="c2">

            <cards type="happy" style="flex: 1" title="Happy" />

          </div>

          <div class="image2">

             <img src="../images/happy2.png" alt="">

          </div>      

      </div>



      <div class="cards3">

          <div class="c3">

          <cards type="sad" style="flex: 1" title="Sad" />

      </div>

      <div class="image3">

             <img src="../images/sad.png" alt="">

          </div>      

      </div>

    
    
      <div class="cards4">

          <div class="c4">

            <cards type="angry" style="flex: 1" title="Angry" />

          </div>        

          <div class="image4">
            
             <img src="../images/angry.png" alt="">

          </div>         

      </div>   

    </div>



    <div class="pop-container">

      <h1 class="p">Popping Links</h1>

      <div class="pop">

        <Popup text="MonkeyType"  link="https://monkeytype.com/"/>   

        <Popup text="MyFlixer"  link="https://myflixerz.to/"/>

      </div>

    </div>

     
 
       

</template>


<script>
    import buttons from './components/buttons.vue';
    import fullname from './components/Name.vue';
    import message from './components/messages.vue';
    import cards from './components/cards.vue';
    import Popup from './components/poppingLink.vue';

    export default{
      components: {
        buttons,
        fullname,
        message,
        cards,
        Popup
      }
    }
</script>

<style scoped>
.pop-container {
  /* background-color: rgb(208, 207, 207); */
  height: 80vh;
}
.p {
  /* background-color: rgb(208, 207, 207); */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  margin-top: -60px;
  font-size: 40px;

}


.pop {
  display: flex;
  justify-content: center;
  /* background-color: rgb(208, 207, 207); */
  justify-content: space-around;
}

.nameDiv {
  font-size: 10px;
  position: relative;
}
.c {
  /* background-color: rgb(208, 207, 207); */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  font-size: 20px;
 
}

.cardDiv{
  /* background-color: rgb(208, 207, 207); */
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;

}

.cards1, .cards2,
.cards3, .cards4 {
  transform: translateY(-7%);
  transition: width 0.3s, height 0.3s;
  width: 300px;
  height: 500px;
  overflow: hidden;
  box-shadow: 0 0 22px #525151; 
}

.cards1:hover, .cards2:hover,
.cards3:hover, .cards4:hover {
  width:310px ;
  height: 510px;
}


.c1, .c2,
.c3, .c4 {
  font-family: 'Quicksand', sans-serif;
  height: 20%;
  font-size: 28px;
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.c1 {
  background-color: #91d0f7;
}

.c2 {
  background-color: rgb(165, 227, 146);
}
.c3 {
  background-color: #e5e287da;
}
.c4 {
  background-color: #df39109f;
}

.image1 {
  background-color: #91d0f7;
display: flex;
align-items: center;
justify-content: center;
height: 500px;
position: relative;
}
.image2 {
  background-color: rgb(165, 227, 146);
display: flex;
align-items: center;
justify-content: center;
height: 500px;  
}

.image3 {
  background-color: #e5e287da;
display: flex;
align-items: center;
justify-content: center;
height: 500px;
}

.image4{
  background-color: #df39109f;
display: flex;
align-items: center;
justify-content: center;
height: 500px;
}


img {
  width: 200px;
  transform: translateY(-40%);
  position: relative;
  
}



.container{
  height: 13vh;
  /* background-color: rgb(208, 207, 207); */
  /* margin-top: -21px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.h {
  /* background-color: rgb(208, 207, 207); */
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

h1 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  letter-spacing: 10px;
  transform: translateY(0px)
}

p {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  letter-spacing: 10px;
  font-size: 40px;
}
.btnDiv {
  display: flex;
  text-align: center;
  background-color: rgb(245, 235, 235);
  width: 55%;
  justify-content: space-around;
  height: 9vh;


}
.messDiv {
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgb(208, 207, 207); */
  
}
.messDiv2 {
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgb(208, 207, 207); */
}

.mess {
  background-color: rgb(245, 235, 235);
  padding: 30px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mess2 {
  background-color: rgb(245, 235, 235);
  padding: 30px;
  padding-top: 0;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.m {
  position: relative;
  /* background-color: rgb(208, 207, 207); */
  display: flex;
  justify-content:center;
  align-items: center;
  height: 30vh;
}


</style>
