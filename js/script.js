//div de la ventana
const windowModal = document.getElementsByClassName("modal");
//boton
const boton = document.getElementsByClassName("button");
//cerrar
const cerrar = document.getElementsByClassName("cerrar")[0];
//ocultar la ventana
windowModal[0].classList.add('hidden');

boton[0].addEventListener('click',()=> {
    ventanaModal[0].classList.remove('hidden');
})

cerrar.addEventListener('click',()=>{
    windowModal[0].classList.add('hidden');
})