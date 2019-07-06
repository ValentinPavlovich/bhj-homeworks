const hasTooltip = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelector('.tooltip');

for (let i = 0; i < hasTooltip.length; i++) {

    hasTooltip[i].addEventListener('click', function (event) {
        event.preventDefault(); 
    
        let tagA = this.outerHTML;
        tooltip.classList.add('tooltip_active');
        tooltip.innerText = event.target.title;
        tooltip.style.top = event.target.getBoundingClientRect().top + 25 + 'px';
        tooltip.style.left = event.target.getBoundingClientRect().left + 'px';            
        this.outerHTML = tagA;
    });
}

