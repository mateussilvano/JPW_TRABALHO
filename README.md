## Sobre e Autor
//Mateus Brognoli Silvano
## INSTALAÇÃO
//npm start
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
 ### GET
    #### Requisição
    #### Exemplo de resposta
    #### Erros
    #### Filtros
 ### POST
    #### Requisição
    #### Exemplo de resposta
    #### Erros
 ### PUT
    #### Requisição
    #### Exemplo de resposta
    #### Erros
 ### DELETE
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
 
 ### Materias 

 ### MODELO DE DADO
{
codigo: Number,
nome: String,
}

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


## AUTENTICAÇÃO
//
* Deve ser f