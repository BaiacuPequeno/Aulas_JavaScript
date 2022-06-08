// array
// dentro dos arrays pode armazenar qualquer tipo de variavel (literal, numerico, booleano, entre outros)

//forma 1 de declarar arrays
const n1 = new Array(30, -1, 5, 50, -1913);

//forma 2 de declarar arrays
const n2 = [-5, 27, 512, -4550];

console.log(n1);
console.log(n2);

// como puxar elementos de um array
console.log(`Elemento numero 1 da array 1 é ${n1[0]}`);

console.log(`Elemento numero 2 da array 2 é ${n2[1]}`);


//array bidimensional
const frutas = [ // Sempre colocar "," depois da lista de itens
    ['Maçã', 'Pera', 'Uva'],
    ['Mamão', 'Abacaxi', 'Goiaba'],
    ['Ford', 'Chevrolet', 'Fusca'],
];

// como puxar elementos de um array bidimensional
console.log(`Pegando a primeira linha do array: ${frutas[0]}`);

console.log(`Pegando a primeira coluna do array: ${frutas[0][1]}`); // a ordem sempre será (linha, item)

//como alterar o valor de um array
let carro = ['fusca', 'ferrari', 'uno'];
console.log(`Lista que será alterada ${carro}`)

console.log(`Primeiro elemento antes da alteração ${carro[0]}`);

carro[0] = frutas[1][1]; // mudando o item do array para outro item de outro array
console.log(`Primeiro elemento depois da alteração ${carro[0]}`);

carro[0] = 'banana fds kkkkk'; // mudando o iten do array para um texto
console.log(`Primeiro elemento depois de uma terceira alteração`);

// métodos

let nums = [1, 2, 3, 4];
console.log(`lista: ${nums}\nTipo da lista: ${typeof nums}`);

let nums2 = nums.toString(); // o metodo toString() transforma os itens da lista em strings
console.log(`lista: ${nums2}\nTipo da lista: ${typeof nums2}`);

let nums3 = nums.join('-=-'); // o metodo join tambem transforma o array em string e separa os itens dele com o que você colocar dentro dos parenteses

console.log(nums3);
console.log(nums3.length); // o metodo length mostra o tamanho do array (contando todos os seus caracteres e espaços)

// como remover ou adicionar elementos ao array

// removendo
const lista = ['torta', 'bolo', 'manga'];
let lista2 = lista.pop(); // se nao especificar o item, ele deletará o ultimo da lista

console.log(lista);

// adicionando

const grutas = ['sim', 'não'];
let x = grutas.push('Grutas Mulu'); // o metodo push adiciona um novo item no array
console.log(grutas);
console.log(x);

let y = grutas.shift(); // o metodo shift puxa o primeiro elemento do array
console.log(y);

const palavras = ['oi', 'sim', 'não', 'talvez'];
delete palavras[2]; // remove itens especificos da array

console.log(palavras);