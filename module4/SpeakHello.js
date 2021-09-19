(function(window) {
  var helloSpeaker = {}; // new helloSpeaker object
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) { // this function is expposed to script.js/global context
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker; // exposing helloSpeaker method to global context
})(window);