let h2 = document.querySelector('.nombre')
let image = document.createElement('img')
document.querySelector('.card').insertBefore(image,h2)
image.classList.add('images')
image.width = 250
image.src = "../img/La mejor pizza italiana.jpg"


function defaultImg(){
    image.remove()
}
export {defaultImg}