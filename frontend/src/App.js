import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages & components
import Home from './pages/home';
import Navbar from './components/nav';
import Signup from './pages/signup';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
          <Route
            path="/"
            element={<Home />}
            >
          </Route>
          <Route
              path="/login"
              element={<Login />}
              >
            </Route>
            <Route
              path="/signup"
              element={<Signup />}
              >
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
