let memes = [];

const addMeme = (ev)=>{
     //stop the form from submitting
    ev.preventDefault();
    let meme = {
       // getting al info the user is inputting
        imageFileInput: document.getElementById('imageFileInput').value,
        topTextInput: document.getElementById('topTextInput').value,
        bottomTextInput: document.getElementById('bottomTextInput').value
    }
    // we are taking our info and adding it to memes array
    memes.push(meme);
     //this clears the form
    document.forms[0].reset();

    
    // now we will save the info to local storage
    localStorage.setItem('MyMemeList', JSON.stringify(memes) );
    
}

 //saving to localStorage

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('generateBtn').addEventListener('click', addMeme);
});




//meme = document.getElementById('meme');
//imgData = getBase64Image(meme);
//localStorage.setItem("ImgData", imgData);

//function getBase64Image(img) {
  //  var canvas = document.createElement("meme");
    //canvas.width = img.width;
    //canvas.height = img.height;

    //var ctx = meme.getContext("2d");

    //var dataURL = meme.toDataURL("image/png");

    //return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
//}

//var dataImage = localStorage.getItem('imgData');
//meme = document.getElementById('tableBanner');
//imgData.src = "data:image/png;base64," + dataImage;

