import React,{useState} from 'react'

import EngDict from './engDict'
import BngDict from './bngDict'


import  styles from './dictionary.module.css'


export default function Dictionary() {

    let [value,setValue] = useState('')        
          
    function handleSubmit(event){   
         if(event.keyCode===13){                        
            setValue(event.target.value)                                            
        }           
    }

    return (
        <div className={styles.main}>                        
            <div className={styles.inputDiv}>
                <input type="text" style={{fontSize:18}} onKeyUp={(Event)=>handleSubmit(Event)}/>                
            </div>            
            <div className={styles.defDiv}>
                <EngDict value={value}/>
            </div>                              
        </div>
    )
}
