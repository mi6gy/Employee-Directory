import React from 'react';
//styles sheet

function DataBody({users}){
    return(
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
                users.map(({name, picture, phone, email, dob, login}) => {
             console.log(login)
        
                return( 
                    <tr key={login.uuid}>
                        <td>
                            <img
                                src={picture.thumbnail}    
                            />
                        </td>
                        <td>
                            {name.first} {name.last}
                        </td>
                        <td>
                            {phone}
                        </td>
                        <td>
                          {email}
                        </td>
                        <td>
                          {dob.age}
                        </td>
                    </tr>
                )
            }) 
            
            ) : (
            <></> )}


        </tbody>
    )
}
export default DataBody;