/*
Var
// Seção de Declarações das variáveis 
   numero, fatorial, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreva("Digite o número para calcular o fatorial: ")
    leia(numero)
    fatorial := 1
    para contador de 1 ate numero faca
         fatorial := fatorial * contador
    fimpara
    escreva("O fatorial de ", numero, " é: ", fatorial)

Fimalgoritmo
*/

function acaoBotao() {
    var numero, fatorial, contador
    numero = prompt("Digite o número para calcular o fatorial: ")
    fatorial = 1
    for (contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador   
    }
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
    }