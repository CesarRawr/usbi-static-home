const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Ruta para servir archivos estáticos (HTML, CSS, JS) desde el directorio actual
app.use(express.static(path.join(__dirname + "/src")));

// Ruta para manejar la solicitud del archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/src", 'homePage.html'));
});

app.get('/creditos', (req, res) => {
    res.sendFile(path.join(__dirname + "/src", 'credits.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
