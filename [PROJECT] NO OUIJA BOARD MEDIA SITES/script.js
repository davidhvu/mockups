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
    const searchResult = filterMovie(moviesLowerCase, searchTerm)
    const divResult = document.createElement('p')
    divResult.innerHTML = searchResult

    const space1 = document.getElementById('space1')
    const space2 = document.getElementById('space2')
    document.body.insertBefore(space1, space2)

})

