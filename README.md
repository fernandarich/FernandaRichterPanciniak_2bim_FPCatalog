O FP Catalog é um projeto que eu desenvolvi com o objetivo de criar um catálogo de jogos eletrônicos. A ideia principal foi fazer um site onde o usuário possa visualizar jogos, pesquisar títulos específicos, filtrar por gênero e acessar informações mais detalhadas sobre cada jogo.

Quando o usuário entra no site, ele consegue visualizar vários jogos organizados em cards. Em cada card aparecem informações básicas, como a imagem do jogo, o nome, o gênero e a nota de avaliação. Isso facilita a navegação e deixa a interface mais organizada.

O sistema possui uma barra de pesquisa que permite procurar jogos pelo nome. Conforme o usuário digita, os jogos que não correspondem à pesquisa deixam de ser exibidos, tornando mais fácil encontrar um título específico. Também existe um sistema de filtros por gênero, que permite visualizar apenas jogos de uma determinada categoria, como Ação, RPG, Terror, Aventura, Sandbox ou Battle Royale.

Outra funcionalidade importante do projeto é a exibição dos detalhes dos jogos. Quando o usuário clica em um card, uma janela é aberta mostrando informações mais completas sobre aquele jogo, como descrição, plataforma, ano de lançamento e nota. Dessa forma, não é necessário sair da página principal para obter mais informações.

Uma funcionalidade também importante, foi o 'Me recomende um jogo'. Ele busca um jogo aleatorio no sistema do banco de dados e sugere para o cliente.

Também tem a função de favoritos, onde você clica no coração do lado inferior direito do card do jogo e ele é adicionado ao seus favoritos. No menu lateral tem uma parte onde você pode acessar esses favoritos sempre que quiser

Para criar o projeto, utilizei HTML para estruturar as páginas, CSS para estilizar a interface e JavaScript para adicionar as funcionalidades e interações do site. Também utilizei PostgreSQL para armazenar as informações dos jogos e dos gêneros em um banco de dados.

Tecnologias utilizadas:

HTML: utilizado para criar a estrutura das páginas, como títulos, menus, botões, formulários e áreas de exibição dos jogos.
CSS: utilizado para estilizar o site, definindo cores, fontes, espaçamentos, tamanhos e a aparência geral da interface.
JavaScript: utilizado para implementar as funcionalidades do sistema, como pesquisa de jogos, filtros por gênero, abertura e fechamento de modais, exibição de descrições e cadastro de novos jogos.
Node.js: utilizado para executar o servidor da aplicação e permitir a comunicação entre o front-end e o banco de dados.
Express.js: utilizado para criar as rotas da aplicação e gerenciar as requisições entre o site e o banco de dados.
PostgreSQL: utilizado como banco de dados para armazenar as informações dos jogos e dos gêneros cadastrados.

Como rodar:

1. Instalar as dependências necessárias do projeto, como Express, PG e CORS.

2. Iniciar o servidor utilizando o comando:

node server.js

3. Abrir o arquivo HTML principal utilizando a extensão Live Server do Visual Studio Code.

4. Utilizar o sistema normalmente através do navegador.

Aproveite o Site!
