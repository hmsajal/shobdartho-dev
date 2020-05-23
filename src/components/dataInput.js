import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLanguage} from '@fortawesome/free-solid-svg-icons'
import {faWikipediaW} from '@fortawesome/free-brands-svg-icons'

import styles from './dataInput.module.css'


export default function SearchBox(props) {                  

    function handleSubmit(evnt){   
        if(evnt.keyCode===13){                        
           props.getVal(evnt.target.value)                                            
       }           
    }

    return (
        <div className={styles.main}>
            <div className={styles.searchDiv}>
                <div className={styles.iconDiv}>
                    <FontAwesomeIcon icon={faWikipediaW}/>
                </div>                        
                <input type="text" onKeyUp={(Event)=>handleSubmit(Event)}/>                
            </div>            
        </div>
    )
}

