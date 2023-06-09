import React, { useState } from 'react';

const Informacion = () => {
  const [data, setData] = useState([
    {
      companyCode: 'ABC',
      monthDescription: 'January',
      businessUnit: 'Unit 1',
      effectiveDate: '2023-06-01',
      weekNumber: 23,
      plannedReleased: 'Released',
      firmWO: 'F123',
      plannedWO: 'P456',
      dailyCapacity: 8,
      weeklyCapacity: 40,
      monthlyCapacity: 160,
      requestDate: '2023-06-15',
      rateHour: 10,
      primaryUOM: 'UOM',
      shortItemNumber: 'Item 1',
      itemDescription: 'Item Description',
      workOrderQuantity: 100,
      quantityOrdered: 100,
      workOrderNo: 'WO123',
      woStatus: 5,
      typeOfRouting: 'Routing Type',
    },
    // Agregar más datos según sea necesario
  ]);

  const handleDataChange = (index, property, value) => {
    const newData = [...data];
    newData[index][property] = value;
    setData(newData);
  };

  const handleUpdate = () => {
    const documentId = '...'; // Reemplaza con el identificador del documento que deseas actualizar
  
    fetch(`http://localhost:3000/api/updateData/${documentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseData => {
        if (responseData.success) {
          console.log('Datos actualizados:', responseData.message);
          // Realizar cualquier acción adicional después de la actualización exitosa
        } else {
          console.error('Error al actualizar los datos:', responseData.message);
          // Realizar cualquier acción adicional en caso de error
        }
      })
      .catch(error => {
        console.error('Error al enviar la solicitud:', error);
        // Realizar cualquier acción adicional en caso de error
      });
  };
  

  return (
    <div>
      <h1>Modificación de Información</h1>
      <table>
        <thead>
          <tr>
            <th>Company Code</th>
            <th>Month Description</th>
            <th>Business Unit</th>
            <th>Effective Date</th>
            <th>Week Number</th>
            <th>Planned/Released</th>
            <th>FirmWO</th>
            <th>PlannedWO</th>
            <th>Daily Capacity</th>
            <th>Weekly Capacity</th>
            <th>Monthly Capacity</th>
            <th>Request Date</th>
            <th>Rate/Hour</th>
            <th>Primary UOM</th>
            <th>Short Item Number</th>
            <th>Item Description</th>
            <th>Work Order Quantity</th>
            <th>Quantity Ordered</th>
            <th>Work Order No</th>
            <th>WO Status</th>
            <th>Type of Routing</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.companyCode}
                  onChange={(e) =>
                    handleDataChange(index, 'companyCode', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.monthDescription}
                  onChange={(e) =>
                    handleDataChange(index, 'monthDescription', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.businessUnit}
                  onChange={(e) =>
                    handleDataChange(index, 'businessUnit', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.effectiveDate}
                  onChange={(e) =>
                    handleDataChange(index, 'effectiveDate', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.weekNumber}
                  onChange={(e) =>
                    handleDataChange(index, 'weekNumber', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.plannedReleased}
                  onChange={(e) =>
                    handleDataChange(index, 'plannedReleased', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.firmWO}
                  onChange={(e) =>
                    handleDataChange(index, 'firmWO', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.plannedWO}
                  onChange={(e) =>
                    handleDataChange(index, 'plannedWO', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.dailyCapacity}
                  onChange={(e) =>
                    handleDataChange(index, 'dailyCapacity', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.weeklyCapacity}
                  onChange={(e) =>
                    handleDataChange(index, 'weeklyCapacity', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.monthlyCapacity}
                  onChange={(e) =>
                    handleDataChange(index, 'monthlyCapacity', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="date"
                  value={row.requestDate}
                  onChange={(e) =>
                    handleDataChange(index, 'requestDate', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.rateHour}
                  onChange={(e) =>
                    handleDataChange(index, 'rateHour', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.primaryUOM}
                  onChange={(e) =>
                    handleDataChange(index, 'primaryUOM', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.shortItemNumber}
                  onChange={(e) =>
                    handleDataChange(index, 'shortItemNumber', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.itemDescription}
                  onChange={(e) =>
                    handleDataChange(index, 'itemDescription', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.workOrderQuantity}
                  onChange={(e) =>
                    handleDataChange(index, 'workOrderQuantity', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.quantityOrdered}
                  onChange={(e) =>
                    handleDataChange(index, 'quantityOrdered', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.workOrderNo}
                  onChange={(e) =>
                    handleDataChange(index, 'workOrderNo', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.woStatus}
                  onChange={(e) =>
                    handleDataChange(index, 'woStatus', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.typeOfRouting}
                  onChange={(e) =>
                    handleDataChange(index, 'typeOfRouting', e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  );
};

export default Informacion;
