const rotatorCase = document.querySelectorAll('.rotator__case');

let i = 0;

setInterval( function() {
	rotatorCase[i].classList.toggle('rotator__case_active');
        i++;
        
	if (i == rotatorCase.length) {
		i = 0;
    }    
	rotatorCase[i].classList.toggle('rotator__case_active');
}, 1000 );