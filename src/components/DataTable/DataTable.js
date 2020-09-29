import React from 'react';
import DataBody from "../DataBody/DataBody";

function DataTable({ headings, users, handleSort }){
  
    return(
        <div>
            <table>
                <thead>
                <tr>
                { headings.map(({name, width}) =>{

                    return(
                        <th
                            key={name}
                            style={{width}}
                            onClick={() => {
                               handleSort(name.toLowerCase())
                            }}
                        >
                            {name}
                        </th>
                    )
                 }) }
                </tr>
                </thead>
               <DataBody
                users={users}
               />
            </table>
        </div>
    )
}
export default DataTable;