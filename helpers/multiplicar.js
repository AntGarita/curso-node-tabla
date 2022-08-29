
//para importar las funcionalidades de archivo
const fs = require('fs');
//para importar los colores 
const colors = require('colors');


const crearArchivo = async(base = 5, hasta = 10, listar = true) => {

    try{
        
        let salida = '';  //imprime en archivo
        let consola = ''; //imprime en consola

        consola += `=================\n`.gray;
        consola += `Tabla del ${colors.yellow(base)}\n`.green;
        consola += `=================\n`.gray;

        salida += `=================\n`;
        salida += `Tabla del ${base}\n`;
        salida += `=================\n`;

        for(let i=1; i<=hasta; i++){
            
            consola += `${colors.yellow(base)} x ${colors.green(i)} = ${colors.cyan(base * i)}\n`.italic;
            
            salida += `${base} x ${i} = ${base * i}\n`;
            
        }

        consola += `=================\n`.gray;
        salida += `=================\n`;
    
        /*  
        //Forma de crear un archivo  
        fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log(`tabla-${base}.txt creada!`);
        });
        */
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );

        if(listar){
            console.log(consola);
        }
        
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }

}


module.exports = {
    crearArchivo
}


