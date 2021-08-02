import React, { useState } from "react"
import {Typography, Container, Button } from "@material-ui/core"
import PokeImg from "../../../assets/img/charmander.png"
import styleOverride  from "./Style"

const PokemonView = () => {
    const classes = styleOverride()
    const [ isVisible, isSetVisible ] = useState(true)
    console.log(isVisible)

    const handleImage = () => {
        isSetVisible(!isVisible)
    }
    
    return (
        <>
        <Button  onClick={handleImage} style={{backgroundColor: 'gray', color: '#FFFFFF'}}>{isVisible ? 'Ocultar' :' Mostrar'}</Button>
        { isVisible ?
        <Container>
            <img src={PokeImg} alt="Img" className={classes.root} />
        </Container> : 
        <h1>Imagen oculta</h1>}
        </>
    )
}

export default PokemonView