//ram disponible ram total y sistema op y datos de la frecuencia (cpus)extraemos esos datos variables y hacemos funciones que nos digan esos resultados en MB y Gb --3archivos-- 
//imprimir en tabla console.table

const os = require('os')

let consultas = {

/* memoria ram total */
    ramTotal: os.totalmem(),

/* memoria ram disponible */
    ramDisp: os.freemem(),

/* version de sistema operativo */
    sistemOp: os.type(),

// extracion de los datos de la frecuencia
    cpu: os.cpus().slice(0,1).map((registro)=>registro.times),

}

module.exports = consultas