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
