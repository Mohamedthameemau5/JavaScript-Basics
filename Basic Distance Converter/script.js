(function(){
    "use strict";

    document.getElementById('convert').addEventListener('submit',function(event){
        event.preventDefault();

        const distance = parseFloat(document.getElementById("distance").value);
        const answer = document.getElementById('answer');

        if(distance){
            const conversion = (distance * 1.609344).toFixed(3);
                            
            answer.innerHTML = `<h2>${distance} miles convert to ${conversion} kilometer </h2>`;
            //display
        }else{
            answer.innerHTML = '<h2>Please provid a number</h2>';
            
        }
        
    });


})();