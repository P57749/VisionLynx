const { exec } = require('child_process');

// Inicia el servidor local
exec('npm run serve', (error, stdout, stderr) => {
 if (error) {
    console.log(`Error: ${error}`);
    return;
 }
 console.log(`stdout: ${stdout}`);
 console.error(`stderr: ${stderr}`);
});

// Abre la aplicación web en un navegador
// const { shell } = require('electron');
// shell.openExternal('http://localhost:8080'); // Reemplaza '8080' con el puerto en el que se ejecuta tu servidor local
// Abre la aplicación web en un navegador
open('http://localhost:8080');