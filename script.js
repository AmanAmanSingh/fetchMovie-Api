const inputBox = document.getElementById("inputbox");
const search_btn = document.getElementById("search_btn")
const result = document.getElementById("result")


// let url = "http://www.omdbapi.com/?i=tt3896198&apikey=979eb7eb"


search_btn.addEventListener("click", () => {
    if (inputBox.value) {
        let searched = inputBox.value.toLowerCase();
        fetch(`https://www.omdbapi.com/?s=${searched}&apikey=979eb7eb`).then(res => {
            return res.json()
        }).then(data => {
            result.innerHTML = ""
            let movieList = data.Search;
            movieList.map(ele => {
                const li = document.createElement("li")
                li.innerHTML = ` 
                    <div class="movie-list">
                    <img src="${ele.Poster}" >
                    <div class="title">${ele.Title}</div>
                    <div class="year"> YEAR:${ele.Year}</div>
                    <div class="imdb">Imdb${ele.imdbID}</div>
                    <div class="genre">Genre: ${ele.Type}</div>
                </div>`
                result.appendChild(li);
            })
        }).catch(err => {
            console.log(err)
        })
    }


})

