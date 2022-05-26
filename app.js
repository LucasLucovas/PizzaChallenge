const Pizzas =[

{
    id: '1',
    nombre: 'Pizza margarita' ,
    ingredientes:["queso","salsa","aceite de oliva","albahaca"],
    precio: "$500"
},
{
    id: '2',
    nombre: 'Pizza de rucula' ,
    ingredientes:["queso","salsa","jamon crudo","rucula"],
    precio: "$1100"
},
{
    id: '3',
    nombre: 'Pizza de pollo y salsa BBQ' ,
    ingredientes:["queso","salsa"," salsa BBQ","pollo"],
    precio: "$1000"
},
{
    id: '4',
    nombre: 'Matambre a la pizza' ,
    ingredientes:["queso","queso azul","matambre","salsa"],
    precio: "$1500"
},
{
    id: '5',
    nombre: 'Pizza Veggie' ,
    ingredientes:["queso","salsa","cebolla","pimiemtos","champiñones"],
    precio: "$900"
},
{
    id: '6',
    nombre: 'Pizza Hawaiana' ,
    ingredientes:["queso","salsa","Anana","jamon"],
    precio: "$950"
}
]



let h2 = document.querySelector(".nombre")
let h4 = document.querySelector(".precio")
let inputNumber = document.getElementById("InputId")

function capturarValor(){

    for (const getid in Pizzas) {
        if (inputNumber.value === Pizzas[getid].id) {
            h2.innerHTML = "El nombre de tu pizza es: " + Pizzas[getid].nombre;
            h4.innerHTML = "El precio de tu pizza es: " + Pizzas[getid].precio
        } 
    }
    if (inputNumber.value > 6 || inputNumber.value < 1 ) {
        h2.innerHTML = "ID INVALIDO"
    }
}    

