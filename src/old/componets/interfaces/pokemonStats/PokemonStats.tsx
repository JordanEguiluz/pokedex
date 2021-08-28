import React from 'react'
import { Paper, Box, Typography, Container } from '@material-ui/core'
import StyleStats from './Style'

const PokemonStats = ({ attributes }) => {
  const classes = StyleStats()
  return (
    <Container className={classes.caja}>
      <Paper className={classes.root}>
        {attributes.map((item: string) => (
          <Box>
            <Typography className={classes.typography}>{item.title}</Typography>
            <Typography className={classes.typography}>{item.attribute}</Typography>
            <hr />
          </Box>
        ))}
      </Paper>
    </Container>
  )
}

export default PokemonStats
