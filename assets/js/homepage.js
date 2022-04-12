// var requestUrl = "https://www.flickr.com/services/feeds/photos_public.gne";
var searchButton = document.querySelector(".searchbutton");
var nextButton = document.querySelector(".next");
var input = document.querySelector("input");

var pagenr = 1;
var search = false;
var query = "";

// input.addEventListener("input", function(event) {
//     event.preventDefault();
//     query = event.target.value;
// });

// // async function curatedPhotos (pagenr) {
// //     var data = await fetch(requestUrl);

// //     var result = await data.json();
// //     console.log(result);
// // }

// // curatedPhotos(pagenr);

var getPhotos = function() {
    var response = fetch("https://picsum.photos/200");
    console.log(response);


};

getPhotos();