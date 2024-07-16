var root = document.querySelector(':root');//acceder al dom


function saludar() {
    //tipo_de_Dato  nombre  <inicializar>;
    //Let     define variables
    //const     para definir constantes
    const mes = 'enero' + ' julio';
    var name = document.getElementById("user-name").value;/*input----document accede al html*/
    var elements = document.getElementsByClassName("first");
    elements[0].style.backgroundColor = '#ff1493';
    for (let i = 0; i < elements.length; i++) {//length cuantos elementos tiene mi objeto
        elements[i].style.backgroundColor = "#ff1493";
    }
    //elements[0].style.backgroundColor = "yellow"
    alert('hola  ' + name);
    alert('se encontraron ' + elements.length + ' elementos');
    /**alert('hola mundo');*/
} /**/



function showConfirm() {
    var texto;
    if (confirm("selecciona un boton")) {
        texto = "haz presionado aceptar";
    }
    else {
        texto = "haz cancelado la accion";
    }
    document.getElementById("demo").innerHTML = texto;
}

function mostrarPrompt() {
    let texto;
    let persona = prompt("Por favor ingresa tu nombre", "Usuario");
    if (persona == null || persona == "") {
        texto = "usuario cancelo el comando";
    }
    else {
        texto = "hola  " + persona + " como estas ";
    }
    document.getElementById("demo").innerHTML = texto;
}

function getRoot() {
    var r = getComputedStyle(root);//es en donde estan las variables
    alert("El valor de  --miColor " + r.getPropertyValue('--miColor'));
}

function cambiarValor() {

    root.style.setProperty('--miColor', 'blue');
}

function showImage(image) {/*Resibe un parametro*/
    var newImage = document.createElement('img');
    newImage.src = image.src;
    newImage.removeAttribute('onclick');
    /*image.removeAttribute('onclick');*/
    var modal = document.getElementById('preview');
    modal.classList.toggle('showModal');
    modal.appendChild(newImage);

}  

function Cerrar_Imagen(){
    var modal = document.getElementById('preview');
    modal.classList.remove('showModal');
    /*modal.innerHTML="";*/
    
    window.location.reload();
}


function toggleMenu(){
    var button=document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');
    var menu=document.getElementsByClassName('js-menu');
    menu[0].classList.toggle("active");


}

function fixPhotoOnScroll(){
    var photo = document.getElementById("photo-profile");
    this.scrollY >20 ? photo.style.marginTop=0 : photo.style.marginTop='-7rem';
    
}
window.addEventListener("scroll", fixPhotoOnScroll, false)



/*formulario*/
function FORMULARIO_PRUEBA(){

    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        const destinatario = "breka.kias@gmail.com";
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        const enlaceMailto = `mailto:${destinatario}?subject=Mensaje%20de%20${encodeURIComponent(nombre)}&body=${encodeURIComponent(mensaje)}%0D%0A%0D%0A${encodeURIComponent(email)}`;
        window.location.href = enlaceMailto;
    }
);

}


/*formulario*/