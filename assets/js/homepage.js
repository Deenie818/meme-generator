// var requestUrl = "https://www.flickr.com/services/feeds/photos_public.gne";
var searchButton = document.querySelector(".searchbutton");
var nextButton = document.querySelector(".next");
var inputEl = document.querySelector("#search-form");
// var dogResult = document.querySelector("#dog-result");
var galleryEl = document.querySelector(".gallery")
var searchFormEl = document.querySelector("#user-form")
var canvasEl = document.querySelector(".empty")

// var pagenr = 1;
// var search = false;
// var query = "";

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
            picSearchEl.setAttribute("class", "fill");
            picSearchEl.setAttribute("id", i.toString());
            
            picSearchEl.innerHTML = `<img src="${data.results[i]}"/>`

            galleryEl.appendChild(picSearchEl);

            picSearchEl.addEventListener('dragstart', dragStart);
            picSearchEl.addEventListener('dragend', dragEnd);

            canvasEl.addEventListener("dragover", dragOver);
            canvasEl.addEventListener("dragenter", dragEnter);
            canvasEl.addEventListener("dragleave", dragLeave);
            canvasEl.addEventListener("drop", dragDrop);

            var dragOver = function(e) {
                e.preventDefault();
                console.log("over");
            }

            var dragEnter = function(e) {
                e.preventDefault();
                this.className += ' hovered';

                console.log("enter");
            }

            var dragLeave = function() {
                this.className = "empty";
                console.log("leave");
            }

            var dragDrop  = function() {
                this.className = "empty";
                //var x = event.currenttarget.id
                // var picResult = document.querySelector("[id = x")
                var picResult = document.querySelector("[id = '2']")

                

                var picChoice = picResult.querySelector("img");
                picChoice.id = ("pic-choice");
                this.appendChild(picResult);
                
                console.log("drop");
            }
            

            };

            

            // dogResult.innerHTML = `<img src="${data.results[5]}"/>`
        });

        
    });
    
};

var dragStart = function() {
    console.log("start");
    this.className += " hold";
    setTimeout(() => this.className = "invisible", 0);
}

var dragEnd = function() {
    this.className = "fill";
}


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





// var dragDrop = function() {
//     var picResult = document.querySelector(".fill")
//     canvasEl.appendChild(picResult);

// }

// canvasEl.addEventListener("drop", dragDrop);


var clearQueue = function() {
    // inputEl.value = "";
    document.querySelector(".gallery").innerHTML = "";
}

searchFormEl.addEventListener("submit", searchInputHandler);

// getPhotos();