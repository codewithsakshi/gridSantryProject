import './App.css';
import UserTable from './component/UserTable';
import users from './component/data'

function App() {
  return (
  <div><UserTable usersObject={users}/></div>
  );
}

export default App;

