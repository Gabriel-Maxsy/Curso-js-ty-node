function CriaCalculadora() {
    let display = document.querySelector(".display");

    this.inicia = function() {
        cliqueBotoes();
        pressionaEnter();
    };

    let pressionaEnter = () => {
        display.addEventListener("keyup", e => {
            if(e.keyCode === 13) {
                realizaConta();
            }
        });
    };

    const realizaConta = function() {
        let conta = display.value;

        try {
            conta = eval(conta);

            if(!conta) {
                alert("Conta invalida mané");
                return;
            }

            display.value = conta;
            console.log("teste");
        } catch(e) {
            alert("mané que conta foi essa que tu fez");
            return;
        }
    };

    const clearDisplay = function() {
        display.value = "";
    };

    const apagaUm = function() {
        display.value = display.value.slice(0, -1);
    };

    const cliqueBotoes = function() {
        document.addEventListener("click", e => {
            const el = e.target;

            if (el.classList.contains("btn-num")) {
                btnParaDisplay(el.innerText);
                display.focus(); // 🔥 isso resolve
            }

            if(el.classList.contains("btn-clear")) {
                clearDisplay();
            }

            if(el.classList.contains("btn-del")) {
                apagaUm();
            }

            if(el.classList.contains("btn-eq")) {
                realizaConta();
            }

        });
    };

    const btnParaDisplay = function(valor) {
        display.value += valor;
    };
}

const calculadora = new CriaCalculadora();
calculadora.inicia()

// Solução do professor:


// function Calculadora() {
//   this.display = document.querySelector('.display');

//   this.inicia = () => {
//     this.capturaCliques();
//     this.capturaEnter();
//   };

//   this.capturaEnter = () => {
//     document.addEventListener('keyup', e => {
//       if (e.keyCode === 13) {
//         this.realizaConta();
//       }
//     });
//   };

//   this.capturaCliques = () => {
//     document.addEventListener('click', event => {
//       const el = event.target;
//       if (el.classList.contains('btn-num')) this.addNumDisplay(el);
//       if (el.classList.contains('btn-clear')) this.clear();
//       if (el.classList.contains('btn-del')) this.del();
//       if (el.classList.contains('btn-eq')) this.realizaConta();
//     });
//   };

//   this.realizaConta = () => {
//     try {
//       const conta = eval(this.display.value);

//       if(!conta) {
//         alert('Conta inválida');
//         return;
//       }

//       this.display.value = conta;
//     } catch(e) {
//       alert('Conta inválida');
//       return;
//     }
//   };

//   this.addNumDisplay = el => {
//     this.display.value += el.innerText;
//     this.display.focus();
//   };

//   this.clear = () => this.display.value = '';
//   this.del = () => this.display.value = this.display.value.slice(0, -1);
// }

// const calculadora = new Calculadora();
// calculadora.inicia();