let c = 5;
let x = 7;

if (c == x) {
    console.log('Os números são iguais')
} else {
    if (c > x) {
        console.log('c é maior q x');
    };

    if (c < x) {
        console.log('c é menor q x')
    };
};

console.clear();

x = 6;
c = 5;

if (c === x) {
    console.log('gay');
};

if (typeof(c) == typeof(x)) {
    if (c != x) {
        console.log('hétero KKKKKKKKKKKK');
    };
};

if (typeof(c) == typeof(x) && c != x) {
    console.log('hétero 2 KKKKKKKKK');
};
console.clear();

let cont = Math.PI < 4 ? console.log('certo') : console.log('errado');

