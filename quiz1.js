function myFunction() {
    var btn = "<button id='mybtn'> Change this document</button>";
    $("body").append(btn);
    $("#mybtn").click(change);
}

function change() {
    $("#H1").html("CSIE@CGU");
    $("#P").html("怎麼那麼棒！！.");
}