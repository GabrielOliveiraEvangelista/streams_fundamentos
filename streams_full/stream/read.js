import { Readable } from 'node:stream';
//Lendo arquivo em Streams
// Steam de leitura
export class LeituraPorPartes extends Readable {
    index = 0

    // Metodo de leitura
    _read(){
        const i = this.index++
        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                // Só é possivel adicionar o dado no formato buffer e o buffer so aceita string
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        }, 100)
    }
}