import { Writable } from 'node:stream';
// Steam de escrita
export class EscritaEnquantoLer extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString())*10) // Nesse caso eu escolhi que ele fosse escrito no console, mas poderia ser em um arquivo de banco de dados
        callback()
    }
}