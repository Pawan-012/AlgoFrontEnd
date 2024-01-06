// Import necessary libraries
import React, { useEffect, useMemo } from "react";
import { useTable } from "react-table";

const DataTable = ({ data }) => {
  // Memoize the columns and data for better performance
  const columns = useMemo(() => {
    if (data.length === 0) return [];

    // Extract column names from the first row of the DataFrame
    return Object.keys(data[0]).map((key) => ({
      Header: key,
      accessor: key,
    }));
  }, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // Effect to log the data when it changes (for demonstration purposes)
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <table
      {...getTableProps()}
      style={{ borderCollapse: "collapse", width: "100%" }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "2px solid black",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    borderBottom: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
