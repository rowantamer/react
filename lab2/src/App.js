import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Routing/Header/header';
import Error from './Routing/Error/error';
import Home from './Routing/Home/HomePage/homePage'
import Profile from './Routing/Profile/profile';
import Details from './Routing/UserDetails/userDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/error" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
