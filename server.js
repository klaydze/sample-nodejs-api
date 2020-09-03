const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const dbconnection = require('./database/connection');

dotEnv.config();

const app = express();

// db connection
dbconnection();

// Third party middleware
app.use(cors());

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/product', require('./routes/product-routes'));
app.use('/api/v1/user', require('./routes/user-routes'));

// API Documentation
const currentEnv = process.env.NODE_ENV;
if (process.env.NODE_ENV != 'production') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.get('/', (req, res, next) => {
    res.send(`Sample NodeJS API ${currentEnv} is running...`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
});