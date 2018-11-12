const express = require('express');
const app = express();
app.use(express.json());
//const usuarios = [{ id: '0', name: 'pepe' }, { id: '1', name: 'juan' }];
const peliculas = [{ id: '0', title: 'eragorn' }];


app.get('/pelis', (req, res) => { res.json(peliculas) });

app.get('/pelis/:id', (req, res) => {
    const peliId = req.params.id;
    const peli = peliculas.find(pelis => peli.id == peliId);
    res.json(peli);
});

app.put('/pelis/:id',  (req, res) => {
    const peliId = req.params.id;
    const body =req.body;
    const peli = peliculas.find(pelis => peli.id == peliId);

    peli.name =body.name

  


});

app.post('/agregarpelis', (req, res) => {
    // const newUser = req.body;
    const newPeli = req.body;

    if (Object.keys(newPeli).length === 0) {
        res.status(400).send('Debes pasarme algo en el body')

    } else {
        newPeli.id = peliculas.length;
        //  newUser.id = Math.random();
        peliculas.push = (newPeli);
        //  usuarios.push(newUser);
        res.json(newPeli);
    }
});