
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
- Swagger


## Links
- video do projeto: https://www.youtube.com/watch?v=i_yyWqogx9Q
- Documentação: http://localhost:${PORT}/api-documentation (acessar pela porta da API depois que o projeto estiver rodando)


## Como usar

Primeiramente, se quiser usar o Docker, você precisa ter o Docker e o Docker Compose instalados. Em seguida, vá para o diretório raiz do projeto e execute o comando:

```bash
docker-compose up --build -d
```
Verifique se os containers estão rodando; às vezes pode haver conflito de porta caso alguma já esteja em uso. Após isso, acesse o projeto pelo navegador em localhost:{sua porta}.

Caso queira rodar sem o Docker, você precisará criar dois arquivos .env: um na pasta client e outro na pasta api. Copie o conteúdo do .env da raiz para esses arquivos e execute o projeto normalmente com o comando:
```bash
yarn dev
```

## 📋 Lista

Essa página serve para visualizar os usuários cadastrados. Nela, você pode selecionar um usuário para ver todas as suas informações completas ou editá-las.
<div align="center">
  <img src="https://private-user-images.githubusercontent.com/95176596/425863334-e16a831c-be16-45ab-9d11-1b990a3bc873.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI3NjE2OTYsIm5iZiI6MTc0Mjc2MTM5NiwicGF0aCI6Ii85NTE3NjU5Ni80MjU4NjMzMzQtZTE2YTgzMWMtYmUxNi00NWFiLTlkMTEtMWI5OTBhM2JjODczLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIzVDIwMjMxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU2ZTM0MTA0YTYzMzY4YmQxZGJlNmQyOTM0OWY4NjRkOWRmYTNhZmRiN2E4MWU2YzNmYTc3MTMyZTNkYzU0MGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.yE02piFZp-2apKdKDyZLZnpHG9XXk95yFq2r2SuivCY" alt="Lista Page Desktop" />
  <img src="https://private-user-images.githubusercontent.com/95176596/425863366-d0d02a67-ebaf-48b8-baeb-d0d91ecad9da.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI3NjE2OTYsIm5iZiI6MTc0Mjc2MTM5NiwicGF0aCI6Ii85NTE3NjU5Ni80MjU4NjMzNjYtZDBkMDJhNjctZWJhZi00OGI4LWJhZWItZDBkOTFlY2FkOWRhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIzVDIwMjMxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFmYTkyOGRmN2M2Yjc5MzdkYTc4ODA1NjMyNDgwMzBlMGVlY2JkODZhMjgyNmYyMzNkYzVhZTJjNzVmOTNhZTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.2bGgKN6qKqAffhowQ04n2c4ADs746mbGk-_yanQ-ZoI" alt="Lista Page Mobile" />
</div>

## 💾 Salvar Usuário

Esta é a página onde você pode criar ou editar um usuário. As duas funções dividem a mesma página, pois a construção de seus valores e seus endpoints são praticamente idênticos. Para evitar repetição de código, centralizei tudo em um PUT que, caso o usuário exista, edita suas informações; caso não exista, cria um novo.
<div align="center">
  <img src="https://private-user-images.githubusercontent.com/95176596/425863410-47ba0c2b-87fc-44ce-b40c-09311ed58fb7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI3NjE2OTYsIm5iZiI6MTc0Mjc2MTM5NiwicGF0aCI6Ii85NTE3NjU5Ni80MjU4NjM0MTAtNDdiYTBjMmItODdmYy00NGNlLWI0MGMtMDkzMTFlZDU4ZmI3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIzVDIwMjMxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIzMjc0OTNlYWJjYWI4MTgyMzU1ZmU4NzZlYTY5Y2Q4MTEyOWZkYjg2NjI1M2VkZGE1NzUzNjRjMzhkZDE0YzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.BVgO9eWsw1d8_mPb-E3wvMUKuBBzEmxGwQtG-f6vcW8" alt="Save User Page Desktop" />
  <img src="https://private-user-images.githubusercontent.com/95176596/425863427-333a2748-ea51-4472-a8ec-13946da32ca6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI3NjE2OTYsIm5iZiI6MTc0Mjc2MTM5NiwicGF0aCI6Ii85NTE3NjU5Ni80MjU4NjM0MjctMzMzYTI3NDgtZWE1MS00NDcyLWE4ZWMtMTM5NDZkYTMyY2E2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIzVDIwMjMxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE2Njk3YjQ3MTEyYmYxNGE1NjdhZTBmZDYzZjYxYzE1MDE5OTdkN2QzNTljNTAyODQ1NGI3NzNlNDZkMTZiMGEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.e48eAFDF2_aqva3tMmjUcNYbU9fhOM7i_nfCXSHNErU" alt="Save User Page Mobile" />
    <img src="https://private-user-images.githubusercontent.com/95176596/425863617-4b1967a8-4af2-41bc-b9c6-f74a6e328d18.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI3NjE2OTYsIm5iZiI6MTc0Mjc2MTM5NiwicGF0aCI6Ii85NTE3NjU5Ni80MjU4NjM2MTctNGIxOTY3YTgtNGFmMi00MWJjLWI5YzYtZjc0YTZlMzI4ZDE4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIzVDIwMjMxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc1Mzg0OTRmNDA2YjZiYWY1Y2ZkNjY3NmIwN2E1NmZhNDUxMGY1ODJjNjFiNTE0OTA0YTZiOWE5MGJhZDdiODYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.RzJoznBugFxjTXQFfPaoygQFoELO7IERip6yzJnXxz8" alt="Save User (Edit) Page Desktop" />
    <img src="https://private-user-images.githubusercontent.com/95176596/425863632-18e93575-074c-48b1-9ea3-2f95155f542d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI3NjE2OTYsIm5iZiI6MTc0Mjc2MTM5NiwicGF0aCI6Ii85NTE3NjU5Ni80MjU4NjM2MzItMThlOTM1NzUtMDc0Yy00OGIxLTllYTMtMmY5NTE1NWY1NDJkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIzVDIwMjMxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQwY2M4MTdmNjMzNmZiYjMwNTc0M2ZkZjQyMGNjYTgxZGEzMjE2ZThjNmQ2M2I3ZjFhY2FiNjIzYjIxZWFiNDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.jG2H4oFKs8PXXoxiNsT34zde3EINQTMApQwaGhuwu7k" alt="Save User (Edit) Page Mobile" />
