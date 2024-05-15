import { Transform } from 'node:stream';
// Stream de transformação
// Antes que eu grave o dado eu consigo transformar ele apos a leitura
export class TransformarDado extends Transform {
    _transform(chunk, encoding, callback){
        const dadoTransformado = Number(chunk.toString()) * -1
        console.log(dadoTransformado)
        callback(null, Buffer.from(String(dadoTransformado))) // Serve para eu mandar cada numero transformado para a proxima stream
    }
}