const tmdbKey = 'ac2babb1ce9916a951abf050a88910da';
const tmdbBaseUrl = 'https://api.themoviedb.org';
// https://api.themoviedb.org/3/genre/movie/list?api_key=ac2babb1ce9916a951abf050a88910da
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
try{
  let requestParams = `?api_key=${tmdbKey}`
  const genreRequestEndpoint = `/3/genre/movie/list`
  let urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`
  let response = await fetch(urlToFetch)
  if(response.ok){
    let jsonResponse = await response.json()
    // array
    let genres = jsonResponse.genres
    return genres
  } else {
    console.log(response)
  }
} catch (error) {
  console.log(error)
}  
};

const getMovies = async () => {
  try{
    const selectedGenre = getSelectedGenre();
    let discoverMovieEndpoint = '/3/discover/movie'
    let requestParams = `?api_key=${tmdbKey}&&with_genres=${selectedGenre}`
    let urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`
    let response = await fetch(urlToFetch)
    if(response.ok){
      let jsonResponse = await response.json()
      // array
      let movies = jsonResponse.results
      return movies
    } 
  } catch (error){
    console.log(error)
  }
};

const getMovieInfo = async (movie) => {
  try{
    //alert(`${movie.id}`)
    let discoverMovieInfoEndpoint = `/3/movie/${movie.id}`
    let requestParams = `?language=en-US&&api_key=${tmdbKey}`
    let urlToFetch = `${tmdbBaseUrl}${discoverMovieInfoEndpoint}${requestParams}`
    let response = await fetch(urlToFetch)
    if(response.ok){
      let jsonResponse = await response.json()
      // Object
      //alert(JSON.stringify(jsonResponse))
      return jsonResponse
    } 
  } catch (error){
    console.log(error)
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  let movies = await getMovies()
  let randomMovie = getRandomMovie(movies)
  let info = await getMovieInfo(randomMovie)
  displayMovie(info) 
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;