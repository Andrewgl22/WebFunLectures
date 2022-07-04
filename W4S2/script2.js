// var array = ["ditto",3,"water"]

// var object = {
//     firstName: "ditto",
//     lastName: "something",
//     height: 3,
//     isStrong: false,
//     levels: ["1","2","3"],
//     something: [{key:"value"},{key:4},{}]
// }

// console.log(object.firstName)

// ES5 

// ES6

// ES5 function syntax
// function myFunciton(){

// }

// var

// let
// const

// ES6 function syntax

// async/await

let finalResult;

var random = Math.floor(Math.random() * 50)

const myFunction = async () => {
    console.log(random)
    let results = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/8fyaf89af98`)
    finalResult = await results.json()
    console.log(finalResult)
    document.querySelector('#img').src = finalResult.sprites.front_shiny
}

function changeImg(element){
    element.src = finalResult.sprites.back_shiny
}

function changeImgBack(element){
    element.src = finalResult.sprites.front_shiny
}



