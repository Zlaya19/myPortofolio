
const output = document.getElementById('output');
const output2 = document.getElementById('output2');

const numb1 = document.getElementById('numb1');
const numb2 = document.getElementById('numb2');
const numb3 = document.getElementById('numb3');
const numb4 = document.getElementById('numb4');
const numb5 = document.getElementById('numb5');
const numb6 = document.getElementById('numb6');
const numb7 = document.getElementById('numb7');
const numb8 = document.getElementById('numb8');
const numb9 = document.getElementById('numb9');
const numb0 = document.getElementById('numb0');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const puta = document.getElementById('puta');
const dijeljenje = document.getElementById('dijeljenje');
const rezultat = document.getElementById('btJed');
const zarez = document.getElementById('btnX');
output2.style.fontSize = '35px';


numb1.addEventListener('click', function(){
    output2.style.color = '#555';
    output2.innerText += 1; 
    })
    numb2.addEventListener('click', function(){
    output2.style.color = '#555';
    output2.innerText += 2; 
    })
    numb3.addEventListener('click', function(){
    output2.style.color = '#555';
    output2.innerText += 3; 
    })
    numb4.addEventListener('click', function(){
    output2.style.color = '#555';
    output2.innerText += 4; 
    })
    numb5.addEventListener('click', function(){
    output2.style.color = '#555';
    output2.innerText += 5; 
    })
    numb6.addEventListener('click', function(){
    output2.style.color = '#555';
    output2.innerText += 6; 
    })
    numb7.addEventListener('click', function(){
    output2.style.color = '#555';
    output2.innerText += 7; 
    })
    numb8.addEventListener('click', function(){
    output2.style.color = '#555';
    output2.innerText += 8; 
    })
    numb9.addEventListener('click', function(){
    output2.style.color = '#555';
    output2.innerText += 9; 
    })
    numb0.addEventListener('click', function(){
        output2.style.color = '#555';
        output2.innerText += 0; 
    })
    plus.addEventListener('click', function(){
        output2.style.color = '#555';
        output2.innerText += '+'; 
    })
    minus.addEventListener('click', function(){
        output2.style.color = '#555';
        output2.innerText += '-'; 
    })
    puta.addEventListener('click', function(){
        output2.style.color = '#555';
        output2.innerText += '*';  
    })
    dijeljenje.addEventListener('click', function(){
        output2.style.color = '#555';
        output2.innerText += '/'; 
    })
    zarez.addEventListener('click', function(){
        output2.style.color = '#555';
        output2.innerText += '.'; 
    })
    
    rezultat.addEventListener('click', function(){
        let result = eval(output2.innerHTML);
        output.innerText = output2.innerHTML;
        output2.style.color = '#555';
        output2.innerText = result;

    })
    output.addEventListener('click', function(){
        output.innerText += '';
        output2.innerText = '';
        output.classList.add('classSpan');
        output.innerHTML = `<span>AC<span>`;
    })

    output2.addEventListener('click', function(){
        output.innerText += '';
        output2.innerText = '';
        output.classList.add('classSpan');
        output.innerHTML = `<span>AC<span>`;
    })
