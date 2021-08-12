
const button = document.getElementById('btnColor');
const section = document.querySelector('.appProject');

button.addEventListener('click', function(){
    let color = '#';
    color += random = Math.random().toString(16).slice(2,8);console.log(color) // #ff15f4
    section.style.backgroundColor = color;
})

// Password generator app
    
const output = document.getElementById('output');
const btn10 = document.getElementById('btn10');
const btn15 = document.getElementById('btn15');
const btn20 = document.getElementById('btn20');
const deletePass = document.getElementById('delete');
const copyPass = document.getElementById('copy');

// svi elementi pomocu kojih se sklapa random password

const passwordElements = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

btn10.addEventListener('click', function(){
    output.innerText = password10();
    output.classList.add('classDiv');
})
   
// funkcija koja vraca lozinku od deset random elemenata

function password10() {

    let index = '';
    
    for( let i=0; i<10; i++ ){
        const randomMath = [Math.floor(Math.random() * passwordElements.length)];
        index += passwordElements[randomMath];
    } return index;
};

btn15.addEventListener('click', function(){
    output.innerText = password15();
    output.classList.add('classDiv');
})

// funkcija koja vraca lozinku od petnaest random elemenata

function password15() {

    let indux = '';
    
    for( let i=0; i<15; i++ ){
        const randomMath = [Math.floor(Math.random() * passwordElements.length)];
        indux += passwordElements[randomMath];
    } return indux;
};

btn20.addEventListener('click', function(){
    output.innerText = password20();
    output.classList.add('classDiv');
})

// funkcija koja vraca lozinku od dvadeset random elemenata

function password20() {

    let indax = '';
    
    for( let i=0; i<20; i++ ){
        const randomMath = [Math.floor(Math.random() * passwordElements.length)];
        indax += passwordElements[randomMath];
    } return indax;
};

deletePass.addEventListener('click', function(){
    output.innerText = '';
});

    // button 'copy' kopira sadrzaj output-a i tako mu imamo pristup preko paste-a

    copy.addEventListener("click", function() {
        
            var inp = document.createElement('input');
            document.body.appendChild(inp)
            inp.value = output.innerText;
            inp.select();
            document.execCommand('copy',false);
            inp.remove();
            
    });

    // tokom klika se sadrzaj output-a povecava, kako bismo stekli dojam da se nesto desava
    
    copy.addEventListener('mousedown', function(){
        output.style.transform = 'scale(1.1)';
    });

    // tokom vracanja tzv mouseup-a, vraca se i sadrzaj outputa na predhodnu velicinu

    copy.addEventListener('mouseup', function(){
        output.style.transform = 'scale(1.0)';
    });




/* Calculator program */


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
    output2.style.color = 'white';
    output2.innerText += 1; 
    })
    numb2.addEventListener('click', function(){
    output2.style.color = 'white';
    output2.innerText += 2; 
    })
    numb3.addEventListener('click', function(){
    output2.style.color = 'white';
    output2.innerText += 3; 
    })
    numb4.addEventListener('click', function(){
    output2.style.color = 'white';
    output2.innerText += 4; 
    })
    numb5.addEventListener('click', function(){
    output2.style.color = 'white';
    output2.innerText += 5; 
    })
    numb6.addEventListener('click', function(){
    output2.style.color = 'white';
    output2.innerText += 6; 
    })
    numb7.addEventListener('click', function(){
    output2.style.color = 'white';
    output2.innerText += 7; 
    })
    numb8.addEventListener('click', function(){
    output2.style.color = 'white';
    output2.innerText += 8; 
    })
    numb9.addEventListener('click', function(){
    output2.style.color = 'white';
    output2.innerText += 9; 
    })
    numb0.addEventListener('click', function(){
        output2.style.color = 'white';
        output2.innerText += 0; 
    })
    plus.addEventListener('click', function(){
        output2.style.color = 'white';
        output2.innerText += '+'; 
    })
    minus.addEventListener('click', function(){
        output2.style.color = 'white';
        output2.innerText += '-'; 
    })
    puta.addEventListener('click', function(){
        output2.style.color = 'white';
        output2.innerText += '*';  
    })
    dijeljenje.addEventListener('click', function(){
        output2.style.color = 'white';
        output2.innerText += '/'; 
    })
    zarez.addEventListener('click', function(){
        output2.style.color = 'white';
        output2.innerText += '.'; 
    })
    
    rezultat.addEventListener('click', function(){
        let result = eval(output2.innerHTML);
        output2.style.color = 'white';
        output2.innerText = result;

    })
    output2.addEventListener('click', function(){
        output2.innerText = '';
    })


/* Calculator program */

// function to transform div class by mouseenter and mouseleave
        
const projectI = document.querySelectorAll('.projectDiv');

for(let i = 0; i<projectI.length; i++){
    projectI[i].addEventListener('mouseenter', function(){
        projectI[i].classList.add('classItem');
        projectI[i].style.transform = 'scale(1.02)';
    });

    projectI[i].addEventListener('mouseleave', function(){
        projectI[i].style.transform = 'scale(1.00)';
    });
}

  
  