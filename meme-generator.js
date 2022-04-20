const imageFileInput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#meme");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");

let image;

imageFileInput.addEventListener("change", (e) => {
  const imageDataUrl = URL.createObjectURL(e.target.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener(
    "load",
    () => {
      updateMemeCanvas(
        canvas,
        image,
        topTextInput.value,
        bottomTextInput.value
      );
    },
    { once: true }
  );
});

topTextInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

bottomTextInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 10);
  const yOffset = height / 25;

  // Update canvas background
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);

  // Prepare text
  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize / 4);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px sans-serif`;

  // Add top text
  ctx.textBaseline = "top";
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width / 2, yOffset);

  // Add bottom text
  ctx.textBaseline = "bottom";
  ctx.strokeText(bottomText, width / 2, height - yOffset);
  ctx.fillText(bottomText, width / 2, height - yOffset);
}




































// let topTextInput, bottomTextInput, imageInput, generateBtn, canvas, ctx;

// function generateMeme (img, topText, bottomText) {
//     canvas.width = img.width;
//     canvas.height = img.height;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 0, 0);

//     let fontSize = canvas.width / 15;
//     ctx.font = fontSize + 'px Impact';
//     ctx.fillStyle = "white";
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = fontSize / 15;
//     ctx.textAlign = "center";
   
    
//     ctx.textBaseLine = "top";
//     ctx.fillText(topText, canvas.width / 2, 0, canvas.width);
//     ctx.strokeText(topText, canvas.width / 2, 0, canvas.width);

// }

// // function init () {
//     topTextInput = document.getElementById('top-text');
//     bottomTextInput = document.getElementById('bottom-text');
//     imageInput = document.getElementById('image-input');
//     generateBtn = document.getElementById("generate-btn");
//     canvas = document.getElementById('meme-canvas');

//     ctx = canvas.getContext("2d");

//     canvas.width = canvas.height = 0;

//     generateBtn.addEventListener('click', function () {
//         let reader = new FileReader();
//         reader.onload = function () {
//             let img = new Image;
            
//             img.src = reader.result;
//             console.log(img);
//             generateMeme(img, topTextInput.value, bottomTextInput.value);
//         };

//         reader.readAsDataURL(imageInput.files[0]);
//     } );



// // }

// // init();