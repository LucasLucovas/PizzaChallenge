let div = document.querySelector('.text')
let image = document.createElement('img')
document.querySelector('.card').insertBefore(image,div)
image.classList.add('images')
image.width = 250
image.src = "../img/La mejor pizza italiana.jpg"


function defaultImg(){
    image.remove()
}
export {defaultImg}