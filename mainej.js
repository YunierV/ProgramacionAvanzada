const consultas = require("./ejercicioos")

const funciones = require("./funciones")

//ram total en GB
let ramTotalbyteGb = funciones.byteGB(consultas.ramTotal)
//ram total en Byte
let ramTotal = consultas.ramTotal
//ram total en MB
let ramTotalbyteMb = funciones.byteMB(consultas.ramTotal)
//ram disponible en GB
let ramDispbyteGb = funciones.byteGB(consultas.ramDisp)
//ram disponible en Byte
let ramDisp = consultas.ramDisp
//ram disponible en MB
let ramDispbyteMb = funciones.byteMB(consultas.ramDisp)
//datos de frecuencia
let datFrec = consultas.cpu



console.log("Ram Total:",ramTotal
,"Ram Total en GB:",ramTotalbyteGb
,"Ram Total en MB:",ramTotalbyteMb
,"Ram Disponible:",ramDisp
,"Ram Disponible en GB:",ramDispbyteGb
,"Ram Disponible en MB:",ramDispbyteMb)

console.table(datFrec)