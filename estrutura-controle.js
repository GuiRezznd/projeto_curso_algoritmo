/*escreva("Digite o nome do aluno: ")
leia(nome)
escreva("Digite a nota1 do aluno: ")
leia (nota1)
escreva("Digite a nota2 do aluno: ")
leia (nota2)
media := (nota1 + nota2)/ 2

se media >= 5 entao
 escreval("Aprovado! ", nome)
senao
 escreval("Reprovado! ", nome)
fimse*/

var nome, nota1, nota2;
nome = prompt("Digite o nome do aluno: ")
nota1 = prompt("Digite a nota1 do aluno: ")
nota2 = prompt("Digite a nota2 do aluno: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 50){
    alert("Aprovado! " + nome)
}
else
    alert("Aprovado! " + nome)