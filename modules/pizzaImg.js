 function pizzaWithImg(){
    let div = document.querySelector('.text')
    let inputNumber = document.getElementById('InputId')
    let button = document.querySelector('.submitButton')
    let image = document.createElement('img')
    image.classList.add('images')
    document.querySelector('.card').insertBefore(image,div)

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
    if (inputNumber.value == "" || inputNumber.value > 6 || inputNumber.value <= 0 ) {
        image.src = "/img/DEFINICIONES.-ERROR-404.png"
        button.addEventListener('click',()=>{
            image.remove()
        })

    }
    
}

export {pizzaWithImg};