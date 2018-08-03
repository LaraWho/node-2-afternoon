let express = require('express');
let bodyParser = require('body-parser');
let massive = require('massive');
let Cntrl = require('./controllers/products_controller');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    console.log("db connected");
    app.set('db', dbInstance)
}).catch( error => console.error('ERROR!', error))

app.get('/api/products/:id', Cntrl.getOne);
app.get('/api/products', Cntrl.getAll);
app.put('/api/product/:id', Cntrl.update);
app.post('/api/product', Cntrl.create);
app.delete('/api/product/:id', Cntrl.delete);


const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}.`);
});