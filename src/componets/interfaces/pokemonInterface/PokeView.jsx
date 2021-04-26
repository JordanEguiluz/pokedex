import React from "react"
import {Typography, Container } from "@material-ui/core"
import PokeImg from "../../../assets/img/charmander.png"
import styleOverride  from "./Style"


const PokemonView = () => {
    const classes = styleOverride()
    return (
        <Container>
            <img src={PokeImg} alt="Img" className={classes.root} />
        </Container>
    )
}

export default PokemonView