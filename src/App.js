import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import styled from "styled-components";
import axios from "axios";
import { Route } from "react-router-dom";
import { Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    })
    .catch((error) =>{
      window.alert('No hay personaje con ese ID');
    } )
 }
 const onClose = (id) => {
setCharacters(characters.filter((char) => char.id !== Number(id)))
 }
 const location = useLocation();
 const [characters, setCharacters] = useState ([]);
const [access, setAccess] = useState(false);
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'unaPassword';
const navigate = useNavigate();



const login = (userData) => { if (userData.password === PASSWORD && userData.email === EMAIL) {
  setAccess(true);
  navigate('/home');
}
 }
 useEffect(() => {
!access && navigate('/')
 }, [access])


  return (
    <div className="App">{
       location.pathname !== '/' && <Nav onSearch = {onSearch} />
      
    }
      <div className={styled.nav}>
      
<Routes>
<Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
           
<Route path="/" element={<Form login = {login}/>} />



            <Route path="/about" element={<About/>} />
           
           
            <Route path="detail/:id" element={<Detail/>}/>


<Route path="/favorites" element={<Favorites/>}/>


</Routes>
      
      <Cards characters={characters} onClose = {onClose}/>
      </div> 
    </div>
  );
  
}


export default App;
