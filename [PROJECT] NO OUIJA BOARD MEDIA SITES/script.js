// Remember movie and tv show titles are supposed to be italicized

let movies = ["Hereditary", "Veronica",  "Ouija", "Ouija: Origins of Evil", "The Exorcist", "Witchboard", "Conjuring 2", "What Lies Beneath", "Paranormal Activity", "The Pact", "Ouija House"]


const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', function() {
    const searchTerm = document.getElementById('searchTerm')
    console.log(searchTerm.value)
    console.log(movies.filter(function() {
        return searchTerm.toLowerCase()
    }))
})

