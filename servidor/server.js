const express = require('express');
const app = express();

const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cuban'
});

db.connect((err) => {
    if (err) {
      console.error('Error de conexión a la base de datos: ' + err.message);
    } else {
      console.log('Conexión exitosa a la base de datos');
    }
  });

  app.get('/api/obtener-productos', (req, res) => {
    const sql = 'SELECT * FROM producto'; 
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al obtener registros:', err);
        res.status(500).json({ error: 'Error al obtener registros' });
      } else {
        res.json(result);
      }
    });
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});