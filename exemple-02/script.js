
const logoHtml = document.querySelector('.logo');
const output = document.querySelector('.output');

function handleOrientation(event) {
  let z = event.alpha;
  let x = event.beta; 
  let y = event.gamma;

  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";
  output.innerHTML += "alpha: " + z + "\n";

  logoHtml.style.transform = `rotate(${y}deg)`;

  
}

window.addEventListener('deviceorientation', handleOrientation);