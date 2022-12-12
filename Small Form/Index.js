
let userName;

document.getElementById("mybutton").onclick = function(){

    userName = document.getElementById("myinput1").Value;
    console.log(userName);

    document.getElementById("mylabel").innerHTML = userName;

}