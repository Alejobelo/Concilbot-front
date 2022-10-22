import React from "react";
import './ReportTable.css';

const ReportTable = (props: { dataTable: any[]; columns: any[] }) => {
  const { dataTable, columns } = props;

  return (
      <table className="table">
        <thead className="t-head">
          <tr className="t-head-tr">
            {columns.map((column) => (
              <th className="t-head-th" key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="t-body">
            {dataTable.map((row, inx) => (
                 <tr  className="t-body-tr" key={inx}>
                    {columns.map((column) => (
                        <td className='t-body-td' key={column.key}>
                            {
                            column.type == 'text' &&
                                <span>{ row[column.key] }</span>
                            }
                            {
                            column.type == 'img' &&
                                <img src={row[column.key]} width="50" />
                            }
                        </td>
                    ))}
                 </tr>
            ))}
        </tbody>
      </table>
  );
};

export default ReportTable;
