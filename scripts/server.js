const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path'); 
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..')));

const busesFile = path.join(__dirname, '..', 'buses.json');


const readBusesFile = () => {
    const data = fs.readFileSync(busesFile);
    return JSON.parse(data).buses || [];
};

const writeBusesFile = (buses) => {
    fs.writeFileSync(busesFile, JSON.stringify({ buses }, null, 2));
};

app.post('/register-bus', (req, res) => {
    const { plate, arrivalTime } = req.body;
    let buses = readBusesFile();
    
    const existingBus = buses.find(bus => bus.plate === plate);
    
    if (existingBus) {
        existingBus.arrivalTime = arrivalTime;
        existingBus.edits += 1;
    } else {
        buses.push({ plate, arrivalTime, edits: 1 });
    }

    writeBusesFile(buses);
    res.send(`Bus ${plate} registrado/actualizado con éxito.`);
});


app.post('/search-bus', (req, res) => {
    const { plate } = req.body;
    const buses = readBusesFile();

    const bus = buses.find(bus => bus.plate === plate);

    if (bus) {
        res.json(bus);
    } else {
        res.status(404).send('Bus no encontrado.');
    }
});

app.post('/delete-bus', (req, res) => {
    const { plate } = req.body;
    let buses = readBusesFile();

    const index = buses.findIndex(bus => bus.plate === plate);

    if (index !== -1) {
        buses.splice(index, 1);
        writeBusesFile(buses);
        res.send(`Bus ${plate} eliminado con éxito.`);
    } else {
        res.status(404).send('Bus no encontrado.');
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});