var allLink = document.querySelectorAll('a');

for(var i=0; i<allLink.length; i++ ){
    var link = allLink[i].getAttribute('href');

    if( link == "https://en.wikipedia.org/wiki/Llama"){
        allLink[i].innerHTML = "Llamas are cool"
    }
}