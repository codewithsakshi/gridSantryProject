import { TextField } from '@mui/material';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <TextField
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          width: '220px', 
          marginBottom: '16px',
          marginTop: '24px',
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            borderBottom: '1.5px solid #000',
            paddingBottom: '4px',
            transition: 'border-bottom 0.3s ease',
          },
          '& .MuiOutlinedInput-root.Mui-focused': {
            borderBottom: '1.5px solid #1976d2',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& input::placeholder': {
            color: '#000',
            fontStyle: 'italic',
          },
          '& .MuiInputBase-input': {
            paddingBottom: '4px',
          },
        }}
        InputProps={{
          placeholder: 'Search by Name or Email',
        }}
      />
    </div>
  );
};

export default SearchBar;
