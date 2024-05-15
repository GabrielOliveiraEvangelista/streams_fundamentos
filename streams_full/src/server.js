import http from 'node:http';
import { TransformarDado } from '../stream/transform.js';

const server = http.createServer(async (req, res) => {
    const buffer = [] //Criando um array para guardar as infos enquanto sao lidas
    for await (const chunk of req) {
        buffer.push(chunk)
    } // aqui o programa vai parar e so continua quando inserir todos os dados no array (await)
    const dadoCompleto = Buffer.concat(buffer).toString()
    console.log(dadoCompleto)
    return res.end(dadoCompleto) // Enviando para a minha fetch minha response
})
server.listen(5500)

// Esse projeto traz o entendimento da manupulação de dados apos a leitura completa do arquivo e então retornar esses dados assim que forem tratados para o meu front atravez da response