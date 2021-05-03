import { Paper, Box, Typography } from "@material-ui/core";
import StyleStats from "./Style";

const PokemonStats = ({ attributes }) => {
  const classes = StyleStats();
  return (
    <Paper className={classes.root}>
      {attributes.map((item) => (
        <Box>
          <Typography className={classes.typography}>{item.title}</Typography>
          <Typography className={classes.typography} >{item.attribute}</Typography>
        <hr/>  
        </Box>
      ))}
    </Paper>
  );
};

export default PokemonStats;
