import express from 'express';

const app = express();

app.get('/makers/:name', (req, res) => {
    const {name} = req.params;
    if(!name) res.send(`<h1>Hola desconocido!</h1>`);
    else {
        res.send(`<h1>Hola ${name}!</h1>`);
    }
});

app.listen(3000, () => console.log('Listening on port 3000'));