import React from "react";
import { TableRow, TableCell } from '@mui/material';  

const UserData = ({ users, startIndex }) => {
  return (
    <>
      {users.map((user, index) => (
        <TableRow key={user.id}>
          <TableCell style={{width: '30px', maxWidth: '30px', textAlign: 'center',border: '1px solid #ccc' }}>
            {+startIndex + index + 1}
          </TableCell>
          <TableCell style={{width: '180px', maxWidth: '150px', textAlign: 'center', border: '1px solid #ccc' }}>
            {user.userId}
          </TableCell>
          <TableCell style={{width: '220px', maxWidth: '200px', textAlign: 'center', border: '1px solid #ccc' }}>
            {user.name}
          </TableCell>
          <TableCell style={{ width: '200px', maxWidth: '250px', textAlign: 'center' , border: '1px solid #ccc'}}>
            {user.email}
          </TableCell>
          <TableCell style={{width: '140px', maxWidth: '140px', textAlign: 'center', border: '1px solid #ccc' }}>
            {user.role}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default UserData;
