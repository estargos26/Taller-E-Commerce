//1. Importar la libreria para crear aplicaciones web
const express = require ('express');

//2. Crear una instancia de express (aplicacion principal)
const app = express ();

//3. Definir un puerto sobre el cual funciona nuestra app
const PORT = 3000

//4. Crear la primera "Ruta" cuando el usuario ingrese a la raiz de nuestro sitio
app.get('/', (req, res) => {
    res.send('<h1>Servidor de E-Commerce Iniciado</h1><p>NPM y Express funcionando</p>');
});

// 5. Encender el servidor
app.listen(PORT, () =>{
    console.log(`>>> Servidor corriendo en http://localhost:${PORT}`);
    console.log(`>>> Presione Ctrl + c para detener`);
});
