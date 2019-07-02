const book = document.getElementById('book');
const fontSize = document.querySelectorAll('.font-size');

for (let i = 0; i < fontSize.length; i++) {

    fontSize[i].addEventListener('click', function() {
            
        if (!(event.target.classList.contains('font-size_active'))) {
            for (let k = 0; k < fontSize.length; k++) {
                if (fontSize[k].classList.contains('font-size_active')) {
                    fontSize[k].classList.remove('font-size_active');
                }
            }
            event.target.classList.add('font-size_active');
        }           
        
        if (book.classList.contains('book_fs-small')) {
            book.classList.remove('book_fs-small');
        }
        else if (book.classList.contains('book_fs-big')) {
            book.classList.remove('book_fs-big');
        }
                   
        if (event.target.hasAttribute('data-size')) {
            book.classList.add('book_fs-' + event.target.dataset.size);
        }            
    
        event.preventDefault();            
    });
}