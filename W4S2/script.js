// var array = ['strings',10,false]

// var myObject = {
//     firstName:"Andrew",
//     lastName:"Lederman",
//     age:30,
//     skills:[{},{},{}],

// }

// ES5 Syntax
// function myFunction(){

// }

// async/await

let jsonResult;


{/* <p>"Hello My Name is:" + "andrew"</p> */}


const fetchPokemon = async (id) => {
    const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    jsonResult = await results.json();
    let node = document.createElement("div")
    node.style.display = "inline-block"
    node.classList.add("d-inline-block","border","border-dark", "bg-warning","p-2")
    node.innerHTML =`<div><p>${jsonResult.name}</p><br><img src="${jsonResult.sprites.front_shiny}" onmouseover="this.src='${jsonResult.sprites.back_shiny}'" onmouseout="this.src='${jsonResult.sprites.front_shiny}'" alt="Nothing here" ></div>`
    document.body.appendChild(node);
    // document.querySelector("#poke-img").src = jsonResult.sprites.front_shiny;
    console.log(jsonResult);
}

const getAllPokemon = () => {
    for(let i=1;i<100;i++){
        fetchPokemon(i);
    }
}

// const changeImg = (element) => {
//     element.src = jsonResult.sprites.back_shiny;
// }

// const changeImgBack = (element) => {
//     element.src = jsonResult.sprites.front_shiny;
// }