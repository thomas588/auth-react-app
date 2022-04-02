import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">

        <Router>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='signup' element={<SignUp />}/>
            <Route path='profile' element={<Profile />}/>
          </Routes>
        </Router>

    </div>
  );
}

export default App;
