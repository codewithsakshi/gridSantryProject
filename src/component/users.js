import React from "react";
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button } from  '@mui/material';  


const UserData = ({users}) => {
  return (
      <>{users.map((user, index) => (
        <TableRow key={user.id}>
          <TableCell>{index+1}</TableCell>
          <TableCell>{user.userId}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.role}</TableCell>
        </TableRow>
      ))}</>
  );
};

export default UserData;