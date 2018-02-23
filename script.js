

var forths = document.games.gen.value
var fifth = document.games.exercise.value=GetRandomInt
var firstses = document.games.mins.value
var secondes = document.games.maxs.value

function GetRandomInt(min,max) {

    min=1
    max=100
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
document.games.gen.onclick = function() {
    alert()
    }
/*
{
    document.games.gen.onclick

    var m =  2; s = '', r = "dfgd";
    for (var i=0; i < m; i++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
    return s;
*/







/*
function validateForm() {


    var firstname = document.contact.names.value;

    var secondname = document.contact.Reversed.value;


    if (secondname === firstname.split('').reverse().join('')) {
        alert("Good job!")
        return true;


    }
    else {
        alert("Reverse that!")
        return false;

    }
}
*/





