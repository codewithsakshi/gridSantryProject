import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';

function PaginationControls({ currentPage, totalPages, onPrevClick, onNextClick, loading, loadedUsers, totalUsers, onPageSelect }) {
  const [pageInput, setPageInput] = useState(currentPage);

  useEffect(() => {
    // Update the input value whenever the current page changes
    setPageInput(currentPage);
  }, [currentPage]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setPageInput(value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const pageNum = parseInt(pageInput, 10);
      if (pageNum >= 1 && pageNum <= totalPages) {
        onPageSelect(pageNum);
      } else {
        alert(`Please enter a valid page number between 1 and ${totalPages}`);
      }
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', maxWidth: '400px', margin: 'auto', paddingTop: '40px' }}>
      <Button 
        className='prev-btn' 
        variant="contained" 
        color="primary" 
        onClick={onPrevClick} 
        disabled={currentPage === 1}
        style={{ minwidth: '90px', borderRadius: 0, fontSize: '12px', padding: '5px 10px' }}  // Reduced width and font size
      >
        Previous
      </Button>
      <span style={{ margin: '0 10px' }}>
        Page {currentPage} of {totalPages}
      </span>
      <Button 
        className='next-btn' 
        variant="contained" 
        color="primary" 
        onClick={onNextClick} 
        disabled={currentPage === totalPages}
        style={{ minwidth: '90px', borderRadius: 0, fontSize: '12px', padding: '5px 10px'  }}  // Reduced width and font size
      >
        Next
      </Button>

      {/* Page Input */}
      <TextField
        label="Go to page"
        variant="outlined"
        size="small"
        type="number"
        value={pageInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}  /* Trigger pagination on Enter */
        style={{ width: '80px', marginLeft: '10px' }}
      />
    </div>
  );
}

export default PaginationControls;
