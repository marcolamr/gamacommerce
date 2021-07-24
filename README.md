# Gama.Commerce
## _Desafio 2 do Hiring Coders #2 Gama Academy e Vtex_

Projeto prático de simulação de um "e-commerce" com os dados sendo salvos e manipulados via localStorage. Como desafio adicional, criei a api no [Mockaroo](https://my.api.mockaroo.com/products.json?key=cbf56870) e consumi utilizando o pacote [Axios](https://www.npmjs.com/package/axios).

- Wireframe no Adobe XD
- React, Axios e Styled Components
- ✨ Hooks (useState e useEffect) ✨

## Features

- Cards carregam dados da API (axios/mockaroo)
- Captura de lead (newsletter) na home com dados salvos em localStorage
- Duas rotas de navegação (Home e Checkout)
- Cadastro de dados pessoais e de endereço na página Checkout com dados salvos em localStorage
- Validação de produto adicionado na rota de Checkout, redirecionando para a Home caso não existam dados. Após a finalização do "pedido", uma mensagem de sucesso é exibida utilizando conceito de renderização condicional do React

Apesar de ser um projeto simples, mostrou-se muito desafiador e aprendi bastante durante o desenvolvimento. Pelo prazo, não consegui elaborar as mensagens de feedback, nem o ajuste de css para os breakpoints de tablet e mobile. Mas quero evoluir para uma segunda versão em breve e melhorar o projeto como um todo.

# Create React App / Template Typescript

O projeto foi criado com [Create React App](https://github.com/facebook/create-react-app) utilizando a flag `--template=typescript`.

## Scripts

No diretório do projeto, você pode executar:

### `yarn start`

Executa o aplicativo no modo de desenvolvimento. \
Abra [http: // localhost: 3000] (http: // localhost: 3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições. \
Você também verá quaisquer erros de lint no console.

### `yarn build`

Compila o aplicativo para produção na pasta `build`. \
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes. \
Seu aplicativo está pronto para deploy!

Consulte a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.
