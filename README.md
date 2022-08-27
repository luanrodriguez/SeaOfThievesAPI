# SeaOfThievesAPI
OBS: AS IMAGENS UTILIZADAS NA ROTA /PEIXES É DE PROPRIEDADE DA SEA OF THIEVES BRASIL, DISPONÍVEIS NO LINK: https://www.sotbrasil.com/peixes

Esse projeto é uma API para acessar informações do jogo Sea of Thieves (não oficial). Esse projeto foi criado para estudo e não tem uma utilidade real, muitas rotas foram criadas como uma forma de estudo, para colocar em prática conhecimentos obtidos como: hash de senhas, json web token, orms, relações em bancos relacionais, separação de um ambiente de dev e de prod, deploy da aplicação, TDD, documentação com swagger, entre outros.

Foi utilizada a linguagem de programação Javascript, o Express para controle das rotas, o Sequelize como orm e Postgres como banco de dados relacional.

Me inspirei em criar esse projeto ao assistir o curso de Imersão em desenvolvimento de APIS do Erick Wendel, disponível no link: https://erickwendel.teachable.com/p/node-js-para-iniciantes-nodebr

A API possui rotas para pegar, criar, remover e atualizar informações sobre os peixes, frutas e tipos de navios presentes no jogo. No entanto, somente as requisições do tipo GET são possíveis de se fazer livremente. As rotas sensíveis precisam de um token temporário pra serem usadas. Para obter esse token, a API conta com uma rota de cadastro e uma de login, que geram um token.

Essa API está disponível em produção, basta utilizar a url: https://sea-of-thieves-api.herokuapp.com/api-docs
Em produção ela não possui a rota login, para evitar que inserções ao banco possam ser feitas.

Como rodar a api localmente:

- Com o Node instalado, clone o repositório e no diretório raíz digite o comando "npm install" para instalar as dependências;
- Copie e cole o arquivo .env.example e o renomeio para .env, digite "DEV" no campo ENVIRONMENT, escolha uma porta, digite um secret para o jwt e um salt para o hash das senhas, depois insira as informações do banco de dados que deseja usar. Caso não esteja usando Postgres, basta instalar drivers de outro banco relacional compatível com o Sequelize.
- Agora basta digitar "npm run dev" e a api estará rodando localmente!
