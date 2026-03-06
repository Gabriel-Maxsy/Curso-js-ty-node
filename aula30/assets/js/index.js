const data = new Date();

function mesTexto(mes) {
  let mesTexto;

  switch (mes) {
  case 0:
    mesTexto = 'Janeiro';
    return mesTexto;
  case 1:
    mesTexto = 'Fevereiro';
    return mesTexto;
  case 2:
    mesTexto = 'Março';
    return mesTexto;
  case 3:
    mesTexto = 'Abril';
    return mesTexto;
  case 4:
    mesTexto = 'Maio';
    return mesTexto;
  case 5:
    mesTexto = 'Junho';
    return mesTexto;
  case 6:
    mesTexto = 'Julho';
    return mesTexto;
  case 7:
    mesTexto = 'Agosto';
    return mesTexto;
  case 8:
    mesTexto = 'Setembro';
    return mesTexto;
  case 9:
    mesTexto = 'Outubro';
    return mesTexto;
  case 10:
    mesTexto = 'Novembro';
    return mesTexto;
  case 11:
    mesTexto = 'Dezembro';
    return mesTexto;
  default:
    mesTexto = '';
    return mesTexto;
  }
}

function diaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
  case 0:
    diaSemanaTexto = 'Domingo';
    return diaSemanaTexto;
  case 1:
    diaSemanaTexto = 'Segunda-feira';
    return diaSemanaTexto;
  case 2:
    diaSemanaTexto = 'Terça-feira';
    return diaSemanaTexto;
  case 3:
    diaSemanaTexto = 'Quarta-feira';
    return diaSemanaTexto;
  case 4:
    diaSemanaTexto = 'Quinta-feira';
    return diaSemanaTexto;
  case 5:
    diaSemanaTexto = 'Sexta-feira';
    return diaSemanaTexto;
  case 6:
    diaSemanaTexto = 'Sábado';
    return diaSemanaTexto;
  default:
    diaSemanaTexto = '';
    return diaSemanaTexto;
  }
}

function formataData(data) {
    const diaSemana = diaSemanaTexto(data.getDay());
    const dia = data.getDate();
    const mes = mesTexto(data.getMonth());
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();

    return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`;
}

const dataFormatada = formataData(data);

const titulo = document.querySelector("#texto");

titulo.innerHTML = dataFormatada;

// Solução do professor:

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(diaSemana) {
//   const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 
//     'sexta', 'sábado'];
//   return diasSemana[diaSemana];
// }

// function getNomeMes(numeroMes) {
//   const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maior', 'junho', 
//     'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//   return meses[numeroMes];
// }

// function zeroAEsquerda (num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);

//   return (
//     `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
//     ` de ${data.getFullYear()} ` + 
//     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//   );
// }

// h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });