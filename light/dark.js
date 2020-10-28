<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>light/dark</title>
<style type="text/css">

@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');


*{
    box-sizing: border-box;
}


body{
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
margin: 0px;
transition: background 0.2s linear;


}

body.dark{

background-color: #292c35;


}


.checkbox{
    opacity: 0px;
    position: absolute;

}

.label {
background-color: #111;
display : flex;
align-items: center;
justify-content: space-between;
border-radius: 50px;
position: relative;
padding: 5px;
height: 26px;
width: 50px;
transform: scale(1.5);
}

.label .ball {
	background-color: #fff;
	border-radius: 50%;
	position: absolute;
	top: 2px;
	left: 2px;
	height: 22px;
	width: 22px;
	transform: translateX(0px);
	transition: transform 0.2s linear;


}

.ball{

    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    height: 22px;
    top: 2px ;
    left: 2px;
    width: 22px;
    transition: transform 0.2s linear;
}



.checkbox :checked + .label .ball{
transform: translateX(24px);
}




.fa-moon{
color: #f1c40f;

}


.fa-sun{

    color: #f39c12;
}

</style>

</head>
<body>
    
 <input type="checkbox" class="checkbox" id="checkbox">
 <label for="checkbox" class="label">
   <i class="fa fas-moon"></i>
   <i class="fa fas-sun"></i>
   <div class="ball"></div>

 </label>


    <script src="ligthdarkchange.js" type="text/javascript"></script>
</body>
</html>


//JS
const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change',() =>{
    document.body.classList.toggle('dark')
})
