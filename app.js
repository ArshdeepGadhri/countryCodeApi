const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv/config');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


const postsRoute = require('./routes/country');
app.use('/country', postsRoute);


app.get('/', (req, res) => {
    res.send({"Country Code Api":"By Arsh",
            "howto":
                {"Use the endpoints to navigate through this REST API":
                    {"Endpoints":
                        {"/country":"Returns all data, example ../country",
                        "/country/*name":"Returns specific data, example ../country/cape%20verde",
                        "/country/code/*alpha2code":"Returns specific data, example ../country/code/ca",
                        "/country/code2/*alpha3code":"Returns specific data, example ../country/code2/can"}
                    }
                },"Contacts":["Discord Art#1468","Email sodumsodum@gmail.com"]
            }
        );
});

const key = process.env.DB;
mongoose.connect(key, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, () => 
    console.log('UP')
);

app.listen(process.env.PORT || 3000);