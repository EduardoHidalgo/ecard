// ---------- AÑO ACTUAL ----------
var ano = new Date().getFullYear();
function myFunction() {
   document.getElementById("fecha").innerHTML = ano;
 }
myFunction();


// ---------- YOUTUBE MODAL - INICIO ----------
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
   height: '390',
   width: '640',
   videoId: YOUR_ID_HERE,
   playerVars: {
      controls: 0,
      showinfo:0,
      rel:0,
   },
   events: {
      'onReady': onPlayerReady,
   }
});
}
// ---------- YOUTUBE MODAL - TERMINA ----------