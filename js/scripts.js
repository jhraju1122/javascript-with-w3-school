function textChange(){
    document.getElementById("paragraph").innerText = "Hello JavaScript!";
}

 //light on -off function
function lightOn (parameters) {
    document.getElementById('light').src='light onn.jpg'
}

function lightOff(parameters){
    document.getElementById('light').src='light off.jpg'

}

  
// JavaScript can change the style of an HTML element.
 function changeStyle (parameters) {
    document.getElementById('demo').style.fontSize = '35px';
}

// JavaScript can hide HTML elements.
function hideElement (parameters) {
    document.getElementById('hide').style.display = 'none';
}

// JavaScript can show hidden HTML elements.
function showElements (parameters) {
    document.getElementById('show').style.display = 'block';
}