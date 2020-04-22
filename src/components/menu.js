import React from 'react'
import {NavLink} from 'react-router-dom'

import './styles/menu.css'
import BurgerIcon from './misc/burgerIcon'

export default function Menu() {
    return (
        <div className="pos-f-t">
            <nav className="navbar bg-dark container-fluid px-5">
                <button className="btn btn-sm" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" id="mainNavButton"
                >
                    <span>
                        <BurgerIcon/>
                    </span>                    
                </button>
                <h5 className="mx-auto text-white">
                    Wordox
                </h5>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className=" container-fluid px-5" id="navBarOpening" >
                    <h5 className=" text-center text-dark h6 pt-3">Select an option of your choice!</h5>
                    <div className="text-center pt-2 pb-3" id= "mainNavBarLinks">
                        <span className="px-4">
                            <NavLink to="/pal">Palindrome</NavLink>
                        </span>
                        <span className="px-4">
                            <NavLink to="/nextapp">NextApp</NavLink>
                        </span>
                    </div>
                </div>                
            </div>                                   
        </div>
    )
}
