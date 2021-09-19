(function(window) {
  var byeSpeaker = {}; // new byeSpeaker object
  var speakWord = "Good Bye";


  byeSpeaker.speak = function (name) { // this function is expposed to script.js/global context
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker; //exposing byeSpeaker

})(window);
