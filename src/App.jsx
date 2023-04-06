import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="mt-20">
        <Outlet />
      </div>
    </div>
  )
}

export default App;
