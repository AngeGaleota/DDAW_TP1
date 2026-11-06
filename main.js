//Indice automatico
const h2 = document.querySelectorAll('h2'); 
const lista = document.querySelector('#lista');

h2.forEach(function(subtitulos){
    const li = document.createElement('li');
    const a = document.createElement('a');
    lista.append(li)
    a.href=`#${subtitulos.id}`
    a.textContent=subtitulos.textContent
    li.append(a)
})

//Apariencia
const botonModo = document.querySelector('#Modo')
const contenedor = document.querySelector('.contenedor')
const logoPag = document.querySelector('#logoPag');
const wikiange = document.querySelector('#wikiange');
botonModo.addEventListener('click', function(){
    contenedor.classList.toggle('oscuro')
    botonModo.classList.toggle('oscuro')
    if(contenedor.classList.contains('oscuro')){
        botonModo.textContent = 'Modo Claro'
        logoPag.src = 'img/logopag_oscuro.png'
        wikiange.src = 'img/wikiange_oscuro.png'
    }
    else {
        botonModo.textContent = 'Modo Oscuro'
        logoPag.src = 'img/logopag.png'
        wikiange.src = 'img/wikiange.png'
    }
})

//Tamaño letra
const pequena = document.querySelector('.pequena')
const estandar = document.querySelector('.estandar')
const grande = document.querySelector('.grande')

pequena.addEventListener('click', function(){
contenedor.classList.remove('estandar', 'grande')
estandar.classList.remove('apretado')
grande.classList.remove('apretado')
    contenedor.classList.add('pequena')
    pequena.classList.add('apretado')
})
estandar.addEventListener('click', function(){
contenedor.classList.remove('pequena', 'grande')
pequena.classList.remove('apretado')
grande.classList.remove('apretado')
    contenedor.classList.add('estandar')
    estandar.classList.add('apretado')
})
grande.addEventListener('click', function(){
contenedor.classList.remove('pequena', 'estandar')
estandar.classList.remove('apretado')
pequena.classList.remove('apretado')
    contenedor.classList.add('grande')
    grande.classList.add('apretado')
})

//H2 desplegables
const secciones = document.querySelectorAll('.seccion')

secciones.forEach(function(seccion){
    const subtitulo = seccion.querySelector('h2')
    const contenido = seccion.querySelector('.contenido-seccion')

    subtitulo.addEventListener('click', function(){
        contenido.classList.toggle('oculto')
        seccion.classList.toggle('plegada')
    })
})

//discusion
const contadorCar = document.querySelector("#contador-caracteres")
const comentario = document.querySelector("#comentario")
comentario.addEventListener('input', function(){
    contadorCar.textContent= `${comentario.value.length}/200`
    if(comentario.value.length>200){
        comentario.classList.add('error')
        contadorCar.classList.add('error')
    }
    else{
        comentario.classList.remove('error')
        contadorCar.classList.remove('error')
    }
})



const formulario = document.querySelector('#formulario')
const nombre = document.querySelector('#nombre')
const aviso = document.querySelector('#avisos')
const listaComentarios = document.querySelector('#lista-comentarios');

formulario.addEventListener('submit', function (e){
e.preventDefault()

if(nombre.value.trim()===''){
    aviso.textContent = 'Falta el nombre.'
    aviso.classList.add('error')
    return
}
if(comentario.value.trim()===''){
    aviso.textContent = 'No hay un comentario que enviar.'
    aviso.classList.add('error')
    return
}

aviso.textContent = 'Formulario enviado'

const li = document.createElement('li');
li.textContent= `${nombre.value}: "${comentario.value}"`
listaComentarios.append(li)
formulario.reset()

})

