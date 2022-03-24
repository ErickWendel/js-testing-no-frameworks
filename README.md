MOCK: 
  - mock é o objeto necessario para o teste functionar

  cenario:
    Ponto A
    Ponto B
    Ponto C

    A => B 

    o mock para rodar o teste de B => C é o resultado do Ponto A para o ponto B
    B => C
    
    errado pois o teste está duplicado
    A => B => C

STUB: 
  - stub serve para interceptar chamadas externas (DB, API Externa, etc)
    - garantir que o nosso teste será OFFLINE (Sem system, sem internet, sem memoria)

SPY:
  - spy é um tipo de stub, mas é usado para validar 
  como a função foi chamada, com quais parametros e quantas vezes


https://github.com/ErickWendel/semana-javascript-expert06/blob/main/aulas/aula03-desafio-resolvido/tests/unit/server/routes.test.js
https://github.com/nodejs/node/pull/42325/files
https://nodejs.org/api/assert.html#class-assertcalltracker
https://github.com/nodejs/node/pull/41862/files
https://coverage.nodejs.org