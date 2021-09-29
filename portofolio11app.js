// rock, paper & sccisors

const userTurn = document.getElementById('user_div');
const compTurn = document.getElementById('result');
const schäre = document.getElementById('schäre');
const stein = document.getElementById('stein');
const papir = document.getElementById('papir');
const result = document.getElementById('realResult');
const miniDiv = document.getElementById('miniDiv');

let userChoice = '';
let computerChoice = '';

let userScore = 0;
let compScore = 0;
const compPoints = document.getElementById('comp_points');
const userPoints = document.getElementById('user_points');

  const broj = 3;

 schäre.addEventListener('click', function(){

  userChoice = 'schäre';

    function schäreSteinPapir(){
        const randomChoice  = ['schäre','stein','papir'];
        return randomChoice[Math.floor(Math.random() * randomChoice.length)];
      }
      computerChoice = schäreSteinPapir();

      if(userChoice == computerChoice){
        result.innerHTML = '<h1>' + 'draw, play again!' + '</h1>';
      }
      else if (computerChoice == 'stein' && userChoice == 'schäre'){
        result.innerHTML = '<h1>' + 'Comp win!' + '</h1>';
        compPoints.classList.add('score');
        compScore ++;
        compPoints.innerHTML = compScore;
      }
      else if (computerChoice == 'papir' && userChoice == 'schäre'){
        result.innerHTML = '<h1>' + 'You win, comp had paper.' + '</h1>';
        userPoints.classList.add('score');
        userScore ++;
        userPoints.innerHTML = userScore;
      };
      let element = document.createElement('div');
      let img = document.createElement('img');
      if(computerChoice == 'schäre'){
        img.src = 'bilder/makaze.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
        miniDiv.appendChild(element)
      }
      if(computerChoice == 'stein'){
        img.src = 'bilder/kamen.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
        miniDiv.appendChild(element)
      }
      if(computerChoice == 'papir'){
        img.src = 'bilder/papir.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
        miniDiv.appendChild(element)
      }

      compTurn.appendChild(miniDiv);

      schäre.addEventListener('mouseleave', function(){
            
        element.remove();
        result.innerHTML = '';  
    })

    if(userScore == broj || compScore == broj){
      result.innerHTML = '<span-rock>' + 'Game is over!' + '</span-rock>';
      if(userScore == broj){
        userPoints.style.background = '#4dffa6';
        compPoints.style.background = '#FF6666';
        img.src = 'bilder/smile.png';
        compTurn.style.backgroundImage = 'bilder/smile.png';
      }
      else if(compScore = broj){
        userPoints.style.background = '#FF6666'; 
        compPoints.style.background = '#4dffa6';
        img.src = 'bilder/sad.png';
        compTurn.style.backgroundImage = 'bilder/sad.png';
      }
      userTurn.remove();
    }
    
    });

  papir.addEventListener('click', function(){

    userChoice = 'papir';

    function schäreSteinPapir(){
        const randomChoice  = ['schäre','stein','papir'];
        return randomChoice[Math.floor(Math.random() * randomChoice.length)];
      }

    computerChoice = schäreSteinPapir();

      if(userChoice == computerChoice){
        result.innerHTML = '<h1>' + 'draw, play again!' + '</h1>';
      }
      else if (computerChoice == 'stein' && userChoice == 'papir'){
        result.innerHTML = '<h1>' + 'you win! Comp had rock.' + '</h1>';
        userPoints.classList.add('score');
        userScore ++;
        userPoints.innerHTML = userScore;
      }
      else if(computerChoice == 'schäre' && userChoice == 'papir'){
        result.innerHTML = '<h1>' + 'Comp win!' + '</h1>';
        compPoints.classList.add('score');
        compScore ++;
        compPoints.innerHTML = compScore;
      };
      let element = document.createElement('div');
      let img = document.createElement('img');
      if(computerChoice == 'schäre'){
        img.src = 'bilder/makaze.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
        miniDiv.appendChild(element)
      }
      if(computerChoice == 'stein'){
        img.src = 'bilder/kamen.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
        miniDiv.appendChild(element)
      }
      if(computerChoice == 'papir'){
        img.src = 'bilder/papir.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
        miniDiv.appendChild(element)
      }
  
      compTurn.appendChild(miniDiv);

      papir.addEventListener('mouseleave', function(){
        
        element.remove();
        result.innerHTML = '';
    });

    if(userScore == broj || compScore == broj){
      result.innerHTML = '<span-rock>' + 'Game is over!' + '</span-rock>';
      if(userScore == broj){
        userPoints.style.background = '#4dffa6';
        compPoints.style.background = '#FF6666';
        img.src = 'bilder/smile.png';
        compTurn.style.backgroundImage = 'bilder/smile.png';
      }
      else if(compScore = broj){
        userPoints.style.background = '#FF6666';
        compPoints.style.background = '#4dffa6';
        img.src = 'bilder/sad.png';
        compTurn.style.backgroundImage = 'bilder/sad.png';
      }
      userTurn.remove();
    }
    
  });
        
    stein.addEventListener('click', function(){

      userChoice = 'stein';
    
      function schäreSteinPapir(){
      const randomChoice  = ['schäre','stein','papir'];
      return randomChoice[Math.floor(Math.random() * randomChoice.length)];
    }
    computerChoice = schäreSteinPapir(); 

      if(userChoice == computerChoice){
          result.innerHTML = '<h1>' + 'draw, play again!' + '</h1>';
      }
      else if (computerChoice == 'papir' && userChoice == 'stein'){
        result.innerHTML = '<h1>' + 'Comp win!' + '</h1>';
        compPoints.classList.add('score');
        compScore ++;
        compPoints.innerHTML = compScore;
      }
      else if (computerChoice == 'schäre' && userChoice == 'stein'){
        result.innerHTML = '<h1>' + 'You win, Comp had scissors.' + '</h1>';
        userPoints.classList.add('score');
        userScore ++;
        userPoints.innerHTML = userScore;
      };
      
      let element = document.createElement('div');
      let img = document.createElement('img');
      if(computerChoice == 'schäre'){
        img.src = 'bilder/makaze.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
        miniDiv.appendChild(element)
      }
      if(computerChoice == 'stein'){
        img.src = 'bilder/kamen.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
        miniDiv.appendChild(element)
      }
      if(computerChoice == 'papir'){
        img.src = 'bilder/papir.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
        miniDiv.appendChild(element)
      }
  
    compTurn.appendChild(miniDiv);

    stein.addEventListener('mouseleave', function(){
      
        element.remove();
        result.innerHTML = '';
    });

    if(userScore == broj || compScore == broj){
      result.innerHTML = '<span-rock>' + 'Game is over!' + '</span-rock>';
      if(userScore == broj){
        userPoints.style.background = '#4dffa6';
        compPoints.style.background = '#FF6666';
        img.src = 'bilder/smile.png';
        compTurn.style.backgroundImage = 'bilder/smile.png';
      }
      else if(compScore = broj){
        userPoints.style.background = '#FF6666';
        compPoints.style.background = '#4dffa6';
        img.src = 'bilder/sad.png';
        compTurn.style.backgroundImage = 'bilder/sad.png';
      }
      userTurn.remove();
    }
  });

    // events for a better design


    schäre.addEventListener('mouseenter', function(){
      schäre.style.transform = 'scale(1.1)';
      schäre.style.transition = '0.7s';
    });
    schäre.addEventListener('mouseleave', function(){
      schäre.style.transform = 'scale(1.0)';
    });

    stein.addEventListener('mouseenter', function(){
      stein.style.transform = 'scale(1.1)';
      stein.style.transition = '0.7s';
    });
    stein.addEventListener('mouseleave', function(){
      stein.style.transform = 'scale(1.0)';
    });

    papir.addEventListener('mouseenter', function(){
      papir.style.transform = 'scale(1.1)';
      papir.style.transition = '0.7s';
    });
    papir.addEventListener('mouseleave', function(){
      papir.style.transform = 'scale(1.0)';
    });
