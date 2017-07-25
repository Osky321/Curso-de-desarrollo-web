//npm install -g typescript --> para instalar typescript
//tsc test-code.ts --> para compilar
// node test-code.js --> para ejecutar
// tsc -watch test-code.ts --> levanta un servicio para ejecutar directamente sin compilar



var x='hola mundo';
console.log(x.trim());

//boolean
let isInProgress: boolean = false;

//number
let studentsNumber: number = 20;

//string
let name: string = "Luis";

console.log('isInProgress', isInProgress);
console.log('studentsNumber', studentsNumber);
console.log('name', name);

//usando backticks

let saludo: string = `Mi nombre es
 ${name}`;

console.log(saludo);