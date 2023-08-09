const express = require('express');
const app = express();
const port = 8085


app.get('/', (req, res) => {
    // send some text back as a response
    res.send('Express is running!');
});
// END OF NEW CODE

app.listen(8085, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});
