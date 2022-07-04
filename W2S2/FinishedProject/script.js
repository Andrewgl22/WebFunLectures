
// function declaration
function myFunction(id){
    // var item = document.querySelector(id);
    // id.innerText = "I changed the text with JS"
    id.remove();
}

function colorChange(element){
    element.style.color = "red"
}

function like(id){
    document.querySelector(id).innerText++;
}

function changeSrc(element){
    element.src = "images/TMNT2.png"
}

function changeSrc2(element){
    element.src = "images/TMNT1.png"
}

function myAlert(){
    alert("The game has ended")
}

setTimeout(myAlert, 13000);