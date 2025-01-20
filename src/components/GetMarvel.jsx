import axios from 'axios'
import { useEffect, useState } from 'react';
import { func, array } from 'prop-types';





const GetMarvel = ({handleMyClick, charactersData, changeMyData, changeMySingleData}) =>
    {
            
            
            useEffect(()=>{
            axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=241e9737e6aa3ef4102156eab7fa5d42&hash=0225c966d30cf71b2043303260904a32')
            .then(response =>
                {
                    changeMyData(response.data.data.results)
                    
                 
                })
            .catch(error => 
                {
                    console.log('error',error)
                
                })
            },
            [])
    
        

    return(
        <div>
            {charactersData.map(characterData =>(
                <div key = {characterData.id} className='container'>
                    <p >{characterData.name}</p>
                    <img id={characterData.id} src={`${characterData['thumbnail']['path']}.${characterData['thumbnail']['extension']}`} height='50' weight='50' onClick={handleMyClick} ></img>
                
                </div>
                )
            )}
       
        </div>
        
    )
}
GetMarvel.propTypes = {
    handleMyClick: func,
    changeMyData: func,
    charactersData: array,
    changeMySingleData:func
   
}
export default GetMarvel

