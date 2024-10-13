import React, { useState, useEffect, useRef } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress} from '@mui/material';
import UserData from './users';
import PaginationControls from './paginationControls';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import SearchBar from './SearchBar';
import { makeStyles } from "@mui/styles";  

const useStyles = makeStyles(() => ({
  column: {
    textAlign: 'center!important',
    border: '1px solid #ccc',
    color: 'white!important',
    cursor: 'pointer'
  },
}));


function UserTable({ usersObject }) {
  const classes = useStyles();

  const [users, setUsers] = useState(usersObject || []);
  const usersPerPage = 5; // Total users per page (for pagination)
  const [loadedUsers, setLoadedUsers] = useState(usersPerPage); // Infinite scroll initially loads usersPerPage
  const [currentPage, setCurrentPage] = useState(1); // Pagination current page
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // Search state
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' }); // Sorting state: default sort by 'name' in 'ascending' direction

  const prevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextClick = () => {
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Filtering users based on search term
  const filteredUsers = Array.isArray(users) ? users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  // Sorting function
  const sortedUsers = () => {
    const sortedArray = [...filteredUsers].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sortedArray;
  };

  // Handle infinite scrolling and load more users
  const loadMoreUsers = () => {
    if (loading || loadedUsers >= filteredUsers.length) return; // Stop if already loading or no more users to load

    setLoading(true);
    setTimeout(() => {
      setLoadedUsers(prev => prev + usersPerPage); // Increase the users loaded on scroll by usersPerPage
      setCurrentPage(prev => prev + 1, totalPages)
      setLoading(false);
    }, 1000);
  };

  // Scroll event listener for infinite scroll
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      loadMoreUsers(); // Load more users when scrolling to the bottom
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loading, filteredUsers.length]);

  // Handle sorting on table headers
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Handle manual page change for pagination
  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    setLoadedUsers(usersPerPage); // Reset loaded users when page changes
  };

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage); // total pages for pagination

  // Get the users for the current page based on sorting and filtering
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = sortedUsers().slice(startIndex, startIndex + loadedUsers);

  return (
    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div style={{ overflowX: 'auto' }}>
        <TableContainer
          component={Paper}
          ref={containerRef}
          style={{ maxHeight: '320px', overflowY: 'scroll', overflowX: 'auto', borderBottom: '1px solid #ccc' , borderTop: '1px solid #ccc'  }}
        >
          <Table aria-label="user table" style={{ tableLayout: 'fixed', width: '100%' }}>
            <TableHead style={{background: '#3652AD', color: 'white'}}>
              <TableRow>
                <TableCell style={{ width: '30px', minWidth: '30px'}} className={classes.column}>S.No</TableCell>
                <TableCell style={{ width: '140px', minWidth: '140px'}} className={classes.column}>User Id</TableCell>
                <TableCell onClick={() => handleSort('name')} style={{width: '220px', minWidth: '200px'}} className={classes.column}>
                  Name
                  <ArrowUpward
                    fontSize="small"
                    sx={{ marginLeft: '2px', marginBottom: '-5px', color: '#fff' }}
                  />
                  <ArrowDownward
                    fontSize="small"
                    sx={{ marginLeft: '-4px', marginBottom: '-5px', color: '#fff' }}
                  />
                </TableCell>
                <TableCell style={{ width: '200px', minWidth: '180px'}} className={classes.column}>Email</TableCell>
                <TableCell onClick={() => handleSort('role')} style={{width: '220px', minWidth: '200px'}} className={classes.column}>
                  Role
                  <ArrowUpward
                    fontSize="small"
                    sx={{ marginLeft: '2px', marginBottom: '-5px', color: '#fff' }}
                  />
                  <ArrowDownward
                    fontSize="small"
                    sx={{ marginLeft: '-4px', marginBottom: '-5px', color: '#fff' }}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentUsers.length > 0 ? (
                <UserData users={currentUsers} startIndex={startIndex} />
              ) : (
                <TableRow>
                  <TableCell colSpan={5} style={{ textAlign: 'center' }}>No users found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          {loading && (
            <div style={{ textAlign: 'center', padding: '10px' }}>
              <CircularProgress size={24} />
              <p>Loading more users...</p>
            </div>
          )}
        </TableContainer>
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageSelect={handlePageChange}
        onPrevClick={prevClick}
        onNextClick={nextClick}
      />
    </div>
  );
}

export default UserTable;

