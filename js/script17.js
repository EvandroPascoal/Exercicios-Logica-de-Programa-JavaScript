function ex17 (){
alert ("Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.")
let nota1 = parseInt(prompt("Digite a primeira nota do aluno: "))
let nota2 = parseInt (prompt("Digite a segunda nota do aluno: "))
let media = (nota1+nota2)/2

if (media>5){
    alert (`Aluno aprovado! a sua nota foi ${media}`)
}
else {
    alert (`Aluno reprovado! a sua nota foi de ${media}`)
}

}