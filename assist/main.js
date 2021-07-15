function showPreview(){
    var htmlcode = document.getElementById("htmlcode").value;
    var csscode = "<style>"+document.getElementById("csscode").value +"</style>";
    var jscode ="<scri"+"pt>"+ document.getElementById("jscode").value + "</scri"+"pt>";
//     var phpcode ="<?php\n" + document.getElementById("phpcode").value + "?>";

    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlcode+csscode+jscode);
    frame.close();
}
