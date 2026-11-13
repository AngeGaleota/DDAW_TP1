//Indice automatico
const subtitulos = document.querySelectorAll('h2'); 
const lista = document.querySelector('#lista');

subtitulos.forEach(function(subtitulos){
    const li = document.createElement('li');
    const enlace = document.createElement('a');
    lista.append(li)
    enlace.href=`#${subtitulos.id}`
    enlace.textContent=subtitulos.textContent
    li.append(enlace)
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
const nombre = document.querySelector('#nombre')
comentario.addEventListener('input', function(){
    contadorCar.textContent= `${comentario.value.length}/200`
    if(comentario.value.length<10|| comentario.value.length>200){
        comentario.classList.add('error')
        contadorCar.classList.add('error')
    }
    else{
        comentario.classList.remove('error')
        contadorCar.classList.remove('error')
    }
})
nombre.addEventListener('input', function() {
    if (nombre.value.trim() !== '') {
        nombre.classList.remove('error')
    }
})



const formulario = document.querySelector('#formulario')
const aviso = document.querySelector('#avisos')
const listaComentarios = document.querySelector('#lista-comentarios')
const sinComentarios = document.querySelector("#sin-comentarios")

formulario.addEventListener('submit', function (e){
e.preventDefault()
nombre.classList.remove('error')
comentario.classList.remove('error')

if(nombre.value.trim()===''){
    aviso.textContent = 'Falta el nombre.'
    nombre.classList.add('error')
    return
}
if(comentario.value.trim().length < 10 || comentario.value.trim().length > 200){
    aviso.textContent = 'El comentario debe tener entre 10 y 200 caracteres.'
    comentario.classList.add('error')
    contadorCar.classList.add('error')
    return
}

const tarjeta = document.createElement('div')
tarjeta.classList.add('tarjeta-comentario')

const autor = document.createElement('h4')
autor.textContent = nombre.value.trim()

const texto = document.createElement('p')
texto.textContent = comentario.value.trim()

const botonBorrar = document.createElement('button')
botonBorrar.textContent = 'Borrar'
botonBorrar.classList.add('boton-borrar')
botonBorrar.type = 'button'

botonBorrar.addEventListener('click', function() {
    tarjeta.remove()

    if (listaComentarios.querySelectorAll('.tarjeta-comentario').length === 0) {
    sinComentarios.style.display = 'block'
}
})
tarjeta.append(autor, texto, botonBorrar)

listaComentarios.append(tarjeta)

sinComentarios.style.display = 'none'
aviso.textContent = 'Formulario enviado'

formulario.reset()
contadorCar.textContent = '0/200'
comentario.classList.remove('error')
contadorCar.classList.remove('error')
})

