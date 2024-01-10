const cont = document.querySelector(".container")
const type = document.querySelector("#type")
const color = document.querySelector("#color")
const minCost = document.querySelector("#min__cost")
const maxCost = document.querySelector("#max__cost")
const btn = document.querySelector("#find")

function creat(element){
    return `<div class="card">
    <div class="card__img">
        <img width="200" height="300" src="${element.img}">
    </div>
    <div class="card__text">    
        <h2>${element.name}</h2>
        <div class="color__type">
            <p class="green">${element.type}</p>
            <p>${element.cost}$</p>
        </div>
        <p class="color">${element.color}</p>
        <p class="def">${element.def}</p>
    </div>
</div>`
}

document.addEventListener("DOMContentLoaded", function(){
    let info = []
    if(localStorage.getItem("info")){
        info = JSON.parse(localStorage.getItem("info")) 
    }
    info.forEach(element => {
        let row = creat(element)
        cont.innerHTML += row
    });
})

btn.addEventListener("click", function(event){
    event.preventDefault()
    let info = []
    cont.innerHTML = ""
    if(localStorage.getItem("info")){
        info = JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem("info")) ))  
        if(type.value){
            info = info.filter((arg)=>{
                return arg.type == type.value
            })
        }
        if(color.value){
            info = info.filter((arg)=>{
                return arg.color == color.value
            })
        }
        if(minCost.value){
            info = info.filter((arg)=>{
                console.log(arg.cost);
                return arg.cost >= minCost.value
            })
        }
        if(maxCost.value){
            if(minCost.value){
                if(minCost.value > maxCost.value){
                    alert("xatolik")
                }
            }
            info = info.filter((arg)=>{
                return arg.cost <= maxCost.value
            })
        }
        info.forEach(element => {
            let row = creat(element)
            cont.innerHTML += row
        });
    }
})

