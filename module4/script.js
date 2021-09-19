(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase(); // convert firstname letter to lowercase
    if (firstLetter == "j") {
      byeSpeaker.speak(names[i]); // byeSpeaker for first name starting with "j"
    } else {
      helloSpeaker.speak(names[i]); // helloSpeaker for first names NOT starting with "j"
    }
  }
})();