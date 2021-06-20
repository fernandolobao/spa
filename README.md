# SPA para simulação de features
Para instalar as dependências: `npm install`

Para rodar os testes: `npm run test`

Para rodar o watch de testes: `npm run watch:test`

Para gerar json com design tokens: `npm run watch:css`

> O projeto foi criado usando [Create-React-App](https://github.com/facebook/create-react-app) como bootstrap.

> O UI Kit usado foi o [React-Bootstrap](https://react-bootstrap.github.io/).

> [node-sass](https://github.com/sass/node-sass) e [sass-export](https://github.com/plentycode/sass-export) são responsáveis por gerar o css e os design tokens para termos as variáveis dentro do [styled-components](https://styled-components.com/).

> Testes usam Jest e o Husky faz a orquestação de quais testes devem rodar e roda todos antes de qualquer push.

___
## Extrato
Onde é mostrado um resumo de todas as transações divididas por entrada e saída (tanto retiradas quanto pagamentos).

___
## Depósito
É esperado que o usuário use o celular para ler os QRCodes para confirmá-los. Também é mostrada uma lista com as últimas entradas da conta.

___
## Resgate
É esperado que o usuário use o celular para ler os QRCodes para confirmá-los. Também é mostrada uma lista com as últimas saídas da conta.

___
## Pagamentos
É esperado que o usuário use o celular para ler os QRCodes para confirmá-los. Também é mostrada uma lista com os últimos pagamentos.

## Utils
### Pagar com a Câmera
Realmente funciona e lê códigos de barra corretamente.

### Testes
Foram feitos testes para as funcionalidades básicas e componentes de ícone e histórico.