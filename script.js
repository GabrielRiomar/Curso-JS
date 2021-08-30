// AULA 01
// let nome = 'Gabriel Riomar Lopes'
// console.log(nome)
// let idade = 28;
// console.log(idade);
// let altura = 1.76;
// console.log(altura);

// AULA 02
//const = variavel constante, não pode ser alterada
//let = variavel que pode ser alterada a qualquer momento
// const ValorIngressoAdulto = 20;
// console.log(ValorIngressoAdulto)

//Aula 03
// let nome = 'Rafael'; //string literal
// let idade = 25; //number literal
// let estaAprovado = true; //boolean
// let sobrenome = 'De Souza'; //Undefined
// let corSelecionado = null; //Redefinir um valor

//Aula 04
// let pessoa = {
//     nome: 'Rafael', idade: 25, estaAprovado: true, sobrenome: 'De Souza'
// };
// console.log(pessoa);

//Aula 05 - Arrays
// let familia = [26,45,50,17]
// console.log(familia.length)
// console.log

//Aula 06
//Verbo + Substantivo = Função
// let corSite = "Azul";
// function resetaCor(cor, tonalidade){
//     corSite = cor + " " +tonalidade;
// };
// console.log(corSite);
// resetaCor('verde', 'claro');
// console.log(corSite);

//Aula 07 - funções
//Realiza uma tarefa, não devolve nada
// function dizerNome(){
//     console.log('johnathan')
// };
// dizerNome();

// //Faz um calculo ou operação e retorna algo
// function MultiplicarPorDois(valor){
//     return valor*2
// };
// //console.log(MultiplicarPorDois(5));
// let resultado = MultiplicarPorDois(5)
// console.log(resultado);

//Aula 08
//Operadores Aritiméticos(matemáticos)
// Operadores Atribuição
// Operadores Comparação
// Operadores Lógicos
// Operadores Bitwise


//1- Operadores Aritiméticos(matemáticos)
let salario = 100;
// +, -, *, /, **
// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(5 ** 5);

//++ --
let idade = 18;

// console.log(idade++);
console.log(idade--);
console.log(idade);

// Operadores Atribuição
let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

//Operadores de igualdade
// Igualdade estrita
console.log(1 === 1);
console.log('1' === 1);
//Use a comparação com "===" que usando com "=="

//Operadores Ternario
//Tem um cliente, 100 pontos premium, comum
let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

//Operador Lógico 'e' (&&)
//Retorna TRUE se os dois operandos forem true
// console.log(true && true);
// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

// console.log(podeAplicar);

//Operador Lógico 'ou' (||)
//Retorna TREU se um dos operandos forem true
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('pode aplicar: ', podeAplicar);

// Operador NOT(!)
let cadidatoRecusado = !podeAplicar;
console.log('Candindato Recusado: ',cadidatoRecusado);

