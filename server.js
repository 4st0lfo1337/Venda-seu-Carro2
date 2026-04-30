const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bobegss'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the Mysql');
  }
});

app.post('/carros', (req, res) => {
    const carro = req.body;

    const query = 'INSERT INTO carros (titulo, preco, marca, modelo, cambio) VALUES (?, ?, ?, ?, ?)';
    const values = [carro.titulo, carro.preco, carro.marca, carro.modelo, carro.cambio];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting car:', err);
            res.status(500).json({ error: 'Failed to insert car' });
        } else {
            res.status(201).json({ id: result.insertId, ...carro });
        }
    });
});