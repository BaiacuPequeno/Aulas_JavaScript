// objetos

let humano = {
    pNome: 'João',
    sNome: 'Carlos',
    id: 25,
    cPele: 'branco',
    cOlho: 'Azul',
    pasTemp: ['ler', 'jogar', 'musicas'],
    local: {
        pais: 'Brasil',
        est: 'Santa Catarina',
        cd: 'Sfs',
        bair: 'Enseada',
    },
};

const {
    pNome,
    sNome,
    local: { pais }
} = humano;
console.log(`O ${pNome} é de ${pais}`);

console.clear();
const array = [6, 7, 8, 9, 10];
let [rato, guaxinim, ...carapicuiba] = array;
console.log(rato);
console.log(carapicuiba);
console.log(guaxinim);

console.clear();
const obrigacoes = [
    {
        id: 1,
        t1: 'Estudar',
        feito: false,
    },

    {
        id: 2,
        t1: 'cozinhar',
        feito: true,
    },

    {
        id: 3,
        t1: 'ir pra escola',
        feito: false,
    },
];

console.log(obrigacoes);
console.log(obrigacoes[1].t1);

// transformando um array em json
console.log(JSON.stringify(obrigacoes));

// JSON
const obrigacoes_JSON =  '[{"id":1,"texto":"Levar o lixo para fora","isCompleted":true},{"id":2,"texto":"Encontrar com o chefe","isCompleted":true},{"id":3,"texto":"Consulta no dentista","isCompleted":false}]';

const obj = JSON.parse(obrigacoes_JSON);
console.clear();
console.log(obj);