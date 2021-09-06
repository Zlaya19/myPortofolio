let input = document.getElementById('inputMonth');
let input2 = document.getElementById('inputDay');
let output = document.getElementById('outputDate');

input.addEventListener('input', getFactFetch);

function getFactFetch() {
    
    let userDate = input.value;
    let userMonth = input2.value;

    fetch('http://numbersapi.com/' + userDate + '/' + userMonth + '/date')
        .then(response => response.text())
        .then(data => {
            if(userDate == '' || userMonth == ''){
                output.style.display = 'none';
            }
            if(userDate != '' && userMonth != ''){
                output.style.display = 'flex';
                output.innerText = data;
            }
        })
        .catch(err => console.log(err));
    }
