require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const videos = require('./routes/videos')
const cors = require('cors');




app.use(cors({ origin: '*' }))

app.use(express.static('public'));

app.use(express.json());




app.use(express.json()); app.use('/videos', videos);

app.get('/', (req, res) => {
    // send some text back as a response
    res.send('Express is running!');
});
// END OF NEW CODE

app.use("/videos", videos);

app.listen(PORT, () => {
    console.log('Server Started on http://localhost:8081');

    console.log(PORT, 'this is the port in app.listen')
});
