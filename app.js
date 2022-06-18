import { pizzaWithImg } from "./modules/pizzaImg.js"
import {Pizzas} from "./modules/pizzas.js"
import {defaultImg} from "./modules/defaultImg.js"


let h2 = document.querySelector(".nombre")
let h4 = document.querySelector(".precio")
let p = document.querySelector(".ingredientes")
let inputNumber = document.getElementById("InputId")
let button = document.querySelector('.submitButton')
let localPizzas = localStorage.getItem('Pizzas')
let localStoragePizzas = JSON.parse(localPizzas)



function capturarValor(){


    for (const getid in Pizzas) {
        if (inputNumber.value === localStoragePizzas[getid].id) {
            h2.innerHTML = "El nombre de tu pizza es: <br> " + localStoragePizzas[getid].nombre
            h4.textContent = "El precio de tu pizza es: " + localStoragePizzas[getid].precio
            p.innerHTML = "Los ingredientes de tu pizza son: <br> " + localStoragePizzas[getid].ingredientes
        } 
    }

}    

button.addEventListener("click", ()=>{
    capturarValor()
    pizzaWithImg()
    defaultImg()
})


window.addEventListener('load',()=>{
    localStorage.setItem('Pizzas',JSON.stringify(Pizzas))
})


