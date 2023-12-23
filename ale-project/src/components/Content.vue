
<template>
    <div class="main-box">
        <div class="search">
            <form action=""> 
                <input type="text" placeholder="    Search..">
            </form>
            
        </div>



        <div class="slideshow-container">

<!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="./movie0.jpg">
            <div class="text"></div>
        </div>

        <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="./movie8.webp">
            <div class="text"></div>
        </div>

        <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="./movie9.jpg">
            <div class="text"></div>
        </div>

<!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        <div class="dot-con">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
        </div>


        <div class="child-box">
            <div class="content">
                <span><img src="./movie1.jpg" alt=""></span>
                <span><img src="./movie3.avif" alt=""></span>
                <span><img src="./movie4.avif" alt=""></span>
                <span><img src="./movie5.avif" alt=""></span>
                <span><img src="./movie6.webp" alt=""></span>
                <span><img src="./movie2.jpg" alt=""></span>
                <span><img src="./movie11.jpg" alt=""></span>
                <span><img src="./movie12.jpeg" alt=""></span>
                <span><img src="./movie13.jpg" alt=""></span>
                <span><img src="./movie14.webp" alt=""></span>
                <span><img src="./movie15.jpg" alt=""></span>
                <span><img src="./movie16.avif" alt=""></span>

                <span><img src="./m1.jpg" alt=""></span>
                <span><img src="./m3.jpg" alt=""></span>
                <span><img src="./m2.avif" alt=""></span>
                <span><img src="./m4.jpg" alt=""></span>
                <span><img src="./m5.avif" alt=""></span>
                <span><img src="./m6.jpg" alt=""></span>
                <span><img src="./m7.avif" alt=""></span>
                <span><img src="./m8.avif" alt=""></span>
                <span><img src="./m9.avif" alt=""></span>
                <span><img src="./m10.jpg" alt=""></span>
                <span><img src="./m11.jpg" alt=""></span>
                <span><img src="./m12.webp" alt=""></span>

            </div>
        </div>
    </div>
</template>

    <script>
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000); 
    }
    </script>

<style scoped>
.main-box{
    padding: 1px;
    width: 100%;
    /* background-color: red; */
    background-color: rgb(32, 32, 40);
    height: 89vh;
    
}

.child-box{
    width: 100%;
    margin-top: 5px;
    /* height: 86vh; */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
}

 input {
    background-color: rgba(255, 255, 255, 0.11);
    width: 35%;
    height: 4vh;
    border-radius: 20px;
 }
 .content {

   margin-top: -20px;
   width: 100%;
   /* height: 600px; */
   padding-bottom: 100px; 
  
 }
 .content img {
    transform: translateY(10px);
    position: relative;
    width: 200px;
    height: 300px;
    display: inline-flex;
    padding: 6px;
    transition: 0.3s ease;
} 
.content img:hover {
    width: 220px;
    height: 320px;
    box-shadow: rgba(0, 0, 0, 0.388) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    
   
}

img{
    margin: 30px 0px;

}






* {
    box-sizing: border-box
}

/* Slideshow container */
.slideshow-container {
    width: 80%;
    object-fit: contain;
    position: relative;
    margin-top: 2px;
    transform: translateX(13%);

}

/* Hide the images by default */
.mySlides {
    display: none;
}

.mySlides img {
    width: 100%

}

/* Next & previous buttons */
.prev,
.next {
    display: flex;
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 20px;
    transition: 0.9s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

/* Position the "next button" to the right */
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}


/* Number text (1/3 etc) */
.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

.dot-con {
    display: flex;
    align-items: center;
    justify-content: center;
}



/* The dots/bullets/indicators */
.dot {
    transform: translateY(-20px);
    cursor: pointer;
    height: 10px;
    width: 10px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: block;
    transition: 0.8s ease;
   

}

.active,
.dot:hover {
    background-color: #717171;
}

/* Fading animation */
.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade {
    from {
        opacity: .4
    }

    to {
        opacity: 1
    }
}

img {
    width: 1400px;
    height: 150px;
}
</style>