const express = require('express');
const properties = require('./config/properties');
const db = require('./config/database');
const bodyParser = require('body-parser');
const customersRoutes = require('./customer/customer.routes');

//init db
db();

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});
const app = express();

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

const router = express.Router();
app.use('/api', router);
customersRoutes(router);

app.listen(properties.PORT, ()=> console.log(`Server is running on ${properties.PORT}`))

