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

    
    // now we will save the info to local storage
    localStorage.setItem('MyMemeList', JSON.stringify(memes) );
    
}

// saving to localStorage

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('generateBtn').addEventListener('click', addMeme);
});