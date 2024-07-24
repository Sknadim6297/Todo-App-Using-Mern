const express = require('express')
const mongoose=require('mongoose');
const cors= require('cors');
const todoRoute=require('./routes/todoRoute');
const dotenv=require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//mongodb connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('DB connected');
}
).catch((err) => {
    console.log(err);
}
);

app.use('/todo',todoRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);

