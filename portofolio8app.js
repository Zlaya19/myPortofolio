let input = document.getElementById('inputYear');
let output = document.getElementById('outputYear');

input.addEventListener('input', getFactAjax);

function getFactAjax() {
    let year = input.value;

    let xhr = new XMLHttpRequest();

    xhr.open('GET','http://numbersapi.com/' + year + '/year?fragment' ,true);

    xhr.onload = function() {
        if(this.status === 200 && year != ''){
            output.style.display = 'flex';
            output.innerText = this.responseText;
        }
        console.log(this.responseText);
    
    }
    xhr.send();
}
















/*
function getFactAjax() {
    let year = input.value;
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET','http://numbersapi.com/' + year + '/year?fragment', true);

    xhr.onload = function() {
        if(this.status === 200 && year != ''){
            output.style.display = 'flex';
            output.innerText = this.responseText;
            console.log(output);
        }
    }
    xhr.send();
}

*/

