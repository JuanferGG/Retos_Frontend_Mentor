// TODO ----- Const's  -----
const btnSubmit = document.getElementById('btnSubmit')
const inputEmail = document.getElementById('inputEmail')
const errorMessage = document.getElementById('errorMessage')
const messageOk = document.getElementById('messageOk')
const main = document.getElementById('main')
const btnDismiss = document.getElementById('btnDismiss')

function validarCorreo(correo) {
    //* Expresión regular para validar un correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regexCorreo.test(correo)
}

// TODO ----- FnClick BtnSubmit -----
btnSubmit.addEventListener('click', () => {
    const textInputEmail = inputEmail.value

    if (validarCorreo(textInputEmail)) {
        // TODO Si el correo es valido
        main.style.opacity = 0
        setTimeout(() => {
            messageOk.style.opacity = 1
            messageOk.style.zIndex = 100
            inputEmail.value = ''
        }, 800)

        

    } else {
        // ! Caso de que el correo no sea Valido
        inputEmail.style.backgroundColor = 'hsl(4.8deg 100% 95.1%)'
        inputEmail.style.borderColor = 'hsl(359.18deg 45.91% 68.82%)'
        inputEmail.style.color = 'hsl(4, 100%, 67%)'
        errorMessage.style.opacity = 1

        setTimeout(() => {
            inputEmail.style.backgroundColor = 'white'
            inputEmail.style.borderColor = 'grey'
            inputEmail.style.color = 'black'
            errorMessage.style.opacity = 0
        }, 3000)
    }

})

btnDismiss.addEventListener('click', () => {
    messageOk.style.opacity = 0
    messageOk.style.zIndex = -100
    setTimeout(() => {
        main.style.opacity = 1
    }, 800)
})
