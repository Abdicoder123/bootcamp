
const books = {
    book1: { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
    book2: { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    book3: { title: "1984", author: "George Orwell", genre: "Science Fiction" },
    book4: { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction" },
    book5: { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" }
};

$(document).ready(function() {
    // follow the instructions provided in the README to solve this
    //countBooksByGenre(books,"Fiction");
    $("#countBooksButton").click(function(){
        const genreParam = $("#genreSelector").val();

        const bookCount = countBooksByGenre(books, genreParam);

        var result = $("#result");
        result.text(`Number of ${genreParam} books; ${bookCount}`);
    });
});

function countBooksByGenre(books, genre){
    var count = 0;
    for(var item in books){
        //console.log(books[book].genre);
        if(books[item].genre === genre){
            count++;
        }
    }
    // var result = $("#result");
    // result.text(`Number of ${genre} books; ${count}`);
    return count;
}