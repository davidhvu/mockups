const firstSectBtn = document.getElementById('first-sect')
const secondSectBtn = document.getElementById('second-sect')
const thirdSectBtn = document.getElementById('third-sect')
const displayForm1 = document.getElementById('d-form-1')
const displayForm2 = document.getElementById('d-form-2')
const displayForm3 = document.getElementById('d-form-3')

firstSectBtn.addEventListener('click', function(e) {
    
    if (displayForm1.style.display == 'block') {
        displayForm1.style.display = 'none'
        e.preventDefault()
    } else { 
        displayForm3.style.display = 'none'
        displayForm2.style.display = 'none'
        displayForm1.style.display = 'block'
        e.preventDefault()
    }

    
})

secondSectBtn.addEventListener('click', function(e) {
    
    if (displayForm2.style.display == 'block') {
        displayForm2.style.display = 'none'
        e.preventDefault()
    } else { 
        displayForm3.style.display = 'none'
        displayForm1.style.display = 'none'
        displayForm2.style.display = 'block'
        e.preventDefault()
    }

    
})

thirdSectBtn.addEventListener('click', function(e) {

    if (displayForm3.style.display == 'block') {
        displayForm3.style.display = 'none'
        e.preventDefault()
    } else { 
        
        displayForm2.style.display = 'none'
        displayForm1.style.display = 'none'
        displayForm3.style.display = 'block'
        e.preventDefault()
    }
})

const backTopBtn = document.getElementById('backTopBtn')