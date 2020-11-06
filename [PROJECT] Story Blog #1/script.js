const secondSectBtn = document.getElementById('second-sect')
secondSectBtn.addEventListener('click', function(e) {
    const displayForm2 = document.getElementById('d-form-2')
    
    
    if (displayForm2.style.display == 'block') {
        displayForm2.style.display = 'none'
        e.preventDefault()
    } else { 
        displayForm2.style.display = 'block'
        e.preventDefault()
    }

    
})

const thirdSectBtn = document.getElementById('third-sect')
thirdSectBtn.addEventListener('click', function(e) {
    const displayForm3 = document.getElementById('d-form-3')

    if (displayForm3.style.display == 'block') {
        displayForm3.style.display = 'none'
        e.preventDefault()
    } else { 
        displayForm3.style.display = 'block'
        e.preventDefault()
    }
})