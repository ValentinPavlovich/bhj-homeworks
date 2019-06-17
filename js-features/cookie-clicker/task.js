const element = document.getElementById("clicker__counter"); 
const image = document.getElementById("cookie");

function changeSizes() {
clicker__counter.textContent++;

    if (element.textContent % 2 == 0 ) {
        image.width = 200;
    } else {
        image.width = 250;
    }
};

image.onclick = changeSizes;

 
          
 
        
          
          
    
 
      