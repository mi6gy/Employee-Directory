import React from 'react';
import DataBody from "../DataBody/DataBody";

function DataTable({ headings, users }){
  
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