console.log("\n== 1) Tipos primitivos ==");

const texto = "Olá";
const numero = 10;
const booleano = true;
const indefinido = undefined;
const nulo = null;
const big = 9007199254740991n;
const simbolo = Symbol("id");

console.log(typeof texto); // string
console.log(typeof numero); // number
console.log(typeof booleano); // boolean
console.log(typeof indefinido); // undefined
console.log(typeof nulo); // object (bug histórico do JS)
console.log(typeof big); // bigint
console.log(typeof simbolo); // symbol


console.log("\n== 2) BigInt e Symbol ==");

const numeroGrande = 12345678901234567890n;

console.log(numeroGrande); // 12345678901234567890n
console.log(typeof numeroGrande); // bigint

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false (symbols são únicos)
console.log(typeof id1); // symbol


console.log("\n== 3) Operadores ==");

// matemáticos
console.log(10 + 5); // 15
console.log(10 * 2); // 20

// lógicos
console.log(true && false); // false
console.log(true || false); // true

// comparação
console.log(5 > 3); // true
console.log(5 == "5"); // true (conversão implícita)
console.log(5 === "5"); // false (tipos diferentes)


console.log("\n== 4) Concatenação e conversão dinâmica ==");

console.log(2 + "2"); // "22"
console.log(2 + (+"2")); // 4

const nome = "Nicolas";
console.log("Olá " + nome); // "Olá Nicolas"


console.log("\n== 5) Escopo léxico e blocos {} ==");

{
    const dentro = "estou no bloco";
    console.log(dentro); // estou no bloco
}

// console.log(dentro); // erro se tentar acessar fora

const fora = "variável externa";

{
    console.log(fora); // variável externa
}

if (true) {
    var vazou = "var escapa do bloco";
}

console.log(vazou); // var escapa do bloco


console.log("\n== 6) Shadowing com const ==");

const bloco = "valor original";

if (true) {

    console.log(bloco); // valor original

    {
        const bloco = "outro valor";
        console.log(bloco); // outro valor
    }

    console.log(bloco); // valor original
}

console.log(bloco); // valor original


console.log("\n== 7) Imutabilidade ==");

let frase = "javascript";

frase.toUpperCase();

console.log(frase); // javascript (não mudou)

frase = frase.toUpperCase();

console.log(frase); // JAVASCRIPT


console.log("\n== 8) Assincronismo com setTimeout ==");

console.log("Explicação: setTimeout entra na fila e executa depois do código atual.");

console.log("A");

setTimeout(() => {
    console.log("B"); // executa depois
}, 0);

console.log("C"); // executa antes do B


console.log("\n== Segundo exemplo ==");

setTimeout(() => {
    console.log("Timeout 0ms"); // executa primeiro
}, 0);

setTimeout(() => {
    console.log("Timeout 100ms"); // executa depois
}, 100);

console.log("Fim do código síncrono"); // executa antes dos timeouts