import React from "react";
import { TableRow, TableCell } from '@mui/material';
import { makeStyles } from "@mui/styles";  

const useStyles = makeStyles(() => ({
  column: {
    textAlign: 'center!important',
    border: '1px solid #ccc'
  },
}));

const UserData = ({ users, startIndex }) => {
  const classes = useStyles();

  return (
    <>
      {users.map((user, index) => (
        <TableRow key={user.id}>
          <TableCell style={{width: '30px', maxWidth: '30px' }} className={classes.column}>
            {+startIndex + index + 1}
          </TableCell>
          <TableCell style={{width: '180px', maxWidth: '150px'}} className={classes.column}>
            {user.userId}
          </TableCell>
          <TableCell style={{width: '220px', maxWidth: '200px'}} className={classes.column}>
            {user.name}
          </TableCell>
          <TableCell style={{ width: '200px', maxWidth: '250px'}} className={classes.column}>
            {user.email}
          </TableCell>
          <TableCell style={{width: '140px', maxWidth: '140px'}} className={classes.column}>
            {user.role}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default UserData;
