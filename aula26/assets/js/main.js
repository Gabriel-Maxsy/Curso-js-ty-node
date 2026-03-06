function imcCalculator() {

  const form = document.querySelector("#formulario");
  const imcResult = document.querySelector("#resultado");

  function formEvent(event) {
    event.preventDefault();

    const weight = Number(form.querySelector("#peso"));
    const height = Number(form.querySelector("#altura"));

    let imc = weight.value / (height.value * height.value);
    imc.toFixed(2);

    if (!weight || !height) {
      imc = false
      imcResult.innerHTML = `<p>Peso ou altura invalidos</p>`;
      
      return false;
    }

    if (imc >= 14 && imc <= 18.5) {
        
      imcResult.innerHTML = `<p>Seu IMC é: ${imc} - Abaixo do peso</p>`;

    } else if (imc >= 18.5 && imc <= 24.9) {
        
      imcResult.innerHTML = `<p>Seu IMC é: ${imc} - Peso normal</p>`;
    
    } else if (imc >= 25 && imc <= 29.9) {
        
      imcResult.innerHTML = `<p>Seu IMC é: ${imc} - Sobrepeso</p>`;

    } else if (imc >= 30 && imc <= 34.9) {

      imcResult.innerHTML = `<p>Seu IMC é: ${imc} - Obesidade grau 1</p>`;

    } else if (imc >= 35 && imc <= 39.9) {
        
      imcResult.innerHTML = `<p>Seu IMC é: ${imc} - Obesidade grau 2</p>`;

    } else if (imc >= 40 && imc <= 45) {

      imcResult.innerHTML = `<p>Seu IMC é: ${imc} - Obesidade grau 3</p>`;

    } else {

      imcResult.innerHTML = `<p>Seu/ IMC é: ${imc} - Peso fora do padrão humano</p>`;

    };
      
  };
  
  form.addEventListener("submit", formEvent);
}

imcCalculator();


// ===================== Solução do Professor ===================== //

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}