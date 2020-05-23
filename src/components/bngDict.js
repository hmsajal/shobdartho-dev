import React, {useState,useEffect} from 'react'
import axios from 'axios'

import styles from './engDict.module.css'

export default function BngDict(props) { 
    
    let [bnDef,setBnDef] = useState('')

    useEffect(()=>{
        if(props.value!==''){
            fetch(`bnDictionary.json`)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                for(let i=0;i<=16000;i++){
                    if(props.value===json[i].en){
                        setBnDef(`--  `+json[i].bn);                                                    
                    }                                                
                }  
            })
            .catch((err)=>{
                console.log(err)
            }) 
        }
    },[props.value])
    
    return(
        <div className={styles.main}>
            {bnDef}
        </div>
    )
}