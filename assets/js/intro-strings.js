var introStrings = [
    "art",
    "a blog",
    "bad words (sometimes)",
    "code",
    "comics",
    "D&D",
    "personal finance",
    "RPG stories",
    "SO MANY THINGS",
    "scripting",
    "things",
    "this website",
    "websites"];

var introString = "Paul Ladd does things";
var lastIndexNumber = -1;

function chooseIntroString() {
    indexNumber = Math.floor((Math.random() * introStrings.length));
    introString = "Paul Ladd does " + introStrings[indexNumber];
    setIntroString(introString);
}

function setIntroString(text) {
    document.getElementById("intro-string").innerHTML = text;
}
