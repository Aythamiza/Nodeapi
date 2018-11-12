const express = require('express');
const app = express();
app.use(express.json());
const usuarios  =[{ id: '0', name: 'pepe' }, { id: '1', name: 'juan' }];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


app.get('/users', (req, res) => {
    res.json(usuarios);

});


app.post('/users', (req, res) => {
    const newUser = req.body;
    if (newUser.name !== null) {
        res.status(400).send('Debes pasarme algo en el body')

    } else {

        newUser.id = Math.random();
        usuarios.push(newUser);
        res.json(newUser);
    }
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = usuarios.find(user => user.id == userId);
    res.json(user);


});

app.get('/tirardado/:number', (req, res) => {

    const number = req.params.number;

    const numerodado = getRndInteger(1, number);
    res.json(numerodado);



});

app.listen(3000, () => console.log('Readi on port 3000'));