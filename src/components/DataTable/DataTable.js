import React from 'react';
import DataBody from "../DataBody/DataBody";

function DataTable({ headings, users, sort }){
  
    return(
        <div>
            <table>
                <thead>
                <tr>
                { headings.map(({name, width}) =>{
                  console.log("fun", name)
                    return(
                        <th
                            key={name}
                            style={{width}}
                            onClick={() => {
                                sort(name)
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