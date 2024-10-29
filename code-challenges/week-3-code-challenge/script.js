const apiKey = config.apiKey
var URL = "http://img.omdbapi.com/?apikey="+ apiKey + "&";

//We create an if else for a list where all the inputs from the movie form will be stored
// if(localStorage.movies){
//     var movieList = JSON.parse(localStorage.movies);
// } else {
//     movieList = [];
// }

// //This function is where we collect the inputs and store them
// $("#submit").click(function(){
//     event.preventDefault();
//     var movieObj = {
//         name: $("#title").val(), //capturing the specific inputs from the form
// 	    genre: $("#genre").val(),
// 	    year: $("#year").val()
//     }
//     movieList.push(movieObj);
//     localStorage.movies = JSON.stringify(movieList);
//     console.log(movieList.length);
//     listStoredMovies();

//     findPoster();
// });

// //Use this to store listed movies on the webpage from local storage
// function listStoredMovies(){
//     for(var i = 0; movieList.length; i++){
//         $("#movie-list").append("<li>" + "<strong>"+ movieList[i].name +"</strong>"+ "</li>"+ "<li>"+ movieList[i].genre+"</li>" + "<li>"+movieList[i].year+ "</li>");
//     }
// }

// function findPoster(){
//     var movieName = title.val();
//     $.getJSON(URL + movieName, function(data) {
//         console.log(data);
//     });

// }

$(function (){


    $('#movie-form').on('submit', function(event){
        event.preventDefault();

        const title = $('#title').val();
        const genre = $('#genre').val();
        const year = $('#year').val();

        const movie = {title, genre, year};

        console.log(movie);
    })

    if(localStorage.movies){
        var movies = JSON.parse(localStorage.movies);
    } else {
        movies = [];
    }
})