const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path'); // Importa el módulo 'path'
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..')));

const busesFile = path.join(__dirname, '..', 'buses.json');

// Para leer y escribir el archivo buses.json
const readBusesFile = () => {
    const data = fs.readFileSync(busesFile);
    return JSON.parse(data);
};

const writeBusesFile = (data) => {
    fs.writeFileSync(busesFile, JSON.stringify(data, null, 2));
};

// Registrar/actualizar un bus
app.post('/register-bus', (req, res) => {
    const { plate, arrivalTime } = req.body;
    const buses = readBusesFile();

    if (buses[plate]) {
        buses[plate].arrivalTime = arrivalTime;
        buses[plate].edits += 1;
    } else {
        buses[plate] = { arrivalTime, edits: 1 };
    }

    writeBusesFile(buses);
    res.send(`Bus ${plate} registrado/actualizado con éxito.`);
});

// Para buscar un bus
app.post('/search-bus', (req, res) => {
    const { plate } = req.body;
    const buses = readBusesFile();

    if (buses[plate]) {
        res.json({ plate, arrivalTime: buses[plate].arrivalTime, edits: buses[plate].edits });
    } else {
        res.status(404).send('Bus no encontrado.');
    }
});

// Para borrar un bus
app.post('/delete-bus', (req, res) => {
    const { plate } = req.body;
    const buses = readBusesFile();

    if (buses[plate]) {
        delete buses[plate];
        writeBusesFile(buses);
        res.send(`Bus ${plate} eliminado con éxito.`);
    } else {
        res.status(404).send('Bus no encontrado.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
