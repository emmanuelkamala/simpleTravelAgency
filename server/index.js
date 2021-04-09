const express = require('express');

const app = express();

app.use((req, res) => {
    res.send('Hello angelina')
});

app.listen(3000);