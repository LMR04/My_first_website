const imagenes = document.querySelectorAll('.img_galería')
const imagenesLight = document.querySelector('.agregar_imagen')
const contenedorLight = document.querySelector('.imagen_light')
const rayas1 = document.querySelector('.rayas');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage') 
        rayas1.style.opacity = '1'  
    }
})    

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    rayas1.style.opacity = '0'
}       