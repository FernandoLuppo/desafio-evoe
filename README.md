
<h1 align="center">Projeto Evoé</h1>
<br />


Olá, este é um projeto fullstack desenvolvido como um desafio da Evoé. No projeto, é possível criar e editar usuários, além de visualizar suas informações.

## 💻 As tecnologias usadas no projeto foram:

- TypeScript
- React
- Node
- Express
- Prisma
- MySQL
- Docker
- GitHub Actions


## Links
video do projeto


## Como usar

Primeiramente, você precisa ter o Docker e o Docker Compose instalados. Em seguida, vá para o diretório raiz do projeto e execute o comando:

```bash
docker-compose up --build -d
```
Verifique se os containers estão rodando; às vezes pode haver conflito de porta caso alguma já esteja em uso. Após isso, acesse o projeto pelo navegador em localhost:{sua porta}.

## 📋 Lista

Essa página serve para visualizar os usuários cadastrados. Nela, você pode selecionar um usuário para ver todas as suas informações completas ou editá-las.
<div align="center"> <img src="" alt="Imagem 1 placeholder" /> <img src="" alt="Imagem 2 placeholder" /> </div>

## 💾 Save User

Esta é a página onde você pode criar ou editar um usuário. As duas funções dividem a mesma página, pois a construção de seus valores e seus endpoints são praticamente idênticos. Para evitar repetição de código, centralizei tudo em um PUT que, caso o usuário exista, edita suas informações; caso não exista, cria um novo.
<div align="center"> <img src="" alt="Imagem 1 placeholder" /> <img src="" alt="Imagem 2 placeholder" /> </div>

## 👤 Página do Usuário

Esta página serve para exibir as informações completas do usuário, incluindo título, descrição, e-mail e telefone.
<div align="center"> <img src="" alt="Imagem 1 placeholder" /> <img src="" alt="Imagem 2 placeholder" /> </div> 
