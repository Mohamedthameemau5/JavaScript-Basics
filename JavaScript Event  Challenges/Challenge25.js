var btnAdd = document.querySelectorAll('button')[0];
var btnRemove = document.querySelectorAll('button')[1];

var divTag = document.querySelector('div');

btnAdd.addEventListener('click',function(){
    var newPara = document.createElement('p');
    var newParaText = document.createTextNode("A new Paragraph");

    newPara.appendChild(newParaText);
    divTag.appendChild(newPara);

})

btnRemove.addEventListener('click',function(){
    var allPara = document.querySelectorAll('p')
    divTag.removeChild(divTag.children[allPara.length-1])
});

