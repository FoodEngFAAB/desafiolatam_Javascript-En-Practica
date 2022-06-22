//Script Ejercicio 1
//Seleccionar 3 Input del form
let name = document.getElementById('nombre')
let subject = document.getElementById('asunto')
let message = document.getElementById('mensaje')

// Seleccionar textos de ayuda de inputs
let errName = document.querySelector('.errorNombre')
let errSubject = document.querySelector('.errorAsunto')
let errMessage = document.querySelector('.errorMensaje')
let textResult = document.querySelector('.resultado')

let form = document.getElementById('formulario')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    dataValidation()
})

//Funciones de validación de inputs en el form
//Ingreso del nombre
function nameValidation() {
    let name = document.getElementById('nombre')
    let result = /[a-zA-Z]/gim.test(name.value)
    if (result === false) {
        textResult.style.color = "transparent"
        errName.style.color = "red"
        errName.innerHTML = "El nombre es requerido."
    } else {
        errName.style.color = "transparent"
        return true
    }
}
//Ingreso del asunto
function subjectValidation() {
    let subject = document.getElementById('asunto')
    let result = /[a-zA-Z]/gim.test(subject.value)
    if (result === false) {
        textResult.style.color = "transparent"
        errSubject.style.color = "red"
        errSubject.innerHTML = "El asunto es requerido."
    } else if (result === true) {
        errSubject.style.color = "transparent"
        return true
    }
}
//Ingreso del mensaje
function msgValidation() {
    let message = document.getElementById('mensaje')
    let result = /[a-zA-Z]/gim.test(message.value)
    if (result === false) {
        textResult.style.color = "transparent"
        errMessage.style.color = "red"
        errMessage.innerHTML = "El mensaje es requerido."
    } else if (result === true) {
        errMessage.style.color = "transparent"
        return true
    }
}
//Función global de validación de datos
function dataValidation() {
    nameValidation()
    subjectValidation()
    msgValidation()
    //Validación exitosa
    if (nameValidation() === true && subjectValidation() === true && msgValidation() === true) {
        textResult.style.color = "green"
        textResult.innerHTML = "Mensaje enviado con éxito!!!"
    } else {
        return
    }
}