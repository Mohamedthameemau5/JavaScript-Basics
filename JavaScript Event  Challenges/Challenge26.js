var btnAdd = document.querySelectorAll('button')[0];
var btnRemove = document.querySelectorAll('button')[1];

var divTag = document.querySelector('div');
var numOfPara = 1;

btnAdd.addEventListener('click',function(){
    numOfPara++;
    var newPara = document.createElement('p');
    var newParaText = document.createTextNode(
        `This is paragraph number ${numOfPara}`);

    newPara.appendChild(newParaText);
    divTag.appendChild(newPara);

})

btnRemove.addEventListener('click',function(){
    if(numOfPara > 1 ){
        divTag.removeChild(divTag.children[numOfPara-1])
        numOfPara--;
    }else{
        alert("don't delete the last paragraph")
    }
       
});

