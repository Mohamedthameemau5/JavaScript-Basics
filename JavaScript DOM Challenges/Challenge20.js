var img = document.querySelector('#one img');
img.setAttribute('src',"http://meadpoint.net/images/xmasajax.jpg");


var secondArticlePara = document.querySelectorAll('#two p');

for(i=0;i<secondArticlePara.length; i++){
    secondArticlePara[i].className = "blue";
}