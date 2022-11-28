var btn = document.querySelector('button');
var divTag = document.querySelector('div');

btn.addEventListener('click',function(){
    var newPara = document.createElement('p');
    var newParaText = document.createTextNode("A new Paragraph");

    newPara.appendChild(newParaText);
    divTag.appendChild(newPara);

})