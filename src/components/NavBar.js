import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
        return (
            <nav>
                {/** Link here */}
                <NavLink to="/">Home</NavLink>
                <ul>
                    <li><NavLink to="/characters">Characters</NavLink></li>
                    <li><NavLink to="/characters/new">Create Character</NavLink></li>
                </ul>
            </nav>
        )
}

export default NavBar
