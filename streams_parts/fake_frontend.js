import { LeituraPorPartes } from './stream/read.js';

fetch('http://localhost:5500', {
    method: 'POST',
    body: new LeituraPorPartes(),
    duplex: 'half'
}).then(res => res.text()).then(data => console.log(data))

// Aqui consite em um disparo de requisições a cada 100s para o meu back-end na função fetch

// No meu servidor eu estou enviando a resposta (res = reponse) e no meu front eu irei capturar para imprimir na tela (função then)