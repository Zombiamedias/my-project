const fs = require("fs")
const path = require("path")

// directorio para checar los archivos
const directory = './'

const filePath = path.join(directory, 'errors.log')

// funcion de revisar errores
function checkErrors() {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error al leer el directorio', err)
            return;
        }

        // filtrar archivos
        const txtFiles = files.filter(file => path.extname(file) === '.txt')

        txtFiles.forEach(file => {
            const fileP = path.join(directory, file)

            fs.readFile(fileP, 'utf8', (err, data) => {
                if (err) {
                    console.error(`Error al leer el archivo ${file}:`, err)
                    return;
                }
                if (data.includes('ERROR')) {
                    const logMessage = `La palabra "ERROR" fue encontrada en el archivo: ${file}\n`;
                    console.log(logMessage.trim())
                    fs.appendFile(filePath, logMessage, (err) => {
                        if (err) {
                            console.error('Error al escribir en el archivo de log:', err);
                        }
                    })
                }
            });
        });
    });
};

// Llamar a la función para revisar errores
checkErrors();