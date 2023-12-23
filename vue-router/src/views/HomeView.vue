
<template>
 <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <div class="upper">

        <div class="personal_info">

        <p> Personal Information</p>

        </div>

    </div>

    
    <div class="center">

        
        <div class="infos">

            <div class="name">

                <li>
                Name:

                </li>

                <p>

                Alejandro A. Paclibar

                </p>

            </div>

            <div class="address">

                <li>

                Address:

                </li>

                <p>

                Cabulijan, Tubigon, Bohol

                </p>

            </div>

            <div class="sex">

                <li>

                Sex:

            </li>

            <p>

                Male

            </p>

            </div>

            <div class="birth">

                <li>

                Birth Date:

            </li>

            <p>

                October 10, 2002

            </p>

            </div>

            <div class="height">

                <li>

                Height:

            </li>

            <p>

                5'5

            </p>

            </div>

            <div class="weight">

                <li>

                weight:

            </li>

            <p>

            45 kilograms

            </p>

            </div>

            <div class="hobbies">

                <li>

                Hobbies:

            </li>

            <p>

                Playing online games, watching movie, etc.

            </p>

            </div>

            <div class="language">

                <li>

                Language:

            </li>

            <p>

                English, Filipino, Japanese, Mathematics, Bisaya
    
            </p>

            </div>

        </div>    

    </div>


    

    

</template>

<style scoped>

.name, .address, .sex,.birth, .height,
.weight, .hobbies, .language {
    display: flex;
    align-items: center;
    gap: 40px;
    font-family: 'Quicksand', sans-serif;
    color: black;
    font-weight: 500;
    font-size: 18px;
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
.personal_info{
    height: 10%;
    width: 500px;
    display: flex;
    justify-content: center;
    border-bottom: 3px solid black;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 30px;
}


.infos {
/* background-color: brown; */
width: 70%;
height: 64vh;
color: white;
font-size: 18px;
}

.center {
    /* width: 100%;
    margin-top: -500px; */
    display: flex;
    justify-content: center;
    /* background-color: aquamarine; */
    width: 60%;
    margin-left: 37%;
    margin-top: -610px;
    align-items: center;
    

}


</style>