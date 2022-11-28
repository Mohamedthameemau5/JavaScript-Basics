var btn = document.querySelector('button');
var allPara = document.querySelectorAll('p')

btn.addEventListener('click',function(){
    for(var i=0; i<allPara.length; i++){
        allPara[i].style.color = "green";
    }
})