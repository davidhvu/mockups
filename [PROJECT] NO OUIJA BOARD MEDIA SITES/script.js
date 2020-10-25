// Remember movie and tv show titles are supposed to be italicized

let movies = ["Hereditary", "Veronica",  "Ouija", "Ouija: Origins of Evil", "The Exorcist", "Witchboard", "Conjuring 2", "What Lies Beneath", "Paranormal Activity", "The Pact", "Ouija House"]


const moviesLowerCase = movies.map(title => title.toLowerCase())
console.log(moviesLowerCase)

function filterMovie(movieArr,userInput) {
    return movieArr.filter(function (el) {
        return el.indexOf(userInput.toLowerCase()) !== -1;
    }) 
}

console.log(filterMovie(moviesLowerCase, 'ouija'))


const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', function() {
    const searchTerm = document.getElementById('searchTerm').value
    console.log(searchTerm)
    console.log(filterMovie(moviesLowerCase, searchTerm))
    
})

