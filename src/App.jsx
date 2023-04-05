import { Outlet } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav'
import Shop from './components/Shop'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  )
}

export default App;
