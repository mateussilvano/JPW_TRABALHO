## Sobre e Autor
//Mateus Brognoli Silvano
## INSTALAÇÃO
//npm install
## ENDPOINTS
 ### Cursos

 ### Modelo de Dado
{
codigo: Number,
nome: String,
grau: Number,
serieInicial: Number,
serieFinal: Number,
admin: Boolean,
}
 ### GET - /api/cursos
    #### Requisição
    #### Exemplo de resposta
    #### Erros
    #### Filtros
 ### POST - /api/cursos
    #### Requisição
 {
         "curso": "Ensino Fundamental",
         "serie": "2",
	 		"turma": "201",
	 		"sala": "6",
	 		"limiteAlunos": "20",
	 		"turno": "matutino"
        
 }
 
    #### Exemplo de resposta
    #### Erros
 ### PUT - /api/cursos
    #### Requisição
    #### Exemplo de resposta
    #### Erros
 ### DELETE - /api/cursos
    #### Requisição
    #### Exemplo de resposta
    #### Erros
 
 ### Estudante 

 ### Modelo de Dado
{
codigo: Number,
nome: String,
email: String,
senha: String,
dtNascimento: Date,
cpf: String,
telefone: String,
nacionalidade: String,
sexo: String,
admin: Boolean,
}

 ### GET - /api/estudante
    #### Requisição
    #### Exemplo de resposta
    #### Erros
    #### Filtros
 ### POST - /api/estudante
    #### Requisição
    #### Exemplo de resposta
    #### Erros
 ### PUT - /api/estudante
    #### Requisição
    #### Exemplo de resposta
    #### Erros
 ### DELETE - /api/estudante
    #### Requisição
    #### Exemplo de resposta
    #### Erros 

 ### Materias 

 ### MODELO DE DADO
{
codigo: Number,
nome: String,
}

 ### GET - /api/materias
    #### Requisição
    #### Exemplo de resposta

   [
  {
    "_id": "6171ae538a8db8679c1ea109",
    "codigo": 55,
    "nome": "Artes",
    "admin": false,
    "__v": 0
  },
  {
    "_id": "6171c5c9dddb5113a7df882f",
    "codigo": 56,
    "nome": "geografia",
    "admin": false,
    "__v": 0
  },
  {
    "_id": "6171c5d1dddb5113a7df8831",
    "codigo": 57,
    "nome": "historia",
    "admin": false,
    "__v": 0
  }
]

    #### Erros
    #### Filtros
 ### POST - /api/materias
    #### Requisição

{
      "codigo": "55",
	 	"nome": "historia"
}

    #### Exemplo de resposta

{
      "codigo": 55,
      "nome": "historia",
      "admin": false,
      "_id": "6171c5d1dddb5113a7df8831",
      "__v": 0
}

    #### Erros
 ### PUT - /api/materias
    #### Requisição
    #### Exemplo de resposta
    #### Erros
 ### DELETE - /api/materias
    #### Requisição
    #### Exemplo de resposta
    #### Erros

 ### Professor 

 ### Modelo de Dado
{
codigo: Number,
nome: String,
email: String,
senha: String,
dtNascimento: Date,
cpf: String,
telefone: String,
nacionalidade: String,
sexo: String,
função: String,
escolaridade: String,
admin: Boolean,
}  

 ### GET - /api/professor
    #### Requisição
    #### Exemplo de resposta
    #### Erros
    #### Filtros
 ### POST - /api/professor
    #### Requisição
    #### Exemplo de resposta
    #### Erros
 ### PUT - /api/professor
    #### Requisição
    #### Exemplo de resposta
    #### Erros
 ### DELETE - /api/professor
    #### Requisição
    #### Exemplo de resposta
    #### Erros


 ### Turma 

 ### Modelo de Dado
{
curso: String,
serie: Number,
turma: Number,
sala: Number,
limiteAlunos: Number,
Turno: String,
admin: Boolean,
}

 ### GET - /api/turma
    #### Requisição

    http://localhost:8080/api/turma
 
    #### Exemplo de resposta
     {
    "_id": "6171c3b22ab7dd1860e248ad",
    "curso": "Ensino Fundamental",
    "serie": 2,
    "turma": 201,
    "sala": 6,
    "limiteAlunos": 20,
    "admin": false,
    "__v": 0
  }
    #### Erros
    #### Filtros
 ### POST - /api/turma
    #### Requisição

{
         "curso": "Ensino Médio",
         "serie": "2",
	 		"turma": "201",
	 		"sala": "6",
	 		"limiteAlunos": "20",
	 		"turno": "vespertino"
}
    #### Exemplo de resposta

{
         "curso": "Ensino Médio",
         "serie": 2,
         "turma": 201,
         "sala": 6,
         "limiteAlunos": 20,
         "admin": false,
         "_id": "6171c48adddb5113a7df882c",
         "__v": 0
}

    #### Erros
 ### PUT - /api/turma
    #### Requisição
    #### Exemplo de resposta
    #### Erros
 ### DELETE - /api/turma
    #### Requisição
    #### Exemplo de resposta
    #### Erros

## AUTENTICAÇÃO
//
* Deve ser 