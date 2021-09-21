let input = document.getElementById('inputCountry');
const btn = document.getElementById('btn');
const display = document.getElementById('outputCountry');

btn.addEventListener('click', function(){
    const user = new XMLHttpRequest();
    user.open('GET', `https://restcountries.eu/rest/v2/name/${input.value}?fullText=true)`, true);

    let output = '';

    user.onload = function(){
        if(this.status === 200){
           output = JSON.parse(this.responseText);

            display.innerHTML = `<img src="${output[0].flag}"
            <div class="headline"><h1 class="h1Style"> ${output[0].name} </h1>
    
            <h1> <span>CAPITAL:</span> ${output[0].capital} </h1>
            <h1> <span>POPULATION:</span>        ${output[0].population} </h1>
            <h1> <span>LANGUAGE: </span>       ${output[0].languages[0].name} </h1>
            <h1> <span>CURRENCY: </span>     ${output[0].currencies[0].name} </h1>
            <div>
            `;
        }
    }

    user.send();
})
