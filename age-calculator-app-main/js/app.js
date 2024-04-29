const btnImg = document.getElementById('btnImg')

const inputDay = document.getElementById('inputDay')
const inputMonth = document.getElementById('inputMonth')
const inputYear = document.getElementById('inputYear')

//* Ps
const yearsP = document.getElementById('yearsP')
const monthsP = document.getElementById('monthsP')
const daysP = document.getElementById('daysP')

//! Errors
const errorDay = document.getElementsByClassName('errorDay')
const errorMonth = document.getElementsByClassName('errorMonth')
const errorYear = document.getElementsByClassName('errorYear')

//TODO Arrays
const errorMessage = document.getElementsByClassName('errorMessage')
const inputs = document.getElementsByClassName('inputs')
const pInputs = document.getElementsByClassName('pInputs')


const cleanStyles = () => {
    setTimeout(() => {
        for (const ElemetError of errorMessage) {
            ElemetError.style.opacity = 0
        }
        for (const input of inputs) {
            input.style.borderColor = 'hsl(0, 0%, 94%)'
        }
        for (const pInput of pInputs) {
            pInput.style.color = 'hsl(0, 1%, 44%)'
        }
    }, 2000)
}

const redColors = () => {
    for (const input of inputs) {
        input.style.borderColor = 'hsl(0, 100%, 67%)'
    }
    for (const pInput of pInputs) {
        pInput.style.color = 'hsl(0, 100%, 67%)'
    }
}

const fnFirstError = () => {
    for (const ElemetError of errorMessage) {
        ElemetError.style.opacity = 1
    }
    redColors()
    cleanStyles()
}

btnImg.addEventListener('click', () => {

    const dateNow = {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear()
    }

    const dayValue = inputDay.value
    const monthValue = inputMonth.value
    const yearValue = inputYear.value

    //? 
    if (dayValue === '' || dayValue > 31) {
        errorDay[0].textContent = 'Must be a valid day'
        if (monthValue === '' || monthValue > 12) {
            errorMonth[0].textContent = 'Must be a valid month'
            if (yearValue === '' || yearValue > dateNow.year) {
                //! Si todos los campos son invalidos

                errorYear[0].textContent = 'Must be a valid year'
                return fnFirstError()
            }
        }
    } else {
        //* Si el dia es correcto, pero el mes y año no pasa esto:
        if (monthValue === '' || monthValue > 12) {
            //! Si el mes no es Valido

            errorMonth[0].textContent = 'Must be a valid month'
            errorMonth[0].style.opacity = 1

            errorYear[0].textContent = 'Must be a valid year'
            errorYear[0].style.opacity = 1
            redColors()
            cleanStyles()
        } else {
            //* si el dia y el mes es correcto, pero el año no pasa esto:
            if (yearValue === '' || yearValue > dateNow.year) {
                errorYear[0].textContent = 'Must be a valid year'
                errorYear[0].style.opacity = 1
                redColors()
                cleanStyles()
            } else {
                //* si todos los campos son correctos pasa esto:
                const years = dateNow.year - yearValue;
                const months = Math.abs(dateNow.month - monthValue);
                const days = Math.abs(dateNow.day - dayValue);

                yearsP.textContent = years
                monthsP.textContent = months
                daysP.textContent = days
            }
        }
    }

})