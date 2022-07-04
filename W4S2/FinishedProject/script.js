// var arr = ['string',9,true]

// var obj = {
//     "name":"Andrew",
//     "job":"teacher",
//     "age":30,
//     "hobbies":["music","food","hiking"],
//     "objArray":[{"key1":10,"key2":false},{"key1":10,"key2":false},{"key1":10,"key2":false}]
// }

// console.log(obj["name"])

// AJAX Asynchronous Javascript And XML

// async/await

function getAllPokemon(){
    for(let i=1;i<100;i++){
        getPokemon(i)
    }
}

const getPokemon = async (id) => {
    var results = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    var res = await results.json()
    if(res.type !== "water"){
        return
    }
    var node = document.createElement("div")
    // node.style.display = "inline-block"
    node.classList.add("d-inline-block","border","border-dark", "bg-warning","p-2")
    node.innerHTML = `<p>${res.name}</p><img src="${res.sprites.front_shiny}" onmouseover="this.src='${res.sprites.back_shiny}'" onmouseout="this.src='${res.sprites.front_shiny}'" alt="no image" />`
    document.body.appendChild(node)

    console.log(res)

}

getAllPokemon()