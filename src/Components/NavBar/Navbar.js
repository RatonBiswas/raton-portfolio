import React from 'react'
import classes from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <div className={classes.container}>
            <ul>
                <li><NavLink className={classes.navLink} to='/' exact activeClassName={classes.activeLink}>Me</NavLink></li>
                <li><NavLink className={classes.navLink} to='/projects' activeClassName={classes.activeLink}>Projects</NavLink></li>
                <li><NavLink className={classes.navLink} to='/experience' activeClassName={classes.activeLink}>Experience</NavLink></li>
                <li><NavLink className={classes.navLink} to='/Skills' activeClassName={classes.activeLink}>Skills</NavLink></li>
                <li><a className={classes.navLink}  href='https://docs.google.com/document/d/1sH4cKinQV8fXoZwh7pzSaqgX1HjjjIRlvBUj3ziMsAo/edit?usp=sharing' target='blank' activeClassName={classes.activeLink}>Resume</a></li>
            </ul>
        </div>
    )
}

export default Navbar
