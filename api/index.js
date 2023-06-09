const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/mydatabasee', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');

    app.listen(3000, () => {
      console.log('Servidor iniciado en el puerto 3000');
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

const dataSchema = new mongoose.Schema({
  Branch: String,
  'F553007.MMCU': String,
  'Month Description': String,
  'Effective From EFFF': String,
  'Business Unit': String,
  'F553007.MCU': String,
  'Effective From F553007.EFFF': String,
  'Week Number Effective From EFFF': String,
  'Planned / Released (RF-GA)': String,
  FirmWO: String,
  PlannedWO: String,
  'Daily Capacity (RF-GA)': String,
  'Weekly Capacity  (RF-GA)': String,
  'Mothly Capacty (RF- GA)': String,
  'Request Date F553312.DRQJ': String,
  'Rate/Hour (RF-GA)': String,
  'Primary UOM/Hour': String,
  'Short Item No F553312.ITM': String,
  '2nd Item Number - LITM': String,
  'Work Order Quantity': String,
  'Quantity Ordered': String,
  'Work Order No': String,
  'WO Status': String,
  'Type of Routing': String,
  'WO Start Date': String
});

const Data = mongoose.model('Data', dataSchema);

app.post('/api/saveData', async (req, res) => {
  try {
    const jsonData = req.body;

    await Data.insertMany(jsonData);

    console.log('Datos guardados:', jsonData);

    res.json({ success: true, message: 'Datos guardados correctamente' });
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.json({ success: false, message: 'Error al guardar los datos' });
  }
});

app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find({}, '-_id -__v'); // Consulta los documentos y excluye los campos _id y __v

    console.log('Datos obtenidos:', data);

    res.json(data);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    res.status(500).json({ success: false, message: 'Error al obtener los datos' });
  }
});
app.put('/api/updateData/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
  
      await Data.findByIdAndUpdate(id, updatedData);
  
      console.log('Datos actualizados:', updatedData);
  
      res.json({ success: true, message: 'Datos actualizados correctamente' });
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
      res.json({ success: false, message: 'Error al actualizar los datos' });
    }
  });
  

app.use((err, req, res, next) => {
  console.error('Error en el servidor:', err);
  res.status(500).json({ success: false, message: 'Error en el servidor' });
});
