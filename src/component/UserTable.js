import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button } from   
 '@mui/material';
import userData from './data' 

function UserTable() {
  const [users, setUsers] = useState(() => {
    if (userData) {
      return userData; // Use mock data if the condition is true
    } else {
      return []; // Use an empty array if the condition is false
    }
  });

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const   
  currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>userId</TableCell>
            <TableCell>Name</TableCell> 
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        {users && <UserData users={currentUsers}/>}
      </Table>
      <div>
        <Button variant="contained" color="primary" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
        <Button variant="contained" color="primary" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(users.length / usersPerPage)}>Next</Button>
      </div>
    </TableContainer>
  );
}

const UserData = ({users}) => {
    console.log("users", users);
  return (
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell>{user.userId}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.role}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default UserTable;   
