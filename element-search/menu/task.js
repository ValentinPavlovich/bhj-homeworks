const menuLinks = document.querySelectorAll('.menu__link');

let onlyOneMenu = 0;
for (let i = 0; i < menuLinks.length; i++) {     

    menuLinks[i].onclick = function () {
        const menuSub = menuLinks[i].parentElement;

        if (menuSub.querySelector('.menu_sub').classList.contains('menu_active')) {
            menuSub.querySelector('.menu_sub').classList.remove('menu_active');
            onlyOneMenu = 0;
        } else if (onlyOneMenu == 0) {            
            menuSub.querySelector('.menu_sub').classList.add('menu_active');
            onlyOneMenu = 1;
        }        

        if (menuLinks[i].closest('.menu_main')) {            
            return false
        }           
    }
}