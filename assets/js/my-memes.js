// JAVASCRIPT NO JQUERY VVVVVVVVV

//var form = document.getElementById('form')

//varparentDiv = document.getElementById('result')

//form.addEventListener('submit', function (event) {
    //event.preventDefault()

    //var reader = new FileReader()

    //var name = document.getElementById("imageFileInput").files[0].name

    //reader.addEventListener('load', function () {
        //if (this.result && localStorage) {
           // window.localStorage.setItem(name, this.result)
            //alert("image stored")
          //  showImages()
        //}
        //else{
          //  alert("unsuccessful")
        //}
   // })

   // reader.readAsDataURL(document.getElementById('imageFileInput').files[0])

    //console.log(name)
//})

//function showImages() {
   // for (let i = 0; i < window.localStorage.lenght; i++){
       // let res = window.localStorage.getItem(window.localStorage.key(i))
       // var image = new Image()
       // image.src = res;

        //parent.dispatchEvent.appendChild
    //}
//}

//showImages()


//JQUERY

//
const imageFileInput = document.querySelector("#imageFileInput");
var uploadedImage = "";

// myBtn is now equal to it's button id
//const myBtn = document.getElementById("generateBtn")

imageFileInput.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        document.querySelector("#display-image").style.backgroundImage = 'url(${uploadedImage})'
    });
    reader.readDataUrl(this.files[0]);
})

//at the click of the button we can now be ready to generate button
//myBtn.addEventListener("click", function() {
  //  console.log(input.files)
//});



//document.querySelector("#imageFileInput").addEventListener("generate", function() {
  //  const reader = new FileReader();

    //reader.addEventListener("load", () => {
      //  localStorage.setItem("recent-image", reader.result);
    //});

    //reader.readAsDataURL(this.files[0]);


//});

//document.addEventListener("DOMContentLoaded", () => {
  //  const recentImaggeDataUrl = localStorage.getItem("recent-image");

    //if (recentImaggeDataUrl) {
      //  document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
    //}

//});

