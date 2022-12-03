import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignIn from '../pages/signin';
import Signup from '../pages/signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
