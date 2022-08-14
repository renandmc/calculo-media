# Cálculo da média de 2 números

## Descrição do problema
Precisamos fazer o cálculo da média de 2 números, para isto será necessário ter um endpoint que receba esses 2 números e nos retorne a média dos mesmos.

O resultado precisa estar arredondado em duas casas decimais utilizando a estratégia de arredondamento Half Round Up.

O mesmo precisará rodar num docker, para isto o projeto tem que estar corretamente conteinerizado/dockerizado.

Temos que ter tratamento de erro caso os parâmetros estejam errados, inválidos ou inexistentes.

Precisamos implementar Log para saber o que está acontecendo, ou seja, que cálculos estão sendo feitos neste componente.

Comite seu código. 

## Instruções para execução

1. Clonar o repositório
2. Subir o container
```
docker-compose up -d
```
3. Acessar o endpoint
```
POST http://localhost:8080/media
{
  "n1": 1,
  "n2": 2
}
```
4. Verificar o resultado
```
{
  "n1": 1,
  "n2": 2,
  "media": 1.5
}
```