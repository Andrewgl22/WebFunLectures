// this is a function definition
function changeColor(element, id){
    element.style.color = "red";    
}

// this is a function call
// changeColor()


function changeImage(element){
    element.src = "images/TMNT2.png"
}

function changeImageBack(element){
    element.src = "images/TMNT1.png"
}

function like(id){
    // console.log(document.querySelector(id))
    document.querySelector(id).innerText++;
}

function remove(element){
    element.remove()
}

function myAlert(){
    alert('Timed Out Alert')
}

function myTimeOut(){
    setTimeout(myAlert, 5000)
}



