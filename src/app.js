// src/app.js
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const express = require('express');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());
app.use('/api', authRoutes);
app.get('/', (req, res) => {
  res.send('API de tareas funcionando 🎯');
});

const PORT = process.env.PORT || 4000;
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a la base de datos exitosa.');

    // 🔁 Crea las tablas automáticamente si no existen
    sequelize.sync({ alter: true }).then(() => {
      console.log('📦 Base de datos sincronizada correctamente.');
    });

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error al conectar a la base de datos:', err);
  });

