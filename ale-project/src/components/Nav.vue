<template>

<div class="container">
    <div class="left-nav">
    <div class="logo">
        <img src="./image1.png" alt="">
    </div>
    </div>
    <div class="i1">
        <p>WOLFLIXER</p>
    </div>

    <div class="center-nav">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">More</a></li>
        </ul>
    </div>


    <div class="right-nav">
        <a href="#">Logout</a>
    </div>
</div>

</template>

<style scoped>

.left-nav {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;

}

img{
    height: 8.4vh;
    width: auto;
    margin-left: 35px;

}
.i1 {
    margin-right: 45%;
    font-size: 50px;
    width: 10%;
    display: flex;
    text-align: center;
    justify-content: center;

}
P{
    font-size: 20px;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 3px;




}
.container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(20, 19, 19, 0.914);
    height: 8vh;
    border-bottom: 1px solid rgb(123, 124, 128);
}






.center-nav ul{
    display: flex;
    list-style: none;

    
}
.center-nav{
    display: flex;
    justify-content: center;
    text-align: center;
}

.center-nav li {
    padding: 15px;
    font-size: 1em;
    justify-content: center;
    align-items: center;
    text-align: center;

}
a {
    text-decoration: none;
    color: rgb(246, 245, 252);   
    font-size: 17px;
    margin-right: 10px;
    font-family: sans-serif;

}
li:hover{
  
    border-bottom: 2px solid rgb(54, 45, 214);
 
}





.right-nav {
    display: flex;
    margin-right: 50px;
    font-size: 1em;
    width: 80px;
    height: 25px;
    background-color: rgb(38, 28, 129);
    text-align: center;
    border-radius: 15px;
    justify-content: center;
    padding: 2px;
}
.right-nav:hover {
    background-color: rgb(19, 19, 197);
}
</style>




