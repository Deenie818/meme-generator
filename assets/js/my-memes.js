// 1st

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


//2nd

//3rd

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

let memes = [];

const addMeme = (ev)=>{
    // stop the form from submitting
    ev.preventDefault();
    let meme = {
        imageFileInput: document.getElementById('imageFileInput').value,
        topTextInput: document.getElementById('topTextInput').value,
        bottomTextInput: document.getElementById('bottomTextInput').value
    }
    memes.push(meme);
    // this clears the form
    document.forms[0].reset();

    //so the meme is then displayed
    console.warn('added',{memes} );
    
}

// saving to localStorage

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('generateBtn').addEventListener('click', addMeme);
});