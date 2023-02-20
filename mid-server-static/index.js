const express = require('express');
const app = express();

app.use(express.static('public'));

//create the route to serve a static index.html

    app.get('/', (req,res) => {
    res.sendFile(__dirname + '/' + 'index.html');
    })

    app.get('*', (req,res) => {
        res.sendFile(__dirname + '/' + 'error.html');
        })


//Setting the listener to ENV PORT

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})