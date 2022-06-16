 function pizzaWithImg(){
    let h2 = document.querySelector('.nombre')
    let inputNumber = document.getElementById('InputId')
    let button = document.querySelector('.submitButton')
    let image = document.createElement('img')
    image.classList.add('images')
    image.width = 250
    document.querySelector('.card').insertBefore(image,h2)

    if (inputNumber.value == 1) {

        image.src = './img/pizza-margarita.jpg'
        button.addEventListener('click',()=>{
            image.remove()
        })

    }
    if (inputNumber.value == 2) {

        image.src = './img/pizzaRucula.jpg'
        button.addEventListener('click',()=>{
            image.remove()
        })
    }
    if (inputNumber.value == 3) {

        image.src = './img/polloysalsaBBQ.jpg'
        button.addEventListener('click',()=>{
            image.remove()
        })
    }
    if (inputNumber.value == 4) {

        image.src = './img/matambre-a-la-pizza.jpg'
        button.addEventListener('click',()=>{
            image.remove()
        })
    }
    if (inputNumber.value == 5) {

        image.src = './img/pizzaVeggie.jpg'
        button.addEventListener('click',()=>{
            image.remove()
        })
    }
    if (inputNumber.value == 6) {

        image.src = './img/pizza-hawaiana.jpg'
        button.addEventListener('click',()=>{
            image.remove()
        })
    }
}

export {pizzaWithImg};