const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/offers', require('./routes/offers'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/packages', require('./routes/packages'));

//DB Connections
mongoose.connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const Port = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}😎`));