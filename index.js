const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.redirect('/nothing')
});

// create a variable GET route that echos the variable
app.get('/:str', (req, res) => {
    const msg = `<p>Write a value behind the / in the URL to see it echoed back. For example, /hello will echo back hello.</p>
    <p>Echo: ${req.params.str}</p>`;

    res.send(msg);
});

// start the server listening for requests
app.listen(port, () => console.log(`App listening on port ${port}!`));