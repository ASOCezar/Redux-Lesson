# Carrinho de Compras React + Redux

## Ferramentas

- React
- Redux Toolkit
- json-server

## Sobre o desenvolvimento

O desenvolvimento da aplicação foi completamente focado em seguir corretamente o layout pixel a pixel, facilitar a usabilidade e trazer uma experiência fluida e dinâmica ao usuário.

Optei pelo uso do Redux Toolkit ao invés da Context API do React devido à pontos como:
- Melhor performance do Redux com situações de alterações diversas nos estados ao longo da aplicação;
- Melhor performance (até mesmo com ferramentas internas) para operações assíncronas;

## Como clonar

Para clonar esse repositório digite em seu terminal

```
git clone https://github.com/ASOCezar/Redux-Lesson.git
```

## Como rodar

Após clonar a aplicação, dentro da pasta do projeto digite no terminal

```
yarn
```
Após a instalação das dependências é necessário rodar o servidor com os dados da API feita com json-server em um terminal separado. Para isso, ainda dentro da pasta do projeto digite em seu terminal:
```
yarn run server
```
Com o server em funcionamento, em outro terminal, ainda dentro da pasta do projeto é só digitar em seu terminal:
```
yarn run dev
```

