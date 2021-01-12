import classes from './Footer.module.scss'
import React from 'react'
//please dont remove or update this component 
const Footer = () => {
    return (
        <div className={classes.container}>
            <p>© Copyright 2021 <a href={'https://github.com/RatonBiswas'}>Raton Biswas</a></p>
        </div>
    )
}

export default Footer
