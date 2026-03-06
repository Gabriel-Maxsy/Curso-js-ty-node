function multiplicador(multiplicador) {
    return function(n) {
        return multiplicador * n;
    };
}

const duplica = multiplicador(2);
const triplica = multiplicador(3);
const quadriplica = multiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));