import { TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  searchInput: {
      width: '220px', 
      marginBottom: '16px!important',
      marginTop: '16px!important',
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
  }
}));

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <TextField
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={classes.searchInput}
        InputProps={{
          placeholder: 'Search by Name or Email',
        }}
      />
    </div>
  );
};

export default SearchBar;
