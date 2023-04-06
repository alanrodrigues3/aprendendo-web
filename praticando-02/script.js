//  var nome = prompt("digite seu nome")

// var resultado = alert("Ola, " + nome + ", você agora e membro da gang, e um desenvolvedor de sucesso") // Concatenação (Adicionar o sinal de + para juntar a variavel com o texto)


var n1 = Number.parseInt(prompt("Digite um numero")) //conversão para numero inteiro (Number.parseInt ira ultilizar apenas numero Inteiro )
var n2 = Number.parseFloat(window.prompt("digite outro numero")) //conversão para numero real (Number.parseFloat ira ultilizar apenas numeros reais)
 //var n3 = Number(prompt("Digite outro number")) //conversão para numero (Number ira fazer com que o js escolha automaticamente)
 //(number + number) para adição
 //(string + string) para concatenação

// //para converter de numero para string (string(n), n.toString)
// //(n) oque estiver para converter


var s = n1 + n2

alert(`a soma entre ${n1} e ${n2} e igual a ${s} `) // PlaceHolder
//alert("A soma entre " + n1 +" e " + n2 + " e igual a " + s) // Maneira antiga


var nome = "Alan"
var idade = 19
var study = "JavaScript"


console.log(`Olá, ${nome.toUpperCase()} voce tem ${idade} anos, esta estudando ${study.toLowerCase()}, e seu nome tem ${nome.length} letras`); // Forma PlaceHolder
// console.log("O aluno " + nome + " que tem " + idade +" anos, esta estudando " + study) 

// nome.toUpperCase() as letras irão ficar em maiúsculas
// study.toLowerCase() as letras irão ficar em minusculas
// nome.length // ira informar quantos caracteres tem a string


var n1 = 1545.5
console.log(n1.toFixed(2).replace('.' , ','));
//.toFixed("quantidade de casas")adiciona casas decimais
//.toFixed("quantidade de casas").replace('.' , ',') troca o ponto pela virgula

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})





