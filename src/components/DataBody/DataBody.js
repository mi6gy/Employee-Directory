import React from 'react';
//styles sheet

function DataBody({users}){
    return(
        <tbody>
           {users.map((user) => {
               console.log(user.picture)
               return( 
                   <tr>
                       <td>
                           <img
                                
                           />
                       </td>
                   </tr>
               )
           }) 
           }
        </tbody>
    )
}
export default DataBody;