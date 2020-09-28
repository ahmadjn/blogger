var myArray = ['January', 'February', 'March'];
var rand = Math.floor(Math.random() * myArray.length);

function showquote(){
    document.getElementById('quote').innerHTML = myArray[rand];
}
showquote();
