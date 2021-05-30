function begin(){
    myTimeout = setTimeout(myTimer, 10000);
    var msg = new SpeechSynthesisUtterance(document.getElementById("texta").value);
    msg.onend =  function() { clearTimeout(myTimeout); }
    var x=document.getElementById("speed").value;
    var y=document.getElementById("volume").value;
    msg.volume=y;
    var z=document.getElementById("pitch").value;
    msg.rate = x
    
    msg.pitch = z;
    window.speechSynthesis.cancel();
   
    window.speechSynthesis.speak(msg);
    
}
function pause1(){
    //var msg = new SpeechSynthesisUtterance(document.getElementById("texta").value);
    
    window.speechSynthesis.pause();
}
function res(){
    //var msg = new SpeechSynthesisUtterance(document.getElementById("texta").value);
    
    window.speechSynthesis.resume();
}
function can(){
   // var msg = new SpeechSynthesisUtterance(document.getElementById("texta").value);
    
    window.speechSynthesis.cancel();
}
var myTimeout;
function myTimer() {
    window.speechSynthesis.pause();
    window.speechSynthesis.resume();
    myTimeout = setTimeout(myTimer, 10000);
}
