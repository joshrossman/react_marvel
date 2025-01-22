import {useEffect, useState} from 'react';
import {array} from 'prop-types'


const CharacterDetail = ({characterData}) =>
{
    
    
    const [myName,changeName]=useState([]);
    useEffect(()=>{
        changeName(
            characterData['name']
        )
        console.log(typeof {characterData})     
      changeName(characterData)
      console.log(myName)
        
    },
    [characterData]    
    )

    return(
           
            characterData.map(character =>(
                <div key = {character.id} className='container1'>
                    <p >{character.name}</p>
                    {
                        character.description?
                        (
                            <p>{character.description}</p>
                        )
                        :
                        (
                            <p>Description Not Available</p>
                        )
                    }
                    <br></br><ul>
                    {
                        
                        character['comics']['items'].map
                        (
                            (comic,index)=>
                                (
                                    <li key={index}>{comic['name']}</li>
                                )
                        )
                    }
                
                    </ul>
                </div>
                )
            
        )
        
    )
}

CharacterDetail.propTypes = {
    characterData:array
}

export default CharacterDetail