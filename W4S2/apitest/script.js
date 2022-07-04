const getPoke = async (id) => {
    let results = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let res = await results.json()
    console.log(res)
    let node = document.createElement("div")
    node.style.display = "inline-block"
    node.classList.add("d-inline-block","border","border-dark", "bg-warning","p-2")
    node.innerHTML = `<div>${res.name}<br><img src="${res.sprites.front_shiny}" alt="nothing" onmouseover="this.src='${res.sprites.back_shiny}'" onmouseout="this.src='${res.sprites.front_shiny}'"/></div>`
    document.body.appendChild(node)
    return node
}

let myObj = {
    "hello":true,
    "second":4,


}

const getAllPoke = async () => {
    for(let i=1;i<100;i++){
        await getPoke(i)
    }
}

getAllPoke()