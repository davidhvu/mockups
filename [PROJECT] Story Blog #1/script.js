const secondSectBtn = document.getElementById('second-sect')
secondSectBtn.addEventListener('click', function() {
    const displayForm = document.getElementById('d-form')
    
    if (displayForm.style.display == 'block') {
        displayForm.style.display = 'none'
    } else { 
        displayForm.style.display = 'block'
    }
})