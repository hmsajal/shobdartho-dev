import React,{useState} from 'react'
import {MemoryRouter,Route, Switch} from 'react-router-dom'

import Menu from './menu'
import EngDict from './engDict'
import BngDict from './bngDict'


import  styles from './dictionary.module.css'
import DataInput from './dataInput'


export default function Dictionary() {    

    let [value,setValue] = useState('')
    
    return (
        <MemoryRouter>                 
                <Menu/>      
                <DataInput getVal={(val)=>setValue(val)}/>  
                <div className={styles.defDiv}>                     
                    <Route path="/" exact>
                        <BngDict value={value}/>           
                    </Route>   
                    {/* <Route path="/bn" exact>
                        <BngDict value={value}/>
                    </Route>                                                                              */}
                </div>                                 
        </MemoryRouter>        
    )
}
