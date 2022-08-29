
# Backend 200systems

## - Descrição

API de registro de compras feita em Node, Express, Typescript, Mysql. 

## - Processo de desenvolvimento
Para este desafio usei o Typescript e conforme proposto usei o banco de dados Mysql. Tive um pouco de trabalho para pensar na modelagem das tabelas do banco, bem como seus relacionamentos, mas tudo saiu como pensado. Consegui salvar os dados no Mysql, para isso usei o Insomnia como ferramenta, com o qual já tinha experiência de outros projetos. Também me sinto à vontade pra trabalhar com Express, Node e o próprio Typescript, pois já os conhecia de projetos anteriores.





## - Instalação
Após clonar este repositório rode o comando:

```bash
$ npm install
```
## - Banco de dados


Essa aplicação persiste seus dados no banco Mysql, para isto usei o DBeaver para controle e gerenciamento.



## - Rodando a API

```bash
# development
$ tsnd index.ts


# build
$ tsc --build



```


## - Documentação

| URL Base  | Endereços                     |
| --------  | ----------------------------- | 
| Local     |  http://localhost:8000 -> ou :PORT(.env) 


### Rotas
| Methods | Endpoint                      | Responsability                        
| --------| ----------------------------- | --------------------------------------  |
| POST    |  /users                       | Rota para criar um usuário              |
| POST    |  /buyses                      | Rota para criar uma compra              |
| GET     |  /buyses                      | Rota para acessar todas as compras      |
| GET     |  /users                       | Rota para acessar todos usuários        |
| GET     |  /users/id                    | Rota para acessar um usuario especifico | 

#

## - Requisições

## POST  - /users
Campos obrigatórios: 'id', 'personame', 'accumulatedpoints'
<br>Exemplo de requisição:

```json
{
    "id": 1, 
    "personame":"Vera Lucia",
    "accumulatedpoints":13,
    
}
```




## POST - /buyses

Campos obrigatórios: 'id', 'personame', 'indicationcode','datebuy'



```json
{	
    "id": 3,
    "productname": "violao nylon",
    "personame": "Claudia",
    "indicationcode": "9z3r5g1i2m8o",
    "datebuy": "2022-08-28T16:41:56.000Z"
}


```

## GET - /buyses


```json
[
  {
    "id": 1,
    "productname": "notebook",
    "personame": "Karina",
    "indicationcode": "9a6v5t3u",
    "datebuy": "2022-08-28T15:09:56.000Z"
  },
  {
    "id": 2,
    "productname": "mesa redonda",
    "personame": "Pedro",
    "indicationcode": "6c8i4r36w4sd5d",
    "datebuy": "2022-08-28T16:28:25.000Z"
  },
  {
    "id": 3,
    "productname": "violao nylon",
    "personame": "Claudia",
    "indicationcode": "9z3r5g1i2m8o",
    "datebuy": "2022-08-28T23:24:15.000Z"
  }
]

```

## GET  - /users
Retorna usuario e sua pontuação em ordem decrescente conforme solicitado no desafio.
```json
[
  {
    "id": 3,
    "personame": "Saldanha",
    "accumulatedpoints": 85
  },
  {
    "id": 2,
    "personame": "Zozimo",
    "accumulatedpoints": 78
  },
  {
    "id": 1,
    "personame": "Pietra",
    "accumulatedpoints": 51
  },
  {
    "id": 4,
    "personame": "Veralucia",
    "accumulatedpoints": 45
  }
]
```


## GET  - /users/id

```json

 {
    "id": 1,
    "personame": "Pietra",
    "accumulatedpoints": 51
  },

```

