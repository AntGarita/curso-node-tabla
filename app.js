
//para importar la función del archivo [multiplicar.js]
const { crearArchivo } = require('./helpers/multiplicar.js');
//para importar la configuración de parámetros de los argumentos del cmd
const argv = require('./config/yargs.js');
//para importar los colores 
const colors = require('colors');

console.clear();

//despliega todos los argumentos en el cmd
//console.log( process.argv );
//console.log('yargs base:', argv.base);

console.log( argv );

 crearArchivo(argv.base, argv.hasta, argv.listar)
     .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creada!\n') )
     .catch( err => console.log(err) );







