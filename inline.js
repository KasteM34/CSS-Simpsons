function loadExternalHTMLPage() {
    var xmlhttp;
    var pagesToDisplay = ['bart.html', 'homer.html', "kang.html", "lisa.html", "marge.html", "sideshow-bob.html", "troy-mcclure.html"];
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("contentArea").innerHTML = xmlhttp.responseText;
        }
    }
    var randomnumber = Math.floor(Math.random() * pagesToDisplay.length);
    xmlhttp.open("GET", pagesToDisplay[randomnumber], true);
    xmlhttp.send();
}
