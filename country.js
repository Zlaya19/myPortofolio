let input = document.getElementById('inputCountry');
const btn = document.getElementById('btn');
const display = document.getElementById('outputCountry');
const API_KEY = '7e58555795fee076c3fd65b5dd7736c4';

btn.addEventListener('click', function(){
    const user = new XMLHttpRequest();
    user.open('GET', `https://api.countrylayer.com/rest/v2/all/?access_key=${API_KEY})`, true);

    let output = '';

    user.onload = function(){
        if(this.status === 200){
           output = JSON.parse(this.responseText);

           console.log(output);

            display.innerHTML = `<img src="${output[0].flag}"
            <div class="headline"><h1 class="h1Style"> ${output[0].name} </h1>
    
            <h1> <span>CAPITAL:</span> ${output[0].capital} </h1>
            <h1> <span>POPULATION:</span>        ${output[0].population} </h1>
            <h1 class="styleBorder"> <span>BORDERS: </span>       ${output[0].borders} </h1>
            <h1> <span>LANGUAGE: </span>       ${output[0].languages[0].name} </h1>
            <h1> <span>CURRENCY: </span>     ${output[0].currencies[0].name} </h1>
            <div>
            `;
        }
    }

    user.send();
})


/*

let input = document.getElementById('inputCountry');
const btn = document.getElementById('btn');
const display = document.getElementById('outputCountry');
const API_KEY = '7e58555795fee076c3fd65b5dd7736c4';


https://api.countrylayer.com/rest/v2/name/italy? access_key = 7e58555795fee076c3fd65b5dd7736c4 & ?fullText=true)


btn.addEventListener('click', getFactFetch);

function getFactFetch() {
    
    let userDate = input.value;

    /*  GET https://api.countrylayer.com/v2/name/{name}
    ? access_key = API_KEY & FullText=  */
/*
    fetch(`https://api.countrylayer.com/rest/v2/name/${userDate}? access_key = ${API_KEY} & ?fullText=true)`)
        .then(response => response.text())
        .then(data => {
            display.innerHTML = `<img src="${data[0].flag}"
            <div class="headline"><h1 class="h1Style"> ${data[0].name} </h1>
    
            <h1> <span>CAPITAL:</span> ${data[0].capital} </h1>
            <h1> <span>POPULATION:</span>        ${data[0].population} </h1>
            <h1 class="styleBorder"> <span>BORDERS: </span>       ${data[0].borders} </h1>
            <h1> <span>LANGUAGE: </span>       ${data[0].languages[0].name} </h1>
            <h1> <span>CURRENCY: </span>     ${data[0].currencies[0].name} </h1>
            <div>
            `;
        
        })
        .catch(err => console.log(err));
    }

*/

/* 
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
    } */
