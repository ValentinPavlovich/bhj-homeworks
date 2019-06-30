const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.getElementsByClassName('dropdown__item');

dropdownValue.addEventListener('click', function() {

    if (dropdownList.classList.contains('dropdown__list')) {
        dropdownList.classList.add('dropdown__list_active');
    } else {
        dropdownList.classList.remove('dropdown__list_active');
    }
});

for (let i = 0; i < dropdownItem.length; i++) {
    
    dropdownItem[i].addEventListener('click', function() {
        event.preventDefault();
        dropdownValue.textContent = event.target.textContent;
        dropdownList.classList.remove('dropdown__list_active');        
    });
}