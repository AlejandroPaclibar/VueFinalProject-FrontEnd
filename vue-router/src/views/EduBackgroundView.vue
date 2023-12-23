<template>

<div class="upper">

 <div class="educational_background">

    <p>Educational Background</p>

  </div>

</div>


<div class="center">
        
        <div class="infos">

           <div class="one">

                <li>
                    Bachelor of Science in Information Technology

                </li>

                <p>

                    <li class="c">
                        University of Technology, Cityville, State (Cum Laude)
                    </li>

                </p>

            </div>

            <div class="two">

                <li>

                  Certifications

                </li>

                <p>

                  <li class="c">
                    
                    Project Management Professional (PMP), Project Management Institute (PMI)

                  </li>

                </p>

            </div>

            <div class="three">

              <li>

                Professional Development

            </li>

            <p>

                <li class="c">Data Science and Machine Learning Specialization, Johns Hopkins University (Coursera)</li>

                <li class="c">Digital Marketing Certification, HubSpot Academy</li>

                <li class="c">Leadership and Management Training, Dale Carnegie Training</li>

            </p>

            </div>

            <div class="four">

            <li>

              Workshops and Seminars

            </li>

            <p>

              <li class="c">Agile Development Practices Workshop, Scrum Alliance</li>

              <li class="c">Cybersecurity Trends and Best Practices Seminar, Cybersecurity Institute</li>

            </p>

            </div>

            <div class="five">

            <li>

              Skills

            </li>

            <p>

                <li class="c">Programming: Java, Python, C++</li>

                <li class="c">Databases: MySQL, MongoDB</li>

                <li class="c">Web Development: HTML, CSS, JavaScript</li>

            </p>

            </div>

            <div class="six">

            <li>

              Research Experience

            </li>

            <p>

              <li class="c">Research Assistant, Center for Information Technology Innovation</li>

              <li class="c">Published in the International Journal of Information Technology</li>

            </p>

            </div>

        </div>    

    </div>
 
</template>


<style>

.one, .two, .three, .four, .five, .six {

    align-items: center;
    gap: 40px;
    font-family: 'Quicksand', sans-serif;
    color: black;
    font-weight: 800;
}

p {
    margin: auto;
}

.upper {
  background-color: rgb(114, 157, 210);

    width: 65%;
    margin-left: 35%;
    height: 94vh;
    margin-top: -739px;
    display: flex;
    justify-content: center;


}
.educational_background{
    height: 10%;
    width: 500px;
    display: flex;
    justify-content: center;
    border-bottom: 3px solid black;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 30px;
}


.c {
  margin-left: 50px;
  font-weight: 400;
}

.infos {
/* background-color: brown; */
width: 70%;
height: 64vh;
color: white;
font-size: 18px;
line-height: 25px;
}

.center {
    /* width: 100%;
    margin-top: -500px; */
    display: flex;
    justify-content: center;
    /* background-color: aquamarine; */
    width: 60%;
    margin-left: 37%;
    margin-top: -560px;
    height: 57vh;
    align-items: center;
    

}


</style>
