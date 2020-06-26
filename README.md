# Aprendendo NodeJS

Projeto desenvolvido durante o BootCamp GoStack 11.0.

<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

## Começando

Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Consulte implantação para obter notas sobre como implantar o projeto em um sistema ativo.

### Pré-requisitos

NodeJS;
Yarn;
Editor de texto de sua preferência.

### Instalando

Clone o repositório no seu sistema com o comando:

~~~bash
git clone <link_do_repositório> <nome_da_pasta>
~~~

Entre na pasta do projeto e instale as dependências com o comando:

~~~bash
yarn
~~~

Se tudo correr bem, o projeto já está em sua máquina, pronto para ser executado.

O comando para execução do projeto é:

~~~bash
yarn dev:server
~~~

### Rodando os testes

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Para esse desafio temos os seguintes testes:

**should be able to create a new transaction:** Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criada.

**should be able to list the transactions:** Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

**should not be able to create outcome transaction without a valid balance:** Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo outcome extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: { error: string }

### Contribuindo

Clone o repositório, faça suas modificações e faça um Pull Request.

### Autores

* Marcos Henrique Mainardi Eckart

### Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo LICENSE.md para obter detalhes.

### Agradecimentos

* RocketSeat
