(function(){

    "use strict"

    let convertType = "miles";
	const heading = document.querySelector('h1');
	const intro = document.querySelector('p');
	const answerDiv = document.getElementById('answer');
	const form = document.getElementById('convert')

	document.addEventListener('keydown', function(event){
		
		
		var key = event.code;

		if(key === 'KeyK'){
			convertType = "kilometers";
			heading.innerHTML = "Kilometers to Miles Converter";
			intro.innerHTML = "Type in a number of kilometer and click the button to covert the distance to miles";
		}
		
		else if (key ==='KeyM'){
			convertType = "miles";
			heading.innerHTML = "Miles to Kilometers Converter";
			intro.innerHTML = "Type in a number of Miles and click the button to covert the distance to Kilometers";
		}
	});

	form.addEventListener('submit',function(event){
		
		event.preventDefault();
		
		const distance = parseFloat(document.getElementById('distance').value);

		if(distance ){

            //converts miles to 1.1609344 kilometer
            //converts kilometer to 0.623371192 miles

			if(convertType == 'miles'){
				answer.innerHTML = `<h2>Miles converts to ${distance*1.609344.toFixed(3)} kilometers</h2>`

			}else{
				answerDiv.innerHTML = `<h2>Kilometers converts to ${distance*0.621371192.toFixed(3)} Miles</h2>`

			}			

		}

		else{
			answerDiv.innerHTML = "<h2>Please provide a number</h2>"
		}

	});


})();