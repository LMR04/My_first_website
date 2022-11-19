const rayas = document.querySelector('.rayas');
const menu = document.querySelector('.menu')

// console.log(menu)
// console.log(rayas)

rayas.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != rayas){
        menu.classList.toggle("spread")
    }
})