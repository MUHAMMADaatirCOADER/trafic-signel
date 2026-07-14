let car=document.getElementById("car");
function red(){
    document.getElementById("red").style.backgroundColor="red";
    document.getElementById("green").style.backgroundColor="white";
    document.getElementById("yellow").style.backgroundColor="white";
    car.style.transform="translateX(0px)";
    document.getElementById("stop").style.display="inline-block";
}
function green(){
    document.getElementById("green").style.backgroundColor="green";
    document.getElementById("red").style.backgroundColor="white";
    document.getElementById("yellow").style.backgroundColor="white";
    car.style.transform="translateX(800px)";
    document.getElementById("stop").style.display="none";
}
function yellow(){
    document.getElementById("yellow").style.backgroundColor="yellow";
     document.getElementById("green").style.backgroundColor="white";
      document.getElementById("red").style.backgroundColor="white";
      car.style.transform="translateX(0px)";
      document.getElementById("stop").style.display="none";
}

