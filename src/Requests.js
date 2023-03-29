//Typically we will store in {process.env.API_KEY}
const API_KEY = "532f30f5c450af92af8cea4ad744dc7b";

// var randNum = Math.floor((Math.random() *3)+1)
// console.log(randNum)
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=${Math.floor((Math.random() *2)+1)}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=${Math.floor((Math.random() *2)+1)}`,
    fetchAnimatedMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&page=${Math.floor((Math.random() *4)+1)}`,
    fetchAnimatedTv: `/discover/tv?api_key=${API_KEY}&with_genres=16&page=${Math.floor((Math.random() *4)+1)}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&page=${Math.floor((Math.random() *3)+1)}`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&page=${Math.floor((Math.random() *3)+1)}`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&page=${Math.floor((Math.random() *3)+1)}`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&page=${Math.floor((Math.random() *3)+1)}`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&page=${Math.floor((Math.random() *3)+1)}`,
};

export default requests;