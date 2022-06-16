import { pizzaWithImg } from "./modules/pizzaImg.js"
import {Pizzas} from "./modules/pizzas.js"
import {defaultImg} from "./modules/defaultImg.js"

let h2 = document.querySelector(".nombre")
let h4 = document.querySelector(".precio")
let inputNumber = document.getElementById("InputId")
let button = document.querySelector('.submitButton')
let localPizzas = localStorage.getItem('Pizzas')
let localStoragePizzas = JSON.parse(localPizzas)



function capturarValor(){


    for (const getid in Pizzas) {
        if (inputNumber.value === localStoragePizzas[getid].id) {
            h2.textContent = "El nombre de tu pizza es: " + localStoragePizzas[getid].nombre
            h4.textContent = "El precio de tu pizza es: " + localStoragePizzas[getid].precio
        } 
    }
    if (inputNumber.value > 6 || inputNumber.value < 1 ) {
        h2.innerHTML = "ID INVALIDO"
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


