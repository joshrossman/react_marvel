
import './App.css'
import GetMarvel from './components/GetMarvel.jsx'
import CharacterDetail from './components/CharacterDetail.jsx'
import axios from 'axios';
import { useState} from 'react'

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
    
      <div>
        <CharacterDetail characterData={characterData} />
        <GetMarvel changeMyData={changeMyData} changeMySingleData={changeMySingleData} charactersData= {charactersData} characterData= {characterData} handleMyClick={handleClick} />
        
       </div>
    
  )
}

export default App
