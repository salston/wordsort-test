/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


$(document).ready(function () {

    // set up and shuffle the arrays
    var headings = ["sk", "ft", "st", "oddball"]
    var words = ["ask", "desk", "mask", "tusk", "melt", "help", "milk", "half", "gift", "lift", "lift", "raft", "soft", "left", "best", "fast", "lost", "must", "last", "just", "cost", "fist", "nest", "list", "dust"];
    headings = shuffleArray(headings);
    words = shuffleArray(words)

    // create the sortboxes
    $.each(headings, function(index, value) {
        $(".wrapper").append("<div class='sortbox' name="+value+"><div class='keywordbox'><p>"+value+"</p></div></div>");

    });
    var w = $(document).width();
    w = (w - 20*headings.length) / (headings.length);
    //w = (w/headings.length) - 10;
    $(".sortbox").width(w); 

    // create the bottombox
    $(".wrapper").append("<div class='bottombox'></div>");

    // create the wordboxes
    $.each(words, function( index, value ) {  
      $(".bottombox").append("<div class='wordbox'><p>"+value+"</p></div>");
    });
	$(".wordbox").draggable();

    

});
