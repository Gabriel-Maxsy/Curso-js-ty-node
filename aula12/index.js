let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

newB = varB;
newC = varC;
newA = varA;

varA = newB;
varB = newC;
varC = newA;

console.log(varA, varB, varC);

// Solução do professor: 

// let varA = "A"; 
// let varB = "B"; 
// let varC = "C"; 

// const varATemp = varA;

// varA = varB;
// varB = varC;
// varC = varATmep;

// console.log(varA, varB, varC);

// Com "arrays":

// let varA = "A"; 
// let varB = "B"; 
// let varC = "C"; 

// [varA, varB, varC] = [varB, varC, varA];

// console.log(varA, varB, varC);