<h1 align="center">
    <img  src="https://github.com/jainaldo/be-the-hero/blob/master/frontend/src/assets/logo.svg">
</h1>

<p align="center"> 🚀 Be-The-Hero: Aplicação desenvolvida na 11° semana da Ominstack feito pela Rocketseat.</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jainaldo/be-the-hero">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jainaldo/be-the-hero">
  
  <a href="https://github.com/jainaldo/be-the-hero/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jainaldo/be-the-hero">
  </a>

  <a href="https://github.com/jainaldo/be-the-hero/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/jainaldo/be-the-hero">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>
<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Projeto

O BeTheHero é um projeto para ajudar as ONGs a arrecadar fundos para suas causas, onde você pode ser o herói ajudando nas causas e salvar o mundo.

## :gear: Instalação

### Backend - Api

 - Clonar o repositório para sua máquina: `git clone [link do repositório]`;
 - Dentro da pasta `backend` instalar as dependências:
 ```bash
 cd backend
 yarn install
  ```
 - Para iniciar o **Servidor** utilize o comando:
```bash
yarn dev
```

### Web

- Acessar a pasta `web` e instalar as dependências:
```bash
cd web
yarn install
```
- Para iniciar a **Aplicação web** do React utilize o comando:
```bash
yarn start
```
- A aplicação web estará disponível em `http://localhost:3000`.


### Mobile

- Acessar a pasta `mobile`;
- Adicionar o IP do seu servidor (ou computador) no arquivo `src/services/api.js`;
- Instalar as dependências:
```bash
# NÃO é preciso executar a linha de baixo caso já tenha o Expo (CLI) instalado
yarn global add install expo-cli
cd mobile
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:19002`. Conecte seu emulador, ou teste o aplicativo por `LAN`: baixe o aplicativo `Expo` da Play Store ou App Store e em seguida escaneie o código QR.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.