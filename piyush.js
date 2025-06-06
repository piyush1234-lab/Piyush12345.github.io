function select() {
         b1.style.backgroundColor="red"
         b1.style.color="white"   
        }
        function deselect() { 
       b1.style.backgroundColor="frosted white"
       b1.style.color="black"
        }
    const d2 = document.getElementById("d2");
const b1 = document.getElementById("b1");
const au1 = document.getElementById("au1");
const messageBox = document.getElementById("messageBox");
const backgroundLayer = document.getElementById("backgroundLayer");
const scrollingList = document.getElementById("scrollingList");
    function fade(){
        d2.style.animation="fadeIn 3s forwards"
        b1.style.animation="fadeIn 3s forwards"
        b1.style.display="block"
    }
function animation(){
d2.style.animation = "bulgeFade 2s forwards";
b1.style.display="none";
setTimeout(()=>{
au1.volume=0;
    au1.play();
    fadeAudioIn(au1, 2000);
}, 500);
setTimeout(()=>{
    fadeAudioOut(au1, 2000);
}, 26500);
setTimeout(()=>{
    au1.pause();
},1000 + 26000);
const audioDuration = 26000;
const seconds = audioDuration/1000;
  setTimeout(()=>{
    d2.style.display = "none";
    messageBox.style.display = "block";
    backgroundLayer.style.display="block";
    backgroundLayer.style.animation="fadeIn 2s forwards";
    scrollingList.style.animation="fadeIn 1s 1.5s forwards";
  }, 1000);
  setTimeout(() => {
  const finalMessage = document.getElementById("finalMessage");
  finalMessage.style.display = "block";
  finalMessage.style.animation = "fadeIn 2s forwards";
}, 23000); // 24s for scroll + buffer = 25s
};
function fadeAudioIn(audio, duration) {
  let step = 0.01;
  let interval = duration / (1 / step);
  let fadeIn = setInterval(() => {
    if (audio.volume < 1.0) {
      audio.volume = Math.min(audio.volume + step, 1.0);
    } else {
      clearInterval(fadeIn);
    }
  }, interval);
}

function fadeAudioOut(audio, duration) {
  let step = 0.01;
  let interval = duration / (1 / step);
  let fadeOut = setInterval(() => {
    if (audio.volume > 0) {
      audio.volume = Math.max(audio.volume - step, 0);
    } else {
      clearInterval(fadeOut);
    }
  }, interval);
  }