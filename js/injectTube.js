//script to inject into youtube
var testvar = 'hi';
console.log("hello world");

var k = setTimeout(realMain, 2000);
function realMain(){
  //var k = setTimeout(function () {console.log('hi');}, 5000);
//var t = setTimeout('movie.pauseVideo();', 5000);


//here goes the code to modify the play pause
//
//playing is = 1
//paused is = 2

//document.write('lol');
//function main(){

//	window.youDidSomething = 
function doWhat(statusNum){
 console.log('HIHIHIHI');
 console.log(statusNum);
 if(statusNum == 1){
   rememberToPause();
 }else if(statusNum == 2){
   rememberToPlay();
 }else if(statusNum == 5){
   rememberToPause();
 }else if(statusNum == 0){
   rememberToPlay();
 }else if(statusNum == 3){
   rememberToPause();
 }else{
 }
}

 //       window.rememberToPause =
function rememberToPause(){
  chrome.extension.sendRequest({'command':'pauseSong'});
}

  //      window.rememberToPlay =
function rememberToPlay(){
	playStatus.innerText = 2;
  chrome.extension.sendRequest({'command':'resumeSong'});
}
//	window.test = 
function test(state){
	//alert(state+"this was a test");

}
 //       window.addlist = 
function addlist(){
  //alert("add list started");
  var movie = document.getElementById('movie_player');
  console.log(movie);
  movie.addEventListener("onStateChange", "youDidSomething");
  rememberToPause();
  console.log(movie.getDuration());
 // chrome.extension.sendRequest('fbchafoaegcphhfipeofkchobadmmick',{'command':'resumeSong'});
}

function main(){
  window.youDidSomething =  function(state){
	console.log('youDidSomething' + state);
	playing = document.getElementById('playing');
	playing.innerText= state; 
  }
}


addlist();

//var r = setTimeout('movie.addEventListener("onStateChange", "youDidSomething");', 6000);
//}
function getSt(){
playing = document.getElementById('playing');
  console.log('getSt: ' + playing.innerText);
  doWhat(parseInt(playing.innerText));
}



setInterval(getSt, 100);

var playStatus = document.createElement('div');
playStatus.id = "playing";
playStatus.innerText='lol';



(document.body || document.head || document.documentElement).appendChild(playStatus);


var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ main +')();'));
(document.body || document.head || document.documentElement).appendChild(script);
}
