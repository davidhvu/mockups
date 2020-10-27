// Remember movie and tv show titles are supposed to be italicized

let movies = ["Hereditary", "Veronica",  "Ouija", "Ouija: Origins of Evil", "The Exorcist", "Witchboard", "Conjuring 2", "What Lies Beneath", "Paranormal Activity", "The Pact", "Ouija House"]


const moviesLowerCase = movies.map(title => title.toLowerCase())
console.log(moviesLowerCase)

function filterMovie(movieArr,userInput) {
    return movieArr.filter(function (el) {
        return el.indexOf(userInput.toLowerCase()) !== -1;
    }) 
}

function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', function() {
    const searchTerm = document.getElementById('searchTerm').value
    console.log(searchTerm)
    const searchResult = filterMovie(moviesLowerCase, searchTerm)
    const divResult = document.createElement('p')
    divResult.innerHTML = searchResult
    capitalize_Words(divResult)
    console.log(divResult)
    const firstCol = document.getElementById('first-col')
    firstCol.appendChild(divResult)

})

