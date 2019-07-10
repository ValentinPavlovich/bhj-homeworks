const editor = document.getElementById('editor');
const clear = document.getElementById('clear');

window.addEventListener('load', function() { 
    if (localStorage.text) {
        editor.value = localStorage.getItem('text');
    }
        editor.addEventListener('input', function() {
            localStorage.setItem('text', editor.value);
        });    
});

clear.addEventListener('click', function(event) {
    event.preventDefault();    
    localStorage.removeItem('text'); 
    localStorage.clear();
    editor.value = '';    
});