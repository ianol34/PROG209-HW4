let moviesArray = [];
let selectedGenre = "";

// define a constructor to create note objects
let movieObject = function (pTitle, pYear, pGenre) {
    this.title = pTitle;
    this.year = pYear;
    this.genre = pGenre;
}



document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function () {

        moviesArray.push(new movieObject(document.getElementById("movie").value, document.getElementById("movie-year").value, selectedGenre));
        // Uncomment line below for testing purposes
        // console.log(moviesArray);
        document.getElementById("movie").value = "";
        document.getElementById("movie-year").value = "";
        document.getElementById("select-type").value = "";
    });


	$(document).bind("change", "#select-type", function (event, ui) {
		selectedGenre = document.getElementById("select-type").value;
		// Uncomment line below for testing purposes
		// console.log(selectedGenre);
	});

    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {   
        createList();
    });
    

});



function createList() {
    
    // clear prior data


    var myul = document.getElementById("myList");
    myul.innerHTML = '';

    moviesArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.title + ": " + element.year + " " + element.genre;
        myul.appendChild(li);
    });
};

