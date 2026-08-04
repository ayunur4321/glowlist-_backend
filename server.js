const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('selamat datang di GlowList API!!!');
});

app.listen(PORT,() => {
    console.log(`server GlowList jalan di http://localhost:${PORT}`);

})