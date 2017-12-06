// grab an element
var emoryHeader = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(emoryHeader, {
    "offset": 225,
    "tolerance": 10
    });
// initialise
headroom.init(); 