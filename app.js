let input = document.querySelector('input');
let img = document.querySelector('Movie poster');

let apiKey = "6a3eb00f";
function searchMovie(){
    let url = `http://www.omdbapi.com/?t=${input.value}&apikey=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data);
        document.querySelector('img').src = data.Poster;
        document.querySelector('.title').innerHTML = `Title: ${data.Title}`;
        document.querySelector('.Genre').innerHTML = `Genre: ${data.Genre}`;
        document.querySelector('.Year').innerHTML = `Year: ${data.Year}`;
        document.querySelector('.Actors').innerHTML = `Actors: ${data.Actors}`;
        document.querySelector('.Plot').innerHTML = `Plot: ${data.Plot}`;
        
      })
} 
  