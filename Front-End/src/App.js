import { useEffect, useState} from 'react';
import './App.modules.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { About } from './components/About/About';
import { Detail } from './components/Detail/Detail';
import { Form } from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


function App() {

   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      (!access && navigate('/'));
   }, [access, navigate]);



   const login = async (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login';
    
      try {
        const { data } = await axios.get(`${URL}?email=${email}&password=${password}`);
        const { access } = data;
        setAccess(access);
        access && navigate('/home');
      } catch (err) {
        console.log(err);
      }
    };
    

    const onSearch = async (id) => {
      if (characters.find((char) => char.id === id)) {
        return alert("personaje repetido");
      }
    
      try {
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } catch (err) {
        
      }
    };


   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
   } ;



   return (
      <div className='App'>
         <div className='nav'>
            {pathname !== '/' && <Nav onSearch={onSearch}/>};
         </div>
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>;
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>;
            <Route path='/detail/:detailId' element={<Detail/>}/>;
            <Route path='/favorites' element={<Favorites/>}/>;
         </Routes>;
         
      </div>
   );
};

export default App;
