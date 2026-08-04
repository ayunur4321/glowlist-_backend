const express = require('express');
const mysql = require('mysql2');    
const app = express();
const PORT = 3001;

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'glowlist_db'
});

db.connect(err => {
    if (err) {
        console.error('Gagal konek ke database:', err);
    } else {
        console.log('Berhasil konek ke database GlowList');
    }
});

app.get('/', (req, res) => {
    res.send('selamat datang di GlowList API!!!');
});

//========== get kategori =====//
app.get('/kategori', (req, res) => {
    const sql = 'SELECT * FROM kategori';
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({error: err });
        res.json(result);
    });
});

//=========== GET PRODUK==========//

app.get('/produk', (req, res) => {
    const sql = 'SELECT * FROM produk';
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({error: err });
        res.json(result);
    });
});


app.listen(PORT,() => {
    console.log(`server GlowList jalan di http://localhost:${PORT}`);
})