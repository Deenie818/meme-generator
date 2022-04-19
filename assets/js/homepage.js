// var requestUrl = "https://www.flickr.com/services/feeds/photos_public.gne";
var searchButton = document.querySelector(".searchbutton");
var nextButton = document.querySelector(".next");
var inputEl = document.querySelector("#search-form");
// var dogResult = document.querySelector("#dog-result");
var galleryEl = document.querySelector(".gallery")
var searchFormEl = document.querySelector("#user-form")
var canvasEl = document.querySelector(".empty")

var generateBtn = document.querySelector("#generate");

var dragPic = "";
console.log(dragPic);
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

            var dragStart = function(event) {
                // console.log(event.currentTarget.id); id = correct index number!
                dragPic = event.currentTarget.id.toString();
                console.log(dragPic);
                console.log(typeof dragPic)
                // dragPic.push(dragPic);
                this.className += " hold";
                setTimeout(() => this.className = "invisible", 0);
                console.log("start");
            }

            var dragOver = function(e) {
                // console.log(e.currentTarget.id); id = meme-canvas
                e.preventDefault();
                console.log("over");
            }

            var dragEnter = function(e) {
                // console.log(e.currentTarget.id); id = meme-canvas
                e.preventDefault();
                this.className += ' hovered';

                console.log("enter");
            }

            var dragLeave = function(e) {
                // console.log(e.currentTarget.id); id = meme-canvas
                this.className = "empty";
                console.log("leave");
            }

            var dragDrop  = function(event) {
                this.className = "empty";
                // console.log(e.currentTarget.id); id = meme-canvas
                // var dragPic = event.currentTarget.id;
                // var picResult = document.querySelector(dragPic)
                // var picDrop = dragPic
                console.log(dragPic);
                
                var picResult = document.getElementById(dragPic);

                

                var picChoice = picResult.querySelector("img");
                picChoice.id = ("pic-choice");
                
                this.appendChild(picResult);
                
                console.log("drop");

            }

            var dragEnd = function() {
                this.className = "fill";
                console.log("end");

                // copyImageToCanvas();
            }

            for (var i =0; i < 60; i+= 2) {
                
                var picSearchEl = document.createElement("div");
                picSearchEl.setAttribute("class", "fill");
                picSearchEl.setAttribute("id", i.toString());
                
                picSearchEl.innerHTML = `<img src="${data.results[i]}"/>`

                galleryEl.appendChild(picSearchEl);

                picSearchEl.addEventListener('dragstart', dragStart);
                picSearchEl.addEventListener('dragend', dragEnd);
            }

            canvasEl.addEventListener("dragover", dragOver);
            canvasEl.addEventListener("dragenter", dragEnter);
            canvasEl.addEventListener("dragleave", dragLeave);
            canvasEl.addEventListener("drop", dragDrop);

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





// var dragDrop = function() {
//     var picResult = document.querySelector(".fill")
//     canvasEl.appendChild(picResult);

// }

// canvasEl.addEventListener("drop", dragDrop);


var clearQueue = function() {
    // inputEl.value = "";
    document.querySelector(".gallery").innerHTML = "";
}



// var copyImageToCanvas = function() {
//     var picResult = document.getElementById(dragPic);
//     var image = picResult.querySelector("img");
//     var canvas = document.querySelector("canvas");

//     var ctx = canvas.getContext("2d");

//     ctx.drawImage(image, 0, 0)
// }


var drawText = function() {

        if (canvasEl.firstChild) {
        
            
        var topText = document.getElementById("topTextInput").value
        console.log(topText);

        var TopEl = document.createElement("div");
        TopEl.setAttribute("id", "top-text")
        TopEl.innerText = topText
        
        
        canvasEl.appendChild(TopEl);

        var bottomText = document.getElementById("bottomTextInput").value

        var bottomEl = document.createElement("div");
        bottomEl.setAttribute("id", "bottom-text")
        bottomEl.innerText = bottomText

        canvasEl.appendChild(bottomEl);

    }

}


// DOESN'T WORK, ONLY COPIES ONE DIV WITH TEXT
// var createCanvas = function() {
//     console.log("new canvas here")
//     html2canvas(document.querySelector("#meme-canvas")).then(canvas => {
//         document.body.appendChild(canvas)
//     });
// }

// generateBtn.addEventListener("click", createCanvas)


// var saveMeme = function() {
//     localStorage.setItem("meme", canvasEl.outerHTML);
// }

// generateBtn.addEventListener("click", saveMeme);


topTextInput.addEventListener("change", drawText);
bottomTextInput.addEventListener("change", drawText);



searchFormEl.addEventListener("submit", searchInputHandler);

// getPhotos();