</div>

## 👤 Página do Usuário

Esta página serve para exibir as informações completas do usuário, incluindo título, descrição, e-mail e telefone.
<div align="center">
  <img src="https://private-user-images.githubusercontent.com/95176596/425863587-a5e7f4d6-6c64-4768-ba89-d7aa05ac5dd8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI3NjQ5MjgsIm5iZiI6MTc0Mjc2NDYyOCwicGF0aCI6Ii85NTE3NjU5Ni80MjU4NjM1ODctYTVlN2Y0ZDYtNmM2NC00NzY4LWJhODktZDdhYTA1YWM1ZGQ4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIzVDIxMTcwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhYjE2MjJlYTI4Yzc2ZWFiOWJhODRmNWExNTBiNGE3NjMwMzEzNDdlNDBlZDM4OWQ3MWRlMDczZTU2ZTRmYzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Us7ido4nUaJ-EHP6GlVZ6-7AMLIRShh1eTFzrPE8sPM" alt="User Page Desktop" />
  <img src="https://private-user-images.githubusercontent.com/95176596/425863604-c36d3345-6ad0-48f9-bc19-993320f63c5e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI3NjQ5MjgsIm5iZiI6MTc0Mjc2NDYyOCwicGF0aCI6Ii85NTE3NjU5Ni80MjU4NjM2MDQtYzM2ZDMzNDUtNmFkMC00OGY5LWJjMTktOTkzMzIwZjYzYzVlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIzVDIxMTcwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU3ZGM3NGExNTRmNTUzNzdlMGFhYmFiYzA5M2Q0NGM2ZDJjMmUwMmQ4ZWUwMDA2MDVjMmNjNjRkNzg0OGE4N2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.wMU1tzuA_tx0PEH71QjmLustQDAyLCk1QzTviQ3WkZ4" alt="User Page Mobile" />
</div> 


## 👤 Documentação

Esta página serve para aqueles que querem tirar dúvidas sobre os endpoints.
<div align="center">
  <img src="https://private-user-images.githubusercontent.com/95176596/425866961-0630e4d2-46e2-4a76-8975-acba4f0c5dc3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI3NjQ5MjgsIm5iZiI6MTc0Mjc2NDYyOCwicGF0aCI6Ii85NTE3NjU5Ni80MjU4NjY5NjEtMDYzMGU0ZDItNDZlMi00YTc2LTg5NzUtYWNiYTRmMGM1ZGMzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIzVDIxMTcwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVmYmY3Yjc2NDYxOGZkODc4NjZlOTk1MjIwZWQ4YWQ1ZDAwMjczZTc5MTJjNmViMGU2ZDEyNmY5M2QwNDExNDgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.P48iLA5wbR0X4Vij6qbBxbkNnyFuexqJ-5G1AtHJvI4" alt="Docs Page Desktop" />
  <img src="https://private-user-images.githubusercontent.com/95176596/425867018-c36c1124-180a-4bed-8826-2251886c5953.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI3NjQ5MjgsIm5iZiI6MTc0Mjc2NDYyOCwicGF0aCI6Ii85NTE3NjU5Ni80MjU4NjcwMTgtYzM2YzExMjQtMTgwYS00YmVkLTg4MjYtMjI1MTg4NmM1OTUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIzVDIxMTcwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE5ODA2MmU3MWU0Y2M1NjMxNWJhNjFlOTY3ZjgyNDU4YWEzODRhN2I3OTU5YzIzMWNmNDE4YjE3MmQxNjM5MzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Y2pPi0i1t3wBGPuzQ47TzfxhLgRXCGqwJw7lsQEx6Yk" alt="Docs Page Mobile" />
</div> 

