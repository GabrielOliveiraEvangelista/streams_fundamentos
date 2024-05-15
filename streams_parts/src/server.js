import http from 'node:http';
import { TransformarDado } from '../stream/transform.js';

const server = http.createServer((req, res) => {
    return req.pipe(new TransformarDado()).pipe(res) // não preciso usar mais minhas stream read nem write por tenho requisiçoes e response que ja vem padrao do node
    // Uma forma facil de ler isso seria:
    // li uma parte do meu arquivo (requisiçoes por padrao ja é uma stream de leitura) utilizo o pipe para mandar para minha stream de transformação de dado (TransformarDado) 
    //mais um pipe para escrever o dado (response por padrao ja é stream de escrita)
})
server.listen(5500)

// Esse projeto traz o entendimento que eu consigo trabalhar os dados pouco a pouco no lado do Serv e então retornar esses dados assim que forem tratados para o meu front atravez da response