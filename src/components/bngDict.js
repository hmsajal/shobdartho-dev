import React, {useState} from 'react'
import axios from 'axios'

export default function BngDict(props) { 
    
    let [bnDef,setBnDef] = useState('')

    if(props.value!==''){
        axios.get('BengaliDictionary.json').then(res=>{
            for(let i=0;i<=16000;i++){
                if(props.value===res.data[i].en){
                    setBnDef(`--  `+res.data[i].bn)                                    
                }                                                
            }                        
        })
    }

    return(
        <div>
            {bnDef}
        </div>
    )
}