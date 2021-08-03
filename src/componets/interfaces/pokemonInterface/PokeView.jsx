import React, { useState } from "react"
import {Typography, Container, Button,IconButton } from "@material-ui/core"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PokeImg from "../../../assets/img/charmander.png"
import styleOverride  from "./Style"

const PokemonView = () => {
    const classes = styleOverride()

    const [ isVisible, isSetVisible ] = useState(true)
        console.log(isVisible)

    const handleImage = () => {
        isSetVisible(!isVisible)
    }

    const [isLike, isSetLike] = useState ( 0 )
        console.log(isLike)

    const handleLike = () => {
        isSetLike(isLike +1 )
    }
    
   
    return (
        <>

        <Button  onClick={handleImage} style={{backgroundColor: 'gray', color: '#FFFFFF'}}>{isVisible ? 'Ocultar' :' Mostrar'}</Button>
        {}
        { isLike  }
        <Button onClick={handleLike}><ThumbUpAltIcon  style={{backgroundColor: 'gray', color: '#5882FA'}}></ThumbUpAltIcon></Button>
´
        <Button onClick={handleLike}> {isLike ? ' Reiniciar' : '  '}</Button>
    
         { isVisible ?
        <Container>
            <img src={PokeImg} alt="Img" className={classes.root} />
        </Container> : 
        <h1>Imagen oculta</h1>}
        </>
    )



    
}

export default PokemonView