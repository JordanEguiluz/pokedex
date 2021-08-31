import React, { useState } from 'react'
import { Container, Button } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import PokeImg from '../../../assets/img/charmander.png'
import styleOverride from './Style'

const PokemonView = () => {
  const classes = styleOverride()

  const [isVisible, isSetVisible] = useState(true)

  const handleImage = () => {
    isSetVisible(!isVisible)
  }

  const [isLike, isSetLike] = useState(0)
  console.log(isLike)

  const handleLike = () => {
    isSetLike(isLike + 1)
  }
  const handleReset = () => {
    isSetLike(0)
  }
  return (
    <>
      <Button onClick={handleImage} style={{ backgroundColor: 'gray', color: '#FFFFFF' }}>
        {isVisible ? 'Ocultar' : ' Mostrar'}
      </Button>
      {isVisible ? (
        <Container className={classes.cajaFoto}>
          <img src={PokeImg} alt="Img" className={classes.root} />
        </Container>
      ) : (
        <h2>Imagen oculta</h2>
      )}

      <Button className="BotonLike" onClick={handleLike}>
        <ThumbUpAltIcon style={{ backgroundColor: 'gray', color: '#5882FA' }}></ThumbUpAltIcon>
      </Button>
      {isLike}
      <Button
        className="BotonReset"
        onClick={handleReset}
        style={{ backgroundColor: 'gray', color: '#FFFFFF' }}
      >
        {' '}
        {isLike ? 'Reiniciar' : 'Reiniciado'}
      </Button>
    </>
  )
}

export default PokemonView
