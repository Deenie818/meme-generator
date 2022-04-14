// var requestUrl = "https://www.flickr.com/services/feeds/photos_public.gne";
var searchButton = document.querySelector(".searchbutton");
var nextButton = document.querySelector(".next");
var inputEl = document.querySelector("input");
var dogResult = document.querySelector("#dog-result");
var galleryEl = document.querySelector(".gallery")
var searchFormEl = document.querySelector("#user-form")

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

var getPhotos = function(search) {
    
    fetch("https://cors-anywhere.herokuapp.com/https://imsea.herokuapp.com/api/1?q=" + search).then(function(response){
        response.json().then(function(data){
            console.log(data);  

            for (var i =0; i < 60; i+= 2) {

            var picSearchEl = document.createElement("div");
            
            picSearchEl.innerHTML = `<img src="${data.results[i]}"/>`

            galleryEl.appendChild(picSearchEl);

            

            };

            

            // dogResult.innerHTML = `<img src="${data.results[5]}"/>`
        });

        
    });
    
};


var searchInputHandler = function (event) {
    event.preventDefault();

    clearQueue();
    
    var searchTerm = inputEl.value.trim();

    if (searchTerm) {
        getPhotos(searchTerm);


        inputEl.value = "";
    } else {
        alert('Please enter a search term');
      }
}

var clearQueue = function() {
    // inputEl.value = "";
    document.querySelector(".gallery").innerHTML = "";
}

searchFormEl.addEventListener("submit", searchInputHandler);

// getPhotos();