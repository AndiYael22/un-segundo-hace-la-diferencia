import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import "../css/carga.css"

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleUpload = () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      console.log(jsonData)
      setData(jsonData.slice(1)); 

      fetch('/api/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData.slice(1)),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result); 
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className='principal'>
      <h1>Carga de información</h1>
      <input type="file" accept=".xlsx" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Cargar archivo
      </button>

      {data.length > 0 && (
        <div class="tabla-container">
        <table className='tabla'>
          <thead>
            <tr>
              <th>Branch</th>
              <th>F553007.MMCU</th>
              <th>Month Description</th>
              <th>Effective From EFFF</th>
              <th>Business Unit</th>
              <th>F553007.MCU</th>
              <th>Effective From F553007.EFFF</th>
              <th>Week Number Effective From EFFF</th>
              <th>Planned / Released (RF-GA)</th>
              <th>FirmWO</th>
              <th>PlannedWO</th>
              <th>Daily Capacity (RF-GA)</th>
              <th>Weekly Capacity  (RF-GA)</th>
              <th>Mothly Capacty (RF- GA)</th>
              <th>Request Date F553312.DRQJ</th>
              <th>Rate/Hour (RF-GA)</th>
              <th>Primary UOM/Hour</th>
              <th>Short Item No F553312.ITM</th>
              <th>2nd Item Number - LITM</th>
              <th>Work Order Quantity</th>
              <th>Quantity Ordered</th>
              <th>Work Order No</th>
              <th>WO Status</th>
              <th>Type of Routing</th>
              <th>WO Start Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
                <td>{row[5]}</td>
                <td>{row[6]}</td>
                <td>{row[7]}</td>
                <td>{row[8]}</td>
                <td>{row[9]}</td>
                <td>{row[10]}</td>
                <td>{row[11]}</td>
                <td>{row[12]}</td>
                <td>{row[13]}</td>
                <td>{row[14]}</td>
                <td>{row[15]}</td>
                <td>{row[16]}</td>
                <td>{row[17]}</td>
                <td>{row[18]}</td>
                <td>{row[19]}</td>
                <td>{row[20]}</td>
                <td>{row[21]}</td>
                <td>{row[22]}</td>
                <td>{row[23]}</td>
                <td>{row[24]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
