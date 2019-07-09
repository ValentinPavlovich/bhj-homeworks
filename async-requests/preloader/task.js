const items = document.getElementById('items');
const loader = document.getElementById('loader');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();

xhr.addEventListener('readystatechange', function() {

  if (this.readyState == xhr.DONE && this.status == 200) {

    loader.classList.remove('loader_active');
    var data = JSON.parse(this.responseText).response.Valute; 
  
    for (var valute in data) {
        items.innerHTML += `
        <div class="item">
            <div class="item__code">
                ${data[valute].CharCode}
            </div>
            <div class="item__value">
                ${data[valute].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
        `;    
    }          
  }
});