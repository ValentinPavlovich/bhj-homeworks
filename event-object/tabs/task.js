const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

for (let i = 0; i < tab.length; i++) {       
    tab[i].addEventListener('click', function() {
    
      for (let k = 0; k < tab.length; k++) {
          tab[k].classList.remove('tab_active');
      }
          event.target.classList.add('tab_active');
    
      for (let l = 0; l < tabContent.length; l++) {
          tabContent[l].classList.remove('tab__content_active');
      }    
          tabContent[Array.from(tab).indexOf(event.target)].classList.add('tab__content_active');

    });
}