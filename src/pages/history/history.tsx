import React, {useState} from 'react';
import ReportTable from '../../components/ReportTable';

const History = () => {
    const [columns, setColumns] = useState([
        { key: 'movement', label: 'Movimiento', type: 'text' },
        { key: 'file', label: 'Archivo', type: 'text' },
        { key: 'value', label: 'Valor', type: 'text' },
    ]);
    const [data, setData] = useState([
        { movement: 'Credito', file: 'Extracto', value: 15000 },
        { movement: 'Debito', file: 'Consignación', value: 2000 }
    ])

    return (
        <div>
            <ReportTable dataTable={data} columns={columns}/>
        </div>
    );
};

export default History;