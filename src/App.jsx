

import './AppStyle.css'

import BrowseCharacters from './components/BrowseCharacters.jsx'
import CharacterDetail from './components/CharacterDetail.jsx'
import Comics from './components/comics.jsx'
import Home from './components/Home.jsx'
import Error from './components/Error.jsx'
import NavigationBar from './components/NavigationBar'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'




function App() {

  const [charactersData,changeData] = useState([]);
  const [characterData,changeSingleData] = useState([]);
  

  const changeMySingleData = (newName) => {
    changeSingleData(newName)
  }
  const changeMyData = (newName) => {
    changeData(newName)
  }
  const handleClick = async (event) => 
    {
        
        const { id } = event.target;
        console.log(id)
        axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=241e9737e6aa3ef4102156eab7fa5d42&hash=0225c966d30cf71b2043303260904a32`)
        
        .then(response=>
        {
            changeSingleData(response.data.data.results)
            console.log(typeof {charachterData});
        })
        .catch(error => 
        {
            console.log('error',error);
        })
    }
  
  return (
    
      <div className="app-container">
        <NavigationBar />
        <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/details/:id' element={<CharacterDetail characterData={characterData} />} />
            <Route path='/browse/' element= {<BrowseCharacters handleMyClick={handleClick} charactersData={charactersData} changeMyData={changeMyData} changeMySingleData={changeMySingleData}  />} />
            <Route path='/comics/' element=  {<Comics />} />
            <Route path="*" element={<Error />} />
        </Routes>

 
       </div>
    
  )
}

export default App
 
