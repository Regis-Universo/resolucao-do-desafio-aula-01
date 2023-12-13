// 1. Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

alert('Boas vindas ao nosso site!');

// 2. Declare uma variável chamada nome e atribua a ela o valor "Lua".

let nome = 'Lua';

alert('Nome: ' + nome);

// 3. Crie uma variável chamada dade e atribua a ela o valor 25.

let idade = 25;

alert('Idade: ' + idade);

// 4. Defina uma variável numeroDeVendas e atribua a ela o valor 50.

let numeroDeVendas = 50;

alert('Número de vendas: ' + numeroDeVendas);

// 5. Defina uma variável saldoDisponivel e atribua a ela o valor 1000. 

let saldoDisponivel = 1000;

alert('Saldo Disponível: ' + saldoDisponivel);

// 6. Exiba um alerta com o texto "Erro! Preencha todos os campos."

alert('Erro! Preencha todos os campos.');

// 7. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos." Agora exiba um alerta com o valor da variável mensagemDeErro.

let mensagemDeErro = 'Erro! Preencha todos os campos 2.';

alert(mensagemDeErro);

// 8. Use um prompt para perguntar o nome do usuário e armazená-lo na variável nomePrompt.

nome = prompt('Por favor, digite o seu nome: ');

alert('Meu nome é: ' + nome);

// 9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade2.
idade = prompt('Por favor, digite a sua idade: ');

alert('Minha idade: ' + idade);

// 10. Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

if (idade >= 18) {
    alert(nome + ', Você PODE tirar a habilitação');
 } else {
    alert(nome + ', Você NÃO PODE tirar a habilitação');
 